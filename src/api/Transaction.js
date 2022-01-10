import Api from "./Api";

const END_POINT = "v1/transaction.php";

export default {
  all(customerId) {
    return Api.get(`${END_POINT}?customer_id=${customerId}`);
  },

  show(data) {
    let isTrack = data.track ? data.track : "";
    return Api.get(`${END_POINT}?waybill_no=${data.waybill}&&track=` + isTrack);
  },

  update(data) {
    return Api.put(`${END_POINT}/${data.id}`, data);
  },

  transact(data) {
    return Api.post(END_POINT, data);
  },
};
