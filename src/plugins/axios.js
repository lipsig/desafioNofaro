import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL='http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios;
    }
})