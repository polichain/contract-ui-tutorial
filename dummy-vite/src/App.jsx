import { ethers } from "ethers";
import { useEffect, useState } from "react";
import IsConnected from "./IsConnected";

function App() {
  const [provider, setProvider] = useState()
  const [saldoConta, setSaldoConta] = useState()
  const [signer, setSigner] = useState()
  const [address, setAddress] = useState()
  const [block_number, setBlockNumber] = useState()
  const [balance, setBalance] = useState()
  const [isConected, setIsConected] = useState()
  
  useEffect(() => {
    if(window.ethereum._state.accounts.length > 0){
      handleOnClick()
    }
    setIsConected(window.ethereum._state.accounts.length > 0)
  }, [])
  
  const fetchData = async () => {
    let provider_temp = new ethers.BrowserProvider(window.ethereum, "sepolia")
    let signer_temp = await provider_temp.getSigner();
    let address_temp = await signer_temp.getAddress()
    let block_number_temp = await provider_temp.getBlockNumber()
    let balance_temp = await provider_temp.getBalance(address_temp)

    setAddress(address_temp)
    setBlockNumber(block_number_temp)
    setBalance(ethers.formatEther(balance_temp))
    setProvider(provider_temp)
    setSigner(signer_temp)
  }

  const handleOnClick = () => {
    fetchData().catch(console.error)
  }

  return (
    <div className="App">
      <div>Saldo da conta {balance} </div>      
      <div>Endereço {address}</div>
      <div>Numero do Bloco {block_number}</div>
      <IsConnected handleOnClick={handleOnClick} isConected={isConected}/>
    </div>
  )
}

export default App
