const form = document.getElementById('form');

const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('senhaRepetir');

function exibirCamposIncorretos(inputsIncorretos) {
  const formcontrol = inputsIncorretos.parentElement;
  formcontrol.className = 'form-control CadastroFalhou';
}

function exibirCamposCorretos(inputsCorretos) {
  const formControl = inputsCorretos.parentElement;
  formControl.className = 'form-control CadastroSucesso';
  //console.log(formControl);
}

function checarCampos(inputUsuario) {
  //console.log(inputUsuario);
  inputUsuario.forEach(function (inputUsuario) {
    //console.log(inputUsuario.value.trim());
    if (inputUsuario.value.trim() === '') {
      exibirCamposIncorretos(inputUsuario);
      console.log('Erro');
    } else {
      exibirCamposCorretos(inputUsuario);
    }
  });
}

form.addEventListener('submit', function (e) {
  //alert(form);
  e.preventDefault();

  checarCampos([usuario, email, senha, confirmarSenha]);
});
