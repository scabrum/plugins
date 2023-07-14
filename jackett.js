(function() {
	'use strict';
Lampa.Platform.tv();
Lampa.Storage.set('parser_use', true)

Lampa.SettingsApi.addParam({
    component: 'parser',
    param: {
     name: 'jackett_url2',
     type: 'select',
     values: {
        no_parser:        'Не выбран',
        jac_lampa32_ru:   'Lampa32',
        j_yourok_ru:      'Yourok',
        jacred_xyz:       'Jacred.xyz',
        spawn_pp_ua:      'Spawn',
        jacred_ru:        'Jacred.ru',
        unknown:          'Unknown',
     },
     default: 'no_parser'
    },
    field: {
     name: '<div class="settings-folder" style="padding:0!important"><div style="width:1.3em;height:1.3em;padding-right:.1em"><svg height="256px" width="256px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style="fill:#074761;" points="187.305,27.642 324.696,27.642 256,236.716 "></polygon> <polygon style="fill:#10BAFC;" points="187.305,27.642 256,236.716 163.005,151.035 196.964,151.035 110.934,49.96 "></polygon> <g> <polygon style="fill:#0084FF;" points="66.917,62.218 10.45,434.55 66.917,451.922 117.726,217.908 "></polygon> <polygon style="fill:#0084FF;" points="163.005,151.035 196.964,151.035 110.934,49.96 66.917,62.218 117.726,217.908 117.726,484.356 256,484.356 256,236.716 "></polygon> </g> <polygon style="fill:#10BAFC;" points="324.696,27.642 256,236.716 348.996,151.035 315.037,151.035 401.067,49.96 "></polygon> <g> <polygon style="fill:#0084FF;" points="445.084,62.218 501.551,434.55 445.084,451.922 394.275,217.908 "></polygon> <polygon style="fill:#0084FF;" points="348.996,151.035 315.037,151.035 401.067,49.96 445.084,62.218 394.275,217.908 394.275,484.356 256,484.356 256,236.716 "></polygon> </g> <path d="M291.559,308.803c-7.49,0-13.584-6.094-13.584-13.584c0-7.49,6.094-13.584,13.584-13.584s13.584,6.094,13.584,13.584 C305.143,302.71,299.049,308.803,291.559,308.803z"></path> <path d="M291.559,427.919c-7.49,0-13.584-6.094-13.584-13.584s6.094-13.584,13.584-13.584s13.584,6.094,13.584,13.584 S299.049,427.919,291.559,427.919z"></path> <path d="M291.559,368.405c-7.49,0-13.584-6.094-13.584-13.584s6.094-13.584,13.584-13.584s13.584,6.094,13.584,13.584 S299.049,368.405,291.559,368.405z"></path> <path d="M225.677,424.785h-4.678c-5.77,0-10.449-4.679-10.449-10.449s4.679-10.449,10.449-10.449h4.678 c5.771,0,10.449,4.679,10.449,10.449S231.448,424.785,225.677,424.785z"></path> <path d="M384.063,220.125c8.948-1.219,5.008,7.842,10.646,6.617c5.637-1.225,8.551-16.691,9.775-11.052"></path> <path d="M511.881,432.984L455.414,60.652c-0.004-0.001-0.008-0.001-0.013-0.002c-0.178-1.166-0.541-2.306-1.109-3.367 c-1.346-2.513-3.66-4.367-6.407-5.131L327.627,17.613c-0.976-0.284-1.961-0.416-2.931-0.416c0-0.001-137.391-0.001-137.391-0.001 c-0.97,0.001-1.955,0.132-2.931,0.417L64.114,52.152c-2.747,0.766-5.061,2.619-6.407,5.131c-0.569,1.064-0.933,2.208-1.11,3.377 c-0.004-0.002-0.007-0.006-0.011-0.009L0.119,432.984c-0.776,5.117,2.311,10.032,7.258,11.553l56.467,17.371 c1.005,0.309,2.041,0.462,3.072,0.462c1.836,0,3.659-0.484,5.276-1.429c2.524-1.476,4.315-3.943,4.936-6.802l30.149-138.858v169.075 c0,5.771,4.679,10.449,10.449,10.449h276.548c5.77,0,10.449-4.678,10.449-10.449V315.281l30.148,138.858 c0.621,2.858,2.412,5.326,4.936,6.802c1.616,0.946,3.44,1.429,5.276,1.429c1.031,0,2.067-0.154,3.072-0.462l56.467-17.371 C509.571,443.015,512.658,438.101,511.881,432.984z M331.467,40.507l51.19,14.959l-75.578,88.795 c-2.64,3.102-3.237,7.457-1.529,11.155c1.709,3.698,5.411,6.067,9.486,6.067h7.198l-43.765,40.324L331.467,40.507z M180.533,40.507 l52.998,161.3l-43.765-40.324h7.198c4.074,0,7.776-2.369,9.486-6.067c1.708-3.698,1.112-8.053-1.529-11.155l-75.578-88.795 L180.533,40.507z M59.119,438.59l-36.987-11.379l48.512-319.89l36.269,111.136L59.119,438.59z M245.552,473.907H128.175v-49.123 h59.02c5.77,0,10.449-4.679,10.449-10.449s-4.679-10.449-10.449-10.449h-59.02V217.908c0-1.101-0.174-2.195-0.515-3.242 L80.238,69.355l27.068-7.539l67.043,78.769h-11.343c-4.304,0-8.168,2.638-9.733,6.649c-1.565,4.009-0.512,8.568,2.653,11.484 l89.627,82.578L245.552,473.907L245.552,473.907z M201.736,38.092h108.528L256,203.243L201.736,38.092z M384.341,214.666 c-0.341,1.047-0.515,2.141-0.515,3.242v255.999H266.449V241.297l89.627-82.578c3.165-2.916,4.218-7.475,2.653-11.484 c-1.565-4.01-5.429-6.649-9.733-6.649h-11.343l67.043-78.769l27.068,7.539L384.341,214.666z M452.882,438.59l-47.795-220.132 l36.268-111.136l48.515,319.89L452.882,438.59z"></path> <path d="M353.197,262.86h-61.637c-5.77,0-10.449-4.679-10.449-10.449c0-5.771,4.679-10.449,10.449-10.449h61.637 c5.77,0,10.449,4.678,10.449,10.449C363.646,258.182,358.968,262.86,353.197,262.86z"></path> </g></svg></div><div style="font-size:1.0em">Общедоступный Jackett</div></div>',
     description: 'Нажмите для выбора парсера из списка'
    },
    onChange: function (value) {
     if (value == 'no_parser') Lampa.Storage.set('jackett_url', '')&Lampa.Storage.set('jackett_key', '')&Lampa.Storage.set('jackett_interview','all')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'lg');
     if (value == 'jac_lampa32_ru') Lampa.Storage.set('jackett_url', 'jac.lampa32.ru')&Lampa.Storage.set('jackett_key', '')&Lampa.Storage.set('jackett_interview','all')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'lg');
     if (value == 'j_yourok_ru') Lampa.Storage.set('jackett_url', 'j.yourok.ru')&Lampa.Storage.set('jackett_key', '1')&Lampa.Storage.set('jackett_interview', 'healthy')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'df_lg');
     if (value == 'jacred_xyz') Lampa.Storage.set('jackett_url', 'jacred.xyz')&Lampa.Storage.set('jackett_key', '')&Lampa.Storage.set('jackett_interview', 'all')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'df_lg');
     if (value == 'spawn_pp_ua') Lampa.Storage.set('jackett_url', 'spawn.pp.ua:59117')&Lampa.Storage.set('jackett_key', '2')&Lampa.Storage.set('jackett_interview', 'healthy')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'df');
     if (value == 'jacred_ru') Lampa.Storage.set('jackett_url', 'jacred.ru')&Lampa.Storage.set('jackett_key', '')&Lampa.Storage.set('jackett_interview','all')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'lg');
     if (value == 'unknown') Lampa.Storage.set('jackett_url', 'http://188.119.113.252:9117')&Lampa.Storage.set('jackett_key', '1')&Lampa.Storage.set('jackett_interview', 'healthy')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'df');
     Lampa.Settings.update();
    },
     onRender: function (item) {
       setTimeout(function() {
        $('div[data-children="parser"]').on('hover:enter', function(){
        Lampa.Settings.update();
        });
        if(Lampa.Storage.field('parser_use')) item.show()&$('.settings-param__name', item).css('color','f3d900')&$('div[data-name="jackett_url2"]').insertAfter('div[data-children="parser"]');
        else item.hide();
          }, 0);
        }
   });
        (function(m, e, t, r, i, k, a) {
               m[i] = m[i] || function() {
                       (m[i].a = m[i].a || []).push(arguments)
               };
               m[i].l = 1 * new Date();
               for(var j = 0; j < document.scripts.length; j++) {
                       if(document.scripts[j].src === r) {
                               return;
                       }
               }
               k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(93942763, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
        });
        var METRIKA = '<noscript><div><img src="https://mc.yandex.ru/watch/93942763" style="position:absolute; left:-9999px;" alt="" /></div></noscript>';
        $('body').append(METRIKA);
 })();
