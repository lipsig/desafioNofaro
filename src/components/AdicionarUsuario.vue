<template>
    <v-container>
        <v-layout pb-5>
          <v-row>
            <v-flex xs12 text-left>
            <v-btn text icon to="/">
                <v-icon color="#de3d52">mdi-arrow-left-thick</v-icon>
            </v-btn> <span text-left id="labelPerfil">Novo Perfil</span>
            </v-flex>
        </v-row>
        </v-layout>

        <v-flex text-left p-10 id="acoes">
            <tbody>
                <td id="menuEdicao">
                    <div id="edicao">
                        <span>Nome:</span>
                        <br>
                        <v-col cols="12" sm="12" class="input">
                            <v-text-field v-model="usuarioNovo.name" single-line solo rounded required dense></v-text-field>
                        </v-col>
                        <span>Email:</span>
                        <br>
                        <v-col cols="12" sm="12" class="input">
                            <v-text-field v-model="usuarioNovo.email" single-line solo rounded required dense></v-text-field>
                        </v-col>
                    </div>
                </td>
            </tbody>

            <v-flex xs4 offset-xs4 style="text-align:center;">
                <v-btn @click="adicionar()" small text-center rounded color="#de3d52" dark>
                    Salvar
                </v-btn>
            </v-flex>
        </v-flex>

        <v-dialog v-model="dialog" max-width="290">
            <v-card>
                <v-card-title style="text-align:center" class="headline"></v-card-title>
                <v-card-text style="text-align:center">
                    Usuario adicionado com sucesso!
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-flex>
                        <v-btn rounded text @click="dialog = false">
                            Fechar
                        </v-btn>
                    </v-flex>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="dialogoerro" max-width="290">
            <v-card>
                <v-card-title style="text-align:center" class="headline"></v-card-title>
                <v-card-text style="text-align:center">
                    Prencha Todos os dados corretamente!
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-flex>
                        <v-btn rounded text @click="dialogoerro = false">
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
        data: () => ({
            usuarioNovo: {
                name: '',
                email: '',
                date: Date()
            },
            dialog: false,
            dialogoerro: false
        }),
        methods: {
            adicionar() {
                if (this.usuarioNovo.name == "" || this.usuarioNovo.email == "") {
                    this.dialogoerro = true
                } else {
                    console.log(this.usuarioNovo)
                    axios.post('http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person', this.usuarioNovo).then(() => {
                        this.dialog = true
                    })
                }
            }
        }
    }
</script>

<style>
  #labelPerfil{
  padding-top:5px; color:#de3d52;
  }
  #acoes{
  border:red solid 1px;  border-radius: 25px; padding:10px 10% 20% 0px; 
  }
  #menuEdicao{
  padding-left:30px; position:relative;
  }
  #edicao{
  padding-left:15px; padding-top:20px;
  }
  .input{
  padding:10px 0px 0px 0px;
  }
</style>