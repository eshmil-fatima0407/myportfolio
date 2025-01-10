document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar a');

  // Smooth scrolling and active link management
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Get the target section ID from the href attribute
      const targetId = this.getAttribute('href').split('#')[1];
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Smooth scroll to the section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // Update active class for the clicked link
        navLinks.forEach((link) => link.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Update active link on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY + window.innerHeight / 2;  // Adjusted offset for accurate detection

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove 'active' class from all links
        navLinks.forEach((link) => link.classList.remove('active'));

        // Add 'active' class to the corresponding link
        const activeLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  });
});
