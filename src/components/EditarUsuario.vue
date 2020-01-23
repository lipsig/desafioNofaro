<template>
  <v-container>


        
        <v-layout pb-5>
           <v-btn text icon to="/"> <v-icon color="#de3d52">mdi-arrow-left-thick</v-icon></v-btn> <span text-left style="padding-top:5px; color:#de3d52;">Editar Perfil</span>
          <v-flex>
         
        </v-flex>
        <v-flex text-right>
        <v-btn to="adicionar" text-center rounded color="#de3d52" dark>
         + Adicionar Perfil 
        </v-btn>
        </v-flex>
        </v-layout>     

          
          

            <v-flex text-left p-10 style="border:red solid 1px;  border-radius: 25px; padding:10px 0px 10% 0px; ">
          
          
             
               <v-flex text-right pr-5>
                  <v-btn @click="dialog=true" icon color="#de3d52"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                </v-flex>

            <tbody>
              
           <td style="padding-left:30px; position:relative; top:-25px;">
            <v-avatar  color="orange" size="80"> 
            <img src="../assets/avatar.png" alt="avatar">
            </v-avatar>
             <span style="padding-left:15px;">{{usuario.name}}</span>
             <div style="padding-left:15px; padding-top:20px;" >
             <span>Nome:</span><br>
            <v-col cols="12" sm="12" style="padding:10px 0px 0px 0px;">
             <v-text-field
            :value="usuario.name"
            @input="value => { usuarioEditado.name = value }"
            single-line
            solo
            rounded
            required
            dense
          ></v-text-field>
           </v-col>
             <span>Email:</span><br>
             <v-col cols="12" sm="12" style="padding:10px 0px 0px 0px;">
             <v-text-field
            :value="usuario.email"
            @input="value => { usuarioEditado.email = value }"
            single-line
            solo
            rounded
            required
            dense
          ></v-text-field>
           </v-col>
           </div>
 
           </td>
       
            
            
            
            
            </tbody>
     
          <v-flex xs4 offset-xs4 style="text-align:center;"><v-btn @click="salvar" small text-center rounded color="#de3d52" dark>
         Salvar
        </v-btn></v-flex>
       </v-flex>



  </v-container>
</template>

<script>
import axios from 'axios'
export default {
    
    props: {
            id: {
                required: true
            },
            // rest of the props if needed
        },
    mounted(){
    this.$store.dispatch('carregarUsuarios')
    // this.$store.dispatch('addUsuarios')
  },
     created () {
          
          const usuario = this.$store.getters.getUsuario(this.id)
   
        },
  
  data(){
   return {
     usuarioEditado:{
       name:'',
       email:''
     }

    }
  },
  methods:{
    salvar(){
    if(this.usuarioEditado.name == '' && this.usuarioEditado.email == ''){
        axios.put(`http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person/${this.usuario.id}`, this.usuario).then(res => {   
        console.log(res.data)
        this.usuario.name=this.usuarioEditado.name
    })}
    else if(this.usuarioEditado.name == ''){
        this.usuarioEditado.name = this.usuario.name
        axios.put(`http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person/${this.usuario.id}`, this.usuarioEditado).then(res => {   
        console.log(res.data)
        this.usuario.name=this.usuarioEditado.name
      
    })}
    else if(this.usuarioEditado.email==''){
    this.usuarioEditado.email = this.usuario.email
    axios.put(`http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person/${this.usuario.id}`, this.usuarioEditado).then(res => {   
    console.log(res.data)
    this.usuario.name=this.usuarioEditado.name
    
    })
      } else{
       axios.put(`http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person/${this.usuario.id}`, this.usuarioEditado).then(res => {   
        console.log(res.data)
        this.usuario.name=this.usuarioEditado.name
      
    })
      }
    }
  },
  computed: {  
   usuario() {
   console.log("buscou");
   return this.$store.getters.getUsuario(this.$route.params.id)
   }
  },
  watch:{
    usuario(){
      this.usuarioEditado = usuario
    }
  }

}
</script>

<style>

 .v-text-field .v-input__control .v-input__slot {
    min-height: auto !important;
    display: flex !important;
    align-items: left !important;
    height: 25px;
  }

</style>