import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'


export const useExampleStore = defineStore('example', () => {
  
  const maRef = ref(null)
  
  function maFonction(){
    console.log("c'est ma fonction example")
  }

  return { maFonction, maRef }
})
