$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".siteNavHeader").addClass("siteNavScrolled");
        $(".siteNavHeaderAbout").addClass("siteNavScrolledAbout");
    } else {
        $(".siteNavHeader").removeClass("siteNavScrolled");
        $(".siteNavHeaderAbout").removeClass("siteNavScrolledAbout");
    }
});