<script setup>
import { ref, onBeforeUnmount } from 'vue'

const title = 'Vue 3 Lifecycles: onBeforeUnmount'

useSeoMeta({
  title,
  ogTitle: title,
})


let interval = null
const contador = ref(0)

// Incrementa el contador cada segundo
interval = setInterval(() => {
  contador.value++
}, 1000)

onBeforeUnmount(() => {
  console.log('Antes de desmontar BEFORE-UNMOUNT')
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<template>
  <div>

    <p>Tiempo transcurrido: {{ contador }} segundos.</p>

    <div>
    En este ejemplo, tenemos un contador que se incrementa cada segundo.
      Cuando el componente se desmonta, onBeforeUnmount se llama y se detiene el contador.

      Esto es especialmente importante para los recursos como los temporizadores de intervalo,
      ya que si no los limpiamos, podrían seguir funcionando incluso después de que el componente se haya desmontado,
      lo que podría causar errores o comportamientos inesperados.

      El gancho de ciclo de vida onBeforeUnmount es un lugar ideal para colocar este tipo de limpieza de recursos,
      ya que se llama justo antes de que se desmonte el componente, asegurando que cualquier recurso que el componente estaba utilizando se limpie correctamente.

  </div>

  </div>

</template>
