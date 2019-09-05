import Vue from 'vue';
import Router from 'vue-router';
import Argon from "../plugins/argon-kit";
import firebase from 'firebase'
import 'firebase/database'
import { nextTick } from 'q';

import Header from '../layout/Header.vue';
import Login from '../views/Login.vue';
import CadPaciente from '../views/CadastrarPaciente.vue';
import CadNutricionista from '../views/CadastrarNutricionista.vue';
import CadAlimento from '../views/CadastrarAlimento.vue';
import CadRefeicao from '../views/CadastrarRefeicao.vue';
import PacientesCadastrados from '../views/PacientesCadastrados.vue';


// // TODO: Replace the following with your app's Firebase project configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyDg-AD8p3MTB3GhmLqupSO6TKrNqXun8TI",
//   authDomain: "to-de-dieta.firebaseapp.com",
//   databaseURL: "https://to-de-dieta.firebaseio.com",
//   projectId: "to-de-dieta",
//   storageBucket: "to-de-dieta.appspot.com",
//   messagingSenderId: "1053641145914",
//   appId: "1:1053641145914:web:dd47dc648cd5bc11"
// };

//  firebase.initializeApp(firebaseConfig);


Vue.use(Router);
Vue.use(Argon);

  const router = new Router({
  history: true,
  data:{
    usuario: this.currentUser
  },
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: "/login",
      name: "login",
      components: {
        default: Login
      }
    },
    {
      path: "/cadastrarPaciente",
      name: "cadPaciente",
      components: {
        header: Header,
        default: CadPaciente
      },
      meta: {
        requiresAuth: true
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
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/cadastrarRefeicao",
      name: "cadRefeicao",
      components: {
        header: Header,
        default: CadRefeicao
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/pacientes",
      name: "PacientesCadastrados",
      components: {
        header: Header,
        default: PacientesCadastrados
      },
      meta: {
        requiresAuth: true
      }
    }
  ]
  });

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('cadastrarPaciente');
  else next();
});

export default router;


