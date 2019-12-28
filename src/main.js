import Vue from 'vue'
import VueResource from 'vue-resource'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'


Vue.use(VueResource)
Vue.use(NavbarPlugin)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')