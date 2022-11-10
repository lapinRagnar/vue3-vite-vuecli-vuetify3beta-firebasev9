<template>
  <v-app>
    
    <Navigation />

    <!-- layout -->
    <v-card>
      <v-layout>

        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          width="220"
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
            <v-list-item :to="{name: 'dashboard'}" prepend-icon="mdi-home-city" title="Dashboard" value="dashboard"></v-list-item>
            <v-list-item :to="{name: 'project'}" prepend-icon="mdi-calendar-range" title="Project" value="project"></v-list-item>
            <v-list-item :to="{name: 'team'}" prepend-icon="mdi-microsoft-teams" title="Team" value="team"></v-list-item>
            <v-list-item :to="{name: 'about'}" prepend-icon="mdi-information-variant" title="About" value="about"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        
        <v-main style="min-height: 100vh;" class="mx-4 mb-4">
          <router-view/>
        </v-main>


      </v-layout>
      <Footer />
    </v-card>


  </v-app>
</template>

<script setup>


import { ref, } from 'vue'

import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'



const drawer = ref(true)
const rail = ref(true)



</script>

<style lang="scss">
.v-list-item--active {
    background-color: rgb(145, 220, 129) !important;;
  }
</style>
