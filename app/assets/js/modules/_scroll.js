$(window).on("scroll", function() {
    if($(window).scrollTop() > 400) {
        $(".navbar").addClass("active");
    } else {
       $(".navbar").removeClass("active");
    }
});