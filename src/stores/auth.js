import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { auth, db } from '@/firebase/config.js'

export const useAuthStore = defineStore('auth', () => {
  
  console.log('auth et app', auth, db)

  return {  }
})
