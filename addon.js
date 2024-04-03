(function () {
    'use strict';
	
	var plugins = Lampa.Storage.get('plugins','[]')
	plugins.forEach(function(plug) {
		plug.url = (plug.url + '').replace('https://scabrum.github.io/plugins/addon.js', 'https://bylampa.github.io/addon.js').replace('http://scabrum.github.io/plugins/addon.js', 'https://bylampa.github.io/addon.js');
	})	
	Lampa.Storage.set('plugins',plugins)
	
})();
