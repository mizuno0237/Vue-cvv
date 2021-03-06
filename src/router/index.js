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
    routes: routes
});


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


router.beforeEach((to, from, next) => {
    if(sessionStorage.getItem('token')) {
        console.log('have token');
        store.commit('setToken', sessionStorage.getItem('token'));
        store.commit('changeLoginStatus', true);
        if (next.path === '/login') {
            next('/home')
        } else {
            next()
        }
    } else {
        console.log('no token');
        store.commit('setToken', '');
        if (to.path === '/login') {
           next()
        } else {
            next('/login')
        }
    }
});

export default router;