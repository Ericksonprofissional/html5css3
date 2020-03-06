function enviar(){
    event.preventDefault();
    let form = document.querySelector("#form-contato");
    let pessoa = {
        nome: form.nome.value,
        email: form.email.value,
        tel: form.tel.value
    }

    console.log(pessoa)
}