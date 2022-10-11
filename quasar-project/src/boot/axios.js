import { boot } from 'quasar/wrappers'
import { axios } from 'axios'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
//export default boot(async (/* { app, router, ... } */) => {
  // something to do
  //const axiosInstance = axios.create()


//})

const axiosInstance = axios.create()
export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}
export { axiosInstance }
