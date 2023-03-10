import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const TransactionBox = () => {
    const [wallet, setWallet] = useState()
    const [ammont, setAmmount] = useState()

    const sendTransaction = async () => {
        let provider= new ethers.BrowserProvider(window.ethereum, "sepolia")
        let signer = await provider.getSigner();

        let tx = await signer.sendTransaction({
            to: wallet,
            value: ethers.parseEther(ammont)
        });

        let receipt = await tx.wait();
    }

    const handleOnSubmitForm = (e) => {
        e.preventDefault()
        sendTransaction().catch(console.error)
    }

    return (
        <Card className="justify-content-center mx-2 my-2" >
            <Card.Body >
                <Form onSubmit={handleOnSubmitForm}>
                    <Form.Group className="mb-3">
                        <Form.Label>Wallet number:</Form.Label>
                        <Form.Control type="text" onChange={e => { setWallet(e.target.value) }} name="name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Ammount in ether:</Form.Label>
                        <Form.Control type="number" step="any" onChange={e => { setAmmount(e.target.value) }} name="name" />
                    </Form.Group>
                    <Button value="Enviar" variant="primary" type="submit" >Send</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default TransactionBox