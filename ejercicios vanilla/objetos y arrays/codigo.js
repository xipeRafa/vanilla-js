window.onscroll = function() {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        document.getElementById("myImg").className = "slideUp arriba";
    } else {
        document.getElementById("myImg").className = "slide arriba";
    }
}
