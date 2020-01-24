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
      console.log('buscou um');
      console.log(id)
      return state.usuarios.find(usuario => usuario.id === id)
    }
  },
  //set
  mutations: {
    setEstadoUsuario(state, usuarios){
      state.usuarios = usuarios
    },
    deletar_usuario(state, id){
      state.usuarios.splice(state.usuarios.indexOf(id), 1)
     }
  },
  //executam mutations
  actions: {
    carregarUsuarios({commit}){
      axios.get('http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person').then(data=> {
        console.log("buscou todos")
        let usuarios = data.data
        commit('setEstadoUsuario', usuarios)
      })
    },
    editarUsuario(id,nome,email){
      axios.put(`http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person/${id}`, nome,email).then(res => {   
        console.log(res.data)
    })
    },
    addUsuario(name){
      axios.post('http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person', name ,{ params:{
        name: this.name
      }})      
     },
    deletarUsuario ({commit}, id) {
      axios.delete('http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person/' + id).then(() => {              
            commit('deletar_usuario', id)
            console.log("tirou do array")
        })
    },
  },
  modules: {
  }
})
