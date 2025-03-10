<template>
  <div>
    <v-card>
      <v-card-title>
        Requests
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-btn
          color="primary"
          dark
          class="ml-4"
          @click="addDialog = true"
        >
          Add Request
        </v-btn>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="requests"
        :search="search"
        :loading="loading"
        class="elevation-1"
      >
        <template v-slot:item.status="{ item }">
          <v-chip
            :color="getStatusColor(item.status)"
            dark
          >
            {{ item.status }}
          </v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="viewDetails(item)"
          >
            mdi-eye
          </v-icon>
          <v-icon
            small
            class="mr-2"
            @click="updateStatus(item)"
          >
            mdi-pencil
          </v-icon>
        </template>
      </v-data-table>
    </v-card>

    <!-- Snackbar Component -->
    <v-snackbar
      v-model="$store.state.snackbar.show"
      :color="$store.state.snackbar.color"
      top
      right
    >
      {{ $store.state.snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="$store.commit('SET_SNACKBAR', { show: false, text: '', color: '' })"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Request Details Dialog -->
    <v-dialog v-model="detailsDialog" max-width="700px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Request Details</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <strong>Request ID:</strong> {{ selectedRequest.id }}
              </v-col>
              <v-col cols="12" md="6">
                <strong>Status:</strong>
                <v-chip
                  :color="getStatusColor(selectedRequest?.status)"
                  :dark="true"
                  :small="true"
                >
                  {{ selectedRequest.status }}
                </v-chip>
              </v-col>
              <v-col cols="12" md="6">
                <strong>Employee:</strong> {{ selectedRequest.nama }}
              </v-col>
              <v-col cols="12" md="6">
                <strong>Department:</strong> {{ selectedRequest.departemen }}
              </v-col>
              <v-col cols="12">
                <strong>Requested Items:</strong>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Location</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Notes</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in selectedRequest.items" :key="item.id">
                        <td>{{ item.nama_barang }}</td>
                        <td>{{ item.location }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.satuan }}</td>
                        <td>{{ item.keterangan || '-' }}</td>
                        <td>
                          <v-chip
                            :color="item.status === 'Terpenuhi' ? 'success' : 'error'"
                            dark
                            small
                          >
                            {{ item.status }}
                          </v-chip>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>
              <v-col cols="12">
                <strong>Notes:</strong>
                <p>{{ selectedRequest.notes || 'No notes provided' }}</p>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="detailsDialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Update Status Dialog -->
    <v-dialog v-model="statusDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Update Request Status</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-select
                  v-model="editedStatus"
                  :items="statusOptions"
                  label="Status"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="statusNotes"
                  label="Notes"
                  rows="3"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeStatusDialog"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="saveStatus"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Add Request Dialog -->
    <v-dialog v-model="addDialog" max-width="1000px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Add New Request</span>
        </v-card-title>
        <v-card-text>
          <add-request @submit="handleAddRequest" @cancel="addDialog = false" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AddRequest from './AddRequest.vue'
import axios from 'axios'

export default {
  name: 'Requests',
  components: {
    AddRequest
  },
  data: () => ({
    search: '',
    loading: false,
    detailsDialog: false,
    statusDialog: false,
    addDialog: false,
    headers: [
      { text: 'Request ID', value: 'id' },
      { text: 'NIK', value: 'nik' },
      { text: 'Employee', value: 'nama' },
      { text: 'Department', value: 'departemen' },
      { text: 'Date', value: 'tanggal', format: value => new Date(value).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' }) + ' - ' + new Date(value).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) },
      { text: 'Status', value: 'status' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    requests: [],
    selectedRequest: {
      id: null,
      nik: '',
      nama: '',
      departemen: '',
      status: '',
      items: [],
      notes: ''
    },
    editedStatus: '',
    statusNotes: '',
    statusOptions: [
      'Pending',
      'Approved',
      'In Progress',
      'Completed',
      'Rejected'
    ]
  }),

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      this.loading = true
      try {
        const response = await axios.get('/api/requests')
        this.requests = response.data.map(request => ({
          id: request.id,
          nik: request.nik,
          nama: request.nama,
          departemen: request.departemen,
          tanggal: request.tanggal,
          status: request.status || 'Pending',
          items: request.items.map(item => ({
            id: item.id || Math.random(),
            nama_barang: item.barang,
            quantity: item.kuantiti,
            location: item.lokasi,
            satuan: item.satuan,
            keterangan: item.keterangan,
            status: item.status
          })),
          notes: ''
        }))
      } catch (error) {
        console.error('Error fetching requests:', error)
      } finally {
        this.loading = false
      }
    },

    getStatusColor (status) {
      const colors = {
        'Pending': 'warning',
        'Approved': 'info',
        'In Progress': 'blue',
        'Completed': 'success',
        'Rejected': 'error'
      }
      return colors[status] || 'grey'
    },

    viewDetails (item) {
      this.selectedRequest = Object.assign({}, item)
      this.detailsDialog = true
    },

    updateStatus (item) {
      this.selectedRequest = Object.assign({}, item)
      this.editedStatus = item.status
      this.statusNotes = ''
      this.statusDialog = true
    },

    closeStatusDialog () {
      this.statusDialog = false
      this.$nextTick(() => {
        this.editedStatus = ''
        this.statusNotes = ''
        this.selectedRequest = {
          id: null,
          employee_name: '',
          department_name: '',
          status: '',
          items: [],
          notes: ''
        }
      })
    },

    async saveStatus () {
      try {
        if (!this.editedStatus) {
          return
        }

        // TODO: Implement API call to update status
        const index = this.requests.findIndex(r => r.id === this.selectedRequest.id)
        if (index !== -1) {
          this.requests[index].status = this.editedStatus
        }

        this.closeStatusDialog()
      } catch (error) {
        console.error('Error updating status:', error)
      }
    },

    async handleAddRequest(requestData) {
      try {
        await this.initialize()
        this.addDialog = false
        this.$store.dispatch('showSnackbar', {
          text: 'Request created successfully',
          color: 'success'
        })
      } catch (error) {
        this.$store.dispatch('showSnackbar', {
          text: error.response?.data?.message || 'Error creating request',
          color: 'error'
        })
      }
    }
  }
}
</script>