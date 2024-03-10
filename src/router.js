import { createRouter, createWebHistory } from "vue-router";

import EmployeeDetail from "./pages/employees/EmployeeDetail.vue";
import EmployeesList from "./pages/employees/EmployeesList.vue";
import EmployeeRegistration from "./pages/employees/EmployeeRegistration.vue";
import ContactEmployee from "./pages/requests/ContactEmployee.vue";
import RequestsReceived from "./pages/requests/RequestsReceived.vue";
import NotFound from "./pages/NotFound.vue";
import UserAuth from "./pages/auth/UserAuth.vue";
import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/employees" },
    { path: "/employees", component: EmployeesList },
    {
      path: "/employees/:id",
      component: EmployeeDetail,
      props: true,
      children: [
        { path: "contact", component: ContactEmployee }, // /employees/c1/contact
      ],
    },
    {
      path: "/register",
      component: EmployeeRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: RequestsReceived,
      meta: { requiresAuth: true },
    },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/employees");
  } else {
    next();
  }
});

export default router;
