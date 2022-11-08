<template>
  <div class="minimun">
    <h1 class="text-h3 text-brown-darken-2 text-center">Team</h1>

    <v-container class="my-5 ">
      
      <v-row>
      
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >

          <v-card
            flat
            class="text-center ma-3"
          >
            
            <v-responsive class="border pa-4">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
                cover
              ></v-img>
            </v-responsive>

            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="text-grey">{{ person.role}}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon size="small" class="mr-5" >mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>

          </v-card>
        
        </v-col>
      
      </v-row>

    </v-container>

  </div>
</template>

<script setup>

import { ref } from 'vue'

const team = ref([
  { name: 'The Net Ninja', role: 'Web developer' },
  { name: 'Ryu', role: 'Graphic designer' },
  { name: 'Chun Li', role: 'Web developer' },
  { name: 'Gouken', role: 'Social media maverick' },
  { name: 'Yoshi', role: 'Sales guru'}
])


</script>

<style lang="scss" scoped>
  .minimun{
    min-width: 250px;
  }
</style>