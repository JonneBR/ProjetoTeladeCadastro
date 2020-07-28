const form = document.getElementById('form');

const usuario = document.getElementById('usuario');
const email = document.getElementById('email');

function checarCampos(dadosUsuario) {
  dadosUsuario.forEach(function (input) {
    if (input.value.trim() === '') {
      alert('erro teste');
    } else {
      alert('SUCESSO');
    }
  });
}

form.addEventListener('submit', function (e) {
  //alert(form);
  e.preventDefault();

  checarCampos([usuario, email]);
});
