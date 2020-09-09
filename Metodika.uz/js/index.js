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

let products = [];

$(document).ready(function(){
    $.get("http://5.182.26.97:3000/api/v1/ads", function(data){
       products = data;
       buildProductView(products);
    })
});

function buildProductView(elements){
    $("#products").empty();
    elements.map(element => {
        let proHtml = '<div class="carousel-item">'+
        '<img class="d-block w-100"' +
            'src="' + element.image + '">' +
            '<div class="carousel-caption d-none d-md-block">' +
            '<h1' + element.title + '</h1>' + 
    '</div>';
    $(".carousel-inner").append(proHtml);
    });
}