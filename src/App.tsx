import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import ListarCategoria from './components/categoria/listarcategoria/ListarCategoria'
import { ToastContainer } from 'react-toastify'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'

export default function App() {

  return (
    <>
      <ToastContainer />
        <BrowserRouter>
          <div className='h-screen flex flex-col justify-between'>
            <Navbar />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/listarcategorias' element={<ListarCategoria />}></Route>
                <Route path='/criarcategoria' element={<FormCategoria />}></Route>
                <Route path='/editarcategoria/:id' element={<FormCategoria />}></Route>
                <Route path='/deletarcategoria/:id' element={<DeletarCategoria />}></Route>
              </Routes>
            <Footer />
          </div>
        </BrowserRouter>
    </>
  )
}

