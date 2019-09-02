<template>
    <div id="login">
        <form>
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
#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#email, #senha{
    margin: 10px;
}
</style>