$(window).on("scroll", function() {
    console.log(window.pageYOffset);
    if($(window).scrollTop() > 400) {
        $(".navbar").addClass("active");
    } else {
       $(".navbar").removeClass("active");
    }
});