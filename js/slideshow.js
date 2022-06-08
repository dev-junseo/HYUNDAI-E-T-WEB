const saTriggerMargin = 200;
const phoElementList = document.querySelectorAll('.photo');

const phoFunc = function() {
  for (const element of phoElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', phoFunc);
window.addEventListener('scroll', phoFunc);

const exElementList = document.querySelectorAll('.exp');

const exFunc = function() {
  for (const element of exElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', exFunc);
window.addEventListener('scroll', exFunc);
