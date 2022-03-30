<template>
    <div class="presentacion">
        <div class="botones">
                <button><router-link to="/">Carta</router-link></button>
                <button><router-link to="/inventario">Inventario</router-link></button>
        </div>
        <h1 class="subtitulo">Relacion de pedidos</h1>
        <div class="pedido">
            <dl>
                <dt><span class="campo">Pedido: </span><span class="dato">1</span></dt>
                <dd><span class="campo">Nombre del Cliente: </span><span class="dato"> Luis Garcia</span></dd>
                <dd><span class="campo">Celular del Cliente: </span><span class="dato"> 9513574682</span></dd>
                <dd><span class="campo">Correo del Cliente: </span><span class="dato">luis@innovaccion.mx</span> </dd>
                <dd><span class="campo">Tamaño del pastel: </span><span class="dato">Chico</span></dd>
                <dd><span class="campo">Sabores: </span>
                    <ul class="dato">
                        <li>Vainilla</li>
                        <li>3 leches</li>
                    </ul>
                </dd>
                <dd><span class="campo">Adornos:</span>
                    <ul class="dato">
                        <li>Vela numerada</li>
                        <li>Letrero "Feliz dia"</li>
                    </ul>
                </dd>
            </dl>
        </div>
        <div class="pedido">
            <dl>
                <dt><span class="campo">Pedido: </span><span class="dato">2</span></dt>
                <dd><span class="campo">Nombre del Cliente: </span><span class="dato"> Oscar rodiles</span></dd>
                <dd><span class="campo">Celular del Cliente: </span><span class="dato"> 6584274682</span></dd>
                <dd><span class="campo">Correo del Cliente: </span><span class="dato">oscar@innovaccion.mx</span> </dd>
                <dd><span class="campo">Tamaño del pastel: </span><span class="dato">Grnade</span></dd>
                <dd><span class="campo">Sabores: </span>
                    <ul class="dato">
                        <li>Fresa</li>
                        <li>3 leches</li>''
                    </ul>
                </dd>
                <dd><span class="campo">Adornos:</span>
                    <ul class="dato">
                        <li>Vela chispas</li>
                        <li>Letrero "Mi graduación"</li>
                    </ul>
                </dd>
            </dl>
        </div>
    </div>
</template>