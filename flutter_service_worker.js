'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "f938cfdc865399ce4cb73331e762879c",
"version.json": "9264132b5ddcb3440c52a2eabefb8fd9",
"favicon.ico": "0a132bba0ee30466a65e8a08422e5627",
"index.html": "3b21bd70edea956e4166b9350c916b77",
"/": "3b21bd70edea956e4166b9350c916b77",
"apple-icon.png": "c0254b157d9fa8b7f3fe57d4c6d2bb75",
"apple-icon-144x144.png": "60b355a3560db02cf9b66b408039b6d7",
"android-icon-192x192.png": "ed74c228369814a0ce0de0b1b4966a1e",
"apple-icon-precomposed.png": "c0254b157d9fa8b7f3fe57d4c6d2bb75",
"apple-icon-114x114.png": "9df11583863113d78459abfa6ae9fe7b",
"main.dart.js": "f69dde4c4cc3fbb85e6e0b3d3c6f62e7",
"ms-icon-310x310.png": "bbce0272ad8efa358266021352ef7bb2",
"ms-icon-144x144.png": "60b355a3560db02cf9b66b408039b6d7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"apple-icon-57x57.png": "375897ceb29fc5aea78d1b18d258441e",
"apple-icon-152x152.png": "e9f8e5366de94e7a7d0a4b0a0e936d10",
"ms-icon-150x150.png": "283767f835f82edb5fc65167a2c552fc",
"android-icon-72x72.png": "1f9f858f65427d292caa6e8fda31a18f",
"android-icon-96x96.png": "859faff5bb7c3709f30d8dd67b49cd81",
"android-icon-36x36.png": "ce4ca13114a0c2cfe6fb6219e5e85654",
"apple-icon-180x180.png": "804037cfbf2add7a197b791ae7f0c8c2",
"favicon-96x96.png": "859faff5bb7c3709f30d8dd67b49cd81",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"android-icon-48x48.png": "0c941ccde780e176eec682f028904399",
"apple-icon-76x76.png": "a16d817233bf48bc6f8385b51fef858d",
"apple-icon-60x60.png": "034320f26cc1f5c4f5e692a681e7bc28",
"assets/AssetManifest.json": "36fac9f56414d02c6e00328caf3f05b2",
"assets/NOTICES": "9dd9f53f6110bed5f01e96bd8d3fedd5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "05e0616d6f5b53f9ffcd02e33916b27a",
"assets/fonts/MaterialIcons-Regular.otf": "3895b881d466653636dbf9611945f6f4",
"assets/assets/images/home/home_title_bg_light_spots.png": "597b38f3a90c309925f3e30f7219222b",
"assets/assets/images/home/section_1/slide_0.png": "58ee47a5f6cfb5b60e34cc47284b29b4",
"assets/assets/images/home/section_1/slide_1.png": "d09974b2a28bdd3eccd3db84813f6049",
"assets/assets/images/home/section_1/slide_2.png": "6cd3ab9926e03c3acbe01c0abd3ba5ca",
"assets/assets/images/home/home_title_bg.svg": "82483a5a5e9a7651b5ebeac738dc01fb",
"assets/assets/images/home/section_2/tab_0.png": "bb3ca76663459fb6babb8a2119920881",
"assets/assets/images/home/section_2/tab_1.png": "19e3d16768c7c90142677fd777452d12",
"assets/assets/images/home/section_2/tab_2.png": "65f9f12fde51d5042beba968d832b790",
"assets/assets/images/home/home_title.svg": "f7de8fcdf35e743ea16ff03e1b702d08",
"assets/assets/icons/quickpay_yellow_hourglass.svg": "196d009ef5c327f6b01b9242c809add5",
"assets/assets/icons/quickpay_icon.svg": "9ccfb96a382b6a35ac3c8f68203f615c",
"assets/assets/icons/section_2_underline.svg": "342e88fe870f1cdabb7482a94b460480",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"android-icon-144x144.png": "60b355a3560db02cf9b66b408039b6d7",
"apple-icon-72x72.png": "1f9f858f65427d292caa6e8fda31a18f",
"apple-icon-120x120.png": "3dcc3f06aec3da5c8baff2c95946dd01",
"favicon-32x32.png": "832c3500758a4196d18319b5f00685ad",
"ms-icon-70x70.png": "a7da413bcaf34fc102e96410cb07aba5",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
