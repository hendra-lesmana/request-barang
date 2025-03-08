<template>
  <div>
    <v-card>
      <v-card-title>
        Items
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
          @click="dialog = true"
        >
          Add Item
        </v-btn>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        :loading="loading"
        class="elevation-1"
      >
        <template v-slot:item.jumlah_stok="{ item }">
          <v-chip
            :color="getStockColor(item.jumlah_stok)"
            dark
          >
            {{ item.jumlah_stok }}
          </v-chip>
        </template>
        <template v-slot:item.status="{ item }">
          <v-chip
            :color="item.status === 'active' ? 'green' : 'grey'"
            dark
          >
            {{ item.status }}
          </v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>

    <!-- Add/Edit Dialog -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.nama_barang"
                  label="Item Name"
                  :error-messages="nameErrors"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.satuan"
                  label="Unit"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model.number="editedItem.jumlah_stok"
                  label="Stock"
                  type="number"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="editedItem.id_lokasi"
                  :items="locations"
                  item-text="nama_lokasi"
                  item-value="id"
                  label="Location"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="close"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Items',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    loading: false,
    search: '',
    headers: [
      { text: 'Item Name', value: 'nama_barang' },
      { text: 'Unit', value: 'satuan' },
      { text: 'Location', value: 'lokasi.nama_lokasi' },
      { text: 'Stock', value: 'jumlah_stok' },
      { text: 'Status', value: 'status' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    items: [],
    locations: [],
    editedIndex: -1,
    editedItem: {
      id: null,
      nama_barang: '',
      satuan: '',
      id_lokasi: null,
      jumlah_stok: 0,
      status: 'active'
    },
    defaultItem: {
      id: null,
      nama_barang: '',
      satuan: '',
      id_lokasi: null,
      jumlah_stok: 0,
      status: 'active'
    },
    nameErrors: []
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },

  created () {
    this.initialize()
  },
  methods: {
    getStockColor(stock) {
      if (stock <= 10) return 'red'
      if (stock <= 20) return 'orange'
      return 'green'
    },
    async initialize () {
      this.loading = true
      try {
        const response = await fetch('/api/barang')
        if (!response.ok) throw new Error('Failed to fetch items')
        const result = await response.json()
        this.items = result.data
        // Extract unique locations from items data
        this.locations = [...new Set(this.items.map(item => item.lokasi))]
          .filter(location => location) // Filter out any null/undefined locations
          .sort((a, b) => a.nama_lokasi.localeCompare(b.nama_lokasi))
      } catch (error) {
        console.error('Error fetching data:', error)
        // TODO: Show error notification to user
      } finally {
        this.loading = false
      }
    },

    async deleteItemConfirm () {
      try {
        const response = await fetch(`/api/barang/${this.editedItem.id}`, {
          method: 'DELETE',
        })
        if (!response.ok) throw new Error('Failed to delete item')
        this.items.splice(this.editedIndex, 1)
        // TODO: Show success notification
      } catch (error) {
        console.error('Error deleting item:', error)
        // TODO: Show error notification
      } finally {
        this.closeDelete()
      }
    },

    async save () {
      try {
        // Validate form
        this.nameErrors = []
        if (!this.editedItem.nama_barang) {
          this.nameErrors.push('Item name is required')
          return
        }

        const method = this.editedIndex === -1 ? 'POST' : 'PUT'
        const url = this.editedIndex === -1 
          ? '/api/barang'
          : `/api/barang/${this.editedItem.id}`

        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.editedItem)
        })

        if (!response.ok) throw new Error('Failed to save item')
        const result = await response.json()

        if (result.success) {
          if (this.editedIndex > -1) {
            Object.assign(this.items[this.editedIndex], result.data)
          } else {
            this.items.push(result.data)
          }
          this.close()
        }
      } catch (error) {
        console.error('Error saving item:', error)
        // TODO: Show error notification
      }
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
        this.nameErrors = []
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    }
  }
}
</script>