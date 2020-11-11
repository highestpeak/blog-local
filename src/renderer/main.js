import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
// https://github.com/julienr114/vue-calendar-heatmap
import 'vue-calendar-heatmap/dist/vue-calendar-heatmap.css'
import { CalendarHeatmap } from 'vue-calendar-heatmap/dist/vue-calendar-heatmap.common'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import fontawesome
/*
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/vue-fontawesome
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
*/
/*
// https://github.com/FortAwesome/vue-fontawesome
// 使用librabry可以减少最终打包的图标数量，并且可以命名别名，在更改的时候更为方便
// 下面这个连接说明了多种类别的图标的用法
// https://github.com/FortAwesome/vue-fontawesome#import-the-same-icon-from-different-styles
*/
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faHome, faSearch, faPlus, faCheck, faPlay, faPause, faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  faAngleDoubleLeft, faPlus, faTrash, faListUl, faSearch, faCogs, faBook,
  faTag, faImage, faCode, faFolder, faHome, faCalendarAlt, faList, faInfo,
  faStream, faTable
} from '@fortawesome/free-solid-svg-icons'
// import { faMarkdown, faAppStore } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

// free-solid-svg-icons
// library.add(faHome, faSearch, faPlus, faCheck, faPlay, faPause, faTimes)
// free-brands-svg-icons
// library.add(faMarkdown, faAppStore)
// free-regular-svg-icons
library.add(
  faAngleDoubleLeft, faPlus, faTrash, faListUl, faSearch, faCogs, faBook,
  faTag, faImage, faCode, faFolder, faHome, faCalendarAlt, faList, faInfo,
  faStream, faTable
)
library.add(faFile)
// vue-fontawesome
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)

Vue.component('vue-calendar-heatmap', CalendarHeatmap)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
