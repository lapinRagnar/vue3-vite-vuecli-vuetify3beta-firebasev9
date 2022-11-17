import { ref, } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/firebase/config.js'
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore'

export const useProjectStore = defineStore('project', () => {
  
  // ******** les states ********
  const projects = ref([])
  const projet = ref([])
  const projetsParId = ref([])

  // ******** les guetters ********



  // ******** les actions ********

  // afficher tous les projets
  async function getProjects() {

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
    console.log('tous les projets dans le store', projects.value)
  }

  getProjects()


  // get projects by id ou by person
  async function getProjectById(id) {

    projetsParId.value = []

    console.log('getProjectById :', id)
    
    const q = query(collection(db, "projects"), where("personId", "==", id))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data())
      projetsParId.value.push({
        ...doc.data(),
      })
    })
    console.log('dans getProjectById ', projetsParId.value)
  }


  // edit project
  async function editProject(id) {

    projet.value = []
    
    console.log('je suis dans editProject :', id)
    
    console.log('le state projet', projet.value)

    const q = query(collection(db, "projects"), where("projectId", "==", id))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data())
      projet.value.push({
        ...doc.data(),
      })
    })
    console.log('dans edit project store ', projet.value)

  }
  


  return { projects, getProjects, getProjectById, editProject, projet, projetsParId }
})
