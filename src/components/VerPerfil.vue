<template>
  <v-container>

 

        
        <v-layout pb-5>
           <v-btn text icon to="/"> <v-icon color="#de3d52">mdi-arrow-left-thick</v-icon></v-btn> <span text-left style="padding-top:5px; color:#de3d52;">Perfil De {{usuario.name}}</span>
          <v-flex>
         
        </v-flex>
        <v-flex text-right>
        <v-btn to="adicionar" text-center rounded color="#de3d52" dark>
         + Adicionar Perfil 
        </v-btn>
        </v-flex>
        </v-layout>     

          
         

            <v-flex text-left p-10 style="border:red solid 1px;  border-radius: 25px; padding:10px 0px 20% 0px; ">
          
           
             
               <v-flex text-right>
                  <v-btn  :to="editarPerfilRota+usuario.id" text icon color="#de3d52"><v-icon>mdi-square-edit-outline</v-icon></v-btn> <v-btn @click.stop="dialog=true; id = usuario.id   " icon color="#de3d52"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                </v-flex>

            <tbody>
              
           <td style="padding-left:30px; position:relative; top:-25px;">
            <v-avatar  color="orange" size="80"> 
            <img src="../assets/avatar.png" alt="avatar">
            </v-avatar>
             <span style="padding-left:15px; font-size:24px; color:#de3d52;">{{usuario.name}}</span>
             <div style="padding-left:15px; padding-top:20px; padding-bottom:20%" >
             <span>Nome: {{usuario.name}}</span><br>
             <span>Email: {{usuario.email}}</span><br>
             <span>Data de cadastro: </span><span style="font-size:12px;"> {{usuario.data}}</span>
           </div>
 
           </td>
       
            
            
            
            
            </tbody>
    
       </v-flex>


  </v-container>
</template>

<script>

export default {
    data: () => ({
    verPerfilRota: '/verperfil/',
    editarPerfilRota: '/editar/',
    dialog:false,
   
  }),

  computed: {  
   usuario() {
    console.log("buscou");
   return this.$store.getters.getUsuario(this.$route.params.id)
   }
  }
}
</script>

<style>

</style>