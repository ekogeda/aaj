import Api from "./Api";

const END_POINT = "v1/location";

export default {
  all() {
    return Api.get(`${END_POINT}/country.php`);
  },

  getState(countryId) {
    return Api.get(`${END_POINT}/state.php?country_id=${countryId}`);
  },

  getCity(stateId) {
    return Api.get(`${END_POINT}/city.php?state_id=${stateId}`);
  },

  getShipment(shipmentType) {
    return Api.get(`${END_POINT}/country.php?shipment_type=${shipmentType}`);
  },
};
