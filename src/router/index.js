import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import store from "@/store";

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue");

const User = () => import(/* webpackChunkName: "user" */ "@/views/User.vue");

const UserDashboard = () =>
  import(
    /* webpackChunkName: "dashboard" */ "@/components/Users/Dashboard.vue"
  );

const CustomerTransaction = () =>
  import(
    /* webpackChunkName: "customer-transaction" */ "@/components/Users/Activities/Transaction.vue"
  );

const GetRate = () =>
  import(
    /* webpackChunkName: "rate" */ "@/components/Users/Activities/Rate.vue"
  );

const UserOrder = () =>
  import(/* webpackChunkName: "order" */ "@/components/Users/Order.vue");

const CustomerWallet = () =>
  import(
    /* webpackChunkName: "customer-wallet" */ "@/components/Users/Activities/Wallet.vue"
  );

const TopUpWallet = () =>
  import(
    /* webpackChunkName: "top-up-wallet" */ "@/components/Users/Activities/TopUpWallet.vue"
  );

const UserLogin = () =>
  import(/* webpackChunkName: "login" */ "@/components/Auth/Login.vue");

const Signup = () =>
  import(/* webpackChunkName: "signup" */ "@/components/Auth/Signup.vue");

const ForgotPassword = () =>
  import(
    /* webpackChunkName: "forgot-password" */ "@/components/Auth/ForgotPassword.vue"
  );

const ResetPassword = () =>
  import(
    /* webpackChunkName: "reset-password" */ "@/components/Auth/ResetPassword.vue"
  );

const VerifyAccount = () =>
  import(
    /* webpackChunkName: "verify-account" */ "@/components/Auth/VerifyAccount.vue"
  );

const UserProfile = () =>
  import(/* webpackChunkName: "profile" */ "@/components/Users/Profile.vue");

const OrderTrack = () =>
  import(
    /* webpackChunkName: "track" */ "@/components/Users/Activities/Track.vue"
  );

const UserSetting = () =>
  import(/* webpackChunkName: "setting" */ "@/components/Users/Setting.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "AAJExpress | Trusted Logistics Service Provider",
      metaTags: [
        {
          name: "description",
          content: "The home page of AAJExpress.",
        },
        {
          property: "og:description",
          content: "The home page of AAJExpress.",
        },
      ],
      // progress: {
      //   func: [
      //     { call: "color", modifier: "temp", argument: "#86c228ff" },
      //     { call: "fail", modifier: "temp", argument: "#6e0000" },
      //     { call: "location", modifier: "temp", argument: "top" },
      //     {
      //       call: "transition",
      //       modifier: "temp",
      //       argument: { speed: "1.5s", opacity: "0.6s", termination: 400 },
      //     },
      //   ],
      // },
    },
  },

  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {
      // guestAuth: true,
      title: "Signup | AAJExpress",
      transitionName: "fade",
      metaTags: [
        {
          name: "description",
          content: "The signup page of AAJExpress.",
        },
        {
          property: "og:description",
          content: "The signup page of AAJExpress.",
        },
      ],
    },
  },

  {
    path: "/login",
    name: "Login",
    component: UserLogin,
    meta: {
      title: "Login | AAJExpress",
      transitionName: "fade",
      metaTags: [
        {
          name: "description",
          content: "The login page of AAJExpress.",
        },
        {
          property: "og:description",
          content: "The login page of AAJExpress.",
        },
      ],
    },
  },

  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password | AAJExpress",
      transitionName: "slide",
      metaTags: [
        {
          name: "description",
          content: "The forgot password page of AAJExpress.",
        },
        {
          property: "og:description",
          content: "The forgot password page of AAJExpress.",
        },
      ],
    },
  },

  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
    meta: {
      title: "Reset Password | AAJExpress",
      transitionName: "slide",
      metaTags: [
        {
          name: "description",
          content: "The reset password page of AAJExpress.",
        },
        {
          property: "og:description",
          content: "The reset password page of AAJExpress.",
        },
      ],
    },
  },

  {
    path: "/verify-account",
    name: "VerifyAccount",
    component: VerifyAccount,
    meta: {
      title: "Verify Account | AAJExpress",
      transitionName: "slide",
      metaTags: [
        {
          name: "description",
          content: "The account verification page of AAJExpress.",
        },
        {
          property: "og:description",
          content: "The account verification page of AAJExpress.",
        },
      ],
    },
  },

  {
    path: "/track",
    name: "Track",
    component: OrderTrack,
    meta: {
      title: "Track | AAJExpress",
      transitionName: "fade",
      metaTags: [
        {
          name: "description",
          content: "The tracking page of AAJExpress.",
        },
        {
          property: "og:description",
          content: "The tracking page of AAJExpress.",
        },
      ],
    },
  },

  {
    path: "/user",
    component: User,
    async beforeEnter(to, from, next) {
      try {
        let hasPermission = await store.getters["auth/authenticated"];
        if (hasPermission) {
          next();
        } else {
          next({
            name: "Registration",
            query: { redirectFrom: to.fullPath },
          });
        }
      } catch (error) {
        next({
          name: "Registration",
          query: { redirectFrom: to.fullPath },
        });
      }
    },
    meta: {
      title: "User - AAJExpress",
      transitionName: "fade",
    },
    children: [
      {
        path: "",
        name: "user.dashboard",
        component: UserDashboard,
        meta: {
          title: "User | Dashboard - AAJExpress",
          transitionName: "fade",
        },
      },
      {
        path: "transaction",
        name: "user.transaction",
        component: CustomerTransaction,
        // props: true,
        meta: {
          title: "Transaction | AAJExpress",
          transitionName: "fade",
          metaTags: [
            {
              name: "description",
              content: "The transaction's page of AAJExpress.",
            },
            {
              property: "og:description",
              content: "The transaction's page of AAJExpress.",
            },
          ],
        },
      },
      {
        path: "rate",
        name: "user.rate",
        component: GetRate,
        meta: {
          title: "Rate | AAJExpress",
          transitionName: "fade",
          metaTags: [
            {
              name: "description",
              content: "The rate's page of AAJExpress.",
            },
            {
              property: "og:description",
              content: "The rate's page of AAJExpress.",
            },
          ],
        },
      },
      {
        path: "order",
        name: "user.order",
        component: UserOrder,
        meta: {
          title: "Order | AAJExpress",
          transitionName: "fade",
          metaTags: [
            {
              name: "description",
              content: "The order's page of AAJExpress.",
            },
            {
              property: "og:description",
              content: "The order's page of AAJExpress.",
            },
          ],
        },
      },
      {
        path: "wallet",
        name: "user.wallet",
        component: CustomerWallet,
        meta: {
          title: "Wallet | AAJExpress",
          transitionName: "fade",
          metaTags: [
            {
              name: "description",
              content: "The wallet's page of AAJExpress.",
            },
            {
              property: "og:description",
              content: "The wallet's page of AAJExpress.",
            },
          ],
        },
      },
      {
        path: "topupwallet",
        name: "user.topupwallet",
        component: TopUpWallet,
        meta: {
          title: "Top Up Wallet | AAJExpress",
          transitionName: "fade",
          metaTags: [
            {
              name: "description",
              content: "The top up wallet's page of AAJExpress.",
            },
            {
              property: "og:description",
              content: "The top up wallet's page of AAJExpress.",
            },
          ],
        },
      },
      {
        path: "profile",
        name: "user.profile",
        component: UserProfile,
        meta: {
          title: "Profile | AAJExpress",
          transitionName: "fade",
          metaTags: [
            {
              name: "description",
              content: "The profile's page of AAJExpress.",
            },
            {
              property: "og:description",
              content: "The profile's page of AAJExpress.",
            },
          ],
        },
      },
      {
        path: "setting",
        name: "user.setting",
        component: UserSetting,
        meta: {
          title: "Setting | AAJExpress",
          transitionName: "fade",
          metaTags: [
            {
              name: "description",
              content: "The setting's page of AAJExpress.",
            },
            {
              property: "og:description",
              content: "The setting's page of AAJExpress.",
            },
          ],
        },
      },
    ],
  },

  {
    path: "*",
    component: () => import("@/components/404.vue"),
    meta: {
      title: "Error 404 | AAJExpress",
      transitionName: "zoom",
      metaTags: [
        {
          name: "description",
          content: "The error 404 page of AAJExpress.",
        },
        {
          property: "og:description",
          content: "The error 404 page of AAJExpress.",
        },
      ],
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        savedPosition,
        // selector: to.hash,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  /* ---------------------------------------------//? SEO Friendly META -------------------------------------------- */

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  // if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
