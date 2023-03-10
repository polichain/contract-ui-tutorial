import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataBox = () => {
    const [address, setAddress] = useState()
    const [block_number, setBlockNumber] = useState()
    const [balance, setBalance] = useState()

    const fetchData = async () => {
        let provider_temp = new ethers.BrowserProvider(window.ethereum, "sepolia")
        let signer_temp = await provider_temp.getSigner();
        let address_temp = await signer_temp.getAddress()
        let block_number_temp = await provider_temp.getBlockNumber()
        let balance_temp = await provider_temp.getBalance(address_temp)

        setAddress(address_temp)
        setBlockNumber(block_number_temp)
        setBalance(ethers.formatEther(balance_temp))
    }

    useEffect(() => {
        fetchData().catch(console.error)
    }, [])

    return (
        <Card>
            <Card.Body>
                <div>Saldo da conta {balance} </div>
                <div>Endereço {address}</div>
                <div>Numero do Bloco {block_number}</div>
            </Card.Body>
        </Card>
    )
}

export default DataBox