# Calculadora de IMC - React Native

Uma aplicação de calculo de índice de massa corporal. Abaixo, você encontrará uma explicação detalhada sobre o projeto, sua estrutura, funcionalidades e instruções para execução.

---

## ✨ Funcionalidades Principais

- 🧮 Cálculo preciso do IMC
- 📈 Classificação automática
- ⚖️ Faixa de peso ideal

---

## 🏗️ Como Executar o Projeto

### Pré-requisitos
- Node.js
- npm ou yarn
- Expo CLI instalado globalmente
```bash
npm install -g expo-cli
```
- **App Expo Go** instalado no seu dispositivo móvel

### Instalação
```bash
# Clone o repositório
git clone https://github.com/murilobauck/CalculadoraIMC.git

# Acesse a pasta do projeto
cd CalculadoraIMC

# Instale as dependências
npm install
```

### Execução
```bash
npx expo start --tunnel
```
#### Android
- Escaneie o QR code pelo aplicativo Expo Go

#### IOS
- Escaneie o QR code pela própria câmera do celular

##### [Vídeo da aplicação funcionando](https://drive.google.com/file/d/1kVHqrEEglsmLbcJw6WRH-7Hwj73zNvCL/view?usp=sharing) 

---

## 📊 Tabela de Classificação do IMC

| IMC            |  Classificação     |
|----------------|--------------------|
| < 18.5         |  Abaixo do peso    |
| 18.5 - 24.9    |  Peso normal       |
| 25 - 29.9      |  Sobrepeso         |
| 30 - 34.9      |  Obesidade grau 1  |
| 35 - 39.9      |  Obesidade grau 2  |
| ≥ 40           |  Obesidade grau 3  |

---


## 🛠️ Estrutura do Código

O código está organizado em três arquivos principais:

- **[App.js]**: Arquivo raiz que renderiza toda a aplicação.

- **[FormIMC.js]**: Recebe dados do peso e altura do usuário para calcular o IMC e o peso ideal, caso haja algum dado inválido exibe um erro na aplicação.

- **[Result.js]**: Responsável por exibir os resultados calculados.

---

## 🚀 Tecnologias Utilizadas

- **Linguagem de Programação**: JavaScript
- **Bibliotecas/Frameworks**: `React Native`

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](https://github.com/murilobauck/ATVDS01/blob/main/LICENSE)

Feito por Murilo Bauck👋🏽 [Entre em contato!](https://www.linkedin.com/in/murilo-bauck-515958306/)