<template>
  <v-app class="back">
    <v-content>
      <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm6>
                        <v-form ref="form">
                            <v-card class="elevation-12">
                            
                            <v-img :src="img"></v-img>

                            <v-card-text>

                                <v-text-field
                                    prepend-icon="person"
                                    name="nb_usuario"
                                    label="Usuario"
                                    type="text"
                                    v-model="form.nb_usuario" >
                                </v-text-field>

                                <v-text-field
                                    :append-icon="mostrar ? 'visibility_off' : 'visibility'"
                                    :type="mostrar ? 'text' : 'password'"
                                    @click:append="mostrar = !mostrar"
                                    prepend-icon="lock"
                                    name="password"
                                    label="Contraseña"
                                    id="password"
                                    v-model="form.password">
                                </v-text-field>

                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn :loadin="loading" dark color="red" @click="login()" >Ingresar </v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>

                        </v-card>
                    </v-form>
                </v-flex>
            </v-layout>
    </v-container>
    </v-content>
</v-app>

</template>
<script>

module.exports = {
    data()
    {
        return{
            loading: false,
            form:
            {
                nb_usuario:null,
                password:null
            },
            mostrar: false,
            img: require('~/static/portada.png'),
        }

    },
    methods:{
        login()
        {

            if (this.$refs.form.validate()) 
            {
                this.loading = true

                this.$store.dispatch('login', this.form)
                .then(response => 
                {
                   this.$router.push({ path: 'home' })
                })
                .catch(error => 
                {
                    this.showError(error);
                })
            }

        }
    }

}
</script>
