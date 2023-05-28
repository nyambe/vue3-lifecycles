<script setup>
import { ref, onBeforeUpdate, watch } from 'vue'
const title = 'Vue 3 Lifecycles: onBeforeUpdate'

useSeoMeta({
  title,
  ogTitle: title,
})

const contador = ref(0)
const incrementos = ref(0)
const multiplos = ref(2)
const totales = ref([])
const clicks = ref(0)

const incrementarContador = () => {
  contador.value++
}

onBeforeUpdate(() => {
  clicks.value++
 if (contador.value > multiplos.value){
   incrementos.value++
   contador.value = 0

 }
})
  
watch(multiplos,(nuevoValor, viejoValor)=>{
     totales.value.push({
     multiplo: viejoValor,
     incrementos: incrementos.value,
     previo: viejoValor,
     actual: nuevoValor,
     clicks: clicks.value
   })
  incrementos.value=0
  clicks.value=0
})
</script>

<template>
  <div>
    <select v-model="multiplos">
      <option>2</option>
      <option>5</option>
      <option>10</option>
      
    </select>
    <h2>
      multiplos de {{multiplos}}
    </h2>
    <p>Contador: {{ contador }}</p>
    <p>Incrementos por multiplo: {{ incrementos }}</p>
    <button @click="incrementarContador">Incrementar contador</button>
    <div v-if="totales.length > 0">
      <ul>
        <li v-for="(item, i) in totales" :key="i">
        multiplo: {{item.multiplo}}, incrementos: {{item.incrementos}},
          clicks: {{item.clicks}}
        </li>
      </ul>
    </div>
		<ul>

      <li>onBeforeUpdate: Este gancho de ciclo de vida se llama justo antes de que la interfaz de usuario se actualice. En este caso, incrementamos clicks en 1 cada vez que se llama, y si contador supera a multiplos, incrementamos incrementos en 1 y restablecemos contador a 0.</li>

    </ul>

  </div>
</template>
