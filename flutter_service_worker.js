'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7425405dd509f7f5eb38c2ad27816866",
"assets/assets/fonts/manrope.ttf": "980b9f32a3f482b7db688fa8df0488cd",
"assets/assets/fonts/proxima_nova/pn_regular.ttf": "d325c74976d581480f391d444b7216b9",
"assets/assets/fonts/proxima_nova/pn_semibold.ttf": "7bd0a4c62609f996460b4db12000eb5c",
"assets/assets/images/logo.png": "6116156dc0fb2fde2d9900db3314fd33",
"assets/assets/vectors/abusive_icon.svg": "dcd4937cca1eab7418b78bb8d3b3c0a2",
"assets/assets/vectors/account_selected.svg": "0a790f86ed81f76b46ca92b8e0eb8587",
"assets/assets/vectors/account_unselected.svg": "d1fee90ef431b3e30ac8fc0139fcff7a",
"assets/assets/vectors/alerts_selected.svg": "52e75ce9202ad97a372059d6bc5ece6c",
"assets/assets/vectors/alerts_unselected.svg": "376a9c38ff99770af418c488d599a5a2",
"assets/assets/vectors/bell-icon-selected.svg": "6a0e9abc6db3a23cb0c210df3bf6494a",
"assets/assets/vectors/bell-icon.svg": "6e1597fa0d90087a6643e7cd4d44b694",
"assets/assets/vectors/boy-icon.svg": "5246b78524f79ab251fac631d5ef3a9e",
"assets/assets/vectors/chat-stream-icon-selected.svg": "8f61a93db1624914c06cb6d408b7578f",
"assets/assets/vectors/chat_icon.svg": "c409fb435a30827d5c6b9f1a240bb1c6",
"assets/assets/vectors/connection.svg": "6aeddd5b3d044414992f0d7ed483bc2e",
"assets/assets/vectors/conversations.svg": "cb4a3511f1f79fe934cb593846b65ab0",
"assets/assets/vectors/danger.svg": "215c9e2b72b04aa13b263191fe841379",
"assets/assets/vectors/devices_selected.svg": "f23b0c9bb8a547728f0533c6bfe325c7",
"assets/assets/vectors/devices_unselected.svg": "3178fc378602fa70c3cd86c9f1f941c3",
"assets/assets/vectors/device_2.svg": "993df3a827a7ee7aaf1f0cb9b2f106e1",
"assets/assets/vectors/fetching_chat.svg": "a39021fc19c0e1750cb5b984ff4a3788",
"assets/assets/vectors/fetching_data.svg": "ba83cd39a3c68ae8f9507fff7f901724",
"assets/assets/vectors/game-console.svg": "480c64c221d7c8f867759cc2e08608c9",
"assets/assets/vectors/game_console_2.svg": "470639b643571d784c398514ccfc1e42",
"assets/assets/vectors/girl-icon.svg": "0fc7c22777078d6bdc7272f3c1e0f059",
"assets/assets/vectors/home_selected.svg": "a5f061d6cc4022f1307eaf1720503bdd",
"assets/assets/vectors/home_unselected.svg": "30fa02b02a44876d5cf826059efef7df",
"assets/assets/vectors/issues.svg": "ca886be9e9d298e52e1f679c677354f6",
"assets/assets/vectors/logo.svg": "9905e73aa06344cd119ad2f9be7fd15f",
"assets/assets/vectors/mail.svg": "ee9e142e74162ce7053fee3733525a3c",
"assets/assets/vectors/moderate_icon.svg": "5837f3f3ca40c295e17b302f08c32a70",
"assets/assets/vectors/no_data.svg": "583babb8196ab6de263a071b0423b8b5",
"assets/assets/vectors/no_device_icon.svg": "abdacf80bf8546d59cbf16de93257ec8",
"assets/assets/vectors/share.svg": "5026a6364c81cccaeb3ee90b05157326",
"assets/assets/vectors/sliderArrow.svg": "efc92921973646e5bbb92238aba1f9db",
"assets/assets/vectors/stream-icon.svg": "043d5a20d885201c580d99eb49e453d8",
"assets/assets/vectors/warning-icon.svg": "9e71bd58db28d1f4b7ddcdc3e51458f5",
"assets/assets/vectors/warning_icon_plain.svg": "9a8899b2e943379730b885b675e7a8ff",
"assets/FontManifest.json": "d0c366beb8668ba721b55f2e11e86829",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "74941a64787c2893abdd52debfeadc7c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/shaders/ink_sparkle.frag": "70b0640dd8296d672203dc67689399c3",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "da1bb5be430f50213e21cb49a2780306",
"/": "da1bb5be430f50213e21cb49a2780306",
"main.dart.js": "b4926f4b0a157b6056623743cb2c6a6c",
"manifest.json": "f4df9b9d7229205c3eb2ec6bfe589470",
"version.json": "5834378068d0c8700b01e63617ff3e01"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
