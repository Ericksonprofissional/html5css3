var horario = 0;
let pessoa = 0;
let form = document.querySelector("#form-contato");


function agendaHorario(){
    horario = form.hora.value;
    switch (parseInt(horario)){
        case 0:
            horario = '';
            break;
        case 1:
            horario = '09:00';
            break;
        case 2:
            horario = '10:00';
            break;
        case 3:
            horario = '13:00';
            break;
        case 4:
            horario = '14:00';
            break;
    }
    return horario;
}


function enviar(){
    event.preventDefault();

    pessoa = {
        nome: form.nome.value,
        email: form.email.value,
        tel: form.tel.value,
        horario: agendaHorario(),
        mensagem: form.msg.value,
        tipoContato: form.contato.value,
        novidades: form.novidades.checked === true ? novi = 'sim' : novi = 'nao'
    }

    console.log(`
    nome ${pessoa.nome}
    email ${pessoa.email}
    telefone ${pessoa.tel}
    horario ${pessoa.horario}
    mensagem ${pessoa.mensagem}
    tipoContato ${pessoa.tipoContato}
    novidades ${pessoa.novidades}`);
}