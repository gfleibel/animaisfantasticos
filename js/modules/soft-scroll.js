export default function initSoftScroll() {
  const internalLinks = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  if(internalLinks.length){
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    internalLinks.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
};
