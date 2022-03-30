import { createStore } from 'vuex'

export default createStore({
  state: {
    num_pedidos: 2,
    pedidos: [
      {
        clave: 1,
        cliente: "Luis Garcia",
        celular: "9513574682",
        correo: "luis@innovaccion.mx",
        tam_pastel: "Chico",
        sabores: [
          "Vainilla",
          "Fresa"
        ],
        adornos:[
          "Vela numerada",
          "Letrero 'Feliz Dia"
        ],
        descripcion: "Un pastel para 15vo cumpleaños para varon."
      },
      {
        clave: 2,
        cliente: "Oscar rodiles",
        celular: "9513574682",
        correo: "oscar@innovaccion.mx",
        tam_pastel: "Grade",
        sabores: [
          "Chocolate"
        ],
        adornos:[
          "Vela Chispas",
          "Letrero 'Mi graduación"
        ],
        descripcion: "Un pastel para varon que finaliza su educacion media superior."
      }
    ],
    sabores: [
      {
        clave: 1,
        nombre: "Vainilla",
        precio: 14,
        imagen: require("../assets/pastel.png"),
      },
      {
        clave: 2,
        nombre: "Fresa",
        precio: 14,
        imagen: require("../assets/pastel2.png"),
      },
      {
        clave: 3,
        nombre: "Chocolate",
        precio: 14,
        imagen: require("../assets/pastel3.png"),
      },
      {
        clave: 4,
        nombre: "Trufa",
        precio: 14,
        imagen: require("../assets/pastel.png"),
      },
      {
        clave: 5,
        nombre: "Mont Blank",
        precio: 14,
        imagen: require("../assets/pastel2.png"),
      },
      {
        clave: 6,
        nombre: "Frutos Rojos",
        precio: 14,
        imagen: require("../assets/pastel3.png"),
      },
    ],
    adornos: [
      {
        clave: 1,
        nombre: "Vela Numerada",
        precio: 14,
        imagen: require("../assets/velaNum.png"),
      },
      {
        clave: 2,
        nombre: "Vela Chispas",
        precio: 14,
        imagen: require("../assets/velaChispas.png"),
      },
      {
        clave: 3,
        nombre: "Vela Normal",
        precio: 14,
        imagen: require("../assets/velaNum.png"),
      },
      {
        clave: 4,
        nombre: "Letrero 'Feliz Dia'",
        precio: 14,
        imagen: require("../assets/letrero.png"),
      },
      {
        clave: 5,
        nombre: "Letrero 'Mi graduación'",
        precio: 14,
        imagen: require("../assets/letrero.png"),
      },
      {
        clave: 6,
        nombre: "Muñeco de cera infantil",
        precio: 14,
        imagen: require("../assets/muñeco.png"),
      },
      {
        clave: 7,
        nombre: "Muñeco de cera para boda",
        precio: 14,
        imagen: require("../assets/muñeco.png"),
      }
    ],
  },
  getters: {
    getNumPedidos(state){
      return state.num_pedidos;
    },
    getPedidos(state){
      return state.pedidos;
    },
    getSabores(state){
      return state.sabores;
    },
    getAdornos(state){
      return state.adornos;
    }
  },
  mutations: {
    agregarPedido(state, pedido){
      state.pedidos.push(pedido);
    },
    subirNumPedidos(state){
      state.num_pedidos++;
    }
  },
  actions: {
  },
  modules: {
  }
})
