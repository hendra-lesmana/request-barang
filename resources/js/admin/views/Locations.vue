<template>
  <div>
    <v-card>
      <v-card-title>
        Locations
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
          Add Location
        </v-btn>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="locations"
        :search="search"
        :loading="loading"
        class="elevation-1"
      >
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
                  v-model="editedItem.nama_lokasi"
                  label="Location Name"
                  :error-messages="nameErrors"
                  required
                ></v-text-field>
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
        <v-card-title class="text-h5">Are you sure you want to delete this location?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Snackbar for notifications -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
    >
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Locations',
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    loading: false,
    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Location Name', value: 'nama_lokasi' },

      { text: 'Actions', value: 'actions', sortable: false }
    ],
    locations: [],
    editedIndex: -1,
    editedItem: {
      id: null,
      nama_lokasi: ''
    },
    defaultItem: {
      id: null,
      nama_lokasi: ''
    },
    nameErrors: [],
    snackbar: {
      show: false,
      text: '',
      color: 'success'
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Location' : 'Edit Location'
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
    showNotification(text, color = 'success') {
      this.snackbar.text = text
      this.snackbar.color = color
      this.snackbar.show = true
    },

    async initialize () {
      this.loading = true
      try {
        const response = await axios.get('/api/locations')
        this.locations = response.data.data
      } catch (error) {
        console.error('Error fetching locations:', error)
        this.showNotification('Error loading locations', 'error')
      } finally {
        this.loading = false
      }
    },

    editItem (item) {
      this.editedIndex = this.locations.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.locations.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm () {
      try {
        await axios.delete(`/api/locations/${this.editedItem.id}`)
        this.locations.splice(this.editedIndex, 1)
        this.showNotification('Location deleted successfully')
      } catch (error) {
        console.error('Error deleting location:', error)
        this.showNotification('Error deleting location', 'error')
      } finally {
        this.closeDelete()
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
    },

    async save () {
      if (!this.editedItem.nama_lokasi) {
        this.nameErrors = ['Location name is required']
        return
      }

      try {
        if (this.editedIndex > -1) {
          // Update existing location
          const response = await axios.put(`/api/locations/${this.editedItem.id}`, this.editedItem)
          Object.assign(this.locations[this.editedIndex], response.data)
          this.showNotification('Location updated successfully')
        } else {
          // Create new location
          const response = await axios.post('/api/locations', this.editedItem)
          this.locations.push(response.data)
          this.showNotification('Location created successfully')
        }
        this.close()
      } catch (error) {
        console.error('Error saving location:', error)
        this.showNotification('Error saving location', 'error')
      }
    }
  }
}
</script>