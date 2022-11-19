<template>
  
  <div>

    <h1 class="text-h3 text-brown-darken-2 text-center mt-10"> Dashboard</h1>

    <!-- message de succes et d'echec pour firebase - ajout project -->
    <div>
      <v-snackbar
        v-model="snackbar"
        timeout="3000"
        location="top"
      > 

        {{ text }}

        <template v-slot:actions>
          <v-btn
            color="pink"
            variant="text"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>

    </div>

    <v-container fluid  class="my-5">

      <Popup
        @projectAdded="snackbar = true"
        v-if="authStore.user.isAuthenticated"
      />

      <v-row class="mb-3 mt-10">
        
        <v-col lg="2" md="2" sm="2">
          <v-btn size="small" flat @click="sortBy('title')">
            <v-icon>mdi-folder</v-icon>
            <span class="caption text-lowercase">  by project name</span>
            <v-tooltip
              activator="parent"
              location="top"
              close-delay="1000"
            >sort project by title</v-tooltip>
          </v-btn>          
        </v-col>
        
        <v-col lg="2" md="2" sm="2">
          <v-btn size="small" flat @click="sortBy('person')">
            <v-icon>mdi-account</v-icon>
            <span class="caption text-lowercase">  by person</span>
            <v-tooltip
              activator="parent"
              location="top"
              close-delay="1000"
            >sort project by person name</v-tooltip>
          </v-btn>          
        </v-col>
      
      </v-row>

      <v-card
        class="pa-4"
        v-for="project in projects"
        :key="project.title"
      >
      
        <v-row :class="` project ${project.status} `">

          <v-col cols="6" sm="4" md="2">
            <div class="caption text-grey">Person</div>
           <router-link
              :to="{ name: 'projectsByPerson', params: { id: project.personId }}"
            >{{ project.personUsername  }}</router-link>
          </v-col>          

          <v-col cols="12" md="6" >
            <div class="caption text-grey">Project Title</div>
            <div >
              <router-link
                :to="{ name: 'editProject', params: { id: project.id }}"
                @projectAdded="snackbar = true"
              >{{ project.title }}</router-link>
            </div>

          </v-col>



          <v-col cols="6" sm="4" md="2">
            <div class="caption text-grey">Du by</div>
            <div>{{  project.due }}</div>
          </v-col>

          <v-col cols="2" sm="4" md="2">
            <div class="d-flex justify-end">
              <v-chip 
                class="ma-2"
                size="small"
                :class="`${project.status} text-white caption my-2`"
              >
                {{ project.status }}
              </v-chip>
            </div>
          </v-col>

        </v-row>

      
      </v-card>
      

    </v-container>
  
  </div>

</template>

<script setup>

  import { onMounted, ref, } from 'vue'
  import Popup from '@/components/Popup.vue'
  
  import { useProjectStore } from '@/stores/project.js'
  import { useAuthStore } from '@/stores/auth.js'
  import { storeToRefs } from 'pinia';

  const projectStore = useProjectStore()
  const { projects } = storeToRefs(projectStore)

  const authStore = useAuthStore()


  onMounted(() => {

    // projectStore.getProjects()

  })

  const sortBy = (critere) => {
    projects.value.sort((a, b) => a[critere] < b[critere] ? -1 : 1)
  }

  const snackbar = ref(false)
  const text = ref('Tu viens d\'ajouter un nouveau projet')

</script>

<style lang="scss">

  .project.complete {
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing {
    border-left: 4px solid orange;
  }
  .project.overdue {
    border-left: 4px solid tomato;
  }

  /* ------------- v-chip ------------------- */
  .v-chip.complete{
    background: #3cd1c2;
  }
  .v-chip.ongoing{
    background: #ffaa2c;
  }
  .v-chip.overdue{
    background: #f83e70;
  }

</style>
