export const SET_TRANSACTIONS = (state, transact) => {
  state.transactions = transact;
};

export const SET_TRANSACTION = (state, transact) => {
  state.transaction = transact;
};

export const SET_TRACKING = (state, track) => {
  state.tracking = track;
};

export const SET_DRAFT = (state, draftData) => {
  state.draft = draftData;
};
