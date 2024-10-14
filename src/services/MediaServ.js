import axios from "axios"



const Headers = {
    'content Type' : 'application/json'
}

const  CrearMedia = (media) => {
   const data = {
        serial: media.serial,
        titulo: media.titulo,
        sinopsis: media.sinopsis,
        url: media.url,
        imagen: media.imagen,
        fechaCreacion: media.fechaCreacion,
        fechaEstreno: media.fechaEstreno,
        genero: media.genero,
        director: media.director,
        productora: media.productora,
        tipo: media.tipo

    }
    return axios.post("http://localhost:4000/api/v1/medias" , data,{
        Headers : Headers
    } )
   
}

const consultarMedia = () => {
    return axios.get("http://localhost:4000/api/v1/medias" ,{
        Headers : Headers
    } )


}

const consultarMediaPorID= (id) => {
    return axios.get('http://localhost:4000/api/v1/medias/'+id,{
        Headers : Headers
    } )


}


const editarMediaPorID =(genero, id) => {
   const data = {
        nombre : genero.nombre,
        descripcion : genero.descripcion 

   }
   return axios.put("http://localhost:4000/api/v1/medias/"+id , data,{
       Headers : Headers
   } )
  


}
export {
    CrearMedia,
    consultarMedia,
    consultarMediaPorID,
    editarMediaPorID
}