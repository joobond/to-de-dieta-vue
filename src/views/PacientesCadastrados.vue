<template>
<ul id="v-for-object" class="demo">
    <ul>
        <li id="teste"></li>
    </ul>
</ul>
</template>
<script>
let object = firebase.database().ref('/pacientes/6933225579')
teste = document.getElementById("#teste");
console.log(teste.value);

new Vue({
    el:'#v-for-object',
    data:{
        object:{
            object
        }
    }
})

</script>