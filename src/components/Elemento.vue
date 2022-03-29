<template>
  <div class="elemento">
    <img class="foto" v-bind:src="imagen" alt="Pastel" />
    <span class="nombre-elemento">{{nombre}}</span>
    <p class="precio-elemento">$<span id="precio-elemento">{{precio}}</span>.00</p>
  </div>
</template>
<script>
export default {
    name: 'Elemento',
    props:{
        nombre: String,
        precio: Number,
        imagen: String
    },
}
</script>