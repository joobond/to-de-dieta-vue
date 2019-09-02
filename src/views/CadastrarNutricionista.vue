<template>
    <div id="form">
        <form>
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome" placeholder="Nome">
            </div>
            <div class="form-group">
                <label for="telefone">Telefone</label>
                <input type="phone" class="form-control" id="telefone" placeholder="(XX) X XXXX XXXX">
            </div>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" id="email" placeholder="example@mail.com">
            </div>
            <div class="form-group">
                <label for="crn">CRN</label>
                <input type="number" class="form-control" id="crn" placeholder="XXXX">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" id="senha" placeholder="Digite uma senha forte">
            </div>
            <button @click="cadastrar" class="btn btn-primary" id="btnLogin">Cadastrar</button>
        </form>
    </div>
</template>
<script>
import firebase from 'firebase';

export default {
    name: 'cadastrar',
    data(){
        return{
            email: '',
            senha: '',
        }
    },
    methods:{
        cadastrar: function () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.senha)
                .then(
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