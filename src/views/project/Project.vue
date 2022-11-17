<template>
  <div>
    <h1 class="text-h3 text-brown-darken-2 text-center">Project</h1>

    <div>User - {{ $route.params.id }}</div>

    <v-container class="my-5">
      
      <div class="text-subtitle-2 mb-2">Project title</div>
      <v-expansion-panels>
        <v-expansion-panel
          :title="project.title"
          v-for="project in myProjects" 
          :key="project.title"          
        >

            <v-expansion-panel-text>

              
              <v-card-text>
                <div class="font-weight-bold">creat by - {{ project.person}}</div>
                <div >{{ project.due }}...</div>
                <div class="">info</div>
                <div>status - {{ project.status }}</div>
                <div> content - {{ project.content }}</div>
              </v-card-text>
              

            </v-expansion-panel-text>
          

        </v-expansion-panel>
      </v-expansion-panels>

    </v-container>
  </div>
</template>

<script setup>

  import { reactive, computed } from 'vue'
  import { collection, query, where, onSnapshot } from "firebase/firestore"


  const donnees = reactive({
    salut: 'John Doe',
    projects: [
      { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'learn vuetify', person: 'The Net Ninja', due: '1st mars 2022', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'learn all things', person: 'The Net Ninja', due: '1st Jan 2022', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    ]
  })


  const myProjects = computed(() => {
    return donnees.projects.filter(project => project.person === 'The Net Ninja' )
  })

  

  // crud read one

  // const q = query(collection(db, "projects"));

  // const querySnapshot = await getDocs(q)
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data())
  //   projects.value.push({
  //     ...doc.data(),
  //     id: doc.data().id
  //   })
  // });


</script>