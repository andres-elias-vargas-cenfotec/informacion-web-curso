'use strict';

let bottom_Header = document.getElementById('bottNav');
bottom_Header.classList.add('header--grande');


const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    bottom_Header.classList.add('header--pequenno');
    bottom_Header.classList.remove('header--grande');
  } else {
    bottom_Header.classList.remove('header--pequenno');
    bottom_Header.classList.add('header--grande');
  }
}

window.addEventListener('scroll', scrollFunction);