import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Header from '../layout/Header.vue';
import Login from '../views/Login.vue';
import CadPaciente from '../views/CadastrarPaciente.vue';
import CadNutricionista from '../views/CadastrarNutricionista.vue';
import CadAlimento from '../views/CadastrarAlimento.vue';
import CadRefeicao from '../views/CadastrarRefeicao.vue';
import PacientesCadastrados from '../views/PacientesCadastrados.vue';
import Argon from "../plugins/argon-kit";
import firebase from 'firebase'
import 'firebase/database'

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyDg-AD8p3MTB3GhmLqupSO6TKrNqXun8TI",
  authDomain: "to-de-dieta.firebaseapp.com",
  databaseURL: "https://to-de-dieta.firebaseio.com",
  projectId: "to-de-dieta",
  storageBucket: "to-de-dieta.appspot.com",
  messagingSenderId: "1053641145914",
  appId: "1:1053641145914:web:dd47dc648cd5bc11"
};
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


Vue.use(Router);
Vue.use(Argon);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: {
        header: Header,
        default: HelloWorld
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: Header,
        default: Login
      }
    },
    {
      path: "/cadastrarPaciente",
      name: "cadPaciente",
      components: {
        header: Header,
        default: CadPaciente
      }
    },
    {
      path: "/cadastrarNutricionista",
      name: "cadNutricionista",
      components: {
        header: Header,
        default: CadNutricionista
      }
    },
    {
      path: "/cadastrarAlimento",
      name: "cadAlimento",
      components: {
        header: Header,
        default: CadAlimento
      }
    },
    {
      path: "/cadastrarRefeicao",
      name: "cadRefeicao",
      components: {
        header: Header,
        default: CadRefeicao
      }
    },
    {
      path: "/pacientes",
      name: "PacientesCadastrados",
      components: {
        header: Header,
        default: PacientesCadastrados
      }
    }
  ]
})


