<template>
    <div id="form">
        <form class="">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input  type="text" class="form-control " id="nome" placeholder="Nome">
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
                <label for="peso">Peso</label>
                <input type="number" class="form-control" id="peso" placeholder="55">
            </div>
            <div class="form-group">
                <label for="idade">Idade</label>
                <input type="number" class="form-control" id="idade" placeholder="13">
            </div>
            <div class="form-group">
                <label for="nivelAtividade">Nível de Atividade</label>
                <select class="form-control" id="nivelAtividade">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <button @click="cadastrar" class="btn btn-primary" id="btnLogin">Cadastrar Paciente</button>
        </form>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    name: 'cadPaciente',
    data(){
        return{
            nome: ''
        }
    },
    methods:{
        cadastrar: function () {
        let paciente = {
            nome: nome.value,
            telefone: telefone.value,
            email: email.value,
            peso: peso.value,
            idade: idade.value,
            nivel: nivelAtividade.value
        }
        firebase.database().ref('pacientes/'+telefone.value)
            .set(paciente);
            //console.log(paciente);
            
        }
    }

}

</script>
<style>
#form{
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    margin-top: 100px;
}
.btn{
    width: 100%;
}
.form-control{
    max-width: 700px;
    width:100%;
    margin: 0 auto;
}
.form-group{
    display: flex;
    
}
</style>