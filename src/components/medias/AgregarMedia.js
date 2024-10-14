import React, { useEffect, useState } from 'react'
import{consultarMedia, CrearMedia,editarMediaPorID} from '../../services/MediaServ'
import { consultarGeneros}  from '../../services/GeneroServ'
import { consultarTipos}  from '../../services/TipoServ'
import { consultarProductoras}  from '../../services/ProductoraServ'
import { consultarDirectores}  from '../../services/DirectorServ'
import '../../css/style-home.css'
export default function Media() {

  const [medias, setMedias] = useState([])
  const [cargando, setCargando] = useState(false)
  const [Generos, setGeneros] = useState([]);
  const [Directoras, setDirectores] = useState([]);
  const [Productores, setProductores] = useState([]);
  const [Tipos, setTipos] = useState([]);
  const [media, setMedia] = useState({
    titulo: '',
    genero: '',
    sinopsis: ''
  })



  useEffect(() => {
    listarMedias()
    ListaDirectores()
    ListaGeneros()
    ListaTipos()
    ListaProductores()

  }, [])

  const ListaGeneros = async () => {
    const { data } = await consultarGeneros()
      setGeneros(data);
  };
  const ListaTipos = async () => {
    const { data } = await consultarTipos()
    setTipos(data);
  };
  const ListaDirectores = async () => {
    const { data } = await consultarDirectores()
    setDirectores(data);
  };
  const ListaProductores = async () => {
    const { data } = await consultarProductoras()
    setProductores(data);
  };


  const listarMedias = async () => {
    setCargando(true)
    try {

      const { data } = await consultarMedia()
      setMedias(data);
      console.log(medias.titulo)
      setCargando(false)
  
    } catch (e) {

      console.log(e)
      setCargando(true)
    }
  }
  const guardar = async () => {
    console.log(media)
    setCargando(true);
    try {
        // ... (código para conectar a la base de datos, similar a listarGeneros)

        if (media._id) { // Si existe un _id, es una actualización
          // funcion para actualizar
          await editarMediaPorID(media,media._id)
          
        } else { // Si no existe _id, es una creación
            await CrearMedia(media);
        }

        // Actualizar el estado de géneros
        setMedias([...medias, media]); // Para creación
        setMedia({ nombre: '', descripcion: '' }); // Clear form state
    } catch (error) {
        console.error(error);
        
    } finally {
      setCargando(false);
    }
  }
  const editar = (id) => {
    console.log("entrando a la edicion")
    const peliculaAEditar = media.find((g) => g._id === id);
    setMedia(peliculaAEditar);
    console.log(media._id)
    
  }
  const nuevo =()=>{
    console.log("si entra")
    setMedia({ titulo: '', sinopsis: '', serial:'' , url:'', fechaCreacion:'', fechaEstreno:'' });
    
  }

  return (

    <div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" class="col-form-label">Serial:</label>
                  <input
                    type="number" class="form-control"
                    id="recipient-name"
                    name='serial'
                    value={media.serial} onChange={(e) => setMedia({ ...media, serial: e.target.value })} />

                </div>
                <div className="mb-3">
                  <label for="recipient-name" class="col-form-label">Titulo:</label>
                  <input
                    type="text" class="form-control"
                    id="recipient-name"
                    name='titulo'
                    value={media.titulo} onChange={(e) => setMedia({ ...media, titulo: e.target.value })} />

                </div>
                <div className="mb-3">
                  <label for="message-text" class="col-form-label">Sinopsis:</label>
                  <textarea class="form-control" id="message-text" value={media.sinopsis} onChange={(e) => setMedia({ ...media, sinopsis: e.target.value })}></textarea>
                </div>
                <div className="mb-3">
                  <label for="recipient-name" class="col-form-label">Url:</label>
                  <input
                    type="text" class="form-control"
                    id="recipient-name"
                    name='url'
                    value={media.url} onChange={(e) => setMedia({ ...media, url: e.target.value })} />

                </div>
                <div className="mb-3">
                  <label for="recipient-name" class="col-form-label">Imagen:</label>
                  <input
                    type="text" class="form-control"
                    id="recipient-name"
                    name='url'
                    value={media.url} onChange={(e) => setMedia({ ...media, url: e.target.value })} />

                </div>
                <div className="mb-3">
                  <label for="recipient-name" class="col-form-label">Fecha de Creacion:</label>
                  <input
                    type="date" class="form-control"
                    id="recipient-name"
                    name='fechaCreacion'
                    value={media.fechaCreacion} onChange={(e) => setMedia({ ...media, fechaCreacion: e.target.value })} />

                </div>
                <div className="mb-3">
                  <label for="recipient-name" class="col-form-label">Fecha de Estreno:</label>
                  <input
                    type="date" class="form-control"
                    id="recipient-name"
                    name='fechaEstreno'
                    value={media.fechaEstreno} onChange={(e) => setMedia({ ...media, fechaEstreno: e.target.value })} />

                </div>
                <select value={media.genero} onChange={(e) => setMedia({ ...media, genero: e.target.value })}>
                <option value="Genero" disabled>Genero</option>
                  {Generos.map(genero => (
                    <option key={genero.id} value={genero._id}>
                      {genero.nombre}
                    </option>
                  ))}
                </select>
                <select value={media.director} onChange={(e) => setMedia({ ...media, director: e.target.value })}>
                <option value="Director" disabled>Director</option>
                  {Directoras.map(director => (
                    <option key={director.id} value={director._id}>
                      {director.nombre}
                    </option>
                  ))}
                </select>                
                <select value={media.productora} onChange={(e) => setMedia({ ...media, productora: e.target.value })}>
                <option value="Productora" disabled >Productora</option>
                  {Productores.map(productor => (                    
                    <option key={productor.id} value={productor._id}>
                      {productor.nombre}
                    </option>
                  ))}
                </select>
                <select value={media.tipo} onChange={(e) => setMedia({ ...media, tipo: e.target.value })}>
                <option value="Tipo" disabled>Tipo</option>
                  {Tipos.map(tipo => (
                    <option key={tipo.id} value={tipo._id}>
                      {tipo.nombre}
                    </option>
                  ))}
                </select>
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
                          media._id ? 'Actualizar' : 'Guardar'
                        )}
                      </button>
            </div>
          </div>
        </div>
      </div>

      <h3> Medias  </h3>

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
            <th scope="col">Titulo</th>
            <th scope="col">Sinopsis</th>
            <th scope="col">Genero</th>
            <th scope="col">Fecha de creacion</th>
            <th scope="col">Fecha de Estreno</th>
            <th scope="col">Tipo</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            medias.map((media, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{media.titulo}</td>
                  <td>{media.sinopsis}</td>
                  <td>{media.url}</td>
                  <td>{media.fechaEstreno}</td>
                  <td>{media.Genero}</td>
                  <td>{media.Tipo}</td>
                  <td> <button type="button" class="btn btn-outline-dark">Editar</button> </td>
                </tr>
              )

            })
          }

        </tbody>
      </table>

    </div>
  )
}