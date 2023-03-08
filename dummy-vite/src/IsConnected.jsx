import React from 'react'

const IsConnected = ({isConected, handleOnClick}) => {
  if(isConected){
    return (
        <div>Você está conectado!</div>
    )
  } else {
    return(
        <button onClick={handleOnClick}>Conectar</button>
    )
  }
}

export default IsConnected