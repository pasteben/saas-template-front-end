import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "../store/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: {
      requiresAuth: false,
      headingName: "Home"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/public/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    meta: {
      requiresAuth: true,
      headingName: "About"
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/public/About.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: {
      requiresAuth: false,
      headingName: "Login"
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/public/Login.vue")
  },
  {
    path: "/sign-up",
    name: "sign-up",
    meta: {
      requiresAuth: false,
      headingName: "Sign Up"
    },
    component: () =>
      import(/* webpackChunkName: "test" */ "../views/public/SignUp.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      requiresAuth: true,
      headingName: "Dashboard",
      roles: ["user", "admin"]
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/auth/Dashboard.vue")
  },
  {
    path: "/theme",
    name: "theme",
    meta: {
      requiresAuth: true,
      headingName: "Theme",
      roles: ["admin"]
    },
    component: () =>
      import(/* webpackChunkName: "theme" */ "../views/auth/Theme.vue")
  },
  {
    path: "/settings",
    name: "settings",
    meta: {
      requiresAuth: true,
      headingName: "Settings",
      roles: ["admin"]
    },
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/auth/Settings.vue")
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      requiresAuth: true,
      headingName: "Profile",
      roles: ["admin"]
    },
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/auth/Profile.vue")
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    meta: {
      requiresAuth: false,
      headingName: "Page Not Found"
    },
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/public/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //if you are on a route that does not require auth then dont show the auth nav

    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters["user/isLoggedIn"]) {
      next({
        name: "login"
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
