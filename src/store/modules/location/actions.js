import Location from "../../../api/Location";

export const getCountries = ({ commit }) => {
  Location.all()
    .then((response) => {
      commit("SET_COUNTRIES", response.data);
    })
    .catch((error) => console.log(error));
};

export const getShipmentType = ({ commit }, params) => {
  Location.getShipment(params)
    .then((response) => {
      commit("SET_SHIPMENT", response.data.data);
    })
    .catch((error) => console.log(error));
};

export const getStates = ({ commit }, params) => {
  let countryId = params[0];
  Location.getState(countryId)
    .then((response) => {
      if (params[1] == "origin") {
        commit("SET_STATE", response.data);
      } else {
        commit("SET_DEST_STATE", response.data);
      }
    })
    .catch((error) => console.log(error));
};

export const getCities = ({ commit }, params) => {
  let stateId = params[0];
  Location.getCity(stateId)
    .then((response) => {
      if (params[1] == "origin") {
        commit("SET_CITY", response.data);
      } else {
        commit("SET_DEST_CITY", response.data);
      }
    })
    .catch((error) => console.log(error));
};
