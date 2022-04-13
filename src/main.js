/** 
 * Main JavaScript file that imports dependencies
 * (i.e. Vue, Vue Router, Sass-processed CSS styles, Font Awesome icons),
 * and mounts Vue app to element with ID app in public/index.html
*/
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/sass/styles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilePen, faPeopleGroup, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFilePen, faPeopleGroup, faUpRightFromSquare)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
