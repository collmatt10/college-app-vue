import Vue from 'vue'
import Vue from 'vue-router'
import Index from'./views/Index'
import Example from'./views/Example'


Vue.use(Router)

export default new Router({
  mode:'history',
  base:process.env.BASE_URL,
  routes:[
    {
      path:'/',
      name:'index',
      components: Index
    },
    {
      path:'/example',
      name:'example',
      component:Example
    }
  ]
})
