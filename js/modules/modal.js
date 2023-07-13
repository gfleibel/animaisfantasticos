export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="open"]')
  const btnClose = document.querySelector('[data-modal="close"]')
  const containerModal = document.querySelector('[data-modal="container"]')

  function toggleModal(event){
    event.preventDefault()
    containerModal.classList.toggle('active')
  }

  function clickOutsideModal(event){
    if(event.target === this)
      toggleModal(event)
  }
  
  if(btnOpen && btnClose && containerModal){

    btnOpen.addEventListener('click', toggleModal)
    btnClose.addEventListener('click', toggleModal)
    containerModal.addEventListener('click', clickOutsideModal)
  }
}
