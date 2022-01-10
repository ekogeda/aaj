import Api from "./Api";

const END_POINT = "v1/rate.php";

export default {
  rate(data) {
    return Api.post(END_POINT, data);
  },
};
