    "use strict";

    console.log("hello");

$(document).ready(function(){
    $('.slider').slider();
});

$('.rightBtn').click(function(){
    $('.slider').slider('next');
});

$('.leftBtn').click(function(){
    $('.slider').slider('prev');
});

        






        