import React from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
const Navbar = ({ isConnected, handleOnClickConnect }) => {
    return (
        <div>
            <Col md="auto">
                {
                    isConnected ?
                        <div>
                            Você está conectado!
                        </div > 
                    :
                        <Button onClick={handleOnClickConnect}>
                            Conectar
                        </Button>
                }
            </Col>
        </div>
    )
}

export default Navbar