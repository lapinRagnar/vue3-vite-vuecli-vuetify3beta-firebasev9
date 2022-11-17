import { reactive, } from 'vue'
import { defineStore } from 'pinia'

import { auth, db } from '@/firebase/config.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged   } from "firebase/auth"
import { collection, addDoc, } from "firebase/firestore"; 

import { useRouter } from "vue-router"

export const useAuthStore = defineStore('auth', () => {
  
  console.log('auth et app', auth, db)
  const user = reactive({
    email: '',
    password: '',
    error: null,
    messageSucces: 'Merci, Bien enregistré!',
    loading: false,
    id: '',
    isAuthenticated: false,


  })

  const router = useRouter()

  


  async function signup() {
   

    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(async (userCredential) => {
      // Signed in 
      const utilisateur = userCredential.user;
      console.log('bien enregistré', utilisateur)

      const profileUsers = {
        userId: utilisateur.uid,
        email: utilisateur.email,
        firstname: '',
        lastName: '',
        accessToken: utilisateur.accessToken,
        createdAt: utilisateur.metadata.createdAt,
        creationTime: utilisateur.metadata.creationTime,
        lastLoginAt: utilisateur.metadata.lastLoginAt,
      }

      console.log('profileUsers', profileUsers)

      const dbRef = collection(db, "profileUsers")
      await addDoc(dbRef, profileUsers)
      .then(docRef => {
        console.log('profile utilisateur bien ajouté', docRef)
      })
      .catch(error => {
        console.log(error);
      })
      
      await router.push({ name: 'dashboard'})


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('erreur code, errorMessage', errorCode, errorMessage)
    })


  }

  async function login() {
    
    await signInWithEmailAndPassword(auth, user.email, user.password)
    .then( async (userCredential) => {
      // Signed in 
      const utilisateur = userCredential.utilisateur
      
      await router.push({ name: 'dashboard'})

    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('errorCode, errorMessage', errorCode, errorMessage)
    })

  }

  async function logout() {

    await signOut(auth)
    .then(async () => {
      console.log('bien deconnecté!')
      await router.push({ name: 'dashboard'})
    }).catch((error) => {
      console.log('error', error)
    });

  }


  function initialisationUser() {

    onAuthStateChanged(auth, (utilisateur) => {
      if (utilisateur) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        user.id = utilisateur.uid
        user.isAuthenticated = true
        user.email = utilisateur.email
        // ...
      } else {
        // User is signed out
        // ...
        console.log('user deconnecté')
        user.email = ''
        user.password = ''
        user.id = ''
        user.isAuthenticated = false
      }
    })
  }


  return { user, signup, login, logout, initialisationUser }
})
