$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".siteNavHeader").addClass("siteNavScrolled");
    } else {
        $(".siteNavHeader").removeClass("siteNavScrolled");
    }
});