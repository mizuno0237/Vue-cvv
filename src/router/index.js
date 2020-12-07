import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'
Vue.use(Router)

// const createRouter = () => new Router({
//     routes: routes
// })

// const router = createRouter();

// export function resetRouter() {
//     const newRouter = createRouter()
//     router.matcher = newRouter.matcher // reset router
// }

let router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
    if(sessionStorage.getItem('token')) {
        console.log('有token');
        store.commit('setToken', JSON.parse(sessionStorage.getItem('token')));
        next({
            path: '/home'
        });
        next();
    } else {
        console.log('没有token');
        store.commit('setToken', '');
        if (to.path === '/login') { //这就是跳出循环的关键
           next()
        } else {
            next('/login')
        }
    }
})

export default router;