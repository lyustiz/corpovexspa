<template>
    
    <v-container fluid grid-list-md text-xs-center>
            
            <v-layout row justify-center>

                <v-flex xs12>
                        
                        <v-card>
                            
                            <v-toolbar :class="HeadColor" dark>
                                
                                <h2>{{titulo}}</h2>
                                
                                <v-spacer></v-spacer>

                                <slot name="HeadTools"></slot>
                                
                            </v-toolbar>

                            <v-card-text>
                                <slot></slot>
                            </v-card-text>

                            <v-card-actions>
                                <slot name="buttons"></slot>
                            </v-card-actions>
                        
                        </v-card>

                </v-flex>

            </v-layout>
        
    </v-container>      
    
</template>

<script>
export default {
    name: 'list-container',
    props:['titulo', 'ayuda', 'HeadColor', 'TextColor' ],
}
</script>
