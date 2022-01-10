export const SET_USERS = (state, users) => {
  state.users = users;
};

export const SET_USER = (state, user) => {
  state.user = user;
};

export const SET_AUTHENTICATED = (state, authUser) => {
  state.authenticated = authUser;
};

export const SET_AUTH_USER = (state, authUser) => {
  state.user = authUser;
};

export const SET_CURRENT_USER_EMAIL = (state, email) => {
  state.email = email;
};

export const SET_OTP = (state, opt) => {
  state.opt_code = opt;
};

export const SET_PAGINATION = (state, users) => {
  state.users = users;
};

export const SET_USER_ERROR = (state, error) => {
  state.errors = error;
};
