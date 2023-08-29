const changingWordElement = document.querySelector('.muda-texto');
const words = ['do seu negócio', 'dos relatórios', 'das suas vendas','do seu deivery', 'do seu estoque','dos seus clientes','do faturamento'];

let currentWordIndex = 0;

function changeWord() {
    changingWordElement.textContent = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length;
}
setInterval(changeWord, 1000);
function toggleDescription(card) {
    card.classList.toggle("active");
}