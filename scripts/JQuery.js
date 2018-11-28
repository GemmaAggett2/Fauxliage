$('.carousel').carousel()
...
'paths': {
     'carousel': 'plugins/bootstrap/carousel',
     'transition': 'plugins/bootstrap/transition'
},
'shim': {
    'carousel': {
        'deps': ['jquery', 'transition']
    }
...
}
...
