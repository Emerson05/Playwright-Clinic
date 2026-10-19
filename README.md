# 🧪 Suíte de Testes Automatizados - QA Clinic (Playwright)

Este repositório contém os testes automatizados End-to-End (E2E) desenvolvidos em **TypeScript** utilizando o framework **Playwright**. O objetivo é validar o fluxo principal de autenticação, navegação, agendamento e cancelamento de consultas na aplicação clínica do **QA Tools Playground**.

Site: https://playground.qatools.dev/clinic
---

## 📸 Referência do Sistema Testado

Abaixo está a interface do sistema web utilizado como referência para a automação dos cenários:

<img width="1913" height="972" alt="image" src="https://github.com/user-attachments/assets/0ed1fe3a-7f46-4321-bafe-54b0080e319c" />




---

## 🎯 Objetivos dos Testes

* Validar o processo de **autenticação automatizado** no sistema.
* Garantir o funcionamento correto dos **links de navegação e redirecionamento**.
* Validar a visualização e os detalhes do **perfil do médico**.
* Garantir a integridade do **fluxo End-to-End (E2E) de agendamento de consultas**:
  * Filtro por especialidade.
  * Seleção de data e horário.
  * Preenchimento de dados do paciente e motivo da consulta.
  * Confirmação da reserva.
* Validar o **gerenciamento de consultas** (cancelamento de agendamento efetuado).

---

## 📑 Cenários de Teste Mapeados

### 1. Autenticação e Suporte (`loginClinic`)
* **Pré-condição:** Realizada antes de cada teste (`beforeEach`).
* **Ação:** Realiza login automático com credenciais de demonstração (`demo@promptqa.test`), pula o tour inicial e salva a sessão com o parâmetro "Lembrar-me".

### 2. Redirecionamento para a Aplicação da Clínica
* **Cenário:** `verificando o link de redirecionamento para a clinica está funcionando`
* **Passos:** Clica no link "open the clinic app" e valida se a URL foi redirecionada para `/clinic`.

### 3. Perfil do Médico
* **Cenário:** `Verificando perfil do Médico`
* **Passos:** Navega até o painel da clínica, pesquisa médicos por especialidade (**Dermatologia**) e acessa o perfil da Dra. Neha Bansal, validando a URL final `/clinic/doctors/d-neha-bansal`.

### 4. Fluxo Completo de Consulta (End to End)
* **Cenário:** `Verificando funcionalidades de consulta end to end`
* **Passos:**
  1. Filtra médicos pela especialidade **Dermatologia**.
  2. Valida a presença da médica esperada (`Dr. Neha Bansal`).
  3. Seleciona data (`2026-10-21`) e horário (`11:00`).
  4. Preenche formulário do paciente (Nome, Telefone, Motivo e Notas).
  5. Confirma a reserva da consulta.
  6. Acessa a página de minhas consultas (`/clinic/appointments`).
  7. Solicita e confirma o cancelamento da consulta.
  8. Valida que o status do agendamento foi alterado para `✕ Cancelled`.
     
---

📸 Execução dos testes

<img width="555" height="392" alt="image" src="https://github.com/user-attachments/assets/0aa75bc8-46e4-4dd5-8471-890a11b4879e" />


## 🛠️ Tecnologias Utilizadas

* **Node.js** (Ambiente de execução JavaScript/TypeScript)
* **Playwright Test** (Framework de testes automatizados E2E)
* **TypeScript** (Linguagem de programação tipada)

---

## 📁 Estrutura do Projeto

```text
├── helpers/
│   ├── constantes.ts     # Módulo com credenciais e constantes do sistema
│   └── auth.ts           # Helper contendo a função de login automatizado
├── tests/
│   └── clinic.spec.ts    # Arquivo contendo os cenários de teste E2E
├── playwright.config.ts  # Configurações globais do Playwright (baseURL, etc.)
├── package.json          # Dependências e scripts do projeto
└── README.md             # Documentação do projeto
```
 🚀 Como Executar os Testes
 
1. Pré-requisitos
  Certifique-se de ter o Node.js instalado na sua máquina (versão 18 ou superior).
  
2. Instalação do Projeto
  Clone este repositório e instale as dependências:

  # Clone o repositório
git clone https://github.com/Emerson05/Playwright-Clinic.git

# Acesse a pasta do projeto
cd PlayWright-Clinic

# Instale as dependências
npm install

# Instale os navegadores do Playwright
npx playwright install

3. Executando os Testes

# Execução em segundo plano (Headless):

npx playwright test

# Interface Gráfica Interativa (UI Mode - Recomendado):

npx playwright test --ui

# Execução visualizando o navegador (Headed Mode):

npx playwright test --headed

# Visualizar o Relatório de Testes:

npx playwright show-report
