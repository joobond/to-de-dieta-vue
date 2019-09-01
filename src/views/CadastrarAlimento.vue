<template>
    <div id="form">
        <form>
            <div class="form-group">
                <label for="nome">Descrição</label>
                <input type="text" class="form-control" id="descricao" placeholder="Descrição">
            </div>
            <div class="form-group">
                <label for="porcao">Porção</label>
                <input type="text" class="form-control" id="porcao" placeholder="100">
            </div>
           <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Colheres</option>
                    <option>Gramas</option>
                    <option>Pedaços</option>
                </select>
           </div>
            <button type="submit" class="btn btn-primary" id="btnLogin">Cadastrar</button>
        </form>
    </div>
</template>