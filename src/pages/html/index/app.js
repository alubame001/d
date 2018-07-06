import App from './app.vue';
import Vue from 'vue';
import vTap from 'v-tap';
Vue.use(vTap); //添加vue tap事件


window.apiready = function() {
	console.log("app.js window.apiready")
    new Vue({
        el: '#app',
        render: h => h(App)
    })
}