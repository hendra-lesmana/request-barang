<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Request Barang
            </v-list-item-title>
            <v-list-item-subtitle>
              Admin Panel
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          link
          :class="{ 'v-list-item--active primary': $route.path === item.path }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Request Barang Admin</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: true,
    menuItems: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/admin' },
      { title: 'Departments', icon: 'mdi-domain', path: '/admin/departments' },
      { title: 'Employees', icon: 'mdi-account-group', path: '/admin/employees' },
      { title: 'Locations', icon: 'mdi-map-marker', path: '/admin/locations' },
      { title: 'Items', icon: 'mdi-package-variant', path: '/admin/items' },
      { title: 'Requests', icon: 'mdi-clipboard-list', path: '/admin/requests' }
    ]
  })
}
</script>