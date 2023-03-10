import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarCustom = ({ isConnected, handleOnClickConnect }) => {
    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
            <Navbar.Brand>PoliETH</Navbar.Brand>
                {
                    isConnected ?
                        <Navbar.Text>Você está conectado!</Navbar.Text>
                    :
                        <Button onClick={handleOnClickConnect}>
                            Conectar
                        </Button>
                }
            </Container>
        </Navbar>
    )
}

export default NavbarCustom