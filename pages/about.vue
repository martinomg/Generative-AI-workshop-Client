<script setup>
import axios from 'axios'
const consulta = ref('')
const mensajes = ref([])


const llamar_mensajes = async() =>{ 
    const api_url = 'http://127.0.0.1:8078'
    const path_mensajes = '/items/mensajes'
    try {
        const resultado = await axios.get(`${api_url}${path_mensajes}`)
        console.log('@llamar_mensajes resultado', resultado)
    } catch (error) {
        console.error('@llamar_mensajes',error)
    }
}

</script>
<template>
    <div>
        <div class="flex flex-col justify-center items-center bg-slate-200 aspect-square md:aspect-[16/6]">
            <div class="flex flex-col items-center">
                <div class="text-4xl font-bold">Recomendador de viajes</div>
                <div class="text-lg">Ingresa tu destino deseado y te daremos una recomendación acorde a eso</div>
            </div>
            <div class="flex gap-5 py-5">
                <input-text type="text" v-model="consulta" size="small"></input-text>
                <Button label="Generar" severity="contrast" size="small" />
            </div>
        </div>
        <div class="p-10 text-center">
            {{ consulta || 'No definido' }}
        </div>
        <Button label="Llamar mensajes" severity="contrast" size="small" @click="llamar_mensajes" />
        
        <div class="container mx-auto">
            {{ mensajes }}
        </div>
    </div>
</template>