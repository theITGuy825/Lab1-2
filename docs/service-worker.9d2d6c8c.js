const e=["/Lab1-2/","/Lab1-2/index.html","/Lab1-2/style.css","/Lab1-2/app.js","/Lab1-2/manifest.json","/Lab1-2/icons/icon-128.png","/Lab1-2/icons/icon-512.png"];self.addEventListener("install",n=>{n.waitUntil(caches.open("to-do-pwa-cache-v1").then(n=>n.addAll(e)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(n=>n||fetch(e.request)))});
//# sourceMappingURL=service-worker.9d2d6c8c.js.map
