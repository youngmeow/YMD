$('.original-img').magnify({
    // URI of the large image
    'src': 'img/product-info/rp-img.png',
    // fade in/out speed
    'speed': 100, 
    'timeout': -1, 
    // Vertical touch point offset. Set this to something like 90 if you want to avoid your finger getting in the way of the magnifying lens on smartphones and tablets.
    'touchBottomOffset': 0,
    'finalWidth': null,
    'finalHeight': null,
    'magnifiedWidth': null,
    'magnifiedHeight': null,
    'limitBounds': false,
    'mobileCloseEvent': 'touchstart',
    // callbacl
    'afterLoad': function(){}
    });