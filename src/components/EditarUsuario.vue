<template>
  <v-container>


        
        <v-layout pb-5>
           <v-btn text icon to="/"> <v-icon color="#de3d52">mdi-arrow-left-thick</v-icon></v-btn> <span text-left style="padding-top:5px; color:#de3d52;">Editar Perfil</span>
          <v-flex>
         
        </v-flex>
        <v-flex text-right>
        <v-btn to="/adicionar" text-center rounded color="#de3d52" dark>
         + Adicionar Perfil 
        </v-btn>
        </v-flex>
        </v-layout>     

          
          

            <v-flex text-left p-10 style="border:red solid 1px;  border-radius: 25px; padding:10px 0px 10% 0px; ">
          
          
             
               <v-flex text-right pr-5>
                  <v-btn @click="dialog=true; excluirid = usuario.id " icon color="#de3d52"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
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

          <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title style="text-align:center" class="headline"></v-card-title>

        <v-card-text style="text-align:center">
          Tem certeza que você deseja <br> excluir esse perfil?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-flex>
          <v-btn align="left"
            style="text-align:left;"
            color="red"
            dark
            rounded
            @click="dialog = false; excluir(excluirid);"
          >
            Sim
          </v-btn>
          </v-flex>
            <v-flex>
          <v-btn
          
            rounded
            text
            @click="dialog = false"
          >
            Não
          </v-btn>
           </v-flex>
        </v-card-actions>
      </v-card>
    </v-dialog>

    
          <v-dialog
        v-model="dialog2"
       max-width="290"
    >
      <v-card>
        <v-card-title style="text-align:center" class="headline"></v-card-title>

        <v-card-text style="text-align:center">
          Perfil Alterado Com Sucesso
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-flex>
       
          <v-btn
          
            rounded
            text
            @click="dialog2 = false"
          >
            Fechar
          </v-btn>
           </v-flex>
        </v-card-actions>
      </v-card>
    </v-dialog>


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
      dialog:false,
      dialog2:false,
      excluirid:'',
     usuarioEditado:{
       name:'',
       email:''
     }

    }
  },
  methods:{
    excluir(excluirid) {
       this.$store.dispatch('deletarUsuario', excluirid).then(()=>{
          this.$store.dispatch('carregarUsuarios')  
          this.$router.push( '/' );
       })
			},
    salvar(){
    if(this.usuarioEditado.name == '' && this.usuarioEditado.email == ''){
        axios.put(`http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person/${this.usuario.id}`, this.usuario).then(res => {   
        console.log(res.data)
        this.usuario.name=this.usuarioEditado.name
        this.dialog2=true
    })}
    else if(this.usuarioEditado.name == ''){
        this.usuarioEditado.name = this.usuario.name
        axios.put(`http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person/${this.usuario.id}`, this.usuarioEditado).then(res => {   
        console.log(res.data)
        this.usuario.name=this.usuarioEditado.name
        this.dialog2=true
    })}
    else if(this.usuarioEditado.email==''){
    this.usuarioEditado.email = this.usuario.email
    axios.put(`http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person/${this.usuario.id}`, this.usuarioEditado).then(res => {   
    console.log(res.data)
    this.usuario.name=this.usuarioEditado.name
    this.dialog2=true
    })
      } else{
       axios.put(`http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person/${this.usuario.id}`, this.usuarioEditado).then(res => {   
        console.log(res.data)
        this.usuario.name=this.usuarioEditado.name
       this.dialog2=true
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