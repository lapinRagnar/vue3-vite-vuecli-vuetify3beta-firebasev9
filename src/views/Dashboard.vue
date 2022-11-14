<template>
  
  <div>

    <h1 class="text-h3 text-brown-darken-2 text-center"> Dashboard</h1>

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

      <Popup @projectAdded="snackbar = true" />

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
          
          {{ project.id }}
          

          <v-col cols="12" md="6" >
            <div class="caption text-grey">Project Title</div>
            <div >{{ project.title }}</div>
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

      
      </v-card>
      

    </v-container>
  
  </div>

</template>

<script setup>

  import { ref, onMounted } from 'vue'
  import Popup from '@/components/Popup.vue'
  import { db } from '@/firebase/config.js'
  import { doc, onSnapshot, query, collection, getDocs } from "firebase/firestore";

  const projects = ref([])


  const sortBy = (critere) => {
    projects.value.sort((a, b) => a[critere] < b[critere] ? -1 : 1)
  }


  const snackbar = ref(false)
  const text = ref('Tu viens d\'ajouter un nouveau projet')

  onMounted( async () => {

    // misy probleme, ca affiche 2 fois les données
    // const q = query(collection(db, "projects"))
    // console.log('query------', q)
    
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {

    //   querySnapshot.forEach((doc) => {
        
    //     projects.value.push({
    //       ...doc.data(),
    //       id: doc.data().id
    //     })

    //   })
    //   console.log("les projets : ", projects.value);
    // })



    /// misy probleme - ca ne met pas à jour les données en direct
    // const q = query(collection(db, "projects"));

    // const querySnapshot = await getDocs(q)
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data())
    //   projects.value.push({
    //     ...doc.data(),
    //     id: doc.data().id
    //   })
    // });


    // afficher les projets - crud read all
    // afficher tous les projets
    const q = query(collection(db, "projects"))
    onSnapshot(q, (snapshot) => {

      snapshot.docChanges().forEach((change) => {

        if (change.type === "added") {

          projects.value.push({
            ...change.doc.data(),
            id: change.doc.id
          })

        }
        if (change.type === "modified") {
          console.log("Modified city: ", change.doc.data())
        }
        if (change.type === "removed") {
          console.log("Removed city: ", change.doc.data())
        }
      })
    })

    console.log('tous les projets', projects.value)


    // afficher un projet d'un utilisateur par titre
    

  })


  

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
