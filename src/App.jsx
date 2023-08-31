import React from 'react'
import NavBar from './Components/NavBar'
import ItemDetailContainer from './Components/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  
  return (

    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route exact path= "/" element = {<Home/>}/>
        <Route exact path= "/about" element = {<About/>}/>
        <Route exact path= "/contact" element = {<Contact/>}/>
        <Route exact path= "/cart" element = {<Cart/>}/>
        <Route exact path= "/category/:category" element = {<ItemListContainer/>}/>
        <Route exact path= "/item/:id" element = {<ItemDetailContainer/>}/>
      </Routes>
     
    </BrowserRouter>  
  )  
}

export default App
