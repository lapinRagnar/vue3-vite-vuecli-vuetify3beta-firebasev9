import { computed, ref, } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/firebase/config.js'
import { collection, onSnapshot, query } from 'firebase/firestore'

export const useProjectStore = defineStore('project', () => {
  
  // ******** les states ********
  const projects = ref([])

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


  return { projects, getProjects }
})
