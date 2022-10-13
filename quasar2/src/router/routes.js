
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/TodoItem.vue') },
      { path: '/help', component: () => import('src/pages/HelpPage.vue') },
      { path: '/ajax', component: () => import('src/pages/AjaxPage.vue') },
      { path: '/sqljs', component: () => import('src/pages/SqlJsPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
