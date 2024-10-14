import React, { useEffect, useState } from 'react'
import{consultarMedia} from '../../services/MediaServ'

import '../../css/style-home.css';

export default function Media() {
  const [medias, setMedias] = useState([])
  
  const [cargando, setCargando] = useState(false)
  const [media, setMedia] = useState({
    titulo: '',
    genero: '',
    sinopsis: ''
  })

  useEffect(() => {
    listarMedias()

  }, [])

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
  return (
    <div className="container">
      <div class="peliculas">
      {
            medias.map((media, index) => {
              return (
                <div class="card cardPelicula">
                  <img src={media.url} class="card-img-top imgPelicula" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{media.titulo}</h5>
                    <p className="card-text">{media.sinopsis}</p>
                  </div>
                </div>

              )})}
        
      </div>

        
      </div>
  )
}