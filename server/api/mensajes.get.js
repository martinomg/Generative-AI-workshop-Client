import axios from 'axios'

export default defineEventHandler(async(event) => {
    

    console.log('llamando al servidor')
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
    const { data:resultado_mensaje, meta } = data

    console.log('resultado_mensaje',resultado_mensaje)
    console.log('meta',meta)

    return resultado_mensaje
})
  