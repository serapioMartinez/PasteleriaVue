<template>
  <router-view/>
  <Footer/>
</template>
<script>
import Footer from './components/Footer.vue'
export default {
    name: 'App',
    components:{
        Footer
    }
}
</script>
<style>
@font-face {
    font-family: Lord;
    src: url("./assets/SnappyServiceNF.ttf");
}
*{
    margin: 0px;
    text-align: center;
    font-family: 'Lord';
    font-size: 1.5rem;
    color: black;
    font-weight: bold;
}
#admin{
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 0.2rem;
    font-size: 0.4rem;
    background-color: rgba(240, 248, 255, 0.7);
}
body{
    background-image: url("./assets/white-flower-with-cooking-ingredients-table.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.presentacion{
    background-color: rgba(240, 248, 255, 0.7);
    margin: 2rem;
    padding: 1rem;
    justify-content: center;
    border-radius: 10px;
}
.titulo{
    font-size: 3rem;
    color: rgb(106, 45, 124);
}
.subtitulo{
    font-size: 2.2rem;
    color: rgb(90, 29, 109);
    text-align: left;
}
.carta-titulo{
    font-size: 1.8rem;
    font-weight: 600;
    padding-left: 1.2rem;
    padding-top: 0.5rem;
    color: rgb(90, 29, 109);
    text-align: left;
    display: block;
    width: 100%;
}
.frase{
    font-size: 1.5rem;
    font-weight: 400;
}
.autor{
    font-size: 1rem;
    font-weight: 200;
}
button, .boton{
    border-radius: 5px;
    font-size: 1.5rem;
    font-weight: 500;
    background-color: rgb(218, 191, 156);
}
button:hover, .boton:hover{
    background-color: rgb(202, 211, 123);
}
#carta{
    background-color: rgba(255, 255, 255, 0.897);
    padding: 2rem;
    border-top-right-radius: 20%;
}
.division-carta{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
}
.elemento{
    background: linear-gradient(0deg, rgb(180, 179, 131) 0%, rgba(245,245,245,0) 68%);
    border-radius: 10px;
    margin: 0.5rem;
    padding: 0.5rem;
    width: 300px;
}
.foto{
    border-radius: 50%;
    width: 100%;
}
.nombre-elemento{
    display: block;
    font-size: 2rem;
    font-weight: 300;
}
hr{
    width: 100%;
    height: 3px;
    background-color: black;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgb(59, 58, 58);
}
.pedido{
    width: 90%;
    background-color: antiquewhite;
    margin: 1rem auto;
    padding: 1rem;
}
.pedido *{
    text-align: left;
    justify-content: left;
    margin-bottom: 0.5rem;
}
.dato{
    background-color: white;
    margin-left: 0.5rem;
    padding: 0.1rem;
    border-radius: 5px;
}
.footer{
    padding: 1rem;
    background-color: rgba(158, 61, 61, 0.884);
}
a{
    text-decoration: none;
    font-weight: 400;
}
label, input,textarea{
    margin-bottom: 1rem;
}
table{
    margin: auto;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: solid 2px black;
}
th, .campo{
    color: rgb(33, 33, 153);
    text-decoration: underline;
}
li{
    list-style: none;
}
</style>
