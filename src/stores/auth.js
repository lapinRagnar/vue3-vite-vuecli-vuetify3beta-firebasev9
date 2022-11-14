import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { auth, db } from '@/firebase/config.js'

export const useAuthStore = defineStore('auth', () => {
  
  console.log('auth et app', auth, db)
  const user = reactive({
    email: 'salut',
    password: 'bonjour'
  })

  return { user }
})
