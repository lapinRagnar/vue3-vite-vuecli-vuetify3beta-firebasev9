<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Add a new project
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Add a new project</v-card-title>

        <v-card-text>
          
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="state.title"
              prepend-icon="mdi-format-title"
              :rules="state.titleRules"
            />            
            
            <v-textarea 
              label="Information"
              v-model="state.content"
              prepend-icon="mdi-pencil-outline"
              :rules="state.informationRules"
            />

            <v-text-field
              label="Due date"
              v-model="state.due"
              prepend-icon="mdi-calendar-range "
            />


            <v-btn
              color="success"
              class="mr-4"
              @click="submit"
              :loading="loading"
            >
              Add Project
            </v-btn>

          </v-form>
        
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script setup>

  import { ref, reactive } from 'vue'
  import {db} from '@/firebase/config.js'
  import { collection, addDoc, setDoc, doc } from "firebase/firestore"
  
  import { useAuthStore } from '@/stores/auth'

  const authStore = useAuthStore()

  const dialog = ref(false)
  const form = ref(null)
  const loading = ref(false)  
  const emit = defineEmits(['projectAdded'])
  
  const state = reactive({ 
    title: '',
    content: '',
    due: null,
    showDatePicker: false,

    titleRules: [
      v => !!v || 'Name is required',
      v => (v && v.length >= 3) || 'Title must be greater than 3 characters',
    ],

    informationRules: [
      v => !!v || 'Name is required',
      v => (v && v.length >= 10) || 'Title must be greater than 10 characters',
    ],

  })

  const submit = async () => {

    loading.value = true

    const { valid } = await form.value.validate()
    console.log('valid', valid)

    console.log('utilisateur', authStore.user)

    if (valid) {
      


      // crud create projets
      
      // const dbRef = collection(db, "projects")      

      // await addDoc(dbRef, project)
      // .then(docRef => {
      //   console.log('document bien enregistré', docRef)
      //   loading.value = false
      //   dialog.value = false
      //   emit('projectAdded')
      // })
      // .catch(error => {
      //   console.log(error);
      // })

      const newProjectRef = doc(collection(db, "projects"))

      console.log('newProjectRef', newProjectRef.id)

      const project = {
        title: state.title,
        content: state.content,
        due: state.due,
        personId: authStore.user.id,
        personUsername: authStore.user.email.substr(0, authStore.user.email.indexOf('@')), // recuperer le nom avant l'arobas de l'email
        status: 'ongoing',
        projectId: newProjectRef.id
      }

      await setDoc(newProjectRef, project)
      .then(docRef => {
        console.log('document bien enregistré', docRef)
        loading.value = false
        dialog.value = false
        emit('projectAdded')
      })
      .catch(error => {
        console.log(error)
      })

    }    
  }

</script>