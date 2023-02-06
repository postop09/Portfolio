// 내용 자세히 보기 모달창
const $wrapSecModal = document.querySelector('.wrap_secModal');

function detailModal() {
  const $secModal = $wrapSecModal.querySelectorAll('.sec_modalDetail');
  const [$secMomo, $secNetflix, $secMandarine, $secPortfolio] = [...$secModal];
  const $btnViewMore = document.querySelectorAll('.btn_viewMore');
  const $btnClose = $wrapSecModal.querySelectorAll('.btn_close');
  // 모달창 열고 닫기
  [...$btnViewMore].map((btn) => {
    btn.addEventListener('click', () => {
      [...$secModal].map((sec) => {
        sec.classList.remove('on');
      })
    })
    btn.addEventListener('click', () => {
      if (btn.name === 'momo') {
        $secMomo.classList.add('on');
      } else if (btn.name === 'netflix') {
        $secNetflix.classList.add('on');
      } else if (btn.name === 'mandarine') {
        $secMandarine.classList.add('on');
      } else if (btn.name === 'portfolio') {
        $secPortfolio.classList.add('on');
      }
    })
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
detailModal();

// 이미지 모달창
function imgModal() {
  const $btnImg = document.querySelectorAll('.btn_imgWork');
  const $secImgModal = $wrapSecModal.querySelectorAll('.sec_modalImg');
  const [$secImgAllReborn, $secImgMomo, $secImgNetflix, $secImgMandarine, $secImgportfolio] = [...$secImgModal];
  const $body = document.querySelector('body');

  [...$btnImg].map((btn) => {
    btn.addEventListener('click', () => {
      $body.style.overflow = 'hidden';
      if (btn.name === 'all_reborn') {
        $secImgAllReborn.classList.add('on');
      } else if (btn.name === 'momo') {
        $secImgMomo.classList.add('on');
      } else if (btn.name === 'netflix') {
        $secImgNetflix.classList.add('on');
      } else if (btn.name === 'mandarine') {
        $secImgMandarine.classList.add('on');
      } else if (btn.name === 'portfolio') {
        $secImgportfolio.classList.add('on');
      }
    })
  });

  [...$secImgModal].map((sec) => {
    sec.addEventListener('click', (e) => {
      if (e.target.className === 'sec_modalImg on' || e.target.className === 'img_imgClose') {
        sec.classList.remove('on');
        $body.style.overflow = 'auto';
      }
    })
  })
}
imgModal();

// 노드 찾기
function findNode(target, tName) {
  while (target.className !== tName) {
    target = target.parentNode;
  }
  return target;
}