<template>
  <div class="about">
    <h1 class="text-h3 text-brown-darken-2 text-center">This is an about page</h1>

    <v-container class="my-5">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita facilis commodi atque totam, debitis nobis! Doloremque, ducimus totam fugiat soluta omnis maxime cumque unde exercitationem error tempore animi sunt?</p>
      <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati atque nemo similique molestias porro neque dolorem quibusdam iure inventore ratione adipisci facere, mollitia repudiandae veniam illum. Possimus, illum quibusdam!</p>
      
      <v-form ref="maRef2">
        
        
        <v-btn @click="valider">cliquer</v-btn>
      
      </v-form>
    </v-container>


  </div>
</template>

<script setup>

import { ref } from 'vue';
import { useExampleStore } from '../stores/example'

const exampleStore = useExampleStore()

const maRef2 = ref(null)



async function valider() {
  console.log('valider')
  console.log('ma reference', maRef2.value.validate())
  const { valid } = await maRef2.value.validate()
  console.log('valid', valid)

  if (valid) {
    exampleStore.maFonction()
  }

  
}


</script>
