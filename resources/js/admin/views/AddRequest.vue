<template>
  <v-card>
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-row>
          <!-- Employee Information -->
          <v-col cols="12" md="4">
            <v-autocomplete
              v-model="request.nik"
              :items="employees"
              item-text="NIK"
              item-value="NIK"
              label="NIK Peminta"
              required
              :rules="[v => !!v || 'NIK is required']"
              @change="handleNikSelection"
              :loading="loading"
              :search-input.sync="search"
              hide-no-data
              hide-selected
              return-object
              clearable
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="request.nama"
              label="Nama"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="request.departemen"
              label="Departemen"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-menu
              v-model="dateMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="formattedDateTime"
                  label="Tanggal & Waktu Permintaan"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  dense
                ></v-text-field>
              </template>
              <v-card>
                <div class="d-flex">
                  <v-date-picker
                    v-model="request.tanggal"
                    @input="dateMenu = false"
                    scrollable
                    class="v-date-picker--compact"
                  ></v-date-picker>
                  <v-card-text class="pa-4 d-flex flex-column">
                    <v-select
                      v-model="selectedHour"
                      :items="hours"
                      label="Hour"
                      @change="updateDateTime"
                      dense
                      class="mb-4"
                      hide-details
                    ></v-select>
                    <v-select
                      v-model="selectedMinute"
                      :items="minutes"
                      label="Minute"
                      @change="updateDateTime"
                      dense
                      hide-details
                    ></v-select>
                  </v-card-text>
                </div>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>

        <!-- Items Table -->
        <v-card class="mt-4">
          <v-card-title>
            Daftar Barang
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="addItem">+ Tambah</v-btn>
          </v-card-title>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Barang</th>
                    <th>Lokasi</th>
                    <th>Tersedia</th>
                    <th>Kuantiti</th>
                    <th>Satuan</th>
                    <th>Keterangan</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in request.items" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>
                      <v-autocomplete
                        v-model="item.barang"
                        :items="availableItems"
                        item-text="nama_barang"
                        item-value="id"
                        @change="updateItemDetails(index)"
                        hide-no-data
                        hide-selected
                        clearable
                      ></v-autocomplete>
                    </td>
                    <td>{{ item.lokasi }}</td>
                    <td>{{ item.tersedia }}</td>
                    <td>
                      <v-text-field
                        v-model.number="item.kuantiti"
                        type="number"
                        min="1"
                        :rules="[v => v <= item.tersedia || 'Exceeds available quantity']"
                      ></v-text-field>
                    </td>
                    <td>{{ item.satuan }}</td>
                    <td>
                      <v-text-field
                        v-model="item.keterangan"
                        placeholder="Optional"
                      ></v-text-field>
                    </td>
                    <td>
                      <v-chip
                        small
                        :color="item.status === 'Tersedia' ? 'success' : 'error'"
                        dark
                      >
                        {{ item.status }}
                      </v-chip>
                    </td>
                    <td>
                      <v-btn icon small color="error" @click="removeItem(index)">
                        <v-icon small>mdi-delete</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>

        <!-- Action Buttons -->
        <v-card-actions class="mt-4">
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="cancel">Batal</v-btn>
          <v-btn
            color="primary"
            :disabled="!valid || request.items.length === 0"
            @click="submit"
          >
            Proses
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddRequest',
  data: () => ({
    valid: false,
    dateMenu: false,
    selectedHour: new Date().getHours().toString().padStart(2, '0'),
    selectedMinute: new Date().getMinutes().toString().padStart(2, '0'),
    hours: Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')),
    minutes: Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')),
    loading: false,
    search: null,
    employees: [],
    request: {
      nik: '',
      nama: '',
      departemen: '',
      tanggal: new Date().toISOString().substr(0, 10),
      items: []
    },
    availableItems: []
  }),

  computed: {
    formattedDateTime() {
      return `${this.request.tanggal} ${this.selectedHour}:${this.selectedMinute}`
    }
  },
  created() {
    this.fetchEmployees()
    this.fetchAvailableItems()
  },
  methods: {
    updateDateTime() {
      // Method to handle time updates
      console.log('DateTime updated:', this.formattedDateTime)
    },

    async fetchEmployees() {
      this.loading = true
      try {
        const response = await axios.get('/api/employees')
        this.employees = response.data
      } catch (error) {
        console.error('Error fetching employees:', error)
      } finally {
        this.loading = false
      }
    },

    handleNikSelection(employee) {
      if (employee) {
        this.request.nama = employee.nama_karyawan
        this.request.departemen = employee.departemen.nama_departemen
        this.request.nik = employee.NIK
      } else {
        this.request.nama = ''
        this.request.departemen = ''
        this.request.nik = ''
      }
    },
  async fetchAvailableItems() {
    try {
      const response = await axios.get('/api/items')
      this.availableItems = response.data
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  },
  async updateItemDetails(index) {
    const item = this.request.items[index]
    const selectedItem = this.availableItems.find(i => i.id === item.barang)
    if (selectedItem) {
      item.lokasi = selectedItem.lokasi.nama_lokasi
      item.tersedia = selectedItem.jumlah_stok
      item.satuan = selectedItem.satuan
      item.status = selectedItem.jumlah_stok > 0 ? 'Tersedia' : 'Tidak Tersedia'
    }
  },
    addItem() {
      this.request.items.push({
        barang: null,
        lokasi: '',
        tersedia: 0,
        kuantiti: 1,
        satuan: '',
        keterangan: '',
        status: ''
      })
    },

    removeItem(index) {
      this.request.items.splice(index, 1)
    },

    cancel() {
      this.$router.push('/admin/requests')
    },

    async submit() {
      if (this.$refs.form.validate()) {
        try {
          await axios.post('/api/requests', this.request)
          this.$router.push('/admin/requests')
        } catch (error) {
          console.error('Error submitting request:', error)
        }
      }
    }
  }
}
</script>