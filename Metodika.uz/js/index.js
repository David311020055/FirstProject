var lastScrollTop = 0;
$(window).scroll(function () { 
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        $(".navbar").addClass("sticky");
        $(".logo").css({"transition": "0.5", "width": "60px"});
    } else if(st == 0) {
        $(".navbar").removeClass("sticky");
        $(".logo").css({"transition": "0.5", "width": "90px"});
    }
    lastScrollTop = st;
});