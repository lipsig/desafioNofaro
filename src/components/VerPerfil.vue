<template>
    <v-container>
        <v-layout pb-5>
            <v-btn text icon to="/">
                <v-icon color="#de3d52">mdi-arrow-left-thick</v-icon>
            </v-btn> <span text-left id="labelPerfil">Perfil De {{usuario.name}}</span>
            <v-flex>

            </v-flex>
            <v-flex text-right>
                <v-btn to="/adicionar" text-center rounded color="#de3d52" dark>
                    + Adicionar Perfil
                </v-btn>
            </v-flex>
        </v-layout>

        <v-flex text-left p-10 id="acoes">
            <v-flex text-right>
                <v-btn :to="editarPerfilRota+usuario.id" text icon color="#de3d52">
                    <v-icon>mdi-square-edit-outline</v-icon>
                </v-btn>
                <v-btn @click.stop="dialog=true; excluirid = usuario.id   " icon color="#de3d52">
                    <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
            </v-flex>

            <tbody>
                <td id="conteudo">
                    <v-avatar color="orange" size="80">
                        <img src="../assets/avatar.png" alt="avatar">
                    </v-avatar>
                    <span id="labelUsuario">{{usuario.name}}</span>
                    <div id="informacoes">
                        <span>Nome: {{this.usuario.name}}</span>
                        <br>
                        <span>Email: {{usuario.email}}</span>
                        <br>
                        <span>Data de cadastro: </span><span style="font-size:12px;"> {{usuario.date}}</span>
                    </div>
                </td>
            </tbody>

        </v-flex>
        <v-dialog v-model="dialog" max-width="290">
            <v-card>
                <v-card-title style="text-align:center" class="headline"></v-card-title>
                <v-card-text style="text-align:center">
                    Tem certeza que você deseja
                    <br> excluir esse perfil?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-flex>
                        <v-btn align="left" style="text-align:left;" color="red" dark rounded @click="dialog = false; excluir(excluirid);">
                            Sim
                        </v-btn>
                    </v-flex>
                    <v-flex>
                        <v-btn rounded text @click="dialog = false">
                            Não
                        </v-btn>
                    </v-flex>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-container>
</template>

<script>
    export default {
        props: {
            id: {
                required: true
            },
        },
        mounted() {
            this.$store.dispatch('carregarUsuarios')

            // this.$store.dispatch('addUsuarios')
        },
        created() {
            const usuario = this.$store.getters.getUsuario(this.id)
        },
        data: () => ({
            verPerfilRota: '/verperfil/',
            editarPerfilRota: '/editar/',
            dialog: false,
            excluirid: ''
        }),
        methods: {
            excluir(excluirid) {
                this.$store.dispatch('deletarUsuario', excluirid).then(() => {
                    this.$store.dispatch('carregarUsuarios')
                    this.$router.push('/');
                })
            }
        },
        computed: {
            usuario() {
                console.log(this.$store.getters.getUsuario(this.id));
                return this.$store.getters.getUsuario(this.id)
            }
        }
    }
</script>

<style>
  #labelPerfil{
    padding-top:5px; color:#de3d52;
  }
  #acoes{
    border:red solid 1px;  border-radius: 25px; padding:10px 0px 20% 0px;
  }
  #conteudo{
    padding-left:30px; position:relative; top:-25px;
  }

  #labelUsuario{
    padding-left:15px; font-size:24px; color:#de3d52;
  }

  #informacoes{
    padding-left:15px; padding-top:20px; padding-bottom:20%;
  }
</style>