const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'teams', component: () => import('src/pages/TeamsPage.vue') },
      { path: 'players', component: () => import('src/pages/PlayersPage.vue') },
      { path: 'game', component: () => import('pages/GamePage.vue') }
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
