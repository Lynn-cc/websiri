// 隐藏页的js文件
$(function() {
    $(window).keypress(function(event) {
            console.log(event.which);
        if (event.which === 115) {  // F4
            console.log('ok');
        }
    });
});

