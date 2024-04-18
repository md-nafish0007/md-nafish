// Add smooth scrolling to navigation links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  });
});
