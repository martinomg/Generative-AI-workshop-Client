<script setup>
import axios from 'axios'
const consulta = ref('')
const mensajes = ref([])


const ultima_pregunta = ref(null)
const ultima_respuesta = ref(null)

const generando = ref(false)

let intervalo_revision_mensaje;

const llamar_mensajes = async() =>{ 
    const api_url = '/api/mensajes'
    try {
        const api_url = 'http://127.0.0.1:8078'
        const path_mensajes = '/items/mensajes'
        const {data} = await axios.get(`${api_url}${path_mensajes}`,{
          params: {
            meta: "*",
            limit: 1,
            sort: '-date_created',
            fields: ['mensaje','respuesta']
          }
        })

        const {data:resultado_mensaje} = data
        const ultimo_mensaje = resultado_mensaje[0]
        ultima_pregunta.value = ultimo_mensaje.mensaje

        if(ultimo_mensaje.respuesta){
            ultima_respuesta.value = ultimo_mensaje.respuesta
            clearInterval(intervalo_revision_mensaje)
            generando.value = false
        }
    } catch (error) {
        console.error('@llamar_mensajes',error)
    }
}


const crear_mensaje = async() => {
    const api_url = 'http://127.0.0.1:8078'
    const path_mensajes = '/items/mensajes'

    try {
        const resultado = await axios.post(`${api_url}${path_mensajes}`, {
            mensaje: consulta.value
        })
        generando.value = true
        consulta.value = ''
        clearInterval(intervalo_revision_mensaje)
        intervalo_revision_mensaje = setInterval(llamar_mensajes, 500);
    } catch (error) {
        console.error('@crear_mensaje',error)
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
            <div class="flex gap-5 py-5 items-center">
                <input-text type="text" v-model="consulta" size="small" :disabled="generando"></input-text>
                <Button label="Generar" severity="contrast" size="small" @click="crear_mensaje" :disabled="generando" />
                <icon name="svg-spinners:180-ring-with-bg" size="24" v-if="generando" />
            </div>
        </div>
        <div class="p-10 text-center">
            {{ consulta || 'No definido' }}
        </div>
        <div class="text-center my-5"><Button label="Llamar mensajes" severity="contrast" size="small" @click="llamar_mensajes" /></div>
        
        <div class="container mx-auto grid grid-cols-2">
            <div>
                {{ ultima_pregunta }}
            </div>
            <div>
                {{ ultima_respuesta }}
            </div>
        </div>
    </div>
</template>