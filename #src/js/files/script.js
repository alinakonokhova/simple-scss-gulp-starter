const isMobile = {
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

if (isMobile.any()) {
  document.body.classList.add('_touch');
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
