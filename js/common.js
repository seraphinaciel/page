//go to top
$(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    let offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.btnTop');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('btnVisible') : $back_to_top.removeClass('btnVisible');
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });
});



//main → project load more button
$(document).ready(function() { 
	$(".projectList figure").slice(0, 4).show();
	$(".btn_readMore").on("click", function(e) {
		e.preventDefault();
		$(".projectList figure:hidden").slice(0, 4).slideDown();
		if ($(".projectList figure:hidden").length == 0) {
			$(".btn_readMore").text("No Content").addClass("noContent");
		}
	});
})





