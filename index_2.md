# Passo 1
Projeto base

Links úteis:
https://docs.ethers.org/v5/api/contract/example/

http://remix.ethereum.org/


https://solidity-by-example.org/

Note que nosso provider e signer serão o Metamask :) Perceba também que **não** iremos deployar o contrato com hardhat ou análogo, mas sim com o Remix.

## Objetivos!
Aqui mostra o passo a passo para criar um contrato na rede e interagir.

## Instalando o vite 

```$npm create vite```
Prencha os campos com ```React``` e ```JavaScript```
```$npm run dev```

```cd <nome-do-projeto>``
```npm install```
```npm rundev```

## Instalando biblitecas
```npm install ethers bootstrap react-bootstrap```

## Começando o projeto
Apagar os malditos arquivos q n usaremos.
Escrever cansa, deixo isso com vcs :)
Dica: Deixa apena o app.js e main.js, excluia os outros arquivos a pasa src. Em seguida, arrume os imports.

# Commite (do verbo comitar)
Prefiro fazer isso agora, dai consigo ver as diferenças de cada commit no VS Code.

## Passo 2
Criando erc-20 no remix.
https://solidity-by-example.org/app/erc20/

Basta subi-lo para a rede e conectar. Salve os valores do ABI e do Bytecode.

# Passo 3 
Finalmente interagindo com o contrato. Apenas para pegar o simbolo, nada muito complicado.

# Passo 4
Finalmente, utilize o mesmo contrato ( será o mesmo objeto que você utilizou para pegar o símbolo) para mandar transações.

Para isso, o ethers js utiliza meta-programação para gerar o objeto do contrato com todas os seus métodos. Por isso é necessário o ABI! Ele atua como interface e permite que o objeto seja criado da maneria correta. Caso você coloque o ABI errado, a interface gráfica que estamos usando não servirá de nada. Ela irá rodar com erros, ou seja, irá mandar transações com valores errados ou pode tentar interagir com métodos que não existem. Daí o nome interface.

Por fim, para testar é possível criar duas contas no metamask e ir clicando nos botões e verificar se a transferência ocorre.
