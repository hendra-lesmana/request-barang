<template>
  <div>
    <v-card>
      <v-card-title>
        Employees
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
          Add Employee
        </v-btn>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="employees"
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
                  v-model="editedItem.NIK"
                  label="NIK"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.nama_karyawan"
                  label="Employee Name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="editedItem.id_departemen"
                  :items="departments"
                  item-text="nama_departemen"
                  item-value="id"
                  label="Department"
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
        <v-card-title class="text-h5">Are you sure you want to delete this employee?</v-card-title>
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
  name: 'Employees',
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    loading: false,
    headers: [
      { text: 'NIK', value: 'NIK' },
      { text: 'Name', value: 'nama_karyawan' },
      { text: 'Department', value: 'department.nama_departemen' },
      { text: 'Created At', value: 'created_at' },
      { text: 'Updated At', value: 'updated_at' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    employees: [],
    departments: [],
    editedIndex: -1,
    editedItem: {
      id: null,
      NIK: '',
      nama_karyawan: '',
      id_departemen: null
    },
    defaultItem: {
      id: null,
      NIK: '',
      nama_karyawan: '',
      id_departemen: null
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Employee' : 'Edit Employee'
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
        this.departments = [
          { id: 1, nama_departemen: 'Information Technology' },
          { id: 2, nama_departemen: 'Human Resources' },
          { id: 3, nama_departemen: 'Finance' }
        ]

        this.employees = [
          {
            id: 1,
            NIK: 'EMP001',
            nama_karyawan: 'John Doe',
            department: { id: 1, nama_departemen: 'Information Technology' },
            created_at: '2024-01-09 10:00:00',
            updated_at: '2024-01-09 10:00:00'
          },
          {
            id: 2,
            NIK: 'EMP002',
            nama_karyawan: 'Jane Smith',
            department: { id: 2, nama_departemen: 'Human Resources' },
            created_at: '2024-01-09 10:00:00',
            updated_at: '2024-01-09 10:00:00'
          }
        ]
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        this.loading = false
      }
    },

    editItem (item) {
      this.editedIndex = this.employees.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editedItem.id_departemen = item.department.id
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.employees.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm () {
      try {
        // TODO: Implement API call to delete employee
        this.employees.splice(this.editedIndex, 1)
      } catch (error) {
        console.error('Error deleting employee:', error)
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
      if (!this.editedItem.NIK || !this.editedItem.nama_karyawan || !this.editedItem.id_departemen) {
        return
      }

      try {
        // TODO: Implement API call to save employee
        const department = this.departments.find(d => d.id === this.editedItem.id_departemen)
        
        if (this.editedIndex > -1) {
          Object.assign(this.employees[this.editedIndex], {
            ...this.editedItem,
            department: department
          })
        } else {
          this.employees.push({
            ...this.editedItem,
            id: this.employees.length + 1,
            department: department,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
        }
        this.close()
      } catch (error) {
        console.error('Error saving employee:', error)
      }
    }
  }
}
</script>