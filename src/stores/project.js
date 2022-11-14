import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/firebase/config.js'

export const useProjectStore = defineStore('project', () => {
  
  console.log('auth et app', db)

  return {  }
})
