<template>
    <div class="presentacion">
        <div class="botones">
                <button><router-link to="/">Carta</router-link></button>
                <button><router-link to="/pedidos">Relacion de pedidos</router-link></button>
        </div>
        <div>
            <h2 class="carta-titulo">Inventario pasteles</h2>
            <table>
                <tr>
                    <th>Sabor</th>
                    <th>Existencia</th>
                </tr>
                <tr>
                    <td>Vainilla</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>Fresa</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Chocolate</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Moka</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Late</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3 leches</td>
                    <td>4</td>
                </tr>
            </table>
        </div>
        <div>
            <h2 class="carta-titulo">Inventario adornos</h2>
            <table>
                <tr>
                    <th>Adorno</th>
                    <th>Existencia</th>
                </tr>
                <tr>
                    <td>Vela chispas</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>Velas nornales</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Letrero "Feliz dia"</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Letrero "Mi graduacion"</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Muñeco de cera infantil</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Muñeco de cera para boda</td>
                    <td>4</td>
                </tr>
            </table>
        </div>
    </div>
</template>