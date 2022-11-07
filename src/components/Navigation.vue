<template>
  <nav>
    <v-toolbar flat app>

      <v-toolbar-title class="text-uppercase"> <span class="text-green">{{ titre }}</span> | Tuto vuetify</v-toolbar-title>

      <v-btn :to="{name: 'dashboard'}">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn :to="{name: 'project'}">
        <v-icon>mdi-calendar-range</v-icon>
      </v-btn>

      <v-btn :to="{name: 'team'}">
        <v-icon>mdi-microsoft-teams</v-icon>
      </v-btn>

      <v-btn to="/about">
        <v-icon>mdi-information-variant</v-icon>
      </v-btn>

      <v-btn color="grey">
        <v-icon right>mdi-location-exit</v-icon>
      </v-btn>
      
    </v-toolbar>
  </nav>
</template>

<script setup>

import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

console.log('router', router)

const titre = ref(null)

router.beforeEach((to, from, next) => {
  titre.value = to.meta.title
  console.log('le titre dans to', titre.value)
  next()
})
console.log('aaaaa o')




</script>

