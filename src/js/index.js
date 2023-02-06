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
    $btnSkills.children[0].classList.add("btn_selected");
    $btnWorks.children[0].classList.remove("btn_selected");
    $secSkills.classList.add("on");
  });
  $btnWorks.addEventListener("click", () => {
    [...$secThemes].map((sec) => {
      sec.classList.remove("on");
    });
    $btnWorks.children[0].classList.add("btn_selected");
    $btnSkills.children[0].classList.remove("btn_selected");
    $secWorks.classList.add("on");
  });
}

navigation();
