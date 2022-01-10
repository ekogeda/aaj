self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.setConfig({ debug: true });
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

const cacheName = "aajExpress-v1";
const filesToCache = "index.html";
const QUEUE_NAME = "bgSyncQueue";

self.addEventListener("install", function (event) {
  // Perform install steps
  console.log("[Servicework] Install");
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("[ServiceWorker] Caching app shell ", cacheName);
      return cache.add(filesToCache);
    })
  );
});

self.addEventListener("activate", function (event) {
  console.log("[Servicework] Activate");
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== cacheName) {
            console.log("[ServiceWorker] Removing old cache shell ", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResp = await event.preloadResponse;

          if (preloadResp) {
            return preloadResp;
          }

          const networkResp = await fetch(event.request);
          return networkResp;
        } catch (error) {
          const cache = await caches.open(cacheName);
          const cachedResp = await cache.match(filesToCache);
          return cachedResp;
        }
      })()
    );
  }
});

self.addEventListener("message", (event) => {
  if (
    (event.data && event.data.type === "SKIP_WAITING") ||
    event.data.action == "skipWaiting"
  ) {
    self.skipWaiting();
  }
});

// // fetch event
// self.addEventListener("fetch", (event) => {
//   // check if request is made by chrome extensions or web page
//   // if request is made for web page url must contains http.
//   if (!(event.request.url.indexOf("http") === 0)) return; // skip the request. if request is not made with http protocol

//   event.respondWith(
//     caches
//       .match(event.request)
//       .then(
//         (cacheRes) =>
//           cacheRes ||
//           fetch(event.request).then((fetchRes) =>
//             caches.open(cacheName).then((cache) => {
//               if (
//                 new RegExp("^(?:[a-z]+:)?//", "i").test(
//                   new URL(evt.request.url).protocol
//                 )
//               )
//                 return;
//               cache.put(event.request.url, fetchRes.clone());
//               // check cached items size
//               limitCacheSize(cacheName, 75);
//               return fetchRes;
//             })
//           )
//       )
//       .catch(() => caches.match("/fallback"))
//   );
// });

// // cache size limit function
// const limitCacheSize = (name, size) => {
//   caches.open(name).then((cache) => {
//     cache.keys().then((keys) => {
//       if (keys.length > size) {
//         cache.delete(keys[0]).then(limitCacheSize(name, size));
//       }
//     });
//   });
// };

// self.addEventListener("fetch", function (event) {
//   console.log("[ServiceWorker] Fetch");
//   if (event.request.url.match("^.*(/web/).*$")) {
//     return false;
//   }

//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       return (
//         response ||
//         fetch(event.request).then((response) => {
//           return caches.open(cacheName).then((cache) => {
//             if (!/^https?:$/i.test(new URL(request.url).protocol)) return;
//             cache.put(event.request, response.clone());
//             return response;
//           });
//         })
//       );
//     })
//   );
// });

let click_open_url;
self.addEventListener("push", function (event) {
  click_open_url = "https://aajexpress.org";

  let push_message =
    "Fast, secure, affordable and reliable cargo/haulage company in Lagos.";

  const options = {
    body: push_message,
    icon: "./img/logo.82b9c7a5.png",
    // image: "./img/logo.82b9c7a5.png",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: "alert",
    data: {
      time: new Date(Date.now()).toString(),
    },
  };
  event.waitUntil(
    self.registration.showNotification("AAJ Express Logistics", options)
  );
});

self.addEventListener("notificationclick", function (event) {
  const clickedNotification = event.notification;
  clickedNotification.close();
  if (click_open_url) {
    const promiseChain = clients.openWindow(click_open_url);
    event.waitUntil(promiseChain);
  }
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

const bgSyncPlugin = new workbox.backgroundSync.Plugin(QUEUE_NAME, {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
  new RegExp("/*"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: cacheName,
    plugins: [bgSyncPlugin],
  })
);

workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
  new workbox.strategies.CacheFirst({
    cacheName: "googleapis",
    plugins: [new workbox.expiration.Plugin({ maxEntries: 60 })],
    method: "GET",
    cacheableResponse: { statuses: [0, 200] },
  })
);
