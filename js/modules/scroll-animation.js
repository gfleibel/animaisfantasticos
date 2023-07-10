export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const activeClass = 'active'
  if(sections.length) {
    sections[0].classList.add(activeClass);

    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - (window.innerHeight * 0.6)) < 0;
        if (isSectionVisible) {
          section.classList.add(activeClass);
        } else {
          section.classList.remove(activeClass);
        }
      });
    }
    window.addEventListener('scroll', scrollAnimation);
  };
};
