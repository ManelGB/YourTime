# YourTime

Este repositório contém o código-fonte do projeto **YourTime**, um sistema simples de registro e histórico de pontos, desenvolvido em HTML, CSS e JavaScript puro, seguindo o padrão de arquitetura MVC no front-end.

---

## 📁 Estrutura de Pastas

```
codigo/
│
├── css/                # Arquivos de estilos (CSS)
├── html/               # Telas do sistema (HTML)
├── img/                # Imagens utilizadas no projeto
├── js/                 # Scripts JavaScript organizados por MVC
│   ├── controllers/
│   ├── models/
│   └── views/
README.md           # Este arquivo
```

---

## 🖥️ Telas (HTML)

- **index.html**: Tela inicial do sistema, com resumo do usuário, saldo de horas e navegação.
- **login.html**: Tela de login.
- **cadastroUser.html**: Tela de cadastro de novo usuário.
- **FormularioPonto.html**: Tela para registrar um novo apontamento de ponto (data, hora início/fim, intervalo, anotações).
- **HistoricoApontamento.html**: Tela de histórico dos apontamentos já registrados, exibidos em cards dinâmicos.
- **registrar.html**: Tela de exemplo para registro de ponto (protótipo).
- **EsqueciSenha.html**: Tela de recuperação de senha (em desenvolvimento).
- **telaNaoFinalizada.html**: Tela placeholder para funcionalidades ainda não implementadas.

---

## 🏗️ Organização dos Scripts JavaScript (MVC)

O projeto utiliza o padrão **MVC (Model-View-Controller)** para separar responsabilidades e facilitar a manutenção.

### **Models (`js/models/`)**

- **ApontamentoModel.js**
  - Responsável por toda a lógica de CRUD dos apontamentos no `localStorage`.
  - Métodos: `getAll()`, `save()`, `update()`, `delete()`, `validar()`.
  - Centraliza as regras de negócio e validação dos dados do apontamento.

- **TimeCard.js**
  - Classe utilitária para representar um apontamento e calcular o saldo de horas trabalhadas.
  - Métodos para converter horários, calcular saldo em minutos, formatar saldo e indicar se o saldo é positivo ou negativo.

### **Views (`js/views/`)**

- **FormularioPontoView.js**
  - Responsável por manipular o DOM do formulário de registro de ponto.
  - Exibe mensagens de erro de validação e limpa mensagens quando necessário.

- **HistoricoView.js**
  - Responsável por renderizar dinamicamente os cards de apontamento na tela de histórico.
  - Usa a classe `TimeCard` para calcular e exibir o saldo de horas de cada registro.

### **Controllers (`js/controllers/`)**

- **FormularioPontoController.js**
  - Orquestra o fluxo do formulário de registro de ponto.
  - Captura o submit, valida os dados via Model, exibe erros via View e salva no localStorage.
  - Redireciona para o histórico após o registro bem-sucedido.

- **HistoricoController.js**
  - Controla a tela de histórico.
  - Busca todos os apontamentos do Model e pede para a View renderizar.
  - Gerencia ações de exclusão de apontamentos.

---

## 🔄 Fluxo de Funcionamento

1. **Registro de ponto**:  
   O usuário preenche o formulário em `FormularioPonto.html`.  
   O Controller valida os dados, salva no localStorage via Model e redireciona para o histórico.

2. **Histórico de apontamentos**:  
   Em `HistoricoApontamento.html`, o Controller busca os apontamentos salvos e a View monta os cards dinamicamente, mostrando saldo de horas e opções de editar/excluir.

3. **Persistência**:  
   Todos os dados são armazenados no navegador do usuário via `localStorage`. Não há back-end.

---

## 📝 Observações

- O projeto **não utiliza frameworks (ainda)**; todo o código é JavaScript puro.
- O padrão MVC foi adotado para facilitar a manutenção e a colaboração em equipe.
- O CSS está separado por tela, mas não é detalhado neste README.
- Futuras melhorias podem incluir autenticação real, integração com banco de dados e uso de frameworks.

---

## 👥 Colabore!

Sinta-se à vontade para sugerir melhorias, abrir issues ou contribuir com novas funcionalidades!
