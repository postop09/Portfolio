const header = document.querySelector('.index_header');
const $themes = document.querySelectorAll('.sec_theme');
const [intro, career, skills, works] = [...$themes];

// 페이지 메인
function reload() {
  const btnReload = document.querySelector('.btn_linkIntro');

  btnReload.addEventListener('click', () => {
    window.location.reload();
  })
}
reload();

// 내비게이션
function navigation() {
  const btnCareer = header.querySelector('.btn_career');
  const btnSkills = header.querySelector('.btn_skills');
  const btnWorks = header.querySelector('.btn_works');
  
  btnCareer.addEventListener('click', () => {
    [...$themes].map((page) => {
      page.classList.remove('on');
    });
    career.classList.add('on');
  });
  btnSkills.addEventListener('click', () => {
    [...$themes].map((page) => {
      page.classList.remove('on');
    })
    skills.classList.add('on');
  });
  btnWorks.addEventListener('click', () => {
    [...$themes].map((page) => {
      page.classList.remove('on');
    })
    works.classList.add('on');
  });
}
navigation();

// 기술
function secSkills() {
  const $btnSkill = skills.querySelectorAll('.item_dot');
  const $listPoint = skills.querySelector('.list_point');
  const $btnView = skills.querySelector('.btn_view');
  console.log($btnView.style.backgroundColor);

  [...$btnSkill].map((btn) => {
    btn.addEventListener('click', (e) => {
      [...$btnSkill].map((btnAll) => {
        btnAll.style.opacity = '0.4';
      })
      e.target.style.opacity = '1';
      skillContents(e.target.name, e.target.name);

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
  })
}
secSkills();

function skillContents(img, title) {
  const $secSkillInfo = skills.querySelector('.wrap_skillImg');
  const Uppertitle = title.toUpperCase();

  $secSkillInfo.innerHTML = `
    <img src="../img/icon_${img}.png" alt="${img}" class="img_skill">
    <h4 class="txt_skillName">${Uppertitle}</h4>
    <p class="txt_subTitle">FRONTEND DEVELOPER SKILLS</p>
  `
}

// 작품
function listWorks() {
  const btnWorks = works.querySelectorAll('.btn_work');
  const articWorks = works.querySelectorAll('.artic_work');
  const listWorks = works.querySelector('.list_works');
  const [articTeam, articPortfolio, articNetflix, articMomo] = [...articWorks];

  listWorks.addEventListener('click', (e) => {
    [...btnWorks].map((btn) => {
      btn.classList.remove('on');
    });
    e.target.classList.add('on');
    
    [...articWorks].map((work) => {
      work.classList.remove('on');
    });

    if (e.target.className == 'btn_work btn_workTeam on') {
      articTeam.classList.add('on');
    } else if (e.target.className == 'btn_work btn_workPortfolio on') {
      articPortfolio.classList.add('on');
    } else if (e.target.className == 'btn_work btn_netflix on') {
      articNetflix.classList.add('on');
    } else if (e.target.className == 'btn_work btn_momo on') {
      articMomo.classList.add('on');
    } 
  })
}
listWorks();