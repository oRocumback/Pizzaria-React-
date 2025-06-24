import './App.css'
import Contact from './Pages/Contact'
import Home from './Pages/home'
import Menu from './Pages/Menu'

import  { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cardapio' element={<Menu/>}/>
        <Route path='/contato' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <Home/>
    //   <Menu/>
    //   <Contact/>
    // </>
  )
}

export default App
