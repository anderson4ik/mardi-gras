'use strict';

// Button Read More... Less...

var btnText = document.getElementById('myBtn');

btnText.addEventListener('click', function () {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById('more');

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More...";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less...";
        moreText.style.display = "inline";
    }

});