<template>
    <ul>
        <li v-for="paciente in pacientes" :key="paciente">{{paciente.nome}}</li>
    </ul>
</template>
<script>
import firebase from 'firebase';
import Vue from 'vue';
let paciente_ref = firebase.database().ref('/pacientes/69992019585');
var nome = null;
paciente_ref.once('value').then(function(snapshot) {
   nome = snapshot.val().nome;
});

console.log(nome);

function visualizarPaciente(){
    paciente.once('child_changed').then(function (snapshot){
        if(snapshot.key == 'nome'){
            console.log('Nome alterado', snapshot.val());
            return{ success: true, message: 'Nome alterado', data: snapshot.val()}
        }else if(snapshot.key == 'email'){
            console.log('Email alterado', snapshot.val());
            return{ success: true, message: 'Email alterado', data: snapshot.val()}

        }
    })
    .catch(function(error){
        return {sucess: false, message: 'Dados inválidos: ${error.message}'}
    });
}

export default {
    data() {
        return {
            pacientes: listaPacientes
        };
    }
}
</script>