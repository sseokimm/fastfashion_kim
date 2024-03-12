$(document).ready(function() {
    
    function animatePhrase($phrase) {
        let screenHeight = $(window).height();
        let screenWidth = $(window).width();
        let phraseWidth = $phrase.width();
        let phraseHeight = $phrase.height();
        let newX = Math.random() * (screenWidth - phraseWidth); 
        let newY = Math.random() * (screenHeight - phraseHeight);
        let scale = Math.random() * (1.5 - 0.5) + 0.5;
        
        
        let colors = ['#72D662', '#FFDFED'];
        let color = colors[Math.floor(Math.random() * colors.length)];

        $phrase.css({top: newY, left: newX, transform: `scale(${scale})`, opacity: 0, color: color});

        let animationType = Math.floor(Math.random() * 4);
        switch(animationType) {
            case 0: 
                $phrase.fadeIn().fadeOut(4000, function() {
                    animatePhrase($(this));
                });
                break;
            case 1: 
                let direction = Math.random() < 0.5 ? -1 : 1;
                $phrase.fadeIn().animate({left: `+=${direction * 100}px`, opacity: 1}, 4000, function(){
                    $(this).fadeOut(0, function() {
                        animatePhrase($(this));
                    });
                });
                break;
            case 2: 
                let directionY = Math.random() < 0.5 ? -1 : 1;
                $phrase.fadeIn().animate({top: `+=${directionY * 100}px`, opacity: 1}, 4000, function(){ 
                    $(this).fadeOut(0, function() {
                        animatePhrase($(this));
                    });
                });
                break;
            case 3: 
                $phrase.fadeIn().css({transform: 'rotate(0deg)'}).animate({opacity: 1}, 4000, function() { 
                    $(this).animate({transform: 'rotate(360deg)', opacity: 0}, 4000, function() {
                        animatePhrase($(this));
                    });
                });
                break;
        }
    }

    $('.phrase').each(function(){
        animatePhrase($(this));
    });

    $('#title').one('click', function() { 
      
        $(this).stop().css('fontSize', '2em');
        $('body').css({
            'background-image': 'url("https://cdn.glitch.global/a6a41285-3c26-4fad-bd43-263aa716c9c3/ghkguidetogiving-donateclothesindex-1604931160.jpg?v=1710200195441")',
            'background-size': 'cover',
            'background-position': 'center' 
        });
        $('.boxes').slideDown('slow');
        $('.phrases').fadeIn('slow');
        $('#alternativeTitle').show().css({
            'font-size': '5em',
            'color': '#404040',
          'border': '10px white'
        });
    });

    $('#title').click(function() {
      
        $('.phrase').stop().hide();
        $(this).hide(); 
    });
    $('.box').click(function() {
       
        let boxIndex = $(this).index();
        switch (boxIndex) {
            case 0:
                window.location.href = "page1.html";
                break;
            case 1:
                window.location.href = "page2.html";
                break;
            case 2:
                window.location.href = "page3.html";
                break;
            default:
                break;
        }
    });
});
