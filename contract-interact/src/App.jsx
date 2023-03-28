import { ethers } from "ethers";
import { useEffect, useState } from "react";

function App() {
  const [provider, setProvider] = useState()
  const [contract, setContract] = useState()
  const [signer, setSigner] = useState()
  const [address, setAddress] = useState()
  const [amount, setAmount] = useState()
  const [symbol, setSymbol] = useState()

  const fetchData = async () => {
    let provider_temp = new ethers.BrowserProvider(window.ethereum, "sepolia")
    let signer_temp = await provider_temp.getSigner()
    let contract_temp = new ethers.Contract(import.meta.env.VITE_CONTRACT_ADDRESS, import.meta.env.VITE_ABI_CODE, signer_temp)

    setProvider(provider_temp)
    setSigner(signer_temp)
    setContract(contract_temp)
  }

  useEffect(() => {
    fetchData().catch(console.error)
  }, [])

  let handleOnClick = () => {
    let symbol_temp;

    let fetch_symbol = async () => { 
      symbol_temp = await contract.symbol()
      setSymbol(symbol_temp)
      console.log(symbol_temp)
    }
    fetch_symbol().catch(console.error) 
  }

  return (
    <div className="App">
      <p>Ola</p>
      <input type="text" onChange={(e) => {setAddress(e.target.value)}}></input>
      <input type="number" step="any" onChange={(e) => {setAmount(e.target.value)}}></input>
      <button onClick = {handleOnClick}>Enviar!</button>
    </div>
  )
}

export default App
