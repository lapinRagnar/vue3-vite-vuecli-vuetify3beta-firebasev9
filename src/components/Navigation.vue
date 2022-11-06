<template>
  <div>
    
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >

      <v-toolbar-title>{{ titre }} - Tuto Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-information-variant</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account-lock</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account-off</v-icon>
      </v-btn>

    </v-app-bar>

  </div>
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

