export default function initAnimateNumbers(){
  function animateNumbers(){
    const numbers = document.querySelectorAll('[data-numero]')

    numbers.forEach((number) => {
      const total = +number.innerText
      let start = 0
      const increment = Math.floor(total / 100)
      const timer = setInterval(() => {
        start = start+increment;
        number.innerText = start
        if(start > total){
          number.innerText = total
          clearInterval(timer)
        }
      }, 25 * Math.random());
    })

  }

  function handleMutation(mutation){
    if(mutation[0].target.classList.contains('active')){
      observer.disconnect()
      animateNumbers()
    }
  }

  const observerTarget = document.querySelector('.numeros')
  const observer = new MutationObserver(handleMutation)

  observer.observe(observerTarget, {attributes: true})
}
