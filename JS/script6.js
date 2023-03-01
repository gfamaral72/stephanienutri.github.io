
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = form.querySelector('#nome').value;
  const email = form.querySelector('#email').value;
  const mensagem = form.querySelector('#mensagem').value;
  alert(`Mensagem enviada por ${nome} (${email}): ${mensagem}`);
  form.reset();
});
