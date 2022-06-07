// 작품
function secWorks() {
  const $wrapSecModal = document.querySelector('.wrap_secModal');
  const $secModal = $wrapSecModal.querySelectorAll('.sec_modalDetail');
  const [$secMomo, $secNetflix, $secMandarine, $secPortfolio] = [...$secModal];
  const $btnViewMore = $wrapSecModal.querySelectorAll('.btn_viewMore');
  const $btnClose = $wrapSecModal.querySelectorAll('.btn_close');
  // 모달창 열고 닫기
  [...$btnViewMore].map((btn) => {
    btn.addEventListener('click', () => {
      [...$secModal].map((sec) => {
        sec.classList.remove('on');
      })
    })
    if (btn.name === 'momo') {
      btn.addEventListener('click', () => {
        $secMomo.classList.add('on');
      })
    } else if (btn.name === 'netflix') {
      btn.addEventListener('click', () => {
        $secNetflix.classList.add('on');
      })
    } else if (btn.name === 'mandarine') {
      btn.addEventListener('click', () => {
        $secMandarine.classList.add('on');
      })
    } else if (btn.name === 'portfolio') {
      btn.addEventListener('click', () => {
        $secPortfolio.classList.add('on');
      })
    }
  });
  // 모달창 닫기
  [...$btnClose].map((btn) => {
    btn.addEventListener('click', (e) => {
      let result = findNode(e.target, 'sec_modalDetail on');
      if (result) {
        result.classList.remove('on');
      }
    })
  });
}
secWorks();

// 노드 찾기
function findNode(target, tName) {
  while (target.className !== tName) {
    target = target.parentNode;
  }
  return target;
}