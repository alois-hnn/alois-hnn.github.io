function navMenu() {
    var links = document.getElementById("links");
    var burger = document.getElementById("burger-menu");
    var content = document.getElementById("content");
    if(links.style.display == "flex") {
        links.style.display = "none";
        content.style.display = "flex";
        burger.style.background = "none";
    } else {
        links.style.display = "flex";
        burger.style.background = "#0d82ec";
        content.style.display = "none";
    }
}

$('.scroll').on('scroll', function() {
    $(this).addClass("scroll-active").delay(1250).queue(function(next) {
        $(this).removeClass('scroll-active');
        next();
    });
});