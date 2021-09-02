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
// }