<template>
	<div>
		Hola ejemplo cambio de ruta
		<p>
			(ver consola)
		</p>
		<pre>
			created EJEMPLO
			Antes de montar EJEMPLO
			Antes de desmontar INDEX
			Componente montado EJEMPLO
			Desmontado INDEX
		</pre>
	</div>
</template>

<script setup>
import { onMounted, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onUpdated, onUnmounted } from 'vue'

const title = 'Vue 3 Lifecycles: Ejemplo cambio de ruta'

useSeoMeta({
  title,
  ogTitle: title,
})


onBeforeMount(() => {
		console.log('Antes de montar EJEMPLO')
})
onMounted(() => {
		console.log('Componente montado EJEMPLO')
})

onBeforeUnmount(() => {
		console.log('Antes de desmontar EJEMPLO')
})
onUnmounted(() => {
		console.log('Desmontado EJEMPLO')
})

console.log('created EJEMPLO')

</script>

<style  scoped>

</style>