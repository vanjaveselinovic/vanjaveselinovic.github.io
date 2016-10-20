$(document).ready(function () {
	var colors = ['#FF7559', '#2A72D5', '#CCCCCC'];
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
});