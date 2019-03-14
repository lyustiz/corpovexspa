<template>
  <v-app>

    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      
    >
        <!--menu-->
        <v-list>
            
            <v-list-tile
            router
            :to="item.to"
            :key="i"
            v-for="(item, i) in items"
            exact
            >
                <v-list-tile-action>
                    <v-icon v-html="item.icon"></v-icon>
                </v-list-tile-action> 

                <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>

        </v-list>
        
    </v-navigation-drawer>

    <v-toolbar
    :clipped-left="$vuetify.breakpoint.mdAndUp" 
    :color="$App.theme.headPpal" 
    dark 
    fixed 
    app 
    >
        <v-toolbar-title :class="$App.theme.textPpal" v-text="$App.title"></v-toolbar-title>

        <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn> 

        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        
        <v-spacer></v-spacer>

        <v-btn icon >
            <v-icon>help</v-icon>
        </v-btn>

        <v-btn icon >
            <v-icon>notification_important</v-icon>
        </v-btn>

        <v-form @submit.prevent="logout()">
            <v-btn icon type="submit">
                <v-icon >exit_to_app</v-icon>
            </v-btn>
        </v-form>

    </v-toolbar>

    <v-content>
        <v-container fluid>
          

            <router-view></router-view>

        </v-container>
    </v-content>
    
    <pre>{{menuItems}}</pre>
    
    <v-footer :fixed="fixed" app>
        <span>&copy; {{$App.title}}  {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>

</template>

<script>
  export default {
     data () {
        return {
            clipped: true,
            drawer: true,
            fixed: false,
            items: [
                { icon: 'insert_chart', title: 'Inicio', to: '/home' },
                { icon: 'account_balance', title: 'Banco', to: '/banco' }
            ],
            miniVariant: false,
        }
    },
    computed:
    {
        menuItems()
        {
            return 1//this.$router.options.routes
        }

    }
  }

</script>
<style>
  .v-list__tile--active{
    color:#f44336 !important; 
  }
  .v-btn--floating .v-btn__content i {
        padding-top: 10px 
  }
</style>
