import Vue from 'vue'
import Router from 'vue-router'
import { defineComponent } from '@nuxtjs/composition-api'
import { RouteConfig } from '@nuxt/types/config/router'

export const HOME = { name: 'home' }
export const FICHES_LIST = { name: 'fiches/list' }
export const FICHES_SHOW = { name: 'fiches/show' }
export const STRUCTURES_LIST = { name: 'structures/list' }
export const STRUCTURES_SHOW = { name: 'structures/show' }

const emptyPage = defineComponent({
  render: () => null as any,
})

const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'

function isESModule(obj: any) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

export const routes: RouteConfig[] = [
  {
    ...HOME,
    path: '/',
    component: () => import('./pages/Home.vue').then((comp) => {
      // console.log(isESModule(comp), comp)
      // debugger
      return comp.default
    }),
  },
  {

    path: '/foo',
    component: () => import('./pages/Home.vue').then((comp) => {
      // console.log(isESModule(comp), comp)
      // debugger
      return comp
    }),
  },
  // { name: 'about', path: '/about', component: () => import('./pages/About.vue') },
  // { ...FICHES_LIST, path: '/fiches', component: () => import('./pages/ShowFiche.vue') },
  // { ...FICHES_SHOW, path: '/fiches/:id', component: () => import('./pages/ShowFiche.vue') },
  // { ...STRUCTURES_LIST, path: '/structures', component: emptyPage },
  // { ...STRUCTURES_SHOW, path: '/structures/:id', component: emptyPage },
]

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes,
  })
}
