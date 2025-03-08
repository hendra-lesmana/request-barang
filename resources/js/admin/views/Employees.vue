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
import axios from 'axios'

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
      { text: 'Department', value: 'departemen.nama_departemen' },
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
        const [employeesResponse, departmentsResponse] = await Promise.all([
          axios.get('/api/employees'),
          axios.get('/api/departments')
        ])

        // First handle departments data
        if (!departmentsResponse.data) {
          throw new Error('Departments data is missing')
        }
        const departmentsData = Array.isArray(departmentsResponse.data)
          ? departmentsResponse.data
          : departmentsResponse.data.data || []
        if (!departmentsData.length) {
          console.warn('No departments found')
        }
        this.departments = departmentsData

        // Then handle employees data
        if (!employeesResponse.data) {
          throw new Error('Employees data is missing')
        }
        const employeesData = Array.isArray(employeesResponse.data)
          ? employeesResponse.data
          : employeesResponse.data.data || []
        if (!employeesData.length) {
          console.warn('No employees found')
        }

        // Map employees with their departments
        this.employees = employeesData
          .filter(employee => employee && employee.id) // Ensure valid employee objects
          .map(employee => {
            const department = this.departments.find(dept => dept.id === employee.id_departemen)
            return {
              ...employee,
              departemen: department || { 
                id: employee.id_departemen, 
                nama_departemen: employee.departemen.nama_departemen || 'Unknown'
              }
            }
          })
      } catch (error) {
        console.error('Error fetching data:', error)
        this.$store.dispatch('showSnackbar', {
          color: 'error',
          text: 'Failed to fetch data: ' + (error.message || 'Unknown error')
        })
      } finally {
        this.loading = false
      }
    },

    editItem (item) {
      this.editedIndex = this.employees.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editedItem.id_departemen = item.departemen.id
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.employees.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm () {
      try {
        await axios.delete(`/api/employees/${this.editedItem.id}`)
        this.employees.splice(this.editedIndex, 1)
        this.$store.dispatch('showSnackbar', {
          color: 'success',
          text: 'Employee deleted successfully'
        })
      } catch (error) {
        console.error('Error deleting employee:', error)
        this.$store.dispatch('showSnackbar', {
          color: 'error',
          text: 'Failed to delete employee'
        })
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
        this.$store.dispatch('showSnackbar', {
          color: 'error',
          text: 'Please fill in all required fields'
        })
        return
      }

      try {
        const payload = {
          NIK: this.editedItem.NIK,
          nama_karyawan: this.editedItem.nama_karyawan,
          id_departemen: this.editedItem.id_departemen
        }

        let response
        if (this.editedIndex > -1) {
          response = await axios.put(`/api/employees/${this.editedItem.id}`, payload)
          Object.assign(this.employees[this.editedIndex], response.data.data)
        } else {
          response = await axios.post('/api/employees', payload)
          this.employees.push(response.data.data)
        }

        this.$store.dispatch('showSnackbar', {
          color: 'success',
          text: `Employee ${this.editedIndex === -1 ? 'created' : 'updated'} successfully`
        })
        this.close()
      } catch (error) {
        console.error('Error saving employee:', error)
        this.$store.dispatch('showSnackbar', {
          color: 'error',
          text: `Failed to ${this.editedIndex === -1 ? 'create' : 'update'} employee`
        })
      }
    }
  }
}
</script>