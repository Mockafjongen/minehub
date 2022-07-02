'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e001f7d00de5e33d6c95a5ed9253b1b6",
".git/config": "72388c9c1589beab32b84a0347c31dc4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "409f608172a6743a85b85af914958b4a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "ccad1ff25f33f925d957901af0216bd4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cd688e359d2a159e701a890d27508475",
".git/logs/refs/heads/master": "cd688e359d2a159e701a890d27508475",
".git/logs/refs/remotes/origin/master": "d17a38e5abe274a700ab59884f678325",
".git/objects/10/787ccb0e75faa62f0db8d040d969fc3210bf3d": "14f5347c10050252d8b6a439a55a284a",
".git/objects/15/f9604e5025b6a48b4a1566abbd830d27c3ce4b": "cd455f0202f0ad98cb62003c450e9785",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/1f/d7a1659126799312068f55bd3e5c0cd884bd8c": "dd7d68f730463290d836e0647999d75d",
".git/objects/29/a34beb903bd280a49a6449b1a7804c7cc8b232": "e3d370c36bc3e802739c3471f81105bf",
".git/objects/29/dba53ffea7d6b3bdce13322dff799d31dbdedf": "d75e3c2668101b88a92702a1372c14e8",
".git/objects/3f/03d98789bf6f8dc1826a336526fd938da0049a": "3df11c3cf49bbbebc060bcf9c6a72a69",
".git/objects/42/69eb8365b3d38bdd8d8e04aa00ceab8059e490": "8dfeaa635c15076d09e6d0226a51ef4c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/8352d827c5c4dd555d3b9ed903e6d70c72a3c3": "ea2f43323e74c94515aa0696ce21969a",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/69/b294663578a53431abd3391b96ee8d9a5e197a": "2316f1ff26c5767790f5ab8dafa8fecc",
".git/objects/70/18325aaf2da444aa1c789e929241d3321ecab2": "b5ef00fd689b4f02907a287306aacdd6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/7f/10dfa304143039e175975a3e9ab754391e0c07": "b24f8ee00bdd8755743865385d35ca8e",
".git/objects/89/911f6ba8dfb8498256d137d7eec375cffca5ed": "307aa2214e80831e2ffd81cda3123698",
".git/objects/97/a379cb6afbf41ee8ce9d6e32636b62c677eb69": "d8177e2d498aa9c8b14b62c20ceec685",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b4/ffeb7398201f3921fbe6adae59efcab2529949": "216e85280f5e458b195652669a256058",
".git/objects/ba/ab1154ec3e764a94b3915de81efd65656eecdd": "31887bc552b921e7ba2d5b93550b9d15",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c3/f4671cd3f3ca83e38040a56b4827afda5f39f1": "d8f922a3786ac141cdbea1c7745968ff",
".git/objects/c4/6c856ca14b6daae56f6e5cb17fffe670207f1c": "9d4b96cac9d29100be68f5f8d3a73537",
".git/objects/c4/a557980e0bcc72b6d12aee21e2fad90372c07e": "c31bd0bc7cae195cb38796e08eb334a9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/8cd073d165f7c7470a9607f4577dcb59c05503": "fee5aa785875921e2acfa55336352cb9",
".git/objects/f0/0c171f032576063808fe9c3d38a122416e6d9c": "28e238a010bf69fe3d649b16a74c2dd9",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/f8/583597a9b2930b3147c76eee45a71c1ed567d9": "3f526a8fb4e66f984e5b58a7e221d34f",
".git/objects/f9/0405cd8c7a13107d351ac8744816cb92fc9fa3": "5669cb3ec66908b60c6c5f5de50271d9",
".git/objects/fa/e70f6e55bf907ec161468e50611d8288baf653": "2f0944bffa563f9b4b5d245904034229",
".git/objects/pack/pack-3cbe813ea39c3b3a86faecf6c8eb9138ddeae0f1.idx": "233c25ac601404a59c6b1a2928698117",
".git/objects/pack/pack-3cbe813ea39c3b3a86faecf6c8eb9138ddeae0f1.pack": "86c0dcd1e79f030de5e48cf513c693f7",
".git/ORIG_HEAD": "c6b47c355263ca238b5c8dcc88075594",
".git/refs/heads/master": "c6b47c355263ca238b5c8dcc88075594",
".git/refs/remotes/origin/master": "c6b47c355263ca238b5c8dcc88075594",
"404.html": "5e2074be88db28ed114266e64de160c7",
"assets/AssetManifest.json": "b2353a0c45f5b8a561b3cbb1215254c2",
"assets/assets/background.png": "be0a379723578674803eb612a9b87de8",
"assets/assets/builds.png": "6ec55fdcba220bcd8231101551cf0594",
"assets/assets/skript.png": "2d35fe411585119a241e9cde7930d039",
"assets/assets/spigot.png": "c49af2b4180e6fbb7c544682e84339fa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "080e03e323ab4671e2a2d3b99aebf598",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "73b8b1d190a81e939ee3c1217699ae45",
"icons/Icon-192.png": "00f46a3736aefa5a50aa1494cab6cf3f",
"icons/Icon-512.png": "1459a45c5a8ac0385e753ded337c16bf",
"index.html": "4fcab0a25b285a3441b62a49fddecf8d",
"/": "4fcab0a25b285a3441b62a49fddecf8d",
"main.dart.js": "a002aff1ac413383157f2c5247ba1f00",
"manifest.json": "899bf0a0d62842bd992857e7b2d2ca54",
"version.json": "6019b3430e7934d56095dc4468bcda33"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
