"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Restaurant-Management/index.html","78f0a2bc98c9a5192797e10ccef1fd5c"],["/Restaurant-Management/static/css/main.05d245f8.css","49274ace41bb17594990471e3e56cf60"],["/Restaurant-Management/static/js/main.0fd5c8e9.js","bc28e36d1b12169a17ea8eb66492e16a"],["/Restaurant-Management/static/media/1.7cb1502f.jpg","7cb1502fa44ac190cc6b8a791a0c5868"],["/Restaurant-Management/static/media/1.91d100b5.jpg","91d100b53e9f012b4010a7f500f38883"],["/Restaurant-Management/static/media/10.b6a2bfd5.jpg","b6a2bfd5652861b6ac73cdfcd69dd6b4"],["/Restaurant-Management/static/media/11.05b83ed3.jpg","05b83ed379aa5234a726e12341cf222d"],["/Restaurant-Management/static/media/12.452b6e4a.jpg","452b6e4a0d9f9583f5e7e447b0d56983"],["/Restaurant-Management/static/media/12.f7eb5d4c.jpg","f7eb5d4c844f3c3d74144b4e939b9da7"],["/Restaurant-Management/static/media/16.e390002f.jpg","e390002f3c31a210ef58cf638e571874"],["/Restaurant-Management/static/media/2.079d26e6.jpg","079d26e66dc895cce5535c9b3bf6dd5f"],["/Restaurant-Management/static/media/2.743a89d1.jpg","743a89d1cd144889879acca9c8f49646"],["/Restaurant-Management/static/media/20.6fdd2508.png","6fdd2508543feb5e440699e0284e9943"],["/Restaurant-Management/static/media/22.b395ed1d.png","b395ed1d322e40fa4f3d44b0ac44c307"],["/Restaurant-Management/static/media/3.4a11d3ef.jpg","4a11d3ef5f237657f0119e1239110f03"],["/Restaurant-Management/static/media/3.8a7a75c6.jpg","8a7a75c6cc6e6169a858e5628b6d5fab"],["/Restaurant-Management/static/media/3.a64e0341.jpg","a64e0341328d50891cb3dd3d58ca80c5"],["/Restaurant-Management/static/media/3.d7940819.jpg","d7940819bff6c0ae63c383f155985bcb"],["/Restaurant-Management/static/media/4.53387d6d.jpg","53387d6d731edea5789f1401579aae3c"],["/Restaurant-Management/static/media/5.9d16aae9.jpg","9d16aae938fc0832dd61706e885b252c"],["/Restaurant-Management/static/media/6.00815e51.jpg","00815e518c870f21a722090090affbd6"],["/Restaurant-Management/static/media/7.81973da5.jpg","81973da53d3382374ef2ad4be4ac053e"],["/Restaurant-Management/static/media/8.af8b42ad.jpg","af8b42adb99d280108e77104c18c46a1"],["/Restaurant-Management/static/media/demo_1.b4a39df8.jpg","b4a39df8cbc461342465ad2d25ca931e"],["/Restaurant-Management/static/media/demo_4.a568d1d7.jpg","a568d1d73aac765f6c71adce7a14af39"],["/Restaurant-Management/static/media/table-8-chairs.d385c936.jpg","d385c936d3e1fd69ef8cb0b652f7874a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/Restaurant-Management/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});