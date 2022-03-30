<template>
    <div class="presentacion">
        <div class="botones">
                <button><router-link to="/">Carta</router-link></button>
                <button><router-link to="/inventario">Inventario</router-link></button>
        </div>
        <h1 class="subtitulo">Relacion de pedidos</h1>
        <div class="pedido" v-for="pedido in $store.getters.getPedidos" :key="pedido.clave">
            <dl>
                <dt><span class="campo">Pedido: </span><span class="dato">{{pedido.clave}}</span></dt>
                <dd><span class="campo">Nombre del Cliente: </span><span class="dato">{{pedido.cliente}}</span></dd>
                <dd><span class="campo">Celular del Cliente: </span><span class="dato"> {{pedido.celular}}</span></dd>
                <dd><span class="campo">Correo del Cliente: </span><span class="dato">{{pedido.correo}}</span> </dd>
                <dd><span class="campo">Tamaño del pastel: </span><span class="dato">{{pedido.tam_pastel}}</span></dd>
                <dd><span class="campo">Sabores: </span>
                    <ul class="dato">
                        <li v-for="sabor in pedido.sabores" :key="sabor">{{sabor}}</li>
                    </ul>
                </dd>
                <dd><span class="campo">Adornos:</span>
                    <ul class="dato">
                        <li v-for="adorno in pedido.adornos" :key="adorno">{{adorno}}</li>
                    </ul>
                </dd>
                <dd><span class="campo">Descripcion: </span>
                    <ul class="dato">
                        <li>{{pedido.descripcion}}</li>
                    </ul>
                </dd>
            </dl>
        </div>
    </div>
</template>