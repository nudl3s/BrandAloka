
$(function(){
    

	$('.bxslider').bxSlider({
		mode: 'horizontal',
		captions: true
	});

	$('.bot-slider').bxSlider({
		mode: 'horizontal',
		pager: false,
		captions: true
	});
    

	$('.image-link').viewbox();

    
        $('#example').pieChart({
            barColor: '#e83a93',
            trackColor: '#eeeeee',
            lineWidth: 8,
            lineCap: 'butt',
            size: 185,
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });
    
            $('#example2').pieChart({
            barColor: '#e83a93',
            trackColor: '#eeeeee',
            lineWidth: 8,
            lineCap: 'square',
            size: 185,
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });
            $('#example3').pieChart({
            barColor: '#e83a93',
            trackColor: '#eeeeee',
            lineWidth: 8,
            lineCap: 'square',
            size: 185,
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });
            $('#example4').pieChart({
            barColor: '#e83a93',
            trackColor: '#eeeeee',
            lineWidth: 8,
            lineCap: 'square',
            size: 185,
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });
            $('#example5').pieChart({
            barColor: '#e83a93',
            trackColor: '#eeeeee',
            lineWidth: 8,
            lineCap: 'square',
            size: 185,
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });
    

    $(".bx-prev").html("<div class='left'></div>");
    $(".bx-next").html("<div class='right'></div>");

})
