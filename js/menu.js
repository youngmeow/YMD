$(function() {
   $('#menu-about').click(function (event) {  
    //取消事件冒泡  
    event.stopPropagation();  
    //按鈕的toggle,如果div是可見的,點擊按鈕切換爲隱藏的;如果是隱藏的,切換爲可見的。  
    $('#dropdown-about').toggle()
    $('#dropdown-product').hide()
    $('#dropdown-news').hide()
    $('#dropdown-about').show()
    $('#search-form').hide();
    return false;
    }); 
    $(document).click(function(event){
        var dropDownAbout = $('#dropdown-about'); 
        if(!dropDownAbout.is(event.target) && dropDownAbout.has(event.target).length === 0){ // Mark 1
        $('#dropdown-about').hide();          //淡出消失
        }
        $('#about-close').click(function(){
            $('#dropdown-about').toggle()
        }) 
    });
})
$(function() {
    $('#menu-product').click(function (event) {  
        //取消事件冒泡  
        event.stopPropagation();  
        $('#dropdown-product').toggle()
        return false;
        });  
        //點擊空白處隱藏彈出層，下面爲滑動消失效果和淡出消失效果。
    $(document).click(function(event){
        var dropDownProduct = $('#dropdown-product'); 
        if(!dropDownProduct.is(event.target) && dropDownProduct.has(event.target).length === 0){ // Mark 1
        $('#dropdown-product').hide();          //淡出消失
        }
        $('#product-close').click(function(){
            $('#dropdown-product').toggle()
        }) 
    });
})
$(function() {
    $('#menu-news').click(function (event) {  
        //取消事件冒泡  
        event.stopPropagation();  
        //按鈕的toggle,如果div是可見的,點擊按鈕切換爲隱藏的;如果是隱藏的,切換爲可見的。  
        $('#dropdown-news').toggle();
        $('#dropdown-product').hide(); 
        $('#dropdown-about').hide();
        $('#dropdown-resource').hide();
        $('#dropdown-distributors').hide(); 
        $('#search-form').hide(); 
        return false;
        });  
        //點擊空白處隱藏彈出層，下面爲滑動消失效果和淡出消失效果。
    $(document).click(function(event){
        var dropDownNews = $('#dropdown-news'); 
        if(!dropDownNews.is(event.target) && dropDownNews.has(event.target).length === 0){ // Mark 1
        $('#dropdown-news').hide();          //淡出消失
        }
        $('#news-close').click(function(){
            $('#dropdown-news').toggle()
        }) 
    });
})
$(function() {
    $('#menu-resource').click(function (event) {  
        //取消事件冒泡  
        event.stopPropagation();  
        //按鈕的toggle,如果div是可見的,點擊按鈕切換爲隱藏的;如果是隱藏的,切換爲可見的。  
        $('#dropdown-resource').toggle();
        $('#dropdown-product').hide(); 
        $('#dropdown-about').hide();
        $('#dropdown-news').hide(); 
        $('#dropdown-distributors').hide();
        $('#search-form').hide(); 
        return false;
        });  
        //點擊空白處隱藏彈出層，下面爲滑動消失效果和淡出消失效果。
    $(document).click(function(event){
        var dropDownResource = $('#dropdown-resource'); 
        if(!dropDownResource.is(event.target) && dropDownResource.has(event.target).length === 0){ // Mark 1
        $('#dropdown-resource').hide();          //淡出消失
        }
        $('#resource-close').click(function(){
            $('#dropdown-resource').toggle()
        }) 
    });
})
$(function() {
    $('#menu-distributors').click(function (event) {  
        //取消事件冒泡  
        event.stopPropagation();  
        //按鈕的toggle,如果div是可見的,點擊按鈕切換爲隱藏的;如果是隱藏的,切換爲可見的。  
        $('#dropdown-distributors').toggle();
        $('#dropdown-product').hide(); 
        $('#dropdown-about').hide();
        $('#dropdown-news').hide();
        $('#dropdown-resource').hide(); 
        $('#search-form').hide();
        return false;
        });  
        //點擊空白處隱藏彈出層，下面爲滑動消失效果和淡出消失效果。
    $(document).click(function(event){
        var dropDownDistributors = $('#dropdown-distributors'); 
        if(!dropDownDistributors.is(event.target) && dropDownDistributors.has(event.target).length === 0){ // Mark 1
        $('#dropdown-distributors').hide();          //淡出消失
        }
        $('#distributors-close').click(function(){
            $('#dropdown-distributors').toggle()
        }) 
    });
})

$(function() {
    $('#menu-search').click(function (event) {  
        //取消事件冒泡  
        event.stopPropagation();  
        //按鈕的toggle,如果div是可見的,點擊按鈕切換爲隱藏的;如果是隱藏的,切換爲可見的。  
        $('#search-form').toggle()
        $('#dropdown-distributors').hide();
        $('#dropdown-product').hide(); 
        $('#dropdown-about').hide();
        $('#dropdown-news').hide();
        $('#dropdown-resource').hide(); 
        $('#dropdown-language').hide();
        return false;
        });  
        //點擊空白處隱藏彈出層，下面爲滑動消失效果和淡出消失效果。
    $(document).click(function(event){
        var dropDownSearch = $('#search-form'); 
        if(!dropDownSearch.is(event.target) && dropDownSearch.has(event.target).length === 0){ // Mark 1
        $('#search-form').hide();          //淡出消失
        }
        $('#search-close').click(function(){
            $('#search-form').toggle()
        }) 
    });
})
$(function() {
    $('#menu-language').click(function (event) {  
        //取消事件冒泡  
        event.stopPropagation();  
        //按鈕的toggle,如果div是可見的,點擊按鈕切換爲隱藏的;如果是隱藏的,切換爲可見的。  
        $('#dropdown-language').toggle()
        $('#dropdown-distributors').hide();
        $('#dropdown-product').hide(); 
        $('#dropdown-about').hide();
        $('#dropdown-news').hide();
        $('#dropdown-resource').hide();
        $('#search-form').hide();   
        return false;
        });  
        //點擊空白處隱藏彈出層，下面爲滑動消失效果和淡出消失效果。
    $(document).click(function(event){
        var dropDownLanguage= $('#dropdown-language'); 
        if(!dropDownLanguage.is(event.target) && dropDownLanguage.has(event.target).length === 0){ // Mark 1
        $('#dropdown-language').hide();          //淡出消失
        }
        $('#language-close').click(function(){
            $('#dropdown-language').toggle()
        }) 
    });
})


// $('.dropdown-toggle').click(function(){
//     $('#dropdown-product').hide()
// })
// $('#menu-product').click(function() { 
//     $('.dropdown-menu').hide()
// })


