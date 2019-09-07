<template>
    <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">E - mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for:"paciente in pacientes">
                        <td>{{ paciente.nome }}</td>
                        <td>{{ paciente.email }}</td>
                    </tr>
                </tbody>
</template>
<script>
// Componente da lista de pacientes
Vue.component('listaPacientes', {
  props: ['nome','email'],
  template: `<table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">E - mail</th>
                    </tr>
                </thead>
                <tbody v-for:"paciente in pacientes">
                    <tr>
                        <td>{{ paciente.nome }}</td>
                        <td>{{ paciente.email }}</td>
                    </tr>
                </tbody>
                `,
});

import firebase from 'firebase';
let paciente = firebase.database.ref("nutricionistas");
export default {
    name:'VisualizarPacientes',
    firebase:{
        pacientes: paciente
    }
}
</script>