<template>
    <div id="login">
        <form>
            <img src="../assets/logo.png" class="imgLogo">
            <div class="form-group">
                <label for="email">Endereço de email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite seu e-mail">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" id="senha" placeholder="Digite sua senha">
            </div>
            <button @click="login" class="btn btn-primary" id="btnLogin">Entrar</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'login',
  data(){
      return{
          email: '',
          senha: ''
      }
  }, 
  methods:{
      login: function(){
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
              (user) => {
                  this.$router.replace('cadastrarPaciente')
              },
              (err) => {
                  alert('Oops. '+err.message)
              }
          );
      }

  }
}
</script>

<style>
#imgLogo{
    width: 100%;
  height: auto;
}
#email, #senha{
    margin: 10px;
}
#login{
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
    margin-top: 200px;
}
.btn{
    width: 100%;
    margin: 10px;
}
</style>