import axios from "axios";
import NProgress from "nprogress";

const Api = axios.create({
  baseURL: "https://www.aajexpress.org/web/public/api",
  // baseURL: "http://localhost/web_app/public/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

const progressFns = () => {
  let progressTimeout,
    count = 0;

  const start = () => {
    count++;

    progressTimeout = setTimeout(() => {
      NProgress.start();
    }, 200);
  };

  const stop = () => {
    count = Math.max(0, count - 1);
    if (count > 0) return;

    NProgress.done();
    clearTimeout(progressTimeout);
  };

  return { start, stop };
};

const { start: progressStart, stop: progressStop } = progressFns();

Api.interceptors.request.use(
  (config) => {
    if (!config.__noProgress) progressStart();

    return config;
  },
  (error) => {
    progressStop();

    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (response) => {
    if (!response.config.__noProgress) progressStop();

    return response;
  },
  (error) => {
    progressStop();

    return Promise.reject(error);
  }
);

export default Api;
