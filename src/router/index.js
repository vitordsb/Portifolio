import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'banner',
      component: () => import("../views/BannerView.vue")
    },
    {
      path: '/habilidades',
      name: 'habilidades',
      component: () => import("../views/HabilidadesView.vue")
    },
    {
      path: '/certificados',
      name: 'certificados',
      component: () => import("../views/CertificadosView.vue")
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: () => import("../views/ProjetosView.vue")
    },
    {
      path: '/todosprojetos',
      name: 'todos-os-projetos',
      component: () => import("../views/AllProjetosView.vue")
    },
  ],
})

export default router
