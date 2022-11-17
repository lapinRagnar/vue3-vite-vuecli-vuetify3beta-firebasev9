<template>

  <h1 class="text-h3 text-brown-darken-2 text-center">Project</h1>

  <v-container class="my-5">
      
    <v-expansion-panels>
      <v-expansion-panel
        :title="project.title"
        v-for="project in projetsParId" 
        :key="project.title"          
      >

        <v-expansion-panel-text>

          
          <v-card-text>

            <div class="text-h6 mb-10"> {{ project.content }}</div>
            <div class="font-weight-bold">created by - {{ project.personUsername}}</div>
            <div >Due date - {{ project.due }}</div>
            
            <div>Status - {{ project.status }}</div>
          </v-card-text>
          

        </v-expansion-panel-text>
          

      </v-expansion-panel>
    </v-expansion-panels>

  </v-container>


</template>

<script setup>

  import { useRoute } from "vue-router"
  import { useProjectStore } from '@/stores/project.js'
  import { storeToRefs } from 'pinia';
 

  const projectStore = useProjectStore()
  const { projetsParId } = storeToRefs(projectStore)
  

  const router = useRoute()

  console.log('mon router', router)
  console.log('mon params id ', router.params.id)

  const id = router.params.id
  
  
  if (id) {
    projectStore.getProjectById(id)
    
  }


  

</script>