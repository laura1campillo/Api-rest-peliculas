import axios from "axios"



const Headers = {
    'content Type' : 'application/json'
}

const  CrearTipo = (tipo) => {
   const data = {
         nombre : tipo.nombre,
         descripcion : tipo.descripcion 

    }
    return axios.post("http://localhost:4000/api/v1/tipos" , data,{
        Headers : Headers
    } )
   
}

const consultarTipos = () => {
    return axios.get("http://localhost:4000/api/v1/tipos" ,{
        Headers : Headers
    } )


}

const consultarTipoPorID= (id) => {
    return axios.get('http://localhost:4000/api/v1/tipos/'+id,{
        Headers : Headers
    } )


}


const editarTipoPorID =(tipo, id) => {
   const data = {
        nombre : tipo.nombre,
        descripcion : tipo.descripcion 

   }
   return axios.put("http://localhost:4000/api/v1/tipos/"+id , data,{
       Headers : Headers
   } )
  


}
export {
    CrearTipo,
    consultarTipos,
    consultarTipoPorID,
    editarTipoPorID
}
