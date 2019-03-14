import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mensaje from '~/store/app/mensaje'
import auth from '~/store/auth/auth'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        mensaje,
        auth
    },
    strict: debug
})
