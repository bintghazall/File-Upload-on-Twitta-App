import Vue from 'vue'
import Vuex from 'vuex'
import Persons from './modules/persons'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        Persons
    }
})

export default store