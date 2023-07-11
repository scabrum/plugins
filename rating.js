(function () {
    'use strict';

    var timer = setInterval(function(){
        if(typeof Lampa !== 'undefined'){
            clearInterval(timer);
            start();
           }
    },10);

      function start(){

        var plugins = Lampa.Plugins.get();

        var plugins_add = [
            {
                "url": "https://nb557.github.io/plugins/rating.js",
                "status": 1,
                "name": "Рейтинг КиноПоиск и IMDB",
                "author": "@t_anton"
            }
        ];

        var plugins_push = []

        plugins_add.forEach(function(plugin){
            if(!plugins.find(function(a){ return a.url == plugin.url})){
                Lampa.Plugins.add(plugin);
                Lampa.Plugins.save();

                plugins_push.push(plugin.url)
            }
        });

        if(plugins_push.length) Lampa.Utils.putScript([plugins_push],function(){},function(){},function(){},true);

        /*
        setTimeout(function(){
            Lampa.Noty.show('Плагины установлены, перезагрузка через 5 секунд.',{time: 5000})
        },5000)
        */
    }
})();
