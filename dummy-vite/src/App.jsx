import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionBox from "./TransactionBox";
import DataBox from "./DataBox";
import Navbar from "./Navbar";

function App() {
  const [isConected, setIsConected] = useState()


  useEffect(() => {
    setIsConected(window.ethereum._state.accounts.length > 0)
  }, [])

  const connectWallet = async () => {
    let provider_temp = new ethers.BrowserProvider(window.ethereum, "sepolia")
    let signer_temp = await provider_temp.getSigner();
    setIsConected(window.ethereum._state.accounts.length > 0)

  }

  const handleOnClickConnect = () => {
    connectWallet().catch(console.error)
  }


  return (
    <div className="App">
      <Row className="justify-content-md-center">
        <Navbar handleOnClickConnect={handleOnClickConnect} isConnected={isConected} />
      </Row>
      { isConected &&
        <Row className="justify-content-md-center my-5">
        <Col md="auto">
          <TransactionBox />
        </Col>
        <Col md="auto">
          <DataBox />
        </Col>
      </Row>}
    </div>
  )
}

export default App
