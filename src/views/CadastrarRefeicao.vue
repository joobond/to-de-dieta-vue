<template>
    <div id="form">
        <form>
            <div class="form-group">
                <label for="nome">Descrição</label>
                <input type="text" class="form-control" id="descricao" placeholder="Descrição">
            </div>
            <button @click="cadastrar" class="btn btn-primary" id="btnLogin">Cadastrar</button>
        </form>
    </div>
</template>
<script>
import firebase from 'firebase';

const uuidv4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    });
}
export default {
    name: 'cadRefeicao',
    data(){
        return{
            nome: ''
        }
    },
    methods:{
        cadastrar: function () {
        let refeicao = {
            descricao: descricao.value
        }
        firebase.database().ref('refeicoes/'+uuidv4())
            .set(refeicao);  
        }
    }

}
</script>
<style scoped>
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