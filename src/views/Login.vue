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
            <button type="submit" class="btn btn-primary" id="btnLogin">Entrar</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'login',
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