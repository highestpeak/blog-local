import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

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
import { faAngleDoubleLeft, faPlus, faTrash, faListUl, faSearch, faCogs, faBook, faTag, faImage, faCode, faFolder, faHome } from '@fortawesome/free-solid-svg-icons'
// import { faMarkdown, faAppStore } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

// free-solid-svg-icons
// library.add(faHome, faSearch, faPlus, faCheck, faPlay, faPause, faTimes)
// free-brands-svg-icons
// library.add(faMarkdown, faAppStore)
// free-regular-svg-icons
library.add(faAngleDoubleLeft, faPlus, faTrash, faListUl, faSearch, faCogs, faBook, faTag, faImage, faCode, faFolder, faHome)
library.add(faFile)
// vue-fontawesome
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)

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
