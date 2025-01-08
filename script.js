// Function to handle the active link based on scroll position
window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll('section');
  let links = document.querySelectorAll('.navbar a');
  let currentPosition = window.scrollY;

  sections.forEach((section, index) => {
    let sectionTop = section.offsetTop - 150; // Offset to give a smooth scroll
    let sectionBottom = sectionTop + section.offsetHeight;

    // Check if the section is in view
    if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
      links.forEach(link => link.classList.remove('active'));
      links[index].classList.add('active');
    }
  });
});

// Function to handle clicking on navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default behavior
    const targetId = this.getAttribute('href').substring(1); // Get section ID
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth', // Smooth scroll effect
      block: 'start' // Align to the top of the section
    });

    // Update active link
    document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});
