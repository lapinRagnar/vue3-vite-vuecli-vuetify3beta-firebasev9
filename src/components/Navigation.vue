<template>
  <nav>
    <v-toolbar flat app>

      <v-toolbar-title class="text-uppercase"> <span class="text-green">{{ titre }}</span> | Tuto vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :to="{name: 'dashboard'}">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <!-- <v-btn :to="{name: 'project'}"> 
        <v-icon>mdi-calendar-range</v-icon>
      </v-btn>

      <v-btn :to="{name: 'team'}">
        <v-icon>mdi-microsoft-teams</v-icon>
      </v-btn> -->

      <v-btn to="/about">
        <v-icon>mdi-information-variant</v-icon>
      </v-btn>

      <!-- dropdown menu -->

      <!-- <v-menu>

        <template v-slot:activator="{ props }" >
          <v-btn
            flat
            v-bind="props"
            @click="handleToggleIconMenu"
          >
            <v-icon> {{ toggleIconMenu ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            
            <span>Menu</span>

          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            :value="index"
            :to="link.route"
            class="d-flex" 
          >
            <v-list-item-title >
              <v-icon>{{ link.icon }}</v-icon>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->

      <!-- lien login et signup -->

      <v-btn
        :to="{name: 'login'}"
        color="grey"
        v-if="!authStore.user.isAuthenticated"
      >
        <v-icon right>mdi-account-outline</v-icon>
      </v-btn>

      <!-- <v-btn
        :to="{name: 'signup'}"
        color="grey"
        v-if="!authStore.user.isAuthenticated"
      >
        <v-icon right>mdi-account-edit-outline</v-icon>
      </v-btn> -->

      <span
        class="text-green text-caption"
        v-if="authStore.user.isAuthenticated"
      >({{authStore.user.email }})</span> 

      <v-btn
        color="grey"
        @click="handleLogout"
        v-if="authStore.user.isAuthenticated"
      >
        <v-icon right>mdi-location-exit</v-icon>
      </v-btn>
      
    </v-toolbar>
  </nav>

  
</template>

<script setup>

  import { useRouter } from 'vue-router'
  import { ref,  } from 'vue'

  import { useAuthStore } from '@/stores/auth'

  const authStore = useAuthStore()

  const toggleIconMenu = ref(false)

  const router = useRouter()
  const titre = ref(null)


  router.beforeEach((to, from, next) => {
    titre.value = to.meta.title
    console.log('guard befoeEach - le titre dans to', titre.value)
    next()
  })
  
  // const links = ref([
  //   { icon: 'mdi-home', text: 'Dashboard', route: '/'},
  //   // { icon: 'mdi-calendar-range', text: 'My Projects', route: '/project'},
  //   // { icon: 'mdi-microsoft-teams', text: 'Team', route: '/team'},
  // ])

  const handleToggleIconMenu = () => {
    console.log('ca marche, valeur =', toggleIconMenu.value)
    toggleIconMenu.value = !toggleIconMenu.value
  }

  const handleLogout = () => {
    authStore.logout()
  } 
 

</script>

