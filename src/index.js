// 入口文件
import Vue from 'vue'
import App  from './app.vue'
import './assets/style/test.css'
import './assets/images/liyin.jpg'
import './assets/style/test.stylus.styl'
// const root = document.createElement('div')
// document.body.appendChild(root)
new Vue({
  el: '#app',
  render: (h) => h(App),
  components: {
    App
  }
})
// .$mount(root)