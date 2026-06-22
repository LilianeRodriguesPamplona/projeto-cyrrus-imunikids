# 👶 ImuniKids

Sistema de acompanhamento da vacinação infantil desenvolvido como solução para o Desafio Técnico Cyrrus (Estágio Frontend Angular + Ionic).

---

## 📋 Sobre o Projeto

O ImuniKids é uma aplicação web responsiva criada para auxiliar pais e responsáveis no acompanhamento da saúde vacinal de crianças.

A plataforma permite o gerenciamento individual de cada criança, consulta do histórico vacinal, visualização de pendências, campanhas de vacinação e indicadores de cobertura vacinal.

O objetivo é substituir parcialmente a dependência da carteira física de vacinação, oferecendo uma experiência simples, intuitiva e organizada.

---

## 📸 Telas da Aplicação

### Dashboard
<img src="LINK_DA_IMAGEM" width="800">

### Cadastro de Crianças
<img src="LINK_DA_IMAGEM" width="800">

### Controle Vacinal
<img src="LINK_DA_IMAGEM" width="800">

---

## 🚀 Tecnologias Utilizadas

### Frontend

* Angular
* Ionic Framework
* TypeScript
* HTML5
* SCSS

### Backend e Banco de Dados

* Firebase Authentication
* Cloud Firestore

### Hospedagem

* Firebase Hosting

---

## 🎨 Paleta de Cores Utilizada

Conforme solicitado no desafio:

| Cor             | Código  |
| --------------- | ------- |
| Verde Principal | #ABC270 |
| Amarelo         | #FEC868 |
| Laranja         | #FDA769 |
| Marrom Escuro   | #473C33 |

---

# 📱 Funcionalidades

## 🔐 Autenticação

* Cadastro de usuários
* Login
* Logout
* Rotas protegidas
* Controle de acesso por autenticação

---

## 👶 Gerenciamento de Crianças

* Cadastro de crianças
* Edição de cadastro
* Exclusão de cadastro
* Cálculo automático de idade
* Situação vacinal individual

---

## 💉 Controle Vacinal

* Registro de vacinas

* Histórico vacinal

* Status:

  * Aplicada
  * Pendente

* Data de aplicação

---

## ⚠️ Pendências

Exibição automática de crianças com situação vacinal atrasada.

---

## 📢 Campanhas

Tela dedicada para campanhas públicas de vacinação.

---

## 📊 Dashboard

Indicadores em tempo real:

* Total de crianças
* Vacinas atrasadas
* Vacinação em dia
* Necessitam atenção
* Cobertura vacinal (%)

---

# 🔒 Segurança Implementada

Cada usuário visualiza apenas seus próprios dados.

As crianças cadastradas ficam vinculadas ao usuário autenticado através do Firebase Authentication.

Exemplo:

Usuário A:

* Carol
* Maria

Usuário B:

* Pérola
* Estevão

Os dados não são compartilhados entre contas.

---

# 📱 Responsividade

A aplicação foi desenvolvida para funcionar em:

* Desktop
* Tablet
* Smartphone

Utilizando recursos responsivos do Ionic Framework.

---

# ✅ Cenários Atendidos

## Cenário 1

Uma criança possui vacinas previstas para sua faixa etária.

✔ Histórico vacinal disponível.

✔ Identificação visual de vacinas aplicadas e pendentes.

---

## Cenário 2

Uma vacina possui data prevista ultrapassada.

✔ Pendências identificadas visualmente.

✔ Dashboard apresenta indicadores de atraso.

---

## Cenário 3

Existe campanha de vacinação ativa.

✔ Tela específica para campanhas.

---

## Cenário 4

Família possui mais de uma criança.

✔ Gerenciamento individual por criança.

✔ Histórico separado.

✔ Situação vacinal individualizada.

---

# ⭐ Diferenciais Implementados

* Firebase Authentication
* Cloud Firestore
* Dashboard com indicadores
* Controle de acesso por usuário
* Atualização automática dos dados
* Interface responsiva
* Boas práticas com Angular Standalone Components

---

# 🏗 Estrutura do Projeto

```bash
src/
│
├── guards/
├── services/
├── models/
├── pages/
│   ├── children/
│   ├── vaccines/
│   ├── pending/
│   └── campaigns/
│
├── dashboard/
├── login/
├── register/
└── firebase.config.ts
```

---

# ⚙️ Instalação

Clone o projeto:

```bash
git clone https://github.com/LilianeRodriguesPamplona/projeto-cyrrus-imunikids.git
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
ionic serve
```

---

# 🌐 Publicação

Aplicação hospedada em:

**Firebase Hosting**

Link:

```txt
https://imunikids-3ba21.web.app
```

---

## 🔑 Acesso ao Sistema

A aplicação possui cadastro de usuários integrado ao Firebase Authentication.

Para testar:

1. Clique em "Criar Conta"
2. Cadastre um novo usuário
3. Faça login
4. Utilize todas as funcionalidades do sistema

Não é necessário usuário pré-cadastrado.

---

# 👩‍💻 Desenvolvedora

Liliane Rodrigues Pamplona

Desafio Técnico Cyrrus – Estágio Frontend Angular + Ionic

GitHub:
https://github.com/LilianeRodriguesPamplona
