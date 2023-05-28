<script setup>
import { onMounted, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onUpdated, onUnmounted } from 'vue'

let contador = ref(0)

const incrementarContador = () => {
    contador.value++
}

console.log('created INDEX')



onMounted(() => {
    console.log('Componente montado INDEX')
})

onBeforeMount(() => {
    console.log('Antes de montar INDEX')
})

onBeforeUpdate(() => {
    console.log('Antes de actualizar')
})

onUpdated(() => {
    console.log('Actualizado')
})

onBeforeUnmount(() => {
    console.log('Antes de desmontar INDEX')
})

onUnmounted(() => {
		console.log('Desmontado INDEX')
})


</script>

<template>
    <div>
        <a href="https://medium.com/@samiebuka/vue-3-lifecycles-la-gu%C3%ADa-completa-para-construir-aplicaciones-robustas-4d1513ada325" target="_blank" rel="noopener noreferrer">
        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*41xUFKGnL-p-Gwl3BhanKg.png" alt="lifecyles">
        </a>
        <p>artículo original</p>
        <p>Contador: {{ contador }}</p>
        <button @click="incrementarContador">Incrementar contador</button>

        <div>
            Los “lifecycles” o “ciclos de vida” en Vue.js son una serie de etapas por las que pasa un componente desde su creación hasta su destrucción. Cada uno de estos ciclos de vida expone “hooks” o “ganchos” que permiten a los desarrolladores ejecutar código en momentos específicos del ciclo de vida de un componente.

            <ol>
                <li><strong>beforeCreate y created</strong>: En Vue 3, y espec&iacute;ficamente con la Composition API, ya no existen estos ganchos. En su lugar, el c&oacute;digo que normalmente ir&iacute;a aqu&iacute; se coloca en la funci&oacute;n&nbsp;<code>setup</code>.</li>
                <li><strong>beforeMount</strong>: Se llama justo antes de que el componente se monte en el DOM. En este punto, el componente ha sido compilado pero a&uacute;n no se ha renderizado.</li>
                <li><strong>mounted</strong>: Se llama despu&eacute;s de que el componente se ha montado en el DOM. En este punto, puedes acceder al componente en el DOM, por ejemplo, para interactuar directamente con &eacute;l o para hacer algo como una llamada AJAX.</li>
                <li><strong>beforeUpdate</strong>: Se llama cuando los datos cambian y el DOM necesita ser actualizado, pero antes de que se produzca la renderizaci&oacute;n. Es &uacute;til para realizar acciones antes de que la vista sea actualizada.</li>
                <li><strong>updated</strong>: Se llama despu&eacute;s de que los datos cambian y el DOM se vuelve a renderizar. Este hook te permite saber cu&aacute;ndo ha terminado la actualizaci&oacute;n de la vista.</li>
                <li><strong>beforeUnmount</strong>: Se llama justo antes de que el componente se desmonte del DOM, por ejemplo, cuando se est&aacute; navegando a una ruta diferente o cuando el componente se est&aacute; destruyendo. Aqu&iacute; puedes limpiar cualquier cosa que hayas configurado en el componente, como escuchas de eventos o intervalos de tiempo.</li>
                <li><strong>unmounted</strong>: Se llama despu&eacute;s de que el componente se ha desmontado y eliminado del DOM. Aqu&iacute; puedes realizar cualquier limpieza final.</li>
            </ol>
        </div>
			
    </div>
</template>