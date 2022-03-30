<template>

    <Admin/>
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
            <Elemento nombre="Vainilla" :precio="14" :imagen="require('../assets/pastel.png')" />
            <Elemento nombre="Fresa" :precio="14" :imagen="require('../assets/pastel2.png')" />
            <Elemento nombre="Chocolate" :precio="14" :imagen="require('../assets/pastel3.png')" />
            <Elemento nombre="Trufa" :precio="14" :imagen="require('../assets/pastel.png')" />
            <Elemento nombre="Mont Blank" :precio="14" :imagen="require('../assets/pastel2.png')" />
            <Elemento nombre="Frutos rojos" :precio="14" :imagen="require('../assets/pastel3.png')" />
            <hr>
        </div>
        <div class="adornos division-carta">
            <h3 class="carta-titulo">ADORNOS</h3>
            <Elemento nombre="Vela Numerada" :precio="14" :imagen="require('../assets/velaNum.png')" />
            <Elemento nombre="Vela de Chispas" :precio="14" :imagen="require('../assets/velaChispas.png')" />
            <Elemento nombre="Vela de Normal" :precio="14" :imagen="require('../assets/velaNum.png')" />
            <Elemento nombre="Letrero 'Feliz dia'" :precio="14" :imagen="require('../assets/letrero.png')" />
            <Elemento nombre="Letrero 'Mi graduación'" :precio="14" :imagen="require('../assets/letrero.png')" />
            <Elemento nombre="Muñeco de cera infantil" :precio="14" :imagen="require('../assets/muñeco.png')" />
            <Elemento nombre="Muñeco de cera para boda" :precio="14" :imagen="require('../assets/muñeco.png')" />
            
            <hr>
        </div>
    </section>
</template>

<script>
import Elemento from '@/components/Elemento.vue';
import Admin from '@/components/Admin.vue'

export default {
  name: 'HelloWorld',
  components:{
    Elemento,
    Admin
  }
}
</script>