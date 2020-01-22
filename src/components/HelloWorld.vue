<template>
  <v-container>
    <v-layout
      text-center
      wrap>   
      
      <v-flex xs6 offset-xs3>

      <v-row align="center" justify="center">
     <v-img
      src="../assets/logo.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="120"
      max-height="120"
      >
     </v-img></v-row>

        
        <v-layout pb-5>
           <h3 text-left style="color:#de3d52;">Lista de Pessoas</h3>
          <v-flex>
         
        </v-flex>
        <v-flex text-right>
        <v-btn to="adicionar" text-center rounded color="#de3d52" dark>
         + Adicionar Perfil 
        </v-btn>
        </v-flex>
        </v-layout>     

         

          
           <v-simple-table light dense="dense" style="border:red solid 1px;  border-radius: 25px; padding:10px;">
        
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
               
              </tr>
            </thead>
            <tbody to="/test">
              <router-link tag="tr" v-for="usuario in usuarioOrdem" :key="usuario.id" :to="verPerfilRota+usuario.id" style="cursor:pointer;">
                <td class="text-left">{{ usuario.name.charAt(0).toUpperCase() + usuario.name.slice(1) }}</td>
                <td>{{ usuario.email }}</td>
                <td> <v-btn  @click.stop="" :to="editarPerfilRota+usuario.id" text icon color="#de3d52"><v-icon>mdi-square-edit-outline</v-icon></v-btn> <v-btn @click.stop="dialog=true; id = usuario.id   " icon color="#de3d52"><v-icon>mdi-trash-can-outline</v-icon></v-btn></td>
              </router-link>
            
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
            @click="dialog = false; excluir(id);"
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
            
            
            
            
            
            </tbody>
     
        </v-simple-table> 
       

      </v-flex>

   
       
    

  
      
    </v-layout>
  </v-container>
</template>

<script>
import _ from 'lodash';
import {mapState, mapGetters} from 'vuex';

export default {
  name: 'HelloWorld',
  mounted(){
    this.$store.dispatch('carregarUsuarios')
    this.$store.dispatch('addUsuarios')
  },


  data: () => ({
    verPerfilRota: '/verperfil/',
    editarPerfilRota: '/editar/',
    dialog:false,
    usuarioAlterados:[],
    id:''
  }),

  computed:{
    usuarios(){
      return this.$store.getters.allUsuarios
    },
  // ...mapState([
  //   'usuarios'
  // ]),
  ...mapGetters([]),
  usuarioOrdem: function () {
    
    return  _.orderBy(this.usuarios, [usuario => usuario.name.toUpperCase()])
  },

  },
  methods:{
    excluir(id) {
       this.$store.dispatch('deletarUsuario', id)
			}
				
		}
  
};
</script>
