import Vue from 'vue'

Vue.config.productionTip = false

Vue.prototype.$App = Object.freeze({
    title:    'Corpovex',
    version:  '0.1',
    basePath: '/api/v1/',
    ApiUrl:   '127.0.0.1:8000/api/v1',
    debug:    false,
    theme:{ 
            headPpal:    'red darkness-3',
            textPpal:    'white--text',
            headForm:    'blue',
            textForm:    'white--text',
            headList:    'blue darken-3',
            textList:    'white--text',
            headModal:   'red', 
            textModal:   'white--text',
            }
    })