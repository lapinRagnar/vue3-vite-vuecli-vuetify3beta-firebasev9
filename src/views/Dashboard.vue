<template>
  
  <div>

    <h1 class="text-h3 text-brown-darken-2 text-center"> Dashboard</h1>

    <v-container fluid  class="my-5">

      <v-row class="mb-3">
        
        <v-col lg="2" md="2" sm="2">
          <v-btn size="small" flat @click="sortBy('title')">
            <v-icon>mdi-folder</v-icon>
            <span class="caption text-lowercase">  by project name</span>
          </v-btn>          
        </v-col>
        
        <v-col lg="2" md="2" sm="2">
          <v-btn size="small" flat @click="sortBy('person')">
            <v-icon>mdi-account</v-icon>
            <span class="caption text-lowercase">  by person</span>
          </v-btn>          
        </v-col>
      
      </v-row>

      <v-card
        class="pa-4"
        v-for="project in projects"
        :key="project.title"
      >
      
        <v-row :class="` project ${project.status} `">
          
          <v-col cols="12" md="6">
            <div class="caption text-grey">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption text-grey">Person</div>
            <div> {{ project.person }}</div>
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

        <divider></divider>
      
      </v-card>

    </v-container>
  
  </div>

</template>

<script setup>

  import { ref } from 'vue'

  const projects = ref([
    { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
  ])


  const sortBy = (critere) => {
    projects.value.sort((a, b) => a[critere] < b[critere] ? -1 : 1)
  }

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
