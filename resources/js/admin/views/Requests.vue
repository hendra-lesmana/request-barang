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
                  :color="getStatusColor(selectedRequest.status)"
                  dark
                  small
                >
                  {{ selectedRequest.status }}
                </v-chip>
              </v-col>
              <v-col cols="12" md="6">
                <strong>Employee:</strong> {{ selectedRequest.employee_name }}
              </v-col>
              <v-col cols="12" md="6">
                <strong>Department:</strong> {{ selectedRequest.department_name }}
              </v-col>
              <v-col cols="12">
                <strong>Requested Items:</strong>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in selectedRequest.items" :key="item.id">
                        <td>{{ item.nama_barang }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.location }}</td>
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
  </div>
</template>

<script>
export default {
  name: 'Requests',
  data: () => ({
    search: '',
    loading: false,
    detailsDialog: false,
    statusDialog: false,
    headers: [
      { text: 'Request ID', value: 'id' },
      { text: 'Employee', value: 'employee_name' },
      { text: 'Department', value: 'department_name' },
      { text: 'Date', value: 'created_at' },
      { text: 'Status', value: 'status' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    requests: [],
    selectedRequest: {
      id: null,
      employee_name: '',
      department_name: '',
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
        // TODO: Replace with actual API calls
        this.requests = [
          {
            id: 1,
            employee_name: 'John Doe',
            department_name: 'IT',
            created_at: '2024-01-10',
            status: 'Pending',
            items: [
              {
                id: 1,
                nama_barang: 'Laptop',
                quantity: 1,
                location: 'Office 1'
              }
            ],
            notes: 'Urgent request for new employee'
          }
        ]
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
    }
  }
}
</script>