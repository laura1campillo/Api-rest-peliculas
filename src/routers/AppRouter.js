import React from 'react'
import Media from '../components/medias/Media'
import Footer from '../components/comun/Footer'
import NavBar from '../components/comun/NavBar'
import { Route, Router, Routes } from 'react-router-dom'
import NotFound from '../components/comun/NotFound'
import Genero from '../components/generos/Generos'
import Directores from '../components/directores/Directores'
import Productora from '../components/productoras/Productoras'
import Tipos from '../components/tipos/Tipos'
import AgregarMedia from '../components/medias/AgregarMedia'

export default function AppRouter() {


  const TITLE = " Peliculas "
  return (
    <>

      <NavBar title={TITLE} />

      <main className='container'>

      </main>
        <Routes>
        <Route path="/generos" element={<Genero />} />
        <Route path="/directores" element={<Directores />} />
        <Route path="/productoras" element={<Productora />} />
        <Route path="/tipos" element={<Tipos />} />
        <Route path="/media" element={<AgregarMedia />} />
        <Route path="/" element={<Media />} />
        <Route path="*" element={<NotFound />} />

        



        

      </Routes>

      <Footer />


    </>
  )
}
