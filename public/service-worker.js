const cacheName = "v1";
const self = this;

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(cacheName).then(cache =>
            cache.addAll([
                "./index.html",
                "./index.js",
            ])
        )
    )
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function (response) {
                return response ? response : fetch(event.request);
            })
    );
});

