const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const txtArea = document.getElementById('msg');
const msgSmll = document.getElementById('msg_cnt');

/*evento acionado através do submit do button*/
function validarForm(event){
	event.preventDefault();
	checkInputs();
}
/*função que valida o formulário*/
function checkInputs(){
	var nomeValue = nome.value;
	var emailValue = email.value;
	var msgConfN= false;
	var msgConfE = false;
	/*teste do nome*/
	if(nomeValue == ''){
		setErrorFor(nome,"* O Nome é obrigatório.");
		msgConfN = false;
	}
	else{
		setSuccessFor(nome);
		msgConfN = true;
	}
	/*teste do e-mail*/
	if(emailValue == ''){
		setErrorFor(email, "* o e-mail é obrigatório.");
		msgConfE = false;
	}
	else if(!checkEmail(emailValue)){
		setErrorFor(email, "* Por favor insira um e-mail válido.");
		msgConfE = false;
	}
	else{
		setSuccessFor(email);
		msgConfE = true;
	}

	if(msgConfE == true && msgConfN == true){
		setMsgSuccess(msgSmll, nome, email);
		form.submit();
	}
}
/*funções que modificam as classes dos elemetos do formulário para alterar as cores das inputs e mandar mensagem de erro*/
function setErrorFor(input, message){
	var elemCtrl = input.parentElement;
	const small = elemCtrl.querySelector('small');
	small.innerText = message;
	elemCtrl.className = "elem_form error";
}

function setSuccessFor(input){
	var elemCtrl = input.parentElement;
	elemCtrl.className = "elem_form success";
}
function setMsgSuccess(msg, inputN, inputE){
	var elCtrlN = inputN.parentElement;
	var elCtrlE = inputE.parentElement;
	elCtrlN.className = "elem_form";
	elCtrlE.className = "elem_form";
	msg.className = "msg_Obg success";
}
/*função que verifica se o e-mail tem os elemetos corretos*/
function checkEmail(email){
  	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
   	email);
}


