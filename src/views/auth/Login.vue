
<template>
  
    
  <v-container  fluid class="bg-light-green-lighten-4">

    <v-row class="conteneur" >

      <v-col xl="6" lg="6" md="6" class="text-center ">
        
        <v-card class="ma-10 pa-5">

          <v-card-title class="mb-10">Login</v-card-title>

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
                  >Login</v-btn>
                  
                </v-card-actions>

            </v-form>

            <v-card-actions>
              <v-btn
                @click="goToSignUp"
              >create an account</v-btn>
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
  
  const form = ref(null)
  const isValid = ref(true)

  const router = useRouter()

  async function valider() {
    const { valid } = await form.value.validate()
    console.log('valid', valid)

    if (valid) {
      authStore.login()
    } else {
      console.log('erreur de creation de compte !')
    }
  }

  const goToSignUp = async () => {
    await router.push({ name: 'signup'})
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