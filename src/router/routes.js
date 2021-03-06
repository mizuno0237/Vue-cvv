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
    path: '/event',
    name: 'event',
    component: resolve => require(['../views/event'], resolve),
    meta: { title: 'event', noCache: true }
},
{
    path: '/inventory',
    name: 'inventory',
    component: resolve => require(['../views/inventory'], resolve),
    meta: { title: 'inventory', noCache: true }
},
{
    path: '/virmedia',
    name: 'virmedia',
    component: resolve => require(['../views/virmedia'], resolve),
    meta: { title: 'virmedia', noCache: true }
},
{
    path: '/fm-update',
    name: 'fm-update',
    component: resolve => require(['../views/fm-update'], resolve),
    meta: { title: 'fm-update', noCache: true }
},
{
    path: '/remote',
    name: 'remote',
    component: resolve => require(['../views/remote'], resolve),
    meta: { title: 'remote', noCache: true }
},
{
    path: '/security',
    name: 'security',
    component: resolve => require(['../views/security'], resolve),
    meta: { title: 'security', noCache: true }
},
{
    path: '/network',
    name: 'network',
    component: resolve => require(['../views/network'], resolve),
    meta: { title: 'network', noCache: true }
},
{
    path: '/license',
    name: 'license',
    component: resolve => require(['../views/license'], resolve),
    meta: { title: 'license', noCache: true }
},
{ 
    path: '*',
    redirect: '/home'
}]
export default routes;