import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { auth, db } from '@/firebase/config.js'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { collection, addDoc, } from "firebase/firestore"; 

export const useAuthStore = defineStore('auth', () => {
  
  console.log('auth et app', auth, db)
  const user = reactive({
    email: '',
    password: '',
    error: null,
    messageSucces: 'Merci, Bien enregistré!',
    loading: false

  })

  


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


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('erreur code, errorMessage', errorCode, errorMessage)
    })


  }

  return { user, signup, currentUser }
})
