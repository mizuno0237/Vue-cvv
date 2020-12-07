// 路由配置
let routes = [{
    path: '/',
    name: 'home',
    component: () => import('../components/home')
},
{
    path: '/login',
    component: () => import('../components/login')
},
{ 
    path: '*',
    redirect: '/home'
}]
export default routes;