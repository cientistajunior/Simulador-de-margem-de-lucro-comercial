# 📊 Simulador de Margem de Lucro Comercial

Seja muito bem-vindo(a) ao repositório do **Simulador de Margem de Lucro Comercial**! 🚀

Este projeto foi desenvolvido para ajudar empreendedores, comerciantes e profissionais de finanças a calcularem de forma rápida, precisa e visual a viabilidade financeira de seus produtos, garantindo uma precificação estratégica e saudável para o negócio.

---

## 🔗 Links do Projeto

O simulador está online e pronto para ser utilizado em ambas as plataformas. Escolha a sua preferida para testar a aplicação em tempo real:

* ⚡ **Versão Vercel (Principal):** [![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)]([LINK_DA_VERCEL_AQUI])
* 🐙 **Versão GitHub Pages:** [![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)]([LINK_DO_GITHUB_PAGES_AQUI])

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e ferramentas básicas da web:

* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) — Estruturação semântica da aplicação.
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) — Estilização, layout e responsividade da interface.
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) — Lógica dos cálculos financeiros e interatividade do sistema.
* ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) — Sistema de controle de versão.
* ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) — Hospedagem do código-fonte e gerenciamento do repositório.

---

## 🧠 Como Funciona a Lógica de Cálculo

A aplicação recebe os dados brutos de entrada e realiza o processamento baseado em conceitos comerciais padrão para garantir a precisão:

1. **Custo Bruto do Produto:** O valor inicial de aquisição da mercadoria.
2. **Impostos e Taxas Adicionais:** Alíquotas aplicadas diretamente sobre a operação.
3. **Margem de Lucro Desejada ($M$):** O percentual de ganho pretendido sobre o preço de venda.

A fórmula aplicada para definir o Preço de Venda ($PV$) com base no Markup ou Margem Comercial segue o modelo matemático de formação de preço:

$$PV = \frac{Custo\_Total}{1 - (Percentual\_Despesas + Margem\_Desejada)}$$

---

## 🚀 Guia Prático para Iniciantes: Como Rodar o Projeto Localmente

Se esta é a sua primeira vez mexendo com programação, Git ou editores de código, siga este passo a passo "desenhado" para configurar o seu ambiente e rodar o simulador na sua máquina.

### 📋 1. Ferramentas Necessárias (Instalação Inicial)

Você precisará de três ferramentas instaladas no seu computador:
1. **Um Navegador de Internet:** (Ex: Google Chrome, Brave, Firefox ou Edge).
2. **O Git:** Ferramenta para baixar e gerenciar códigos. [Baixe aqui](https://git-scm.com/) se não tiver.
3. **O VS Code (Visual Studio Code):** O editor de código oficial onde vamos abrir o projeto. [Baixe aqui](https://code.visualstudio.com/).

### ⚙️ 2. Configurando o Git pela primeira vez

Se você acabou de instalar o Git, abra o terminal do seu computador (No Windows, procure por `cmd` ou Prompt de Comando. No Linux/Mac, use `Ctrl + Alt + T`) e execute os dois comandos abaixo para o Git saber quem é você:

```bash
# Informe seu nome (mantenha as aspas)
git config --global user.name "Seu Nome Aqui"

# Informe seu e-mail (mantenha as aspas)
git config --global user.email "seu_email@exemplo.com"

### 📥 3. Baixando o Projeto (Clonar Repositório)

Ainda no terminal, digite o comando abaixo para baixar uma cópia exata deste projeto para o seu computador e aperte Enter: git clone [URL_DO_SEU_REPOSITORIO_AQUI]

### 💻 4. Abrindo e Executando no VS Code (Usando o Go Live)

Agora vamos abrir os arquivos no editor de código e criar um servidor local temporário para ver o projeto funcionando de forma correta e profissional.

    Abra o VS Code no seu computador.

    No menu superior, clique em File (Arquivo) > Open Folder (Abrir Pasta) e selecione a pasta do projeto que você acabou de baixar.

    Instalar a Extensão Live Server:

        No canto esquerdo do VS Code, clique no ícone de Extensões (quadradinhos empilhados) ou aperte Ctrl + Shift + X.

        Na barra de pesquisa, digite Live Server.

        Clique no primeiro resultado (criado por Ritwick Dey) e depois clique no botão azul Install (Instalar).

    Iniciar o projeto (Go Live):

        Com a extensão instalada, clique no arquivo index.html na barra lateral esquerda para abri-lo.

        Olhe para a barra azul bem no canto inferior direito do VS Code. Você verá um botão escrito Go Live (ao lado de uma anteninha). Clique nele.

        Pronto! O VS Code vai iniciar um servidor local seguro e abrir automaticamente o simulador rodando no seu navegador padrão. 🎉

### 📜 Direitos Autorais e Licença

Este software é de propriedade intelectual de Cientista Junior.

O código e os recursos deste projeto estão licenciados sob a Licença MIT. Isso significa que você é livre para usar, copiar, modificar e distribuir o software, desde que inclua o aviso de direitos autorais original e a permissão contida nesta licença em todas as cópias ou partes substanciais do software.

Copyright © 2026 Cientista Junior. Todos os direitos reservados.