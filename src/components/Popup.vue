<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Add a new project
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Add a new project</v-card-title>

        <v-card-text>
          
          <v-form class="px-3">
            <v-text-field
              label="Title"
              v-model="state.title"
              prepend-icon="mdi-format-title"
            />            
            
            <v-textarea 
              label="Information"
              v-model="state.content"
              prepend-icon="mdi-pencil-outline"
            />

            <v-btn
              color="success"
              class="mr-4"
              @click="submit"
            >
              Add Project
            </v-btn>

          </v-form>
        
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script setup>

  import { ref, reactive } from 'vue'

  const dialog = ref(false)

  const state = reactive({ 
    title: '',
    content: '',

  })

  const submit = () => {
    console.log(state.title, state.content)
  }

</script>