$('.nav').on('click', 'a', function () {   
    event.preventDefault();
    var ID = $(this).attr('href');
    // получаем смещение елемента с id якоря
    var offset = $(ID).offset().top;
    $('html').stop().animate({scrollTop:offset}, 500, 'swing', function() { 
        alert("Finished animating");
    });
});