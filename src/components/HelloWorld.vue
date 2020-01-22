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
        <v-btn text-center rounded color="#de3d52" dark>
         + Adicionar Perfil 
        </v-btn>
        </v-flex>
        </v-layout>
        
 

          
           <v-simple-table light dense="dense" style="border:red solid 1px;  border-radius: 25px; padding:10px;">
          <template v-slot:default>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
               
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios" :key="usuario">
                <td class="text-left">{{ usuario.name }}</td>
                <td>{{ usuario.email }}</td>
                <td> <v-icon>mdi-square-edit-outline</v-icon> <v-icon>mdi-trash-can-outline</v-icon></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table> 
       

      </v-flex>

   
       <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    

  
      
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  created(){
    this.obterUsuarios();
  },

  data: () => ({
    usuarios:[]
  }),

  methods:{
    obterUsuarios(){
      this.$http('/person').then(resp => {
        this.usuarios = resp.data
        console.log(resp.data)
      })
    },
    excluir(id) {
			this.$http.delete(`/person/${id}`).then(console.log("excluido"))
			}
				
		}
  
};
</script>
