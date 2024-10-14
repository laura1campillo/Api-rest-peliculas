import axios from "axios"



const Headers = {
    'content Type' : 'application/json'
}

const  CrearDirector = (director) => {
   const data = {
         nombre : director.nombre,
         descripcion : director.descripcion 

    }
    return axios.post("http://localhost:4000/api/v1/directores" , data,{
        Headers : Headers
    } )
   
}

const consultarDirectores = () => {
    return axios.get("http://localhost:4000/api/v1/directores" ,{
        Headers : Headers
    } )


}

const consultarDirectorPorID= (id) => {
    return axios.get('http://localhost:4000/api/v1/directores/'+id,{
        Headers : Headers
    } )


}


const editarDirectorPorID =(director, id) => {
   const data = {
        nombre : director.nombre,
        descripcion : director.descripcion 

   }
   return axios.put("http://localhost:4000/api/v1/directores/"+id , data,{
       Headers : Headers
   } )
  


}
export {
    CrearDirector,
    consultarDirectores,
    consultarDirectorPorID,
    editarDirectorPorID
}