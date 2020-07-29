const form = document.getElementById('form');

const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('senhaRepetir');

function exibirCamposIncorretos(inputsIncorretos, mensagem) {
  const formControl = inputsIncorretos.parentElement;
  //console.log(formControl.className);
  formControl.className = 'form-control CadastroFalhou';

  const mensagemErro = formControl.querySelector('small');
  mensagemErro.innerText = mensagem;

  //console.log(mensagemErro);
}

function exibirCamposCorretos(inputsCorretos) {
  const formControl = inputsCorretos.parentElement;
  formControl.className = 'form-control CadastroSucesso';
  //console.log(formControl);
}

function nomeDoInput(inputUsuario) {
  return inputUsuario.id.charAt(0).toUpperCase() + inputUsuario.id.slice(1);
}

//Check if passwords match
//Checa se senhas são iguais
function checarSenhasIguais(senha, senhaConfirmar) {
  if (senha.value !== senhaConfirmar.value) {
    exibirCamposIncorretos(senha, `As senhas não são iguais`);
    exibirCamposIncorretos(senhaConfirmar, `As senhas não são iguais`);
  }
  // if (senha.value === '' && senhaConfirmar.value === '') {
  //   checarCampos([senha, senhaConfirmar]);// }
  else {
    exibirCamposCorretos(senha);
  }
}

function checarCampos(inputUsuario) {
  //console.log(inputUsuario);
  inputUsuario.forEach(function (inputUsuario) {
    //console.log(inputUsuario.value.trim());
    if (inputUsuario.value.trim() === '') {
      exibirCamposIncorretos(
        inputUsuario,
        `O campo ${nomeDoInput(inputUsuario)} é obrigatório`
      );
      //console.log('Erro');
    } else {
      exibirCamposCorretos(inputUsuario);
    }
  });
}

form.addEventListener('submit', function (e) {
  //alert(form);
  e.preventDefault();

  checarCampos([usuario, email, senha, confirmarSenha]);
  checarSenhasIguais(senha, confirmarSenha);
});
