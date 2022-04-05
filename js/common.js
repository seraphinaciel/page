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
	$(".projectList figure").slice(0, 5).show();
	$(".btn_readMore").on("click", function(e) {
		e.preventDefault();
		$(".projectList figure:hidden").slice(0, 10).slideDown();
		if ($(".projectList figure:hidden").length == 0) {
			$(".btn_readMore").text("No Content").addClass("noContent");
		}
	});
})




//subpage → 첫페이지, 마지막 페이지는 버튼 비활성
const prevBtn = document.querySelector(".pageIndicator .prev");
const nextBtn = document.querySelector(".pageIndicator .next");
let currentLink = document.location.href; 
const localFullName = document.URL.substring(document.URL.lastIndexOf('/') + 1);
const localName = parseInt(localFullName.substring(localFullName.lastIndexOf('.'), 9));

if(localName === 0){
	prevBtn.disabled = true;
}else if(localName === 13){
	nextBtn.disabled = true;
}

function prev() {
	if (window.location == currentLink) {
		let pageUrl = String(localName - 1).padStart(2, "0");
		window.location.href = 'subpage__'+pageUrl+'.html';
		prevBtn.innerText = `hello`
	}
}
function next(){
	if (window.location == currentLink) {
		let pageUrl = String(localName + 1).padStart(2, "0");
		window.location.href = 'subpage__'+pageUrl+'.html';
	}
}

function indicatorBox(){
	if (window.location == currentLink) {
		let pageUrl = String(localName - 1).padStart(2, "0");
		window.location.href = 'subpage__'+pageUrl+'.html';
	}
}
prevBtn.addEventListener("click", indicatorBox);
nextBtn.addEventListener("click", indicatorBox);
/*
<div class="pageIndicator">
	<button class="prev" onclick="prev()">이전</button>
	<button class="list" onclick="location.href='../index.html'">목록</button>
	<button class="next" onclick="next()">다음</button>
</div>
*/
