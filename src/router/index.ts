import { useBlockchain } from "@/stores";
import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import { setupLayouts } from "virtual:generated-layouts";
// @ts-ignore
import routes from "~pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
    },
    ...setupLayouts(routes)
  ],
});

// Update current blockchain
router.beforeEach((to) => {
    const blockchain = useBlockchain();
    blockchain.setCurrent('cosmos');
});

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

export default router;