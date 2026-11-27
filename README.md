# Helena Silva — Landing page de personal trainer

Landing page para uma profissional de Educação Física, com um **montador de plano interativo**: a pessoa escolhe a modalidade, a frequência e se vai treinar em dupla, vê o preço na hora e envia a escolha pronta pelo WhatsApp.

**[Ver o site no ar →](https://helena-personal-bnb.vercel.app/)**

![Página inicial no desktop](public/lp-desktop.png)

<p align="center">
  <img src="public/lp-mobile.png" alt="Montador de plano no celular" width="280" />
</p>

---

## Sobre o projeto

A Helena atende alunos de musculação presencial, CrossFit e planilha de treino online em Banabuiú (CE). O contato com os alunos acontecia todo pelo WhatsApp, e cada interessado precisava perguntar valores e condições um por um.

A landing page resolve isso: em três cliques a pessoa monta o próprio plano, vê exatamente o que está incluso e quanto custa, e já chega no WhatsApp com a mensagem escrita. A Helena recebe o pedido completo, sem precisar repetir as mesmas explicações.

## Funcionalidades

- **Montador de plano** com três modalidades e regras próprias para cada uma:
  - Musculação presencial: 3x ou 5x por semana, individual ou em dupla, com preço diferente para cada caso
  - CrossFit: de 1x a 4x por semana
  - Planilha online: acompanhamento de 3 meses, em duas fases de 45 dias
- **Envio pelo WhatsApp** com a mensagem pronta, montada a partir da escolha
- **Resumo do plano** que acompanha a rolagem no desktop e **barra fixa de preço** no celular
- **Layout responsivo**, pensado primeiro para o celular, de onde vem a maior parte do público
- **SEO local**: título e descrição com a cidade, dados estruturados (JSON-LD) com os serviços e preços, `sitemap.xml` e `robots.txt`
- **Prévia de compartilhamento** (Open Graph) para o link aparecer com imagem no WhatsApp e no Instagram
- **Acessibilidade**: navegação por teclado, foco visível, link "Pular para o conteúdo" e anúncio das mudanças de preço para leitores de tela (`aria-live`)
- **Logo redesenhada em SVG**, nítida em qualquer tamanho de tela

## Tecnologias

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=flat&logo=mui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

- **React** com **Vite**
- **Material UI** (componentes e tema) com **Emotion**
- **Fontsource** para as fontes da marca, servidas pelo próprio site
- **Google Analytics 4** para acompanhar a origem das visitas
- Deploy contínuo na **Vercel**

## Arquitetura

O projeto separa **dados**, **regras** e **tela**. Mudar um preço é editar um único arquivo de configuração, sem tocar em nenhum componente.

```
src/
├── app/                  # Ponto de entrada: App.jsx e main.jsx
├── theme/                # Cores, fontes e estilo dos componentes do MUI
├── config/               # Dados editáveis: planos, preços e contatos
│   ├── plans.js
│   └── site.js
├── utils/                # Funções puras e reutilizáveis
│   ├── formatPrice.js
│   └── whatsapp.js
├── components/           # Peças genéricas, como a logo em SVG
├── features/
│   └── plan-builder/     # Tudo do montador de plano em uma pasta
│       ├── getPlanSummary.js   # Regra: escolha → preço, itens e mensagem
│       ├── usePlanSelection.js # Estado da escolha e regras de troca
│       ├── PlanBuilder.jsx     # Tela das escolhas
│       ├── PlanSummary.jsx     # Resumo com o botão do WhatsApp
│       └── MobilePriceBar.jsx  # Barra fixa no celular
└── sections/             # Blocos da página: Header, Hero, Footer...
```

As dependências seguem uma direção só: `sections → features → components → utils / config / theme`.

### Decisões técnicas

- **A regra de negócio é uma função pura.** `getPlanSummary` recebe a escolha e devolve preço, itens inclusos e mensagem do WhatsApp, sem depender do React. Isso deixa a regra fácil de entender, de testar e de mudar.
- **O estado fica num hook próprio.** `usePlanSelection` cuida das regras de troca: ao mudar de modalidade, mantém a frequência se ela existir na nova e desliga a dupla quando a modalidade não permite.
- **Os componentes só desenham.** `PlanBuilder`, `PlanSummary` e `MobilePriceBar` recebem os dados prontos. Quando os preços mudaram, nenhum deles precisou ser alterado.
- **O SEO fica no `index.html`.** Como é uma aplicação de página única, título, descrição e dados estruturados ficam no HTML inicial, que é o primeiro conteúdo lido pelos buscadores.

## Processo de desenvolvimento

O projeto foi construído em etapas pequenas, cada uma em sua própria branch e integrada por pull request:

- Commits no padrão **[Conventional Commits](https://www.conventionalcommits.org/pt-br/)** (`feat`, `fix`, `refactor`, `chore`, `docs`)
- Uma branch por funcionalidade, como `feat/montador-de-plano` e `feat/seo`
- Build limpo (`npm ci && npm run build`) conferido antes de cada pull request

O histórico completo está nos [pull requests](https://github.com/Gessyca-Oliveira/helena-personal/pulls?q=is%3Apr+is%3Aclosed).

## Autora

**Gessyca Oliveira** — Desenvolvedora Front-end

[Portfólio](https://gessyca-oliveira-dev.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/gessyca-oliveira) · [GitHub](https://github.com/Gessyca-Oliveira)