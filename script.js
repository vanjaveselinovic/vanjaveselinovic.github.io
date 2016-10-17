$(document).ready(function () {
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