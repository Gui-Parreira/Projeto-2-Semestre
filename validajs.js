    function valform() {
      var nome = formproject.camponame.value;
      var tel = formproject.campotel.value;
      var emaill = formproject.campoemail.value;
      
      if (nome == "" || nome == null) {
          alert("Preencha o campo Nome.");
          formproject.camponame.focus();
          return false;
      }
      else if (isNaN(tel) || tel == "" || tel == null) {
          alert("Preencha o campo Telefone utilizando apenas números.");
          formproject.campotel.focus();
          return false;
      }
      else if (emaill == "" || emaill == null || emaill.indexOf('@') == -1 || emaill.indexOf('.') == -1) {
         alert(" Preencha o campo E-mail, utilizando @ e . ");
          formproject.campoemail.focus();
          return false;
      }
      else {
          alert("Dados enviados com sucesso.");
      }
}


