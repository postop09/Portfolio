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