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
        <template v-slot:item.stock="{ item }">
          <v-chip
            :color="getStockColor(item.stock)"
            dark
          >
            {{ item.stock }}
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
                  v-model.number="editedItem.stock"
                  label="Stock"
                  type="number"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="editedItem.lokasi_id"
                  :items="locations"
                  item-text="nama_lokasi"
                  item-value="id"
                  label="Location"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="editedItem.deskripsi"
                  label="Description"
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
      { text: 'Description', value: 'deskripsi' },
      { text: 'Location', value: 'location.nama_lokasi' },
      { text: 'Stock', value: 'stock' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    items: [],
    locations: [],
    editedIndex: -1,
    editedItem: {
      id: null,
      nama_barang: '',
      deskripsi: '',
      lokasi_id: null,
      stock: 0
    },
    defaultItem: {
      id: null,
      nama_barang: '',
      deskripsi: '',
      lokasi_id: null,
      stock: 0
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
    async initialize () {
      this.loading = true
      try {
        // TODO: Replace with actual API calls
        // Fetch items
        this.items = [
          {
            id: 1,
            nama_barang: 'Laptop',
            deskripsi: 'Work laptop',
            location: { nama_lokasi: 'Office 1' },
            stock: 10
          }
        ]
        // Fetch locations
        this.locations = [
          { id: 1, nama_lokasi: 'Office 1' },
          { id: 2, nama_lokasi: 'Warehouse' }
        ]
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        this.loading = false
      }
    },

    getStockColor (stock) {
      if (stock <= 0) return 'error'
      if (stock <= 5) return 'warning'
      return 'success'
    },

    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm () {
      try {
        // TODO: Implement API call to delete item
        this.items.splice(this.editedIndex, 1)
      } catch (error) {
        console.error('Error deleting item:', error)
      } finally {
        this.closeDelete()
      }
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save () {
      try {
        // Validate form
        this.nameErrors = []
        if (!this.editedItem.nama_barang) {
          this.nameErrors.push('Item name is required')
          return
        }

        // TODO: Implement API call to save item
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
        }
        this.close()
      } catch (error) {
        console.error('Error saving item:', error)
      }
    }
  }
}
</script>