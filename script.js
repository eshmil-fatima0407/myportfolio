document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar a');

  
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').split('#')[1];
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

       
        navLinks.forEach((link) => link.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY + window.innerHeight / 2; 

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        
        navLinks.forEach((link) => link.classList.remove('active'));

        
        const activeLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  });
});
