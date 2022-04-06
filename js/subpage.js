//subpage → 
const subVisual = document.querySelector(".sub_visual span");
const prevBtn = document.querySelector(".pageIndicator .prev");
const nextBtn = document.querySelector(".pageIndicator .next");

const currentLink = document.location.href; 
const localFullName = document.URL.substring(document.URL.lastIndexOf('/') + 1);
const localName = parseInt(localFullName.substring(localFullName.lastIndexOf('.'), 9));

const PAGE_CURRENT = String(localName).padStart(2, "0");
const PAGE_PREV = String(localName - 1).padStart(2, "0");
const PAGE_NEXT = String(localName + 1).padStart(2, "0");


function indicatorTxt(){
	subVisual.style = `background:url(../images/thumnail/img${PAGE_CURRENT}.jpg) top;background-size:cover;`;
	
	prevBtn.style = `background:url('../images/thumnail/img${PAGE_PREV}.jpg') top;background-size:cover;`;
	nextBtn.style = `background:url('../images/thumnail/img${PAGE_NEXT}.jpg') top;background-size:cover;`;
	
	prevBtn.innerHTML = `<div><i class="material-icons-round">arrow_back</i> <span>이전프로젝트<strong>돌아가시오!</strong></span></div>`;
	nextBtn.innerHTML = `<div><span>다음프로젝트<strong>아무것도 음슴!</strong></span> <i class="material-icons-round">arrow_forward</i></div>`;
	
	//첫페이지, 마지막 페이지는 버튼 비활성
	if(localName === 0){
		prevBtn.disabled = true;
		prevBtn.style = ``;
		prevBtn.innerHTML = `<div><span>이전프로젝트 <strong>없습니다</strong></span></div>`;
	}else if(localName === 13){
		nextBtn.disabled = true;
		nextBtn.style = ``;
		nextBtn.innerHTML = `<div><span>다음프로젝트 <strong>없습니다</strong></span></div>`;
	}
}

function indicatorBox(){
	if (window.location == currentLink) {
		if(this.className == 'prev'){
			window.location.href = 'subpage__'+PAGE_PREV+'.html';
			
		}else{
			window.location.href = 'subpage__'+PAGE_NEXT+'.html';
		}
	}
}
indicatorTxt();
prevBtn.addEventListener("click", indicatorBox);
nextBtn.addEventListener("click", indicatorBox);

