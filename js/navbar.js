$ (window).scroll(function(){
    if  ($("#navbar-scroll").offset().top > 100) {
        $ ("#navbar-scroll").removeClass("navbar1");
        $("#navbar-scroll").addClass("scroll");
} else{
    $ ("#navbar-scroll").removeClass("scroll");
    $("#navbar-scroll").addClass("navbar1");
}});