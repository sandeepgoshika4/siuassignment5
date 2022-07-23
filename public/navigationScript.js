
/* Multiple pages within a webpage JS code*/

$(document).ready(function () {
    $('a').click(function () {
        var selected = $(this);
        $('a').removeClass('active');
        $(selected).addClass('active');
    });
    var $a = $('.a'), $b = $('.b'), $c = $('.c'), $d = $('.d'), $e = $('.e')
    $about = $('.about'), $gallery = $('.gallary'), $schedule = $('.schedule'), $feedback = $('.feedback'), $gameplay = $('.gameplay');

    $gallery.fadeOut();
    $schedule.fadeOut();
    $feedback.fadeOut();
    $gameplay.fadeOut();
    $a.click(function () {
        $about.fadeIn();
        $gallery.fadeOut();
        $schedule.fadeOut();
        $feedback.fadeOut();
        $gameplay.fadeOut();
    });

    $b.click(function () {
        $about.fadeOut();
        $gallery.fadeIn();
        $schedule.fadeOut();
        $feedback.fadeOut();
        $gameplay.fadeOut();
    });

    $d.click(function () {
        $about.fadeOut();
        $gallery.fadeOut();
        $schedule.fadeIn();
        $feedback.fadeOut();
        $gameplay.fadeOut();
    });

    $e.click(function () {
        $about.fadeOut();
        $gallery.fadeOut();
        $schedule.fadeOut();
        $feedback.fadeOut();
        $gameplay.fadeIn();
        var error_game = document.getElementById("error_game");
        error_game.style.display = "none";
    });

    $c.click(function () {
        $about.fadeOut();
        $gallery.fadeOut();
        $schedule.fadeOut();
        $feedback.fadeIn();
        $gameplay.fadeOut();
        var error_message = document.getElementById("error_message");
        error_message.style.display = "none";
    });
});