import Vue from 'vue'
import Vuex from 'vuex'
import catalogue from './module/catalogue'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        catalogue
    },
    strict: debug
})