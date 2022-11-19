<template>
        
  <v-card class="ma-10 pa-5">

    <v-card-title class="mb-10 text-center">Edit project</v-card-title>

    <v-card-text>

      <v-form
        ref="form"
        v-model="isValid"
      >

          <v-text-field
            label="user"
            v-model="projet.personUsername"
            type="text"
            bg-color="white"
            required
            :rules="[v => !!v || 'username is required']"
          ></v-text-field>

          
          <v-text-field
            label="title"
            v-model="projet.title"
            type="text"
            bg-color="white"
            required
            :rules="[v => !!v || 'title is required']"
          ></v-text-field>

          <v-textarea
            label="content"
            v-model="projet.content"
            type="text"
            bg-color="white"
            required
            :rules="[v => !!v || 'content is required']"
          ></v-textarea>

          <v-text-field
            label="due date"
            v-model="projet.due"
            type="text"
            bg-color="white"
            required
            :rules="[v => !!v || 'due date is required']"
          ></v-text-field>

          <v-text-field
            label="status"
            v-model="projet.status"
            type="text"
            bg-color="white"
            required
            :rules="[v => !!v || 'status is required']"
          ></v-text-field>



          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              @click="valider"
              class="pr-8"
              color="primary"
              :disabled="!isValid"
            >Update</v-btn>
            
          </v-card-actions> 

      </v-form>


    </v-card-text>



  </v-card>
      


</template>

<script setup>

  import { useRoute } from "vue-router"
  import { useProjectStore } from '@/stores/project.js'
  import { storeToRefs } from 'pinia';
  import { ref } from "vue";
 

  const projectStore = useProjectStore()
  const { projet, projects } = storeToRefs(projectStore)
  


  const router = useRoute()

  const form = ref(null)
  const isValid = ref(true)

  const emit = defineEmits(['projectAdded'])

  
  const id = router.params.id
  console.log('mon params id ', id)
  
  
  if (id) {
    console.log('dans editProject vue')
    projectStore.findProjectByProjectId(id)
    console.log('dans vue edit project', projet)
    
  }

  const valider = async () => {

    const { valid } = await form.value.validate()
    console.log('valid', valid)

    if (valid) {
      projectStore.editProject()
      emit('projectAdded')
      
    }
  }

</script>

