// 기술
function secSkills() {
  const $btnSkill = skills.querySelectorAll('.btn_skill');
  const $btnTool = skills.querySelectorAll('.btn_tool');
  const $listPoint = skills.querySelector('.list_point');
  const $listTool = skills.querySelector('.list_tool');
  const $btnView = skills.querySelector('.btn_view');
  const $btnToolView = skills.querySelector('.btn_toolView');

  // FRONTEND SKILLS
  [...$btnSkill].map((btn) => {
    btn.addEventListener('click', (e) => {
      [...$btnSkill].map((btnAll) => {
        btnAll.style.opacity = '0.4';
      })
      e.target.style.opacity = '1';
      skillContents(true, e.target.name, e.target.name);
      if (e.target.name === 'html') {
        $listPoint.innerHTML = `
          <li class="item_point">
            Semantic Mark-up
          </li>
          <li class="item_point">
            웹 표준과 웹 접근성
          </li>
        `;
        skills.style.backgroundColor = '#fc470b31';
        $btnView.style.color = '#fff';
        $btnView.style.backgroundColor = '#fc490b';
      } else if (e.target.name === 'css') {
        $listPoint.innerHTML = `
          <li class="item_point">
            일관된 스타일 작성
          </li>
          <li class="item_point">
            명확한 Class name
          </li>
        `;
        skills.style.backgroundColor = '#2196f331';
        $btnView.style.color = '#fff';
        $btnView.style.backgroundColor = '#2196f3';
      } else if (e.target.name === 'scss') {
        $listPoint.innerHTML = `
          <li class="item_point">
            코드 작성 시간의 단축
          </li>
          <li class="item_point">
            변수와 mixin
          </li>
        `;
        skills.style.backgroundColor = '#cc669931';
        $btnView.style.color = '#fff';
        $btnView.style.backgroundColor = '#cc6699';
      } else if (e.target.name === 'js') {
        $listPoint.innerHTML = `
          <li class="item_point">
            REST API 비동기 통신
          </li>
          <li class="item_point">
            API 최적화와 에러 핸들링
          </li>
        `;
        skills.style.backgroundColor = '#ffdf0031';
        $btnView.style.color = 'black';
        $btnView.style.backgroundColor = '#ffdf00';
      } else if (e.target.name === 'react') {
        $listPoint.innerHTML = `
          <li class="item_point">
            props와 components
          </li>
          <li class="item_point">
            useState와 useEffect
          </li>
        `;
        skills.style.backgroundColor = '#5ed3f331';
        $btnView.style.color = 'black';
        $btnView.style.backgroundColor = '#5ed3f3';
      } 
    })
  });
  // CO-WORKING TOOL
  [...$btnTool].map((btn) => {
    btn.addEventListener('click', (e) => {
      [...$btnTool].map((btnAll) => {
        btnAll.style.opacity = '0.4';
      })
      e.target.style.opacity = '1';
      skillContents(false, e.target.name, e.target.name);
      if (e.target.name === 'github') {
        $listTool.innerHTML = `
          <li class="item_point">
            브랜치/이슈/칸반 프로젝트
          </li>
          <li class="item_point">
            기능/의미 단위의 커밋
          </li>
        `;
        skills.style.backgroundColor = '#00000031';
        $btnToolView.style.color = 'white';
        $btnToolView.style.backgroundColor = '#000000';
      } else if (e.target.name === 'figma') {
        $listTool.innerHTML = `
          <li class="item_point">
            피그마를 통해 디자인 확인
          </li>
          <li class="item_point">
            지정된 디자인을 준수
          </li>
        `;
        skills.style.backgroundColor = '#a259ff31';
        $btnToolView.style.color = 'white';
        $btnToolView.style.backgroundColor = '#a259ff';
      }
    })
  })
}
secSkills();
// 이미지 및 제목 변경
function skillContents(bool, img, title) {
  const $secSkillInfo = skills.querySelector('.wrap_skillImg');
  const $secToolInfo = skills.querySelector('.wrap_tool');
  const Uppertitle = title.toUpperCase();
  
  if (bool === true) {
    $secSkillInfo.innerHTML = `
      <img src="../img/icon_${img}.png" alt="${img}" class="img_skill">
      <h4 class="txt_skillName">${Uppertitle}</h4>
      <p class="txt_subTitle">FRONTEND DEVELOPER SKILLS</p>
    `
  } else {
    $secToolInfo.innerHTML = `
      <img src="../img/icon_${img}.png" alt="${img}" class="img_skill">
      <h4 class="txt_skillName">${Uppertitle}</h4>
      <p class="txt_subTitle">CO-WORKING TOOL</p>
    `
  }
}