import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex,axios)

export default new Vuex.Store({
  state: {
    //estado
    usuarios:[]
  },
  getters: {
    allUsuarios: state => {
      return state.usuarios
    },
    getUsuario: (state) => (id) => {
      return state.usuarios.find(usuarios => usuarios.id === id)
    }
  },
  //set
  mutations: {
    setEstadoUsuario(state, usuarios){
      state.usuarios = usuarios
    },
    DELETE_CAR(state, id){
      state.usuarios.splice(state.usuarios.indexOf(id), 1)
     }
  },
  //executam mutations
  actions: {
    carregarUsuarios({commit}){
      axios.get('http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person').then(data=> {
        console.log(data.data)
        let usuarios = data.data
        commit('setEstadoUsuario', usuarios)
      })
    },
    carregarUsuario(id){
      
    },
    // addUsuarios(){
    //   axios.post('http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person', {
    //     name:'bruno',
    //     email:'carlos@gmail.com',
    //     data: Date(),
    //     avatar: '"../assets/avatar.png"'
    //   })
    //  },
    deletarUsuario ({commit}, id) {
      axios.delete('http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person/' + id).then(() => {              
            commit('DELETE_CAR', id)
            console.log("tirou do array")
        })
    }
  },
  modules: {
  }
})
