self.addEventListener('install', listener: evt=>{
	console.log(evt);
});
self.addEventListener('activate', listener: evt=>{
	console.log(evt);
});
self.addEventListener('fetch', listener: evt=>{
	if (!navigator.onLine) {
		evt.respondWith(newresponse('Pas de connexion'));
	}
	console.log(evt.request.url);
});