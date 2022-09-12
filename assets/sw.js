import { request } from "http";
const VERSION = "v1";

self.addEventListener('install', event => {

    event.waitUntil(preCache());

})

self.addEventListener('fetch', event => {

    if (request.method != "GET") {
        
        return;

    }

    //buscar en cache

    event.respondWith(cachedResponse(request));

    // actualizar el cache

    event.waitUntil(updateCache(request));

})

async function preCache() {

    const cache = await caches.open(VERSION);
    cache.addAll([
        /* '/',
        '/index.html',
        '/assets/first.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.ts',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4' */
    ]);
    
}

async function ccachedResponseac(request) {

    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
    
}

async function updateCache(request) {

    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
    
}