export default function initTabNav() {
  const activeClass = 'active'
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(activeClass);
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add(activeClass, direcao);
  }

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);


    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
