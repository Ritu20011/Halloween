$(document).ready(function() {
    // Toggle .topNav active class on click
    $('.toggler').click(function() {
        $('.topNav').addClass('active');
    });

    // Remove .topNav active class on close button click
    $('.close').click(function() {
        $('.topNav').removeClass('active');
    });

    // Remove .topNav active class on Escape key press
    $(document).keydown(function(event) {
        if (event.key === "Escape") {
            $('.topNav').removeClass('active');
        }
    });
});