import React from 'react'

const Eventos = () => {
  const handleClick =(e) => {
    console.log(e.target.innerWidth)

  }
  window.addEventListener("resize", handleClick)




  return (
    <div>Eventos</div>
  )
}

export default Eventos