// https://cristiano070.github.io/service-workers/

self.addEventListener('install', function (e) {
    console.log('Install Event:', e);
});
self.addEventListener('activate', function (e) {
    console.log('Activate Event:', e);
});