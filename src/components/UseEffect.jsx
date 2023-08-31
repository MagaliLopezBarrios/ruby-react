import {UseEffect, useState} from 'react'

const UseEffect = () => {

const [mensaje, setMensaje] = useState("Mensaje inicial")



  return (
    <div>
      <p>{mensaje}</p>
      <button onClick={()=> setMensaje ("Mensaje Modificado")}>Cambiar</button>

    </div>
  )
}

export default UseEffect