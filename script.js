const activeClass = 'active'
// tab menu

function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add(activeClass, direcao);
    };

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
};
initTabNav();

// accordion list

function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  if (accordionList.length){
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.add(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    };

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
};

initAccordion();

// soft scroll internal links

function initSoftScroll() {
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

initSoftScroll();

// scroll animation

function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

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

initScrollAnimation();
