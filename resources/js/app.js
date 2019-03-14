import Vue      from 'vue';
import Vuetify  from 'vuetify';
import router   from './router'
import store    from './store'

Vue.use(Vuetify);

/** Layout  **/
import App from '~/layouts/App.vue'
Vue.component('app', App)

/** Globals **/
import './config'
import '~/plugins'
import '~/components'
import '~/mixins'


router.beforeEach((to, from, next) => {

    if(to.name != 'login' && !store.getters.logged)
    {
        next('/')
    }
    else if(to.name == 'login' && store.getters.logged)
    {
        next('/home')
    }
    else{
        next()
    }
})
/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    store,
    router
});


/**
 * 
 * 
 * 
 * 
 * 
 * const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(s
      // Strip the leading `./` and extension from the filename
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})
 */
