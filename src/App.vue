<template>
    <v-app>
        <v-container>
            <v-layout text-center wrap>
                <v-flex xs6 offset-xs3>
                    <v-row align="center" justify="center">
                        <v-img src="./assets/logo.jpg" aspect-ratio="1" class="grey lighten-2" max-width="120" max-height="120">
                        </v-img>
                    </v-row>
                    <router-view>
                    </router-view>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data: () => ({
            //
        }),
    };
</script>
