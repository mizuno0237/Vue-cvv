// 路由配置
let routes = [{
    path: '/home',
    name: 'home',
    component: resolve => require(['../views/home'], resolve),
    meta: { title: 'home', noCache: true }
},
{
    path: '/login',
    name: 'login',
    component: resolve => require(['../views/login'], resolve),
    meta: { title: 'login', noCache: true }
},
{ 
    path: '*',
    redirect: '/home'
}]
export default routes;