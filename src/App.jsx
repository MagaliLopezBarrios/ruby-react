import React from 'react'
import NavBar from './Components/NavBar'
import ItemDetailContainer from './Components/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
//import ShoppingCartProvider from './Components/ShoppingCartProvider'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import ShoppingCartContext from './context/ShoppingCartContext'






const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);
  


  return (

    <div>
      {loading ? (
        <Loader />
      ) : (
       // <ShoppingCartProvider>
          <BrowserRouter>
            <NavBar/>

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
              <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
              <Route exact path= "/contact" element = {<Contact/>}/>
              <Route exact path= "/*" element = {<Error/>}/>

            </Routes>
          
          </BrowserRouter>
      //  </ShoppingCartProvider>


      )}

      </div>
  );
};    




export default App;
