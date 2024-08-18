// Quando a tela estiver carregada...
window.onload = function() {
  // Reconhece cada input na tela
  var inputs = document.getElementsByTagName('input');
  // Aqui fazemos um loop passando por todos os inputs
  for (var i = 0; i < inputs.length; i++) {
    // Essa linha é pra chamar a função em cada um dos inputs quando a tela for carregada
    mudarPlaceholder(inputs[i]);
    // Aqui falamos que pra cada tecla que o usuário apertar no input
    inputs[i].setAttribute('onkeyup', 'mudarPlaceholder(this)');
  }
};

// Função para mudar a centralização
function mudarPlaceholder(that) {
  // Se o input estiver vazio
  if (that.value === '') {
    // Tira a classe normal
    that.classList.remove('normal');
    // Centraliza o placeholder
    that.classList.add('centralizado');
  } else {
    // Senão, tira o centralizado do input
    that.classList.remove('centralizado');
    that.classList.add('normal');
  }
}
