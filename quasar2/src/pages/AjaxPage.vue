<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Ajax Test</h5>
    <q-btn color="primary" label="Github" @click="getGithub" />
    <div class="q-pa-md">
      <q-table 
        title="Github" 
        :rows="rows" 
        :columns="columns" 
        row-key="login" 
        no-data-label="データがありません"
      >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="login" :props="props">{{ props.row.login }}</q-td>
          <q-td key="node_id" :props="props">
            {{ props.row.node_id }}
            <q-popup-edit v-model="props.row.node_id" auto-save v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="repos_url" :props="props">{{ props.row.repos_url }}
            <q-popup-edit v-model="props.row.repos_url" buttons v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter />
            </q-popup-edit>          
          </q-td>
        </q-tr>
      </template>
      </q-table>
    </div>
    <p>{{gitData[0]}}</p>
    <p v-for="d,idx in gitData" :key="d.login">
      {{idx}}
      {{d.login}}
      {{d.node_id}}
    </p>
  </q-page>

</template>

<script>
import { defineComponent, ref } from 'vue'
import { api } from 'boot/axios'

const columns = [
  {
    name: 'login',
    required: true,
    label: 'Login name',
    align: 'left',
    field: row => row.login,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'node_id', align: 'center', label: 'node ID', field: 'node_id', sortable: true },
  { name: 'repos_url', align: 'left', label: 'repos url', field: 'repos_url', sortable: true }
  
]

const rows = [
/*
  {
    login: 'Frozen Yogurt',
    node_id: '001AANNCCFFJJ'
  },
  {
    login: 'ice',
    node_id: '2AANNCCFFJJ'
  },
  {
    login: 'ono',
    node_id: '3AANNCCFFJJ'
  },
  {
    login: 'FFFF',
    node_id: '4AANNCCFFJJ'
  }
*/
]
//const api = axios.create({ baseURL: 'https://api.github.com' })

export default defineComponent({
  name: "AjaxPage",
  data() {
    return {
      gitData: [],
      columns ,
      rows
    }
  },
  methods: {
    async getGithub() {
      await api.get('https://api.github.com/users')
        .then((response) => {
          this.gitData = response.data
          console.log(this.gitData)
          this.rows =  this.gitData
        })
    }
  }
})
</script>
