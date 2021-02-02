$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".siteNavHeader").addClass("siteNavScrolled");
        $(".navbarLinks").addClass("scrolledHover");
    } else {
        $(".siteNavHeader").removeClass("siteNavScrolled");
        $(".navbarLinks").removeClass("scrolledHover");
    }
});