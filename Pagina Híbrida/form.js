function Enviar() {

    var nome = document.getElementById("nomeid");
    var email = document.getElementById("emailid");
    var telefone = document.getElementById("telefoneid");
    var mensagem = document.getElementById("mensagemid");
  
    if (nome.value == "") {
        alert("Nome não informado");
        email.focus();
        return;
      }

    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
        return;
      }

      if (telefone.value == "") {
        alert("Telefone não informado");
        telefone.focus();
        return;
      }

      if (mensagem.value=="")
        {
        alert( "Preencha o campo Mensagem" );
        mensagem.focus();
        return;
        }
}