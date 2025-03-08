<template>
  <div>
    <v-card>
      <v-card-title>
        Departments
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
          Add Department
        </v-btn>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="departments"
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
                  v-model="editedItem.nama_departemen"
                  label="Department Name"
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
        <v-card-title class="text-h5">Are you sure you want to delete this department?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar for notifications -->
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000">
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Departments',
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    loading: false,
    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Department Name', value: 'nama_departemen' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    departments: [],
    editedIndex: -1,
    editedItem: {
      id: null,
      nama_departemen: ''
    },
    defaultItem: {
      id: null,
      nama_departemen: ''
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
      return this.editedIndex === -1 ? 'New Department' : 'Edit Department'
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
        const response = await axios.get('/api/departments')
        this.departments = response.data.data
      } catch (error) {
        console.error('Error fetching departments:', error)
        this.showNotification('Error loading departments', 'error')
      } finally {
        this.loading = false
      }
    },

    editItem (item) {
      this.editedIndex = this.departments.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.departments.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm () {
      try {
        await axios.delete(`/api/departments/${this.editedItem.id}`)
        this.departments.splice(this.editedIndex, 1)
        this.showNotification('Department deleted successfully')
      } catch (error) {
        console.error('Error deleting department:', error)
        this.showNotification('Error deleting department', 'error')
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
      if (!this.editedItem.nama_departemen) {
        this.nameErrors = ['Department name is required']
        return
      }

      try {
        if (this.editedIndex > -1) {
          // Update existing department
          const response = await axios.put(`/api/departments/${this.editedItem.id}`, {
            nama_departemen: this.editedItem.nama_departemen
          })
          Object.assign(this.departments[this.editedIndex], response.data.data)
          this.showNotification('Department updated successfully')
        } else {
          // Create new department
          const response = await axios.post('/api/departments', {
            nama_departemen: this.editedItem.nama_departemen
          })
          this.departments.push(response.data.data)
          this.showNotification('Department created successfully')
        }
        this.close()
      } catch (error) {
        console.error('Error saving department:', error)
        this.showNotification('Error saving department', 'error')
      }
    }
  }
}
</script>