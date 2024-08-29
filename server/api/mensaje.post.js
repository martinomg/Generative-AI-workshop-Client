import axios from 'axios'


export default defineEventHandler(async(event) => {
    const body = await readBody(event)
    const api_url = 'http://127.0.0.1:8078'
    const path_mensajes = '/items/mensajes'

    const {mensaje} = body
    axios.post(`${api_url}${path_mensajes}`,{ mensaje }).then(res=>{
        console.log('@mensajes.post success', res)
    }).catch(error=>{
        console.log('@mensajes.post error', error)
    })

    return { ...body }
})