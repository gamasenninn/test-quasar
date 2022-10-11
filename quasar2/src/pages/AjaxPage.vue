<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Ajax Test</h5>
    <q-btn color="primary" label="Github" @click="getGithub"/>
    <p>{{gitData}}</p>
  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import {api} from 'boot/axios'


//const api = axios.create({ baseURL: 'https://api.github.com' })

export default defineComponent({
  name: "AjaxPage",
  data(){
    return{
      gitData:[]
    }
  },
  methods:{
    async getGithub(){
      await api.get('https://api.github.com/users')
      .then((response) =>{
        this.gitData = response.data
        console.log(this.gitData)
      })
    } 
  }
})
</script>
