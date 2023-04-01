const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
    if(this.scrollY > 0) {
        navbar.classList.remove('py-4');
        navbar.classList.add('shadow', 'py-3');
    }
    else {
        navbar.classList.add('py-4');
        navbar.classList.remove('shadow', 'py-3');
    }
});

  AOS.init({
    duration: 700
  });