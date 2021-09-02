
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

// // Select
// let selects = document.getElementsByTagName('select');
// if (selects.length > 0) {
//   selects_init();
// }
// function selects_init() {
//   for (let index = 0; index < selects.length; index++) {
//     const select = selects[index];
//     select_init(select);
//   }
//   //select_callback();
//   document.addEventListener('click', function (e) {
//     selects_close(e);
//   });
//   document.addEventListener('keydown', function (e) {
//     if (e.which == 27) {
//       selects_close(e);
//     }
//   });
// }
// function selects_close(e) {
//   const selects = document.querySelectorAll('.select');
//   if (!e.target.closest('.select')) {
//     for (let index = 0; index < selects.length; index++) {
//       const select = selects[index];
//       const select_body_options = select.querySelector('.select__options');
//       select.classList.remove('_active');
//       _slideUp(select_body_options, 100);
//     }
//   }
// }
// function select_init(select) {
//   const select_parent = select.parentElement;
//   const select_modificator = select.getAttribute('class');
//   const select_selected_option = select.querySelector('option[selected="selected"]');
//   select.setAttribute('data-default', select_selected_option);
//   select.style.display = 'none';

//   select_parent.insertAdjacentHTML('beforeend', '<div class="select__item"></div>');

//   let new_select = select.parentElement.querySelector('.select__item');
//   new_select.appendChild(select);
//   select_item(select);
// }
// function select_item(select) {
//   const select_parent = select.parentElement;
//   const select_items = select_parent.querySelector('.select__item');
//   const select_options = select.querySelectorAll('option');
//   const select_selected_option = select.querySelector('option[selected="selected"]');
//   const select_selected_text = select_selected_option.text;
//   const select_type = select.getAttribute('data-type');

//   if (select_items) {
//     select_items.remove();
//   }

//   let select_type_content = '';
//   if (select_type == 'input') {
//     select_type_content = '<div class="select__value"><input >'
//   }
// }


// //-------------------------------------------------------------------------------------------------------------
// //SLIDE TOGGLE
// let _slideUp = (target, duration = 500) => {
//   if (target.classList.contains('_slide')) {
//     target.classList.add('_slide');
//     target.style.transitionProperty = 'height, margin, padding';
//     target.style.transitionDuration = duration + 'ms';
//     target.style.height = target.offsetHeight + 'px';
//     target.offsetHeight;
//     target.style.overflow = 'hidden';
//     target.style.height = 0;
//     target.style.paddingTop = 0;
//     target.style.paddingBottom = 0;
//     target.style.marginTop = 0;
//     target.style.marginBottom = 0;
//     window.setTimeout(() => {
//       target.hidden = true;
//       target.style.removeProperty('height');
//       target.style.removeProperty('padding-top');
//       target.style.removeProperty('padding-bottom');
//       target.style.removeProperty('margin-top');
//       target.style.removeProperty('margin-bottom');
//       target.style.removeProperty('overflow');
//       target.style.removeProperty('transition-duration');
//       target.style.removeProperty('transition-property');
//       target.classList.remove('_slide');
//     }, duration);
//   }
// }
// let _slideDown = (target, duration = 500) => {
//   if (target.classList.contains('_slide')) {
//     target.classList.add('_slide');
//     if (target.hidden) {
//       target.hidden = false;
//     }
//     let height = target.offsetHeight;
//     target.style.overflow = 'hidden';
//     target.style.height = 0;
//     target.style.paddingTop = 0;
//     target.style.paddingBottom = 0;
//     target.style.marginTop = 0;
//     target.style.marginBottom = 0;
//     target.offsetHeight;
//     target.style.transitionProperty = 'height, margin, padding';
//     target.style.transitionDuration = duration + 'ms';
//     target.style.height = height + 'px';
//     target.style.removeProperty('padding-top');
//     target.style.removeProperty('padding-bottom');
//     target.style.removeProperty('margin-top');
//     target.style.removeProperty('margin-bottom');
//     window.setTimeout(() => {
//       target.style.removeProperty('height');
//       target.style.removeProperty('overflow');
//       target.style.removeProperty('transition-duration');
//       target.style.removeProperty('transition-property');
//       target.classList.remove('_slide');
//     }, duration);
//   }
// }
// let _slideToggle = (target, duration = 500) => {
//   if (target.hidden) {
//     return _slideDown(target, duration);
//   } else {
//     return _slideUp(target, duration);
//   }
// };
let ua = window.navigator.userAgent;
const msie = ua.indexOf('MSIE');

let isMobile = {
  Android() {
    return navigator.userAgent.match(/Android/);
  },
  BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/);
  },
  iOS() {
    return navigator.userAgent.match(/iOS/);
  },
  Opera() {
    return navigator.userAgent.match(/Opera/);
  },
  Windows() {
    return navigator.userAgent.match(/Windows/);
  },
  any() {
    return (isMobile.Android()
     || isMobile.BlackBerry()
     || isMobile.iOS()
     || isMobile.Opera()
     || isMobile.Windows());
  },
};
//ISMOBILE BODY CLASS ASSIGNMENT
if (isMobile.any()) {
  document.body.classList.add('_touch');
}

function isIE() {
  ua = navigator.userAgent;
  const is_ie = ua.indexOf('MSIE') > -1 || ua.indexOf('Trident/') > -1;
  return is_ie;
}
if (isIE()) {
  document.querySelector('html').classList.add('ie');
}
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP((support) => {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

function ibg() {
  const ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = `url(${ibg[i].querySelector('img').getAttribute('src')})`;
    }
  }
}
ibg();
;
"use strict"

//SPOLLERS---------------------------------------------------------------------------------------------------------------
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
  // GETTING REGULAR SPOLLERS
  const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
    return !item.dataset.spollers.split(",")[0];
  });
  // REGULAR SPOLLERS INITIALIZATION
  if (spollersRegular.length > 0) {
    initSpollers(spollersRegular);
  }

  //GETTING MEDIA SPOLLERS
  const spollersMedia = Array.from(spollerrsArray).filter(function (item, index, self) {
    return item.dataset.spollers.split(",")[0];
  });

  // MEDIA SPOLLERS INITIALIZATION
  if (spollersMedia.length > 0) {
    const breackpointsArray = [];
    spollersMedia.forEach(item => {
      const params = item.dataset.spollers;
      const breackpoint = [];
      const paramsArray = params.split(",");
      breackpoint.value = paramsArray[0];
      breackpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breackpoint.item = item;
      breackpointsArray.push(breackpoint);
    });

    // GETTING UNIQUE SPOLLERS
    let mediaQueries = breackpointsArray.map(function (item) {
      return '(' + item.type + "width:" + item.value + "px)," + item.value + ',' + item.type;
    });
    mediaQueries = mediaQueries.filter(function (item, index, self) {
      return self.indexOf(item) === index;
    });

    // DEALING WITH EACH BREACKPOINT
    mediaQueries.forEach(breackpoint => {
      const paramsArray = breackpoint.split(",");
      const mediaBreackpoint = paramsArray[1];
      const mediaType = paramsArray[2];
      const matchMedia = window.matchMedia(paramsArray[0]);

      // OBJECTS WITH THE NECESSARY CONDITIONS
      const spollersArray = breackpointsArray.filter(function (item) {
        if (item.value === mediaBreackpoint && item.type === mediaType) {
          return true;
        }
      });
      // EVENT
      matchMedia.addListener(function () {
        initSpollers(spollersArray, matchMedia);
      });
      initSpollers(spollersArray, matchMedia);
    });
  }
  // INITIALIZATION
  function initSpollers (spollersArray, matchMedia = false) {
    spollersArray.forEach(spollersBlock => {
      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
      if (matchMedia.matches || !matchMedia) {
        spollersBlock.classList.add('_init');
        initSpollerBody(spollersBlock);
        spollersBlock.addEventListener('click', setSpollerAction);
      } else {
        spollersBlock.classList.remove('_init');
        initSpollerBody(spollersBlock, false);
        spollersBlock.removeEventListener("click", setSpollerAction);
      }
    });
  }
  //DEALING WITH CONTENT
  function initSpollerBody(spollersBlock, hideSpollerBody = true) {
    const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
    if (spollerTitles.length > 0) {
      spollerTitles.forEach(spollerTitle => {
        if (hideSpollerBody) {
          spollerTitle.removeAttribute('tabindex');
          if (!spollerTitle.classList.contains(_active)) {
            spollerTitle.nextElementSibling.hidden = true;
          }
        } else {
          spollerTitle.setAttribute('tabindex', '-1');
          spollerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  }
  function setSpollerAction (e) {
    const el = e.target;
    if (el.hasAttribute('data-spoller') || el.closest['[data-spoller]']) {
      const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
      const spollersBlock = spollerTitle.closest('[data-spollers]');
      const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
      if (!spollersBlock.querySelectorAll('._slide').length) {
        if (oneSpoller && !spollerTitle.classList.contains('_active')) {
          hideSpollersBody(spollersBlock);
        }
        spollerTitle.classList.toggle('_active');
        _slideToggle(spollerTitle.nextElementSibling, 500);
      }
      e.preventDefault();
    }
  }
  function hideSpollersBody (spollersBlock) {
    const spollerActiveTitle = spollersBlock.querySelector(['data-spoller']._active);
    if (spollerActiveTitle) {
      spollerActiveTitle.classList.remove('_active');
      _slideUp(spollerActiveTitle.nextElementSibling, 500)
    }
  }
}

//-------------------------------------------------------------------------------------------------------------
//SLIDE TOGGLE
let _slideUp = (target, duration = 500) => {
  if (target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = true;
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
}
let _slideDown = (target, duration = 500) => {
  if (target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (target.hidden) {
      target.hidden = false;
    }
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
}
let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
}

//--------------------------------------------------------------------------------------------------------------------

//BURGER jQuery
// $(document).ready(function () {
//   $('.header__burger').click(function (event) {
//     $('.header__burger, .header__menu').toggleCless('active');
//     $('body').toggleCless('lock');
//   });
// });

//BURGER--------------------------------------------------------------------------------------------------------
  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function () {
        menuArrow.classList.toggle('_active');
        menuArrow.parentElement.classList.toggle('_hover');
      });
    }
  }

//BURGER MENU
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function () {
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('_active');
    iconMenu.classList.toggle('_active');
  });
}

//SCROLL ON CLICK
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick () {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        menuBody.classList.remove('_active');
        iconMenu.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
//-----------------------------------------------------------------------------------------------------------------------;

;
// @@include ('files/scroll.js');