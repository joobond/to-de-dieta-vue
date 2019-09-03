<template>
    <div id="form">
        <form>
            <div class="form-group">
                <label for="descricao">Descrição</label>
                <input type="text" class="form-control" id="descricao" placeholder="Descrição">
            </div>
            <div class="form-group">
                <label for="porcao">Porção</label>
                <input type="text" class="form-control" id="porcao" placeholder="100">
            </div>
           <div class="form-group">
                <label for="unidade">Selecione a unidade</label>
                <select class="form-control" id="unidade">
                    <option>Colheres</option>
                    <option>Gramas</option>
                    <option>Pedaços</option>
                </select>
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
    name: 'cadAlimento',
    data(){
        return{
            nome: ''
        }
    },
    methods:{
        cadastrar: function () {
        let alimento = {
            descricao: descricao.value,
            porcao: porcao.value,
            unidade: unidade.value,
        }
        firebase.database().ref('alimentos/'+uuidv4())
            .set(alimento);
            console.log(id.toString)
            console.log(alimento);
            
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