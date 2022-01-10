import Api from "./Api";

const END_POINT = "v1/wallet.php";

export default {
  // all(wId) {
  //   return Api.get(`${END_POINT}?wallet_id=${wId}`);
  // },

  show(cId) {
    return Api.get(`${END_POINT}?customer_id=${cId}`);
  },

  update(data) {
    return Api.post(`${END_POINT}`, data);
  },

  store(data) {
    return Api.post(END_POINT, data);
  },
};
