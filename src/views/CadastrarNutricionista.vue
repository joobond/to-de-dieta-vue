<template>
    <div id="form">
        <form>
            <div class="form-group">
                <label for="nome">Nome</label>
                <input v-model="nome" type="text" class="form-control" id="nome" placeholder="Nome">
            </div>
            <div class="form-group">
                <label for="telefone">Telefone</label>
                <input v-model="telefone" type="phone" class="form-control" id="telefone" placeholder="(XX) X XXXX XXXX">
            </div>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="example@mail.com">
            </div>
            <div class="form-group">
                <label for="crn">CRN</label>
                <input v-model="crn" type="number" class="form-control" id="crn" placeholder="XXXX">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input v-model="senha" type="password" class="form-control" id="senha" placeholder="Digite uma senha forte">
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
            nome: '',
            crn: '',
            telefone: '',
            email: '',
            senha: ''
        }
    },
    methods:{
        cadastrar: function () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.senha)
                .then(
                    (user) => {
                        let nutricionista  ={
                            nome: this.nome,
                            crn: this.crn,
                            telefone: this.telefone,
                            email: this.email
                        };
                        let emailNovo = this.email.split('@')[0];
                        firebase.database().ref('nutricionistas/'+this.emailNovo)
                            .set(nutricionista);
                        this.$router.replace('cadastrarPaciente')
                        alert('Sua conta foi cadastrata com sucesso!')
                    },
                    (err) => {
                        alert('Oops. '+err.message)
                    }
                );
        }
    }
}
</script>