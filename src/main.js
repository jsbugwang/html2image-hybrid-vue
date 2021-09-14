import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import VConsole from 'vconsole'

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')

if (process.env.NODE_ENV === 'production') {
  console.log(new VConsole())
}
