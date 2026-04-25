import { createRouter, createWebHistory } from "vue-router";

import AddUser from "../views/addUser.vue";
import Users from "../views/users.vue";
import Home from "../views/home.vue";
import NotFound from "../views/notFound.vue";
import UserDetails from "../views/userDetails.vue";
import EditUser from "../views/editUser.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/users", component: Users },
  { path: "/addUser", component: AddUser },
  { path: "/users/:id", component: UserDetails },
  { path: "/users/editUser/:id", component: EditUser },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: {
      hideNav: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
