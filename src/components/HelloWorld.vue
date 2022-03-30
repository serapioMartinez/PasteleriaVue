<template>
  <Admin />
  <section>
    <div class="presentacion">
      <h1 class="titulo">PASTENAUTA</h1>
      <p class="frase">"Lo que se hace con amor esta bien hecho."</p>
      <span class="autor">-Vincent Van Gogh-</span>
      <div class="botones">
        <button><router-link to="/#carta">Carta</router-link></button>
        <button><router-link to="/formulario">Formulario</router-link></button>
      </div>
    </div>
  </section>
  <section id="carta">
    <h2 class="subtitulo">CARTA DE PRODUCTOS</h2>
    <div class="pasteles division-carta">
      <h3 class="carta-titulo">PASTELES</h3>
      <Elemento
        v-for="sabor in $store.getters.getSabores"
        :key="sabor.clave"
        :nombre="sabor.nombre"
        :precio="sabor.precio"
        :imagen="sabor.imagen"
      />

      <hr />
    </div>
    <div class="adornos division-carta">
      <h3 class="carta-titulo">ADORNOS</h3>
      <Elemento
        v-for="adorno in $store.getters.getAdornos"
        :key="adorno.clave"
        :nombre="adorno.nombre"
        :precio="adorno.precio"
        :imagen="adorno.imagen"
      />

      <hr />
    </div>
  </section>
</template>

<script>
import Elemento from "@/components/Elemento.vue";
import Admin from "@/components/Admin.vue";

export default {
  name: "HelloWorld",
  components: {
    Elemento,
    Admin,
  },
};
</script>