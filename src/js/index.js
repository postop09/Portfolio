const $secHeader = document.querySelector('.index_header');
const $secThemes = document.querySelectorAll('.sec_theme');
const [$secIntro, $secCareer, $secSkills, $secWorks] = [...$secThemes];

// 페이지 메인
function reload() {
  const $btnReload = document.querySelector('.btn_linkIntro');
  
  $btnReload.addEventListener('click', () => {
    window.location.reload();
  })
}
reload();

// 내비게이션
function navigation() {
  const $btnCareer = $secHeader.querySelector('.btn_career');
  const $btnSkills = $secHeader.querySelector('.btn_skills');
  const $btnWorks = $secHeader.querySelector('.btn_works');
  
  $btnCareer.addEventListener('click', () => {
    [...$secThemes].map((sec) => {
      sec.classList.remove('on');
    });
    $secCareer.classList.add('on');
  });
  $btnSkills.addEventListener('click', () => {
    [...$secThemes].map((sec) => {
      sec.classList.remove('on');
    })
    $secSkills.classList.add('on');
  });
  $btnWorks.addEventListener('click', () => {
    [...$secThemes].map((sec) => {
      sec.classList.remove('on');
    })
    $secWorks.classList.add('on');
  });
}
navigation();