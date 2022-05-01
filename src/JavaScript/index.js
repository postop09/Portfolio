const header = document.querySelector('.index_header');
const themes = document.querySelectorAll('.sec_theme');
const [intro, career, skills, works] = [...themes];

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
    [...themes].map((page) => {
      page.classList.remove('on');
    });
    career.classList.add('on');
  });
  btnSkills.addEventListener('click', () => {
    [...themes].map((page) => {
      page.classList.remove('on');
    })
    skills.classList.add('on');
  });
  btnWorks.addEventListener('click', () => {
    [...themes].map((page) => {
      page.classList.remove('on');
    })
    works.classList.add('on');
  });
}
navigation();

// 기술
function level() {
  const btnSkills = skills.querySelectorAll('.btn_level');
  const levelSkills = skills.querySelectorAll('.txt_skill');
  const listLevels = skills.querySelector('.list_levels');
  const [level5, level4, level3, level2] = [...levelSkills];

  listLevels.addEventListener('click', (e) => {
    [...btnSkills].map((skill) => {
      skill.classList.remove('on');
    });
    e.target.classList.add('on');
    
    [...levelSkills].map((level) => {
      level.classList.remove('on');
    });
    if (e.target.className == 'btn_level btn_level5 on') {
      level5.classList.add('on');
    } else if (e.target.className == 'btn_level btn_level4 on') {
      level4.classList.add('on');
    } else if (e.target.className == 'btn_level btn_level3 on') {
      level3.classList.add('on');
    } else if (e.target.className == 'btn_level btn_level2 on') {
      level2.classList.add('on');
    }
  })
}
level()

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
listWorks()