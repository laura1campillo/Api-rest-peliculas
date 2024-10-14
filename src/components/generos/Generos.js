import React, { useEffect, useState } from 'react'
import { consultarGeneros ,CrearGenero, editarGeneroPorID} from '../../services/GeneroServ'
export default function Genero() {

  const [generos, setGeneros] = useState([])
  const [cargando, setCargando] =useState(false)
  const [ genero, setGenero] = useState ({
    nombre: '',
    descripcion: ''
  })


  useEffect(() => {
    listarGeneros()

  }, [])

  const listarGeneros = async () => {
    setCargando(true)
    try {
      const { data } = await consultarGeneros();
      setGeneros(data);
    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  }

  const guardar = async () => {
    setCargando(true);
    try {
        // ... (código para conectar a la base de datos, similar a listarGeneros)

        if (genero._id) { // Si existe un _id, es una actualización
          // funcion para actualizar
          await editarGeneroPorID(genero,genero._id)
          
        } else { // Si no existe _id, es una creación
            await CrearGenero(genero);
        }

        // Actualizar el estado de géneros
        setGeneros([...generos, genero]); // Para creación
        setGenero({ nombre: '', descripcion: '' }); // Clear form state
    } catch (error) {
        console.error(error);
        
    } finally {
      setCargando(false);
    }
  }
  const editar = (id) => {
    console.log("entrando a la edicion")
    const generoAEditar = generos.find((g) => g._id === id);
    setGenero(generoAEditar);
    console.log(genero._id)
    
  }
  const nuevo =()=>{
    console.log("si entra")
    setGenero({ nombre: '', descripcion: '' });
  }
  const eliminar=()=>{
    
  }

  return (

    <div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Genero</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" class="col-form-label">Nombre:</label>
                  <input 
                  type="text" class="form-control" 
                  id="recipient-name"
                  name ='nombre'
                  value={genero.nombre} onChange={(e) => setGenero({ ...genero, nombre: e.target.value })} />
                  
                  
                </div>
                <div className="mb-3">
                  <label for="message-text" class="col-form-label">Descripcion:</label>
                  <textarea class="form-control" id="message-text" value={genero.descripcion} onChange={(e) => setGenero({ ...genero, descripcion: e.target.value })}></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Cancelar</button>
              <button type="submit" className="btn btn-primary" disabled={cargando} onClick = {guardar }>
                        {cargando ? (
                          <span>
                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            <span role="status">Guardando...</span>
                          </span>
                        ) : (
                          genero._id ? 'Actualizar' : 'Guardar'
                        )}
                      </button>
            </div>
          </div>
        </div>
      </div>
      
      <h3> Generos  </h3>
      <button type="button" onClick={() => nuevo()} className="btn btn-dark"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo</button>
      
      {
        cargando && (
          <button className="btn btn-primary" type="button" disabled>
          <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
          <span role="status">Loading...</span>
        </button>

        ) 
      }
     

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Estado</th>
            <th scope="col">Fecha de creacion</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            generos.map((genero, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{genero.nombre}</td>
                  <td>{genero.descripcion}</td>
                  <td>{genero.estado ? 'Activo' : 'Inactivo'}</td>
                  <td>{genero.fechaCreacion}</td>
                  <button type="button"  onClick={() => editar(genero._id)}  className="btn btn-dark"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Editar</button>
                  </tr>
              )

            })
          }

        </tbody>
      </table>

    </div>
  )
}