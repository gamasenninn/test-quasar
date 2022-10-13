<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Sql.js Test</h5>
  </q-page>

</template>

<script>
import { defineComponent, ref } from 'vue'
//import { api } from 'boot/axios'
//const fs = require('fs');
//const initSqlJs = require('sql-wasm.js');
//const filebuffer = fs.readFileSync('~/asset/sql_app.db');

export default defineComponent({
  name: "SqlJsPage",

})


/*
initSqlJs().then(function(SQL){
  // Load the db
  const db = new SQL.Database(filebuffer);
});


//require('https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.5.0/sql-wasm.js')
async function start() {

  let query = "SELECT * FROM mytable";
  let contents = db.exec(query);
  console.log(contents);
}
start();
*/

</script>
