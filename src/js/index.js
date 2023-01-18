const $secHeader = document.querySelector(".index_header");
const $secThemes = document.querySelectorAll(".sec_theme");
const [$secIntro, $secSkills, $secWorks] = [...$secThemes];

// 내비게이션
function navigation() {
  const $btnSkills = $secHeader.querySelector(".btn_skills");
  const $btnWorks = $secHeader.querySelector(".btn_works");

  $btnSkills.addEventListener("click", () => {
    [...$secThemes].map((sec) => {
      sec.classList.remove("on");
    });
    $secSkills.classList.add("on");
  });
  $btnWorks.addEventListener("click", () => {
    [...$secThemes].map((sec) => {
      sec.classList.remove("on");
    });
    $secWorks.classList.add("on");
  });
}

navigation();
