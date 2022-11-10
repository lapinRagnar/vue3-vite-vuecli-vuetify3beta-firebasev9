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

  import { ref, reactive, defineEmits } from 'vue'
  import {db} from '@/firebase/config.js'
  import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 

  const dialog = ref(false)

  const form = ref(null)
  const loading = ref(false)
  

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

    loading.value = false

    console.log(state.title, state.content, form.value.validate())

    const { valid } = await form.value.validate()
    console.log('valid', valid)

    if (valid) {
      
      console.log('--------validation ------------- ', state.title, state.content, state.due, valid)

      const project = {
        title: state.title,
        content: state.content,
        due: state.due,
        person: 'Monsieur Ninja',
        status: 'ongoing'
      }

      console.log('-------le projet-------', project)

      const dbRef = collection(db, "projects")
      // const docRef = doc(db, "projects", "mon-super-id-1" )
      console.log('project ref', dbRef)

      

      await addDoc(dbRef, {title: 'salut', person: 'moi meme', content: 'mon contenu', status: 'complete', due: '12/02/2022'})
      .then(docRef => {
        console.log('document bien enregistré', docRef)
        loading.value = false
        dialog.value = false
      })
      .catch(error => {
        console.log(error);
      })

    }    
  }

</script>