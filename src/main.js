import Vue from 'vue'
import App from './App'
import router from './router'
import VueMarkdown from 'vue-markdown'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueQuillEditor from 'vue-quill-editor'
import IEcharts from 'vue-echarts-v3';

Vue.use(iView)
Vue.use(VueMarkdown)
Vue.use(IEcharts)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    VueMarkdown,
    template: '<App/>',
    components: { App }
})
