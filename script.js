$(document).ready(function () {
	var colors = ['#FF7559', '#00FFD0', '#FFD324'];
	for (var i = 0; i < 20; i++) {
		$('#particle-container').append('<div class="particle" style="top: '+Math.random()*100+'%; left: '+Math.random()*100+'%; color: '+colors[Math.floor(Math.random()*(3))]+';">v</div>');
	}

	window.setInterval(function(){
  		$('.particle').each(function () {
  			if ($(this).offset().top - $('#particle-container').offset().top > $('#particle-container').height()) {
  				$(this).remove();
  				$('#particle-container').append('<div class="particle" style="top: -'+Math.random()*100+'%; left: '+Math.random()*100+'%; color: '+colors[Math.floor(Math.random()*(3))]+';">v</div>');
  			}
  		});
	}, 1000);

    var resumeExpanded = false;

    $('#resume-button').click(function () {
        if (!resumeExpanded) {
            $('#resume-button').text('— Hide Details');
            $('.pwide').addClass('resume-expanded').slideDown();
            resumeExpanded = true;
        }
        else {
            $('#resume-button').text('+ Show Details');
            resumeExpanded = false;
            $('.pwide').removeClass('resume-expanded').slideUp();
        }
    });

	$('.website').click(function () {
		$(this).addClass('website-selected');
        $('.website-note').text('Close');
	});

    $('.website-note').click(function (ev) {
        ev.stopPropagation();
        $('.website').removeClass('website-selected');
        $('.website-note').text('Learn more');
    })

	$('.extended').hide(); 
    $('.extend').click(function(){ 
    	$(this).next('.extended').slideToggle('fast');
    });

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 70) {
            $('#scrollcontainer').css({'opacity':'0'});
        } else {
            $('#scrollcontainer').css({'opacity':'1'});
        }
        if (y > 285) {
            $('#logo').fadeIn('fast');
            $('.header').fadeOut('slow');
        } else {
            $('#logo').fadeOut('fast');
            $('.header').fadeIn('slow');
        }
    });
    
    $('.dbutton2').hover(function() {
        $('.dbutton2').css({'cursor':'pointer'});
    });
    
    $('.dbutton2').click(function() {
        var o = false;
        if ($('instructions').css('max-height')=='0px'){
            $('instructions').css({'max-height':'10000px'});
            $('.dbutton2').text('Instructions ▴');
            o = true;
        }
        else{
           $('instructions').css({'max-height':'0px','content':'Instructions ▾'});
           $('.dbutton2').text('Instructions ▾');
            o = false;
        }
    });
});