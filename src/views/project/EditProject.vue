<template>
  <h1>Editer project</h1>

  <h5>
    <pre>
      {{ projet }}
    </pre>
  </h5>

</template>

<script setup>

  import { useRoute } from "vue-router"
  import { useProjectStore } from '@/stores/project.js'
  import { storeToRefs } from 'pinia';
 

  const projectStore = useProjectStore()
  const { projet } = storeToRefs(projectStore)
  

  const router = useRoute()

  
  const id = router.params.id
  console.log('mon params id ', id)
  
  
  if (id) {
    console.log('dans editProject vue')
    projectStore.editProject(id)
    console.log('dans vue edit project', projet)
    
  }

</script>