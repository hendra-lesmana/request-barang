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
  </div>
</template>

<script>
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
      { text: 'Created At', value: 'created_at' },
      { text: 'Updated At', value: 'updated_at' },
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
    nameErrors: []
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
    async initialize () {
      this.loading = true
      try {
        // TODO: Replace with actual API call
        this.departments = [
          {
            id: 1,
            nama_departemen: 'Information Technology',
            created_at: '2024-01-09 10:00:00',
            updated_at: '2024-01-09 10:00:00'
          },
          {
            id: 2,
            nama_departemen: 'Human Resources',
            created_at: '2024-01-09 10:00:00',
            updated_at: '2024-01-09 10:00:00'
          }
        ]
      } catch (error) {
        console.error('Error fetching departments:', error)
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
        // TODO: Implement API call to delete department
        this.departments.splice(this.editedIndex, 1)
      } catch (error) {
        console.error('Error deleting department:', error)
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
        // TODO: Implement API call to save department
        if (this.editedIndex > -1) {
          Object.assign(this.departments[this.editedIndex], this.editedItem)
        } else {
          this.departments.push({
            ...this.editedItem,
            id: this.departments.length + 1,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
        }
        this.close()
      } catch (error) {
        console.error('Error saving department:', error)
      }
    }
  }
}
</script>