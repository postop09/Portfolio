const header = document.querySelector('.index_header');
const themes = document.querySelectorAll('.sec_theme');
const [intro, career, skills, works] = [themes[0],themes[1],themes[2],themes[3]];

function navigation() {
  const btnCareer = header.querySelector('.btn_career');
  const btnSkills = header.querySelector('.btn_skills');
  const btnWorks = header.querySelector('.btn_works');
  
  btnCareer.addEventListener('click', () => {
    intro.classList.remove('on');
    skills.classList.remove('on');
    works.classList.remove('on');
    career.classList.add('on');
  })
  btnSkills.addEventListener('click', () => {
    intro.classList.remove('on');
    skills.classList.add('on');
    works.classList.remove('on');
    career.classList.remove('on');
  })
  btnWorks.addEventListener('click', () => {
    intro.classList.remove('on');
    skills.classList.remove('on');
    works.classList.add('on');
    career.classList.remove('on');
  })
}
navigation()

function level() {
  const btnSkills = skills.querySelectorAll('.btn_level');
  const [btnLevel5, btnLevel4, btnLevel3, btnLevel2] = [btnSkills[0], btnSkills[1], btnSkills[2], btnSkills[3]];
  const levelSkills = skills.querySelectorAll('.txt_skill');
  const [level5, level4, level3, level2] = [levelSkills[0], levelSkills[1], levelSkills[2], levelSkills[3]];

  btnLevel5.addEventListener('click', () => {
    btnLevel5.classList.add('on');
    btnLevel4.classList.remove('on');
    btnLevel3.classList.remove('on');
    btnLevel2.classList.remove('on');
    level5.classList.add('on');
    level4.classList.remove('on');
    level3.classList.remove('on');
    level2.classList.remove('on');
  })
  btnLevel4.addEventListener('click', () => {
    btnLevel5.classList.remove('on');
    btnLevel4.classList.add('on');
    btnLevel3.classList.remove('on');
    btnLevel2.classList.remove('on');
    level5.classList.remove('on');
    level4.classList.add('on');
    level3.classList.remove('on');
    level2.classList.remove('on');
  })
  btnLevel3.addEventListener('click', () => {
    btnLevel5.classList.remove('on');
    btnLevel4.classList.remove('on');
    btnLevel3.classList.add('on');
    btnLevel2.classList.remove('on');
    level5.classList.remove('on');
    level4.classList.remove('on');
    level3.classList.add('on');
    level2.classList.remove('on');
  })
  btnLevel2.addEventListener('click', () => {
    btnLevel5.classList.remove('on');
    btnLevel4.classList.remove('on');
    btnLevel3.classList.remove('on');
    btnLevel2.classList.add('on');
    level5.classList.remove('on');
    level4.classList.remove('on');
    level3.classList.remove('on');
    level2.classList.add('on');
  })
}
level()

function listWorks() {
  const btnWorks = works.querySelectorAll('.btn_work');
  const [btnTeam, btnPortfolio, btnOpen, btnHour] = [btnWorks[0], btnWorks[1], btnWorks[2], btnWorks[3]];
  const articWorks = works.querySelectorAll('.artic_work');
  const [articTeam, articPortfolio, articOpen, articHour] = [articWorks[0], articWorks[1], articWorks[2], articWorks[3]];

  btnTeam.addEventListener('click', () => {
    btnTeam.classList.add('on');
    btnPortfolio.classList.remove('on');
    btnOpen.classList.remove('on');
    btnHour.classList.remove('on');
    articTeam.classList.add('on');
    articPortfolio.classList.remove('on');
    articOpen.classList.remove('on');
    articHour.classList.remove('on');
  })
  btnPortfolio.addEventListener('click', () => {
    btnTeam.classList.remove('on');
    btnPortfolio.classList.add('on');
    btnOpen.classList.remove('on');
    btnHour.classList.remove('on');
    articTeam.classList.remove('on');
    articPortfolio.classList.add('on');
    articOpen.classList.remove('on');
    articHour.classList.remove('on');
  })
  btnOpen.addEventListener('click', () => {
    btnTeam.classList.remove('on');
    btnPortfolio.classList.remove('on');
    btnOpen.classList.add('on');
    btnHour.classList.remove('on');
    articTeam.classList.remove('on');
    articPortfolio.classList.remove('on');
    articOpen.classList.add('on');
    articHour.classList.remove('on');
  })
  btnHour.addEventListener('click', () => {
    btnTeam.classList.remove('on');
    btnPortfolio.classList.remove('on');
    btnOpen.classList.remove('on');
    btnHour.classList.add('on');
    articTeam.classList.remove('on');
    articPortfolio.classList.remove('on');
    articOpen.classList.remove('on');
    articHour.classList.add('on');
  })
}
listWorks()