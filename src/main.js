import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
Vue.use(NProgress);

import axios from "axios";
window.axios = axios;

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
Vue.component("vue-phone-number-input", VuePhoneNumberInput);

import VSwitch from "v-switch-case";
Vue.use(VSwitch);

import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

// import VueStepWizard from "vue-step-wizard";
// import "vue-step-wizard/dist/vue-step-wizard.css";
// Vue.use(VueStepWizard);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
