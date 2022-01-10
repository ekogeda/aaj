import Wallet from "@/api/Wallet";
import router from "@/router";

// export const getWallets = ({ commit }, customerId) => {
//   Wallet.all(customerId)
//     .then((response) => {
//       commit("SET_WALLETS", response.data.details);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const getWallet = ({ commit }, cId) => {
  Wallet.show(cId)
    .then((response) => {
      commit("SET_WALLET", {
        data: response.data.data,
        total: response.data.total,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateWallet = ({ commit, dispatch }, payload) => {
  Wallet.update(payload)
    .then((response) => {
      commit("SET_WALLET", response.data.data);
      router.push({ name: "user.wallet" });
      dispatch(
        "addNotification",
        { type: "success", message: `${response.data.message} 😊`, count: 0 },
        { root: true }
      );
    })
    .catch((error) => {
      console.log(error);
      if (
        error.response.status == 401 ||
        error.response.status == 422 ||
        error.response.status == 404
      ) {
        dispatch(
          "addNotification",
          {
            type: "danger",
            message: `${error.response.data.errors} 😞`,
            count: 0,
          },
          { root: true }
        );
      }
    });
};
