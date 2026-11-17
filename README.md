# 🏥 Playwright Clinic — QA Automation

> Projeto de automação de testes **end-to-end** para o sistema de agendamento médico [QA Tools Playground](https://playground.qatools.dev/), construído com **Playwright** + **TypeScript** seguindo o padrão **Page Object Model (POM)**.

![Playwright](https://img.shields.io/badge/Playwright-1.64+-45ba4b?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-yellow)

---

## 📌 Sobre o Projeto

Este projeto automatiza os principais fluxos do módulo **Clinic** da plataforma QA Tools Playground, cobrindo:

- 🔐 **Autenticação** via helper reutilizável
- 🔗 **Redirecionamento** para o app de clínica
- 🩺 **Busca e seleção de médicos** por especialidade
- 📅 **Agendamento de consultas** com preenchimento de formulário
- ❌ **Cancelamento de consultas** com confirmação

---

## 🗂️ Estrutura do Projeto

```
playwright-clinic/
│
├── tests/
│   └── clinic.spec.ts         # Suíte principal — fluxo E2E completo
│
├── pages/                     # Page Objects (POM)
│   ├── HomePage.ts            # Página inicial — link de acesso à clínica
│   ├── ProfileDocPage.ts      # Busca de médicos por especialidade
│   ├── DocApoitment.ts        # Formulário de agendamento de consulta
│   └── CheckApointment.ts     # Visualização e cancelamento de consultas
│
├── helpers/
│   ├── auth.ts                # Função de login reutilizável (loginClinic)
│   └── constantes.ts          # Credenciais e constantes de ambiente
│
├── playwright.config.ts       # Configuração do Playwright
└── package.json
```

---

## 🧩 Page Objects

| Classe | Arquivo | Responsabilidade |
|---|---|---|
| `HomePage` | `pages/HomePage.ts` | Acessa o link da clínica e valida o redirecionamento |
| `ProfileDocPage` | `pages/ProfileDocPage.ts` | Busca médicos, filtra por especialidade (Dermatology) e seleciona o médico |
| `DoctorApointment` | `pages/DocApoitment.ts` | Preenche o formulário de agendamento (data, horário, nome, telefone, motivo) |
| `CheckApointment` | `pages/CheckApointment.ts` | Navega até consultas agendadas e realiza o cancelamento |

---

## 🧪 Testes

Arquivo: [`tests/clinic.spec.ts`](./tests/clinic.spec.ts)

| Teste | Descrição |
|---|---|
| ✅ Redirecionamento da clínica | Verifica se o link da home redireciona corretamente para `/clinic` |
| ✅ Perfil do Médico | Busca por especialidade Dermatology e acessa o perfil da Dra. Neha Bansal |
| ✅ Fluxo E2E de Consulta | Agenda uma consulta completa e cancela via tela de appointments |

> `beforeEach`: todos os testes fazem **login automático** via `loginClinic()` antes de executar.

---

## 🔐 Autenticação

A função `loginClinic` em [`helpers/auth.ts`](./helpers/auth.ts) encapsula o fluxo de login:

1. Navega para `/login`
2. Fecha o tour inicial (botão *Skip tour*)
3. Preenche e-mail e senha
4. Marca *Remember me*
5. Clica em *Sign in*

As credenciais ficam centralizadas em [`helpers/constantes.ts`](./helpers/constantes.ts):

```ts
export const CREDENTIALS = {
  clinicDemo: {
    email: "demo@promptqa.test",
    password: "Demo@1234"
  }
};
```

---

## ⚙️ Configuração

Arquivo: [`playwright.config.ts`](./playwright.config.ts)

| Opção | Valor |
|---|---|
| `baseURL` | `https://playground.qatools.dev/` |
| `testIdAttribute` | `data-testid` |
| `slowMo` | `1000ms` |
| `trace` | `on-first-retry` |
| `reporter` | `html` |
| `browser ativo` | Chromium |

---

## 🛠️ Como Executar

### 1. Pré-requisitos

```bash
# Instale as dependências
npm install

# Instale os browsers do Playwright
npx playwright install
```

### 2. Executando os Testes

```bash
# Rodar todos os testes
npx playwright test

# Modo UI interativo (recomendado para desenvolvimento)
npx playwright test --ui

# Com janela do browser visível
npx playwright test --headed

# Debug passo a passo
npx playwright test --debug

# Rodar um teste específico por nome
npx playwright test --grep "fluxo completo"
```

### 3. Relatório

```bash
# Abrir o relatório HTML gerado
npx playwright show-report
```

---

## 🌐 App Testado

| Info | Detalhe |
|---|---|
| **Plataforma** | [QA Tools Playground](https://playground.qatools.dev/) |
| **Módulo** | Clinic |
| **Médico testado** | Dra. Neha Bansal — Dermatologia |
| **Fluxo coberto** | Login → Busca → Agendamento → Cancelamento |

---

## 📄 Licença

Este projeto está sob a licença **ISC**.
