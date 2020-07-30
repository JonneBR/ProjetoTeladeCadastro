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

function qtCaracteresUsuario(usuario) {
  console.log(usuario.value.length);
  if (usuario.value.length < 4 && usuario.value.length !== 0) {
    exibirCamposIncorretos(usuario, `O Usuário deve ter mais de 3 caracteres`);
  } else if (usuario.value.length === 0) {
  } else {
    exibirCamposCorretos(usuario);
  }
}

function validarEmail(email) {
  const validadorEmail = /\S+@\S+/;
  if (validadorEmail.test(String(email.value).toLocaleLowerCase()) === true) {
    exibirCamposCorretos(email);
    return email;
  } else if (email.value === '') {
  } else {
    exibirCamposIncorretos(email, `O Email não corresponde`);
  }
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
  qtCaracteresUsuario(usuario);
  validarEmail(email);
  checarSenhasIguais(senha, confirmarSenha);
});
