const TriggerMargin = 200;
const phoElementList = document.querySelectorAll('.photo');

const phoFunc = function() {
  for (const element of phoElementList) 
  {
    if (!element.classList.contains('show')) 
    {
      if (window.innerHeight > element.getBoundingClientRect().top + TriggerMargin) 
      {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', phoFunc);
window.addEventListener('scroll', phoFunc);

const exElementList = document.querySelectorAll('.exp');

const exFunc = function() 
{
  for (const element of exElementList) 
  {
    if (!element.classList.contains('show')) 
    {
      if (window.innerHeight > element.getBoundingClientRect().top + TriggerMargin) 
      {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', exFunc);
window.addEventListener('scroll', exFunc);

const hdElementList = document.querySelectorAll('.head');

const hdFunc = function() 
{
  for (const element of hdElementList) 
  {
    if (!element.classList.contains('show')) 
    {
      if (window.innerHeight > element.getBoundingClientRect().top + TriggerMargin) 
      {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', hdFunc);
window.addEventListener('scroll', hdFunc);

const bdElementList = document.querySelectorAll('.body');

const bdFunc = function() 
{
  for (const element of bdElementList) 
  {
    if (!element.classList.contains('show')) 
    {
      if (window.innerHeight > element.getBoundingClientRect().top + TriggerMargin) 
      {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', bdFunc);
window.addEventListener('scroll', bdFunc);
