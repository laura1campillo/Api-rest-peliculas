import axios from "axios"



const Headers = {
    'content Type' : 'application/json'
}

const  CrearGenero = (genero) => {
   const data = {
         nombre : genero.nombre,
         descripcion : genero.descripcion 

    }
    return axios.post("http://localhost:4000/api/v1/generos" , data,{
        Headers : Headers
    } )
   
}

const consultarGeneros = () => {
    return axios.get("http://localhost:4000/api/v1/generos" ,{
        Headers : Headers
    } )


}

const consultarGeneroPorID= (id) => {
    return axios.get('http://localhost:4000/api/v1/generos/'+id,{
        Headers : Headers
    } )


}


const editarGeneroPorID =(genero, id) => {
   const data = {
        nombre : genero.nombre,
        descripcion : genero.descripcion 

   }
   return axios.put("http://localhost:4000/api/v1/generos/"+id , data,{
       Headers : Headers
   } )
  


}
export {
    CrearGenero,
    consultarGeneros,
    consultarGeneroPorID,
    editarGeneroPorID
}