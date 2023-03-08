# Conectando ao metamask usando react

## O início de tudo

``npm create vite``

Aqui, usaremos react e Javascript

Pronto! Temos nosso front quase pronto.
Para rodarmos o servidor basta instalarmos as dependencias do ``npm`` e em sequencia rodá-lo.

``cd <nome-do-projeto>``
``npm install``
``npm run dev``

E pronto! Agora temos o nosso site rodando e pronto para você editar.
Aqui, não abordaremos a estrutura básica do react. Por isso, consideramos que você já sabe.

# O be-a-bá do ethers

## Provider
Um ``provider`` é uma coneção de apenas leitura com a blockchain. Permite a consulta de estados em contas, blocos e transações.

## Signer
Engloba todas as operações que interagem com uma conta. Para uma conta teremos uma chave privada, armazenada em algum lugar, que é utilizada para assinar algo (de maneira generica, realmente pode ser qualquer coisa).

A chave privada pode estar localizada na memória, utilizando uma ``Wallet``, ou pode estar localizado em uma camada IPC ( como Metamask )

### Transactions
Para mudar qualquer estado da blockchain precisamos fazer uma transação. Para fazer essa transação devemos pagar uma taxa. Caso a transação seja revertida, ainda assim, a taxa deve ser paga.

As transações podem ser:
- Enviar ether
- Deploy de um contrato inteligente
- Mudar o estado de um contrato

## Contract
É um programa que está rodando na blockchain. Fica localizado na ``mempool`` até ser validado. 

## Receipt
Quando uma transação é enviada, ela fica na ``mempool`` esperando o validador inclui-la. Apos ser incluida o ``Receipt`` ficara disponível com os detalhes da transação.

# Finalmente, como conectar

Agora, que sabemos como a bliblioteca funcionar, precisamos inclui-la no ``node``.
``npm install --save ethers``

Agora, para o código, precisaremos de algum ``Provider``, essas são as maneiras de conseguir.

## MetaMask (and other injected providers)
Aqui, o Metamask será injetado no objeto ``window`` provendo o seguinte:
- Acesso de apenas leitura à rede Ethereum (``Provider``)
- Escrita autenticada na blockchain (``Signer``)

```
let signer = null;

let provider;
if (window.ethereum == null) {
    console.log("MetaMask not installed; using read-only defaults")
    provider = ethers.getDefaultProvider()

} else {
    provider = new ethers.BrowserProvider(window.ethereum)
    signer = await provider.getSigner();
}
```

## Custom RPC Backend
Use ``JsonRpcProvider `` para os casos abaixo:
- Rodando meu própio nó de Ethereum (``Geth``)
- Usando nó de terceiros

Caso esteja rodando um nó de desenvolvimento (``Hardhat``, ``Ganache``) utilize ``JsonRpcProvider-getSigner``

```
// If no %%url%% is provided, it connects to the default
// http://localhost:8545, which most nodes use.
provider = new ethers.JsonRpcProvider(url)

// Get write access as an account by getting the signer
signer = await provider.getSigner()
```


