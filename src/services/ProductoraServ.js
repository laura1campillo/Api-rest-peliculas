import axios from "axios"



const Headers = {
    'content Type' : 'application/json'
}

const  CrearProductora = (productora) => {
   const data = {
         nombre : productora.nombre,
         descripcion : productora.descripcion 

    }
    return axios.post("http://localhost:4000/api/v1/productoras" , data,{
        Headers : Headers
    } )
   
}

const consultarProductoras = () => {
    return axios.get("http://localhost:4000/api/v1/productoras" ,{
        Headers : Headers
    } )


}

const consultarProductoraPorID= (id) => {
    return axios.get('http://localhost:4000/api/v1/productoras/'+id,{
        Headers : Headers
    } )


}


const editarProductoraPorID =(productora, id) => {
   const data = {
        nombre : productora.nombre,
        descripcion : productora.descripcion 

   }
   return axios.put("http://localhost:4000/api/v1/productoras/"+id , data,{
       Headers : Headers
   } )
  


}
export {
    CrearProductora,
    consultarProductoras,
    consultarProductoraPorID,
    editarProductoraPorID
}