$(document).ready(function () {
	var colors = ['#FF7559', '#00FFD0', '#FFD324'];
	for (var i = 0; i < 20; i++) {
		$('#particle-container').append('<div class="particle" style="top: '+Math.random()*100+'%; left: '+Math.random()*100+'%; color: '+colors[Math.floor(Math.random()*(3))]+';">V</div>');
	}

	window.setInterval(function(){
		console.log($('#particle-container').height());
  		$('.particle').each(function () {
  			if ($(this).offset().top - $('#particle-container').offset().top > $('#particle-container').height()) {
  				$(this).remove();
  				$('#particle-container').append('<div class="particle" style="top: -'+Math.random()*100+'%; left: '+Math.random()*100+'%; color: '+colors[Math.floor(Math.random()*(3))]+';">V</div>');
  			}
  		});
	}, 1000);

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