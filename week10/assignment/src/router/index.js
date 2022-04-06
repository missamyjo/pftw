import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home.vue"
import CollectionList from "../views/CollectionList.vue"
import CollectionDetails from "../views/CollectionDetails.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", //default path
      name: "home",
      component: Home
    },
    {
      path: "/collection", //list of pez
      name: "collection",
      component: CollectionList
    },
    {
      path: "/collection/:id", //pez detail
      name: "collection-details",
      component: CollectionDetails
    }
  ]
})

export default router
