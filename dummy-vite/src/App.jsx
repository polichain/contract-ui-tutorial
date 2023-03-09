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
  const [wallet, setWallet] = useState()
  const [ammont, setAmmount] = useState()
  
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
    setIsConected(window.ethereum._state.accounts.length > 0)
  }

  const handleOnClick = () => {
    fetchData().catch(console.error)
  }

  if(!isConected){
    return (
      <div className="App">
        <div>Conecte a wallet!</div>
        <IsConnected handleOnClick={handleOnClick} isConected={isConected}/>
      </div>
    )  
  }

  const sendTransaction = async () => {
  
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
    <div className="App">
      <IsConnected handleOnClick={handleOnClick} isConected={isConected}/>
      <div>Saldo da conta {balance} </div>      
      <div>Endereço {address}</div>
      <div>Numero do Bloco {block_number}</div>
      <br/>
      <form onSubmit={handleOnSubmitForm}>
        <div>
          <label>Wallet number:
            <input type="text" onChange={e => {setWallet(e.target.value)}} name="name" />
          </label>
        </div>
        <div>
          <label>Ammount in ether:
            <input type="number" step="any"  onChange={e => {setAmmount(e.target.value)}} name="name" />
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default App
