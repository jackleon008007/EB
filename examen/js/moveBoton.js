$(document).ready(function (){
    $('.Inicio').click(function (){
        $('body,html').animate({
            scrollTop: '0px'
        });
    })

    $('.servicios').click(function (){
        $('body,html').animate({
            scrollTop: '650px'
        });
    })

    $('.contactanos').click(function (){
        $('body,html').animate({
            scrollTop: '4000px'
        });
    })
})