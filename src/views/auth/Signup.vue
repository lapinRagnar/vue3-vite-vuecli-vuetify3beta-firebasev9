
<template>
  
    
  <v-container  fluid class="bg-light-green-lighten-4">

    <v-row class="conteneur" >

      <v-col xl="6" lg="6" md="6" class="text-center ">
        
        <v-card class="ma-10 pa-5">

          <v-card-title class="mb-10">Create an account</v-card-title>

          <v-card-text>

            <v-form
              ref="form"
              v-model="isValid"
            >

                <v-text-field
                  prepend-icon="mdi-account-lock-outline "
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="username@example.com"
                  v-model="user.email"
                  required
                  :rules="[v => !!v || 'Email is required']"
                ></v-text-field>

                <v-text-field
                  id="password"
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Password"
                  type="password"
                  v-model="user.password"
                  required
                  :rules="[v => !!v || 'Email is required']"
                ></v-text-field>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    @click="valider"
                    class="pr-8"
                    color="primary"
                    :loading="user.loading"
                    :disabled="!isValid"
                  >Submit</v-btn>
                  
                </v-card-actions>

            </v-form>


            <v-card-actions>
              <v-btn
                @click="goToLogin"
              >Already have an account?</v-btn>
            </v-card-actions>



          </v-card-text>

        </v-card>
      
      </v-col>

    </v-row>

      
  </v-container>
  

</template>

<script setup>

  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/auth'
  import { storeToRefs } from 'pinia'

  import { useRouter } from "vue-router"


  const authStore = useAuthStore()
  const { user,  } = storeToRefs(authStore)

  const router = useRouter()
  
  const form = ref(null)
  const isValid = ref(true)

  async function valider() {
    const { valid } = await form.value.validate()
    console.log('valid', valid)

    if (valid) {
      authStore.signup()
    } else {
      console.log('erreur de creation de compte !')
    }
  }


  const goToLogin = async () => {
    await router.push({ name: 'login'})
  }




</script>



<style lang="scss">
  .conteneur {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>