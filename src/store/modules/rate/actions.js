import Rate from "../../../api/Rate";
// import router from "../../../router";

export const getRate = ({ commit, dispatch }, formData) => {
  Rate.rate(formData)
    .then((response) => {
      commit("SET_RATE", response.data);
      // router.push({ name: "user.rate" });
    })
    .catch((error) => {
      console.log(error);
      if (error.response.status == 422 || error.response.status == 404) {
        commit("SET_RATE", null);
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
