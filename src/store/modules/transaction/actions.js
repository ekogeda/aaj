import Transaction from "@/api/Transaction";
import router from "@/router";

export const getTransactions = ({ commit }, customerId) => {
  Transaction.all(customerId)
    .then((response) => {
      commit("SET_TRANSACTIONS", response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSingleTransaction = ({ commit }, waybillNo) => {
  Transaction.show(waybillNo)
    .then((response) => {
      if (response.data.data.status) {
        commit("SET_TRACKING", response.data.data);
      } else {
        commit("SET_TRANSACTION", response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const makeTransaction = ({ commit, dispatch }, formData) => {
  Transaction.transact(formData)
    .then((response) => {
      commit("SET_TRANSACTION", response.data);
      router.push({ name: "user.order" });
      dispatch(
        "addNotification",
        { type: "success", message: `${response.data.data} 😊`, count: 0 },
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
            message: `${error.response.data.errors} `,
            count: 0,
          },
          { root: true }
        );
      }
    });
};

export const saveDraft = ({ commit }, draftData) => {
  commit("SET_DRAFT", draftData);
};
