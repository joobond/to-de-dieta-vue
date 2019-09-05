<template>
    <header class="header-global" id="nav">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <span id="logo">Tô de Dieta!</span>
            </router-link>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Início</span>
                    </a>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Cadastro</span>
                    </a>
                    <router-link to="/cadastrarPaciente" class="dropdown-item">Cadastrar Paciente</router-link>
                    <router-link to="/cadastrarAlimento" class="dropdown-item">Cadastrar Alimento</router-link>
                    <router-link to="/cadastrarRefeicao" class="dropdown-item">Cadastrar Refeicao</router-link>
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a @click="sair" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-sign-in mr-2"></i>
                </span>
                        <router-link @click="sair" class="nav-link-inner--text" id="loginGeral"></router-link>
                    </a>
                </li>
                <li class="nav-item">{{ usuario }}</li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import firebase from 'firebase';
import config from '../plugins/config';

firebase.initializeApp(config);
let caracteres = ['','*','.','@','+','-','_'];
let nome =  null;
function removerCaracteresEspeciais(texto, caracteres){
    caracteres.forEach(caracter => texto = texto.replace(caracter,''));
    return texto;
}
export default {
  data:{
     usuario: this.nome
  },  
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  methods:{
      sair: function () {
          firebase.auth().signOut().then(
              () =>{
                  this.$router.replace('login')
              }
          );
      }
  },
  mounted: function () {
    let user = firebase.auth().currentUser;
    let emailCurrent = null;
    let emailNovo = null;
    let nome = null;

    if(user != null){
        user.providerData.forEach(function (profile) {
            emailCurrent = profile.email;
    });
    emailNovo = removerCaracteresEspeciais(emailCurrent, caracteres);
    nome = firebase.database().ref('nutricionistas/' + emailNovo).once('nome');
    debugger
}
  }
};
</script>
<style>
#loginGeral{
    text-decoration: none;
    color: black;
}
#logo{
    font-size: 1.5rem;
    font-weight: bold;
}
#nav{
    background-color: azure;
}
</style>
