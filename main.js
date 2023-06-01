const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Parabéns montante doado com sucesso, você salvou uma vida!`;

    formEvalido = validaNome(nomeBeneficiario.value)
    if (formEvalido) {
        const containerMensagemSucesso = document.querySelector(".success-menssage");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector(".error-menssage").style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value)
    formEvalido = validaNome(e.target.value);

    if (!formEvalido) {
        nomeBeneficiario.classList.add("error");
        document.querySelector(".error-menssage").style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove("error");
        document.querySelector(".error-menssage").style.display = 'none';
    }
});