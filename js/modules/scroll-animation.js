export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const activeClass = 'active'

  function scrollAnimation() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - (window.innerHeight * 0.6)) < 0;
      if (isSectionVisible) {
        section.classList.add(activeClass);
      } else if(section.classList.contains(activeClass)) {
        section.classList.remove(activeClass);
      }
    })
  }

  if(sections.length) {
    sections[0].classList.add(activeClass);

    window.addEventListener('scroll', scrollAnimation);
  }
}
