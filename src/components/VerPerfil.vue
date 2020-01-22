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
           <v-btn text icon to="/"> <v-icon color="#de3d52">mdi-arrow-left-thick</v-icon></v-btn> <span text-left style="padding-top:5px; color:#de3d52;">Perfil De "Dinamico"</span>
          <v-flex>
         
        </v-flex>
        <v-flex text-right>
        <v-btn to="adicionar" text-center rounded color="#de3d52" dark>
         + Adicionar Perfil 
        </v-btn>
        </v-flex>
        </v-layout>     

          
         

            <v-flex text-left p-10>
          
           <v-simple-table light dense="dense" style="border:red solid 1px;  border-radius: 25px; padding:10px;">
             
               <v-flex text-right>
                  <v-btn  @click.stop="" to="editarPerfilRota+usuario.id" text icon color="#de3d52"><v-icon>mdi-square-edit-outline</v-icon></v-btn> <v-btn @click.stop="dialog=true; id = usuario.id   " icon color="#de3d52"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                </v-flex>

            <tbody>
              
           <td style="padding-left:30px; position:relative; top:-25px;">
            <v-avatar  color="orange" size="80"> 
            <span class="white--text headline">62</span>
            </v-avatar>
             <span style="padding-left:15px;">Nome Aqui</span>
             <div style="padding-left:15px; padding-top:20px; padding-bottom:20%" >
             <span>Nome:</span><br>
             <span>Email:</span><br>
             <span>Data:</span>
           </div>
 
           </td>
       
            
            
            
            
            </tbody>
     
        </v-simple-table> 
       </v-flex>

      </v-flex>

   
       
    

  
      
    </v-layout>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>