<template>
    <div id="login">
        <form>
            <img src="../assets/logo.png" id="imgLogo">
            <div class="form-group">
                <label for="email">Endereço de email</label>
                <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite seu e-mail">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input v-model="senha" type="password" class="form-control" id="senha" placeholder="Digite sua senha">
            </div>
            <p>
                Você não tem conta?
                <span>
                    <router-link to="/cadastrarNutricionista">crie uma conta</router-link>
                </span>
            </p>
            <button @click="login" class="btn btn-primary" id="btnLogin">Entrar</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'login',
 
  methods:{
      login: function(){
          firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
              (user) => {
                  this.$router.replace('cadastrarPaciente')
                  alert(`Bem Vindo, ${{email}}`)
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
    max-width: 200px;
    width: 100%;
    height: auto;
    margin-bottom: 30px;
}
#email, #senha{
    margin: 10px;
}
#login{
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
    margin-top: 100px;
}
.btn{
    width: 100%;
    margin: 10px;
}
</style>