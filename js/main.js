//graph
const graph = document.querySelectorAll(".graph");
graph.forEach((g, k) => {
    const dataPercent = g.dataset.percent;
    let graphNum = 0
    const graphAnimation = setInterval(() => {
        g.dataset.percent = graphNum;
        g.style.background = `conic-gradient(#04CF5C 0 ${graphNum}%, #DEDEDE ${graphNum}% 100% )`;
        graphNum++ >= dataPercent && clearInterval(graphAnimation)
    }, 10)
});

//project list
const projectList = document.querySelector(".projectList");
const projectName = [
    {title: '장수군 승마레저파크',type: '개편 사업'},
    //	{title:'고창군립도서관', type:'메인 개편'},
    {title: '전라북도 농업기술원',type: '개편 사업'},
    {title: '익산시의회',type: '개편 사업'},
    {title: '고창군청',type: '18개 통합사업'},
    // {title: '순창군청',type: '5개 통합사업'},
    {title: '전북도청',type: '5개 통합사업'},
    {title: '담양 대나무 축제',type: '신규 개편 사업'},
    //	{title:'전남지원청', type:'템플릿 사업'},
    //	{title:'광주광역시 빅데이터', type:'빅데이터 사업'},
    //	{title:'전북교육청', type:'16개 통합사업'},
    //	{title:'대구고등학교', type:'콘텐츠 보완'},
    //	{title:'익산시 체육시설예약', type:'콘텐츠 보완'},
    {title: '비짓전주',type: '신규사업'},
    // {title: '임실군청',type: '7개 통합사업'},
    //	{title:'군산대 학과', type:'개편 사업'}
]

for (let num = 0; num < projectName.length; num++) {
    const figure = document.createElement('figure');
    let numUrl = String(num).padStart(2, "0");

    projectList.prepend(figure); /*최근에서 과거*/
    // console.log(projectName, projectName.title)
    figure.innerHTML = `
<img src="images/thumnail/img${numUrl}.jpg" alt="">
<figcaption>
    <a href="./page/subpage__${numUrl}.html">
        <h3>${projectName[num].title}</h3>
        <span>${projectName[num].type}</span>
        <i class="material-icons-round">east</i>
    </a>
</figcaption>
`;
}

function Slider(target) {
    // 상태
    let index = 1;
    let isMoved = true;
    const speed = 1000; // ms

    // 슬라이더
    const slider = document.querySelector(".slider");

    // 슬라이더 화면 컨테이너
    const container = document.createElement("div");
    container.classList.add("container");

    // 슬라이더 화면 목록
    let boxes = [].slice.call(slider.children);
    boxes = [].concat(boxes, boxes, boxes[0]); //박스 배열에 박스, 복사된박스, 첫번째 박스를 합친다.

    // 슬라이더 화면 스타일
    const size = boxes.length;
    for (let i = 0; i < size; i++) {
        const box = boxes[i];
        container.appendChild(box.cloneNode(true));
    }

    // 슬라이더 붙이기
    slider.innerHTML = "";
    slider.appendChild(container);
    return {};
}

const s1 = new Slider("#slider");