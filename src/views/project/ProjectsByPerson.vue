<template>
  <h1 class="text-h3 text-brown-darken-2 text-center">Project</h1>
  <h4> id - {{ id }}</h4>

  <v-container class="my-5">
      
      <div class="text-subtitle-2 mb-2">Project title</div>
      
      <v-expansion-panels>
        <v-expansion-panel
          :title="project.title"
          v-for="project in projects" 
          :key="project.title"          
        >

            <v-expansion-panel-text>

              
              <v-card-text>
                <div class="font-weight-bold">creat by - {{ project.person}}</div>
                <div >{{ project.due }}</div>
                <div class="">info</div>
                <div>status - {{ project.status }}</div>
                <div> content - {{ project.content }}</div>
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
  const { projects } = storeToRefs(projectStore)
  

  const router = useRoute()

  console.log('mon router', router)
  console.log('mon params id ', router.params.id)

  const id = router.params.id
  
  
  if (id) {
    projectStore.getProjectById(id)
    
  }


  

</script>