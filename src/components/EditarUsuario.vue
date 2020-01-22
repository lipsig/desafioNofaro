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
           <v-btn text icon to="/"> <v-icon color="#de3d52">mdi-arrow-left-thick</v-icon></v-btn> <span text-left style="padding-top:5px; color:#de3d52;">Editar Perfil</span>
          <v-flex>
         
        </v-flex>
        <v-flex text-right>
        <v-btn to="adicionar" text-center rounded color="#de3d52" dark>
         + Adicionar Perfil 
        </v-btn>
        </v-flex>
        </v-layout>     

          
          

            <v-flex text-left p-10 style="border:red solid 1px;  border-radius: 25px; padding:10px 0px 20% 0px; ">
          
          
             
               <v-flex text-right pr-5>
                  <v-btn @click="dialog=true" icon color="#de3d52"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                </v-flex>

            <tbody>
              
           <td style="padding-left:30px; position:relative; top:-25px;">
            <v-avatar  color="orange" size="80"> 
            <span class="white--text headline">62</span>
            </v-avatar>
             <span style="padding-left:15px;">Nome Aqui</span>
             <div style="padding-left:15px; padding-top:20px;" >
             <span>Nome:</span><br>
            <v-col cols="12" sm="12" style="padding:10px 0px 0px 0px;">
             <v-text-field
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
     
          <v-flex xs4 offset-xs4 style="text-align:center;"><v-btn small text-center rounded color="#de3d52" dark>
         Salvar
        </v-btn></v-flex>

        
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

 .v-text-field .v-input__control .v-input__slot {
    min-height: auto !important;
    display: flex !important;
    align-items: left !important;
    height: 25px;
  }

</style>