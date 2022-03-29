<template>
    <div class="presentacion">
        <h1 class="subtitulo">Pedido del cliente</h1>
        <form action="./pedido_realizado.html">
        <div>
            <label for="nombre_cliente">Nombre del cliente:</label>
            <input type="text" name="nombre_cliente" id="nombre_cliente">
            <br>
            <label for="numero_celular">Celular del cliente:</label>
            <input type="number" name="numero_celular" id="numero_celular">
            <br>
            <label for="correo_cliente">Correo del cliente:</label>
            <input type="email" name="correo_cliente" id="correo_cliente">
            <br>
            <label for="descripcion">Descripcion general del pedido:</label><br>
            <textarea name="descripcion" id="descripcion" cols="30" rows="10"></textarea>
            <br>
            <label for="dimension">Tamaño del pastel:</label>
            <select name="dimension" id="dimension">
                <option value="chico">Chico</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
                <option value="reactangular">Rectangular Grande</option>
            </select>
        </div>
        <div>
            <h3 class="carta-titulo">Sabores de pasteles</h3>
            <p>Puede combinar los sabores que desee, solo tendra que seleccionarlos</p>
            <table>
                <Combinador nombre="Vainilla" precio="14" tipo="sabor_pastel"/>
                <Combinador nombre="Fresa" precio="14" tipo="sabor_pastel"/>
                <Combinador nombre="Chocolate" precio="14" tipo="sabor_pastel"/>
                <Combinador nombre="Moka" precio="14" tipo="sabor_pastel"/>
                <Combinador nombre="Late" precio="14" tipo="sabor_pastel"/>
                <Combinador nombre="3 leches" precio="14" tipo="sabor_pastel"/>
            </table>
        </div>
        <div>
            <h3 class="carta-titulo">Adornos para pasteles</h3>
            <p>Puede combinar los adornos que desee, solo tendra que seleccionarlos</p>
            <table>
                <Combinador nombre="Vela Numerada" precio="14" tipo="tipo_decoracion"/>
                <Combinador nombre="Vela Chispas" precio="14" tipo="tipo_decoracion"/>
                <Combinador nombre="Vela Normal" precio="14" tipo="tipo_decoracion"/>
                <Combinador nombre="Letrero 'Feliz dia'" precio="14" tipo="tipo_decoracion"/>
                <Combinador nombre="Letrero 'Mi graduación'" precio="14" tipo="tipo_decoracion"/>
                <Combinador nombre="Muñeco de cera infantil" precio="14" tipo="tipo_decoracion"/>
                <Combinador nombre="Muñeco de cera para boda" precio="14" tipo="tipo_decoracion"/>
            </table>
        </div>
        <input class="boton" type="submit" value="Registrar pedido">
    </form>
    </div>
</template>
<script>
import Combinador from '@/components/Combinador.vue';
export default {
    name: 'Formulario',
    components: {
        Combinador
    }
}
</script>