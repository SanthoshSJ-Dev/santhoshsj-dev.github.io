$(document).ready(function(){
    window.setTimeout('fadeout();',3000);
});

function fadeout(){
    $('#preloader').delay(2000).fadeout('slow',function(){
        $('.body').removeClass('body');
    });
}