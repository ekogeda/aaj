import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import auth from "./modules/auth";
import location from "./modules/location";
import rate from "./modules/rate";
import transaction from "./modules/transaction";
import wallet from "./modules/wallet";

import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

const modules = {
  auth: auth,
  location: location,
  rate: rate,
  transaction: transaction,
  wallet: wallet,
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [createPersistedState()],
});
