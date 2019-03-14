/* Components that are registered globaly.
import Vue from 'vue'
[
    Card,
    Child,
    Button,
    Checkbox,
    HasError,
    AlertError,
    AlertSuccess
  ].forEach(Component => {
    Vue.component(Component.name, Component)
  })
  
  */
import Vue    from 'vue';

import ListButtons    from './list/ListButtons'
import AddButton      from './list/AddButton.vue'
import ListContainer  from './list/ListContainer.vue'

import FormContainer  from './form/FormContainer.vue'
import FormButtons    from './form/FormButtons.vue'

import AppMensaje     from './app/AppMensaje.vue'
import AppModal       from './app/AppModal.vue'
import AppDialogo     from './app/AppDialogo.vue'


Vue.component('list-buttons',       ListButtons);
Vue.component('add-button',         AddButton);
Vue.component('list-container',     ListContainer);

Vue.component('form-buttons',       FormButtons);
Vue.component('form-container',     FormContainer);


Vue.component('app-mensaje',        AppMensaje);
Vue.component('app-modal',          AppModal);
Vue.component('app-dialogo',        AppDialogo);
