document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, 0);
});

$(document).ready(function(){

    // bagian slider 
    var instances=M.Carousel.getInstance($('.carousel').carousel({
        dist:0,
        padding:50,
        duration:200,
        noWrap:false,
        // shift:-10,
    }));
    var instances2=M.Carousel.getInstance($('.carousel2').carousel({
        dist:0,
        padding:50,
        duration:200,
        noWrap:false,
        // shift:-10,
    }));
    /**/
    var instances3=M.Carousel.getInstance($('.carousel3').carousel({
        dist:0,
        padding:50,
        duration:200,
        noWrap:false,
        // shift:-10,
    }));
   /* var instances3a=M.Carousel.getInstance($('.carousel3a').carousel({
        dist:0,
        padding:50,
        duration:200,
        noWrap:false,
        // shift:-10,
    }));*/
    var instances4=M.Carousel.getInstance($('.carousel4').carousel({
        dist:0,
        padding:50,
        duration:200,
        noWrap:false,
        // shift:-10,
    }));
    var instances5=M.Carousel.getInstance($('.carousel5').carousel({
        dist:0,
        padding:50,
        duration:200,
        noWrap:false,
        // shift:-10,
    }));
    
    $('.prev').click(function(){
        instances.prev(1);
    })
    $('.next').click(function(){
        instances.next(1);
    })
    $('.prev_mac').click(function(){
        instances2.prev(1);
    })
    $('.next_mac').click(function(){
        instances2.next(1);
    })
    $('.prev_ipod').click(function(){
        instances3.prev(1);
    })
    $('.next_ipod').click(function(){
        instances3.next(1);
    })
    $('.prev_iphone').click(function(){
        instances4.prev(1);
    })
    $('.next_iphone').click(function(){
        instances4.next(1);
    })
    $('.prev_ipad').click(function(){
        instances5.prev(1);
    })
    $('.next_ipad').click(function(){
        instances5.next(1);
    })

    $('.all').click(function(){
        slide_open('all');
    })
    $('.mac').click(function(){
        slide_open('mac');
    })
    $('.ipod').click(function(){
        slide_open('ipod');
    })
    $('.iphone').click(function(){
        slide_open('iphone');
    })
    $('.ipad').click(function(){
        slide_open('ipad');
    })
    var slider=$(".slider");
    for(i=0;i<slider.length;i++){
        slider[i].style.display="none";
    }
    slider[0].style.display="block";
    slide_open('all').click();
    function slide_open(slide){
        var slider=$(".slider");
        for(i=0;i<slider.length;i++){
            slider[i].style.display="none";
        }
        var tab=$(".tab");
        for(i=0;i<tab.length;i++){
            tab[i].style.background="white"
            tab[i].style.color="grey";
            tab[i].style.borderColor="white";
        }
        $("#"+slide+"").css({"display":"block"});
        $("."+slide+"").css({"background":"white","color":"dodgerblue","border-color":"dodgerblue"});
        $(".next").click();
        $(".next_mac").click();
        $(".next_ipod").click();
        $(".next_iphone").click();
        $(".next_ipad").click();
    }
    // $("#").style.display="block";


    // end bagian slider
});    