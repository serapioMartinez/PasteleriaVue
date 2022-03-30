<template>
  <div class="presentacion">
    <h1 class="subtitulo">Pedido del cliente</h1>

    <div>
      <label for="nombre_cliente">Nombre del cliente:</label>
      <input
        v-model="pedido.cliente"
        type="text"
        name="nombre_cliente"
        id="nombre_cliente"
      />
      <br />
      <label for="numero_celular">Celular del cliente:</label>
      <input
        v-model="pedido.celular"
        type="number"
        name="numero_celular"
        id="numero_celular"
      />
      <br />
      <label for="correo_cliente">Correo del cliente:</label>
      <input
        v-model="pedido.correo"
        type="email"
        name="correo_cliente"
        id="correo_cliente"
      />
      <br />
      <label for="descripcion">Descripcion general del pedido:</label><br />
      <textarea
        v-model="pedido.descripcion"
        name="descripcion"
        id="descripcion"
        cols="30"
        rows="10"
      ></textarea>
      <br />
      <label for="dimension">Tamaño del pastel:</label>
      <select name="dimension" id="dimension" v-model="pedido.tam_pastel">
        <option value="chico" selected>Chico</option>
        <option value="mediano">Mediano</option>
        <option value="grande">Grande</option>
        <option value="reactangular">Rectangular Grande</option>
      </select>
    </div>
    <div>
      <h3 class="carta-titulo">Sabores de pasteles</h3>
      <p>
        Puede combinar los sabores que desee, solo tendra que seleccionarlos
      </p>
      <table>
        <tr v-for="sabor in $store.getters.getSabores"
          :key="sabor.clave">
          <td>{{ sabor.nombre }} -></td>
          <td>${{ sabor.precio }}.00</td>
          <td>
            <input type="checkbox" :value="sabor.nombre" v-model="pedido.sabores"/>
          </td>
        </tr>
      </table>
    </div>
    <div>
      <h3 class="carta-titulo">Adornos para pasteles</h3>
      <p>
        Puede combinar los adornos que desee, solo tendra que seleccionarlos
      </p>
      <table>
          <tr v-for="adorno in $store.getters.getAdornos"
          :key="adorno.clave">
          <td>{{ adorno.nombre }} -></td>
          <td>${{ adorno.precio }}.00</td>
          <td>
            <input type="checkbox" :value="adorno.nombre" v-model="pedido.adornos"/>
          </td>
        </tr>
      </table>
    </div>
    <button value="Registrar pedido" v-on:click="realizarPedido">
      RegistrarPedido
    </button>
  </div>
</template>
<script>
export default {
  name: "Formulario",
  data() {
    return {
      pedido: {
        clave: this.$store.getters.getNumPedidos+1,
        cliente: null,
        celular: null,
        correo: null,
        tam_pastel: null,
        sabores: [],
        adornos: [],
        descripcion: null,
      },
    };
  },
  methods: {
    realizarPedido() {
      console.log(this.pedido);
      this.$store.commit("agregarPedido",this.pedido);
      this.$store.commit("subirNumPedidos");
      console.log(this.$store.getters.getNumPedidos);
      alert("Pedido realizado");
    },
  },
};
</script>