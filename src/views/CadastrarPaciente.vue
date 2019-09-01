<template>
    <div id="form">
        <form class="col-sm-6">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input v-model="nome" type="text" class="form-control " id="nome" placeholder="Nome">
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
                <label for="peso">Peso</label>
                <input v-model="peso" type="number" class="form-control" id="peso" placeholder="55"><span> kg</span>
            </div>
            <div class="form-group">
                <label for="idade">Idade</label>
                <input v-model="idade" type="number" class="form-control" id="idade" placeholder="13"><span> anos</span>
            </div>
            <div class="form-group">
                <label for="nivelAtividade">Nível de Atividade</label>
                <select v-model="nivelAtividade" class="form-control" id="nivelAtividade">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary" id="btnLogin">Cadastrar Paciente</button>
        </form>
    </div>
</template>
<script>
let paciente = {
        nome: nome,
        telefone: telefone,
        email: email,
        peso: peso,
        idade: idade,
        nivel: nivelAtividade
    }
    console.log(paciente);
    
    //firebase.database().ref('pacientes/'+paciente.telefone)
        //.set(paciente);
</script>
<style>
#form{
    margin:0 auto;
}
</style>