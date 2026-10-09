const form = document.getElementById('form-numeros');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const mensagem = document.getElementById('mensagem');

function validaComparacao(a, b) {
  return b > a;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const valorA = Number(campoA.value);
  const valorB = Number(campoB.value);

  // Limpa classes anteriores
  mensagem.classList.remove('sucesso', 'erro');

  if (validaComparacao(valorA, valorB)) {
    mensagem.textContent = `Formulário Válido! O número B (${valorB}) é maior que o número A (${valorA}).`;
    mensagem.classList.add('sucesso');
  } else {
    mensagem.textContent = `Formulário Inválido! O número B (${valorB}) deve ser estritamente maior que o número A (${valorA}).`;
    mensagem.classList.add('erro');
  }
});