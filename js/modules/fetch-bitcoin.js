export default function initFetchBitcoin(){

}

fetch('https://blockchain.info/ticker').
then(response => response.json())
.then(bitcoin => {
  const btcPreco = document.querySelector('.btc-preco');
  btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(5).replace('.', ',');
}).catch(erro => {
  console.log(Error(erro));
});
