<template>
  <tr>
    <td>{{nombre}} -></td>
    <td>${{precio}}.00</td>
    <td>
      <input
        type="checkbox"
        :name="tipo"
        :value="nombre"
      />
    </td>
  </tr>
</template>
<script>
export default {
    name: 'Combinador',
    props: {
        nombre: String,
        precio: Number,
        tipo: String
    }
}
</script>