// change nav anchor text when screen size is less than 481px
if (window.innerWidth <= 480) {
    // If less than or equal to 480
    document.querySelector('#services').innerHTML = `Services`;
}

// same as above, but works on resizing the window dynamically as well
window.addEventListener("resize", function () {
    if (window.innerWidth <= 480) {
        document.querySelector('#services').innerHTML = `services`;
    }
    else {
        document.querySelector('#services').innerHTML = `skills and services`;
    }
});