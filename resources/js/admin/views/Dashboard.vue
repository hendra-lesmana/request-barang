<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto" color="primary" dark>
          <v-card-text>
            <div class="text-h6">Total Requests</div>
            <div class="text-h4 mt-2">{{ totalRequests }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto" color="success" dark>
          <v-card-text>
            <div class="text-h6">Total Items</div>
            <div class="text-h4 mt-2">{{ totalItems }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto" color="info" dark>
          <v-card-text>
            <div class="text-h6">Total Employees</div>
            <div class="text-h4 mt-2">{{ totalEmployees }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto" color="warning" dark>
          <v-card-text>
            <div class="text-h6">Pending Requests</div>
            <div class="text-h4 mt-2">{{ pendingRequests }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Recent Requests</v-card-title>
          <v-card-text>
            <v-data-table
              :headers="requestHeaders"
              :items="recentRequests"
              :items-per-page="5"
              class="elevation-1"
            ></v-data-table>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Low Stock Items</v-card-title>
          <v-card-text>
            <v-data-table
              :headers="itemHeaders"
              :items="lowStockItems"
              :items-per-page="5"
              class="elevation-1"
            ></v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => ({
    totalRequests: 0,
    totalItems: 0,
    totalEmployees: 0,
    pendingRequests: 0,
    requestHeaders: [
      { text: 'Request ID', value: 'id' },
      { text: 'Employee', value: 'employee' },
      { text: 'Department', value: 'department' },
      { text: 'Status', value: 'status' }
    ],
    recentRequests: [],
    itemHeaders: [
      { text: 'Item Name', value: 'name' },
      { text: 'Location', value: 'location' },
      { text: 'Current Stock', value: 'stock' },
      { text: 'Status', value: 'status' }
    ],
    lowStockItems: []
  }),
  created() {
    // TODO: Fetch data from API
    this.fetchDashboardData()
  },
  methods: {
    async fetchDashboardData() {
      try {
        // Simulated data - replace with actual API calls
        this.totalRequests = 150
        this.totalItems = 300
        this.totalEmployees = 50
        this.pendingRequests = 25

        this.recentRequests = [
          { id: 1, employee: 'John Doe', department: 'IT', status: 'Pending' },
          { id: 2, employee: 'Jane Smith', department: 'HR', status: 'Approved' },
          { id: 3, employee: 'Mike Johnson', department: 'Sales', status: 'Processing' }
        ]

        this.lowStockItems = [
          { name: 'Laptop', location: 'IT Storage', stock: 5, status: 'Low' },
          { name: 'Printer Paper', location: 'Office Supply', stock: 10, status: 'Critical' },
          { name: 'Ink Cartridge', location: 'Office Supply', stock: 3, status: 'Critical' }
        ]
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      }
    }
  }
}
</script>