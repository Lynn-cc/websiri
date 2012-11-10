/*
 $(document).keypress(function(event) {
     console.log(event.which);
     if (event.which === 115) {  // F4
     console.log('ok');
 }
});
*/

// 页面加载完成之后执行这里
var script = document.createElement('script');
script.src = 'http://mat1.gtimg.com/www/mb/js/mi_121109.js';
document.getElementsByTagName('body')[0].appendChild(script);
script.onload = function() {

    console.log(UI);
    console.log(MI);

    var el = UI.html('<input width="100%" height="50px" style="font-size:30px" type="text"' + 
    'onwebkitspeechchange="say()" autofocus x-webkit-speech />')[0];

    UI.EA(el, 'webkitspeechchange', function(e) {
        console.log(e);
    });
}
