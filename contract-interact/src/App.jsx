import { ethers, formatEther } from "ethers";
import { useEffect, useState } from "react";

function App() {
  const [provider, setProvider] = useState()
  const [contract, setContract] = useState()
  const [signer, setSigner] = useState()
  const [address, setAddress] = useState()
  const [amount, setAmount] = useState()
  const [symbol, setSymbol] = useState()
  const [erc20balance, setErc20Balance] = useState()
  const [totalBalance, setTotalBalance] = useState()

  const fetchData = async () => {
    //Fetch
    let provider_temp = new ethers.BrowserProvider(window.ethereum, "sepolia")
    let signer_temp = await provider_temp.getSigner()
    let contract_temp = new ethers.Contract(import.meta.env.VITE_CONTRACT_ADDRESS, import.meta.env.VITE_ABI_CODE, signer_temp)
    let balance_temp = await contract_temp.balanceOf(signer_temp.address)
    let total_supply_temp = await contract_temp.totalSupply()

    //Format
    balance_temp = formatEther(balance_temp.toString())
    total_supply_temp = formatEther(total_supply_temp.toString())

    //Set
    setTotalBalance(total_supply_temp)
    setErc20Balance(balance_temp)
    setProvider(provider_temp)
    setSigner(signer_temp)
    setContract(contract_temp)
  }

  useEffect(() => {
    fetchData().catch(console.error)
  }, [])

  let handleOnClick = () => {
    //Conversion to BigInt ( ethers v6 uses native js BigInt)
    let amount_temp = BigInt(amount)*10n**18n
    contract.transfer(address, amount_temp)
  }

  return (
    <div className="App">
      <div>
        <h1>Extrato ERC-20</h1>
        <div>
          <p>
            <b>Saldo: </b>{erc20balance} Eth
          </p>
        </div>
        <div>
          <p>
            <b>Balanço total: </b>{totalBalance} Eth
          </p>
        </div>
      </div>
      <div>
        <p>Endereço</p>
        <input type="text" onChange={(e) => {setAddress(e.target.value)}}/>
      </div>
      <div>
        <p>
          Valor
        </p>
        <input type="number" step="any" onChange={(e) => {
          setAmount(BigInt(e.target.value))
          }}/> Eth
      </div>
      <div>
        <button onClick = {handleOnClick}>Enviar!</button>
      </div>
    </div>
  )
}

export default App
