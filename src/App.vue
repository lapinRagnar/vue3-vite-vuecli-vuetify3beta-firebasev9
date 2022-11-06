<template>
  <v-app>
    
    <Navigation />

    <!-- layout -->
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          width="180"
          permanent
          @click="rail = false"
        >
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item :to="{name: 'home'}" prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item :to="{name: 'about'}" prepend-icon="mdi-information-variant" title="About" value="about"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 300px;">
          <router-view/>
        </v-main>
      </v-layout>
    </v-card>


  </v-app>
</template>

<script setup>

import { ref, onMounted, computed  } from 'vue'

import Navigation from '@/components/Navigation.vue'

const drawer = ref(true)
const rail = ref(true)


</script>
