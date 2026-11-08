# Roteiro: site institucional da Apruma

Este roteiro descreve como construir o site institucional da Apruma com a identidade definida: tipografia Bricolage Grotesque + Instrument Sans, paleta minimalista off-white e laranja, e o símbolo "Linhas que se alinham". Ele cobre a identidade, o mapa do site, o conteúdo de cada página, os componentes, a stack técnica, as animações, SEO, acessibilidade, LGPD e a ordem de execução. As referências visuais usadas estão no apêndice A.

> **Pendências antes de publicar:** buscar a marca "Apruma" no INPI (classes 42 e 35), confirmar quem é o titular de apruma.com.br e registrar os domínios escolhidos (apruma.ai, aprumaai.com.br, useapruma.com.br ou apruma.dev).

---

## 1. Conceito da marca

**Nome:** Apruma (do verbo aprumar: pôr no prumo, alinhar, pôr em ordem).

**Promessa:** o cliente conta a ideia em uma conversa e a Apruma transforma essa ideia em um site alinhado, com acompanhamento em tempo real até a publicação.

**Símbolo:** três barras que se endireitam. A de cima está torta, a do meio quase reta e a de baixo, em laranja, está reta. O símbolo mostra a ideia solta virando estrutura. As barras também lembram linhas de texto, que remetem ao briefing feito pelo agente.

**Personalidade:** direta, minimalista, tecnológica sem ser fria, despojada sem ser informal demais.

**Conceito do site: a página é uma aprumação.** O site não segue a sequência padrão de SaaS (hero com mockup, números, cartões com ícone, faixa escura com botão). A ideia solta entra no topo e sai alinhada no fim:

- O título do hero começa torto, como as barras do símbolo, e se endireita.
- A rolagem funciona como a barra de progresso do portal: a página vai de 0% a 100%.
- Linhas verticais finas, o "fio de prumo", ficam visíveis na grade e o conteúdo se alinha a elas.
- A página termina onde começou: no campo "Conta a ideia", com a marca grande no footer e as barras finalmente alinhadas.

**Tom de voz:**

| Faça | Evite |
|---|---|
| "Conta a ideia. A gente apruma." | "Soluções digitais inovadoras e disruptivas" |
| "Seu site está em 62%. Faltam duas páginas." | "Estamos trabalhando no seu projeto!" |
| Frases curtas, verbo no começo | Jargão técnico na comunicação com o cliente |
| Tratar o cliente por "você" | Exclamações em excesso |

---

## 2. Identidade visual

### 2.1 Cores

| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--carvao` | Carvão | `#1A1A1A` | Texto principal, fundos escuros, logo |
| `--chumbo` | Chumbo | `#5A5852` | Barra superior do símbolo em fundo escuro, texto secundário em fundo escuro |
| `--taupe` | Taupe | `#9A978F` | Barra do meio do símbolo, bordas, ícones discretos |
| `--pedra` | Pedra | `#DAD7CF` | Barra superior do símbolo em fundo claro, divisórias |
| `--linho` | Linho | `#EDEBE6` | Fundos de seção alternados, cartões |
| `--papel` | Papel | `#FAFAF7` | Fundo principal do site |
| `--laranja` | Laranja | `#FF5A1F` | Cor de destaque: botão principal, barra de progresso, barra inferior do símbolo |
| `--laranja-texto` | Laranja escuro | `#C43D0A` | Links e textos curtos em laranja sobre fundo claro |

**Regras de uso:**

- A paleta é minimalista: neutros em quase tudo e o laranja em poucos pontos por tela (um botão principal, um destaque, a barra de progresso).
- **Um momento grande de laranja:** o único ponto em que o laranja ocupa área grande é o fim da página, quando a barra de leitura chega a 100% e a barra inferior do símbolo no footer se completa.
- **Contraste:** o laranja `#FF5A1F` não tem contraste suficiente para texto pequeno sobre o papel. Use `--laranja-texto` para links e textos em laranja. Em botões laranja, o texto deve ser carvão, nunca branco.
- **Sem gradientes e sem sombras pesadas.** Separação por espaço, linhas finas (1 px em `--pedra`) e as linhas-guia do prumo. Cartões com fundo e borda ficam só onde há interface simulada (mockups do portal e do chat).
- **Modo escuro (opcional):** fundo carvão, texto papel, bordas chumbo, destaque laranja.

### 2.2 Tipografia

| Uso | Fonte | Peso | Tamanho (desktop / celular) |
|---|---|---|---|
| Logo (nome) | Bricolage Grotesque | 700 | conforme o logo |
| H1 (hero) | Bricolage Grotesque | 700 | 96–120 px / 48 px (escala fluida com `clamp()`) |
| Marca no footer | Bricolage Grotesque | 700 | largura total do container (cerca de 22vw) |
| H2 (título de seção) | Bricolage Grotesque | 700 | 44 px / 30 px |
| H3 (título de cartão) | Bricolage Grotesque | 600 | 24 px / 20 px |
| Corpo | Instrument Sans | 400 | 18 px / 16 px |
| Corpo pequeno, legendas | Instrument Sans | 400 | 14 px |
| Botões, rótulos, menu | Instrument Sans | 500 | 15 px |
| Sobretítulo (kicker) | Geist Mono | 500, caixa alta, espaçamento 0,04em | 12 px |
| Dados e rótulos de sistema (etapa, %, prazo, horário do feed) | Geist Mono | 400 / 500 | 13–14 px |
| Numerais grandes das etapas | Bricolage Grotesque | 700 | 160–240 px / 96 px |

- **Três fontes, cada uma com um papel:** Bricolage Grotesque para títulos e marca, Instrument Sans para leitura e interface, Geist Mono para dados e rótulos de sistema ("ETAPA 03 · 62%", "há 4 min"). A fonte mono dá a sensação de "tempo real" e nunca é usada em texto corrido.
- Percentuais e contadores com `font-variant-numeric: tabular-nums` (ou em Geist Mono), para os números não mudarem de largura enquanto animam.
- Bricolage Grotesque com o eixo óptico (`opsz`) em 96 nos títulos grandes e espaçamento entre letras de -0,02em a -0,03em (até -0,04em no H1 e na marca do footer).
- Altura de linha: 1,1 nos títulos e 1,6 no corpo.
- Largura máxima de texto corrido: cerca de 68 caracteres (≈ 640 px).
- Carregar via `next/font/google` (auto-hospedado, sem requisição ao Google no navegador do visitante), apenas os pesos usados.

### 2.3 Logo

O logo é formado pelo símbolo (três barras) à esquerda e pelo nome "apruma" em Bricolage Grotesque 700, em caixa baixa, à direita.

**Arquivos (pasta `logo/`):**

| Arquivo | Uso |
|---|---|
| `apruma-simbolo.svg` | Símbolo em fundo claro |
| `apruma-simbolo-escuro.svg` | Símbolo em fundo escuro |
| `apruma-icone.svg` | Ícone do app, avatar de redes sociais |
| `apruma-favicon.svg` | Favicon, versão simplificada com duas barras mais grossas (a torta e a laranja), legível em 16 px |

**Símbolo em fundo claro (código):**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x="20" y="20" width="60" height="12" rx="6" fill="#DAD7CF" transform="rotate(-16 50 26)"/>
  <rect x="20" y="44" width="60" height="12" rx="6" fill="#9A978F" transform="rotate(-8 50 50)"/>
  <rect x="20" y="68" width="60" height="12" rx="6" fill="#FF5A1F"/>
</svg>
```

**Montagem do logo completo (lockup):**

- Símbolo com altura igual a 1,3 vez a altura das letras minúsculas do nome.
- Espaço entre símbolo e nome igual à altura de uma barra do símbolo × 2.
- Antes de lançar, converter o nome em curvas no Figma ou Illustrator e exportar o logo completo como SVG único, para não depender da fonte.

**Versões:**

| Versão | Barras (cima, meio, baixo) | Nome |
|---|---|---|
| Fundo claro | Pedra, Taupe, Laranja | Carvão |
| Fundo escuro | Chumbo, Taupe, Laranja | Papel |
| Uma cor (impressão P&B) | Carvão 30%, Carvão 60%, Carvão 100% | Carvão |

**Regras:**

- Área de proteção: no mínimo a altura de uma barra em volta do logo inteiro.
- Tamanho mínimo: símbolo com 24 px de altura no digital; abaixo disso, usar o favicon.
- Não alterar os ângulos (-16°, -8°, 0°), não trocar a ordem das barras, não aplicar sombra ou contorno.
- A barra laranja é sempre a de baixo, porque é a que está aprumada.

### 2.4 Elementos gráficos

- **Título que se apruma:** o H1 do hero tem três linhas inclinadas como as barras do símbolo (-16°, -8°, 0°). No carregamento, cada linha gira até 0°, uma de cada vez (300 ms cada, `ease-out`, 80 ms entre linhas). O texto aparece já visível e só gira; nunca começa com opacidade 0.
- **Fio de prumo:** linhas verticais de 1 px em `--pedra` nas bordas do container e nas divisões principais da grade, visíveis o tempo todo. Substituem a maior parte dos cartões como estrutura da página.
- **Barra de leitura:** fio laranja de 2 px na base do header, que acompanha a rolagem da página de 0% a 100%. É a barra de progresso do portal aplicada ao próprio site.
- **Barra de progresso:** usa o laranja e é o principal elemento visual compartilhado entre site e portal do cliente.
- **Alinhamento final:** no footer, as três barras do símbolo ficam ao lado da marca grande e terminam de se alinhar quando o footer entra na tela.
- **Barras inclinadas como detalhe:** as três barras podem aparecer como marcador de lista ou divisor, sempre discretas.
- **Ícones:** uso mínimo. Onde o roteiro antigo previa ícone, usar um fragmento real da interface (mini chat, mini barra, mini feed). Quando houver ícone, traço fino e uniforme (Lucide ou Tabler, traço 1,5 px), em carvão ou taupe.
- **Fotos e mockups:** telas dos sites entregues em molduras simples de navegador, sem fotos genéricas de banco de imagem.

### 2.5 Espaçamento e grade

- Base de 8 px (8, 16, 24, 32, 48, 64, 96, 128).
- Grade de 12 colunas, largura máxima de 1200 px, margens laterais de 24 px no celular e 48 px no desktop.
- Linhas-guia do prumo nas bordas do container (1200 px) e, no desktop, nas colunas 4 e 8. No celular, só as duas bordas.
- Divisórias horizontais de 1 px em `--pedra` entre seções e entre itens de lista (portfólio, FAQ, planos).
- Espaço vertical entre seções: 128 px no desktop, 80 px no celular.
- Raio dos cantos: 12 px em mockups e cartões de interface, 999 px em botões (formato pílula).

---

## 3. Mapa do site

```
/                      Home
/como-funciona         Como funciona (o processo em 6 etapas)
/portfolio             Portfólio
/portfolio/[case]      Página de cada case
/planos                Planos e pacotes
/sobre                 Quem somos
/suporte               Suporte e perguntas frequentes
/contato               Contato
/privacidade           Aviso de privacidade
/termos                Termos de uso
/portal                Portal do cliente (botão no header, fora do site institucional)
```

**Header:** logo à esquerda; links Como funciona, Portfólio, Planos, Sobre, Suporte; à direita, botão secundário "Portal do cliente" e botão principal "Começar projeto". Na base do header, a barra de leitura laranja de 2 px.

**Footer:** em cima, colunas finas com links do mapa do site, contato, redes sociais, privacidade, termos, preferências de cookies e CNPJ após a formalização. Embaixo, "apruma" em Bricolage 700 ocupando a largura toda do container, com o símbolo ao lado; as barras se alinham quando o footer entra na tela.

---

## 4. Conteúdo de cada página

### 4.1 Home

| Seção | Conteúdo | Observações |
|---|---|---|
| Hero | H1 em três linhas: "Conta / a ideia. / A gente apruma.", com as linhas inclinadas como as barras do símbolo e se endireitando no carregamento. Embaixo, uma frase de subtítulo e o **campo de briefing** no lugar do mockup. | O campo mostra exemplos que se digitam sozinhos, com etiquetas inline: "Quero um [site institucional] para minha [clínica] que [receba agendamentos]". O visitante pode escrever e clicar em "Aprumar": vai para o cadastro com o texto já preenchido. Link secundário "Ver como funciona". |
| Prova rápida | Três números em Geist Mono (ex.: projetos entregues, prazo médio, nota dos clientes), numa linha só, separados pelas linhas-guia. | Usar apenas números reais; deixar a seção oculta até haver dados. |
| Como funciona | Seção fixa controlada pela rolagem. À esquerda, as seis etapas em lista; a etapa ativa fica em carvão e as outras em taupe. À direita, um mini portal do cliente cuja barra vai de 0% a 100% conforme a rolagem. | A tela do mini portal muda a cada etapa: chat com o agente, proposta, feed de atividades, comentário no site de teste, "publicado". Cada etapa mostra o prazo médio em Geist Mono ("~2 dias"). Link para `/como-funciona`. No celular, vira lista vertical com uma barra por etapa, sem fixar. |
| Diferenciais | Três ou quatro blocos, cada um com um fragmento real da interface no lugar de ícone. | "Sem reunião": duas mensagens de chat. "Tempo real": barra subindo de 61% para 62%. "Sob medida": duas versões do mesmo bloco lado a lado. "Pagamento em duas etapas": barra dividida 50/50, com a segunda metade cinza até a entrega. |
| Portfólio | Lista de três a cinco cases em linhas grandes: nome do cliente, tipo de projeto, prazo e resultado. | No hover (desktop), a captura do site aparece numa moldura de navegador que acompanha o cursor. No celular, a captura fica fixa na linha. Link para `/portfolio`. |
| Depoimentos | Um depoimento por vez, grande. O título é o resultado ("No ar em 21 dias"); a citação vem embaixo, com nome, empresa e foto ou logo. | Somente com consentimento explícito do cliente para publicar. Sem carrossel automático; setas manuais. |
| Planos (resumo) | Coluna "Todo projeto inclui" à esquerda e os pacotes à direita, com preço "a partir de", páginas, rodadas de revisão e prazo. | Link para `/planos`. |
| Perguntas frequentes | Cinco perguntas mais comuns, em duas colunas com divisória de 1 px e ícone mais/menos. | Sem caixas. Acordeão acessível. |
| Fechamento | O mesmo campo de briefing do hero, com o título "Sua ideia, aprumada." | A página termina onde começou. Logo depois vem o footer com a marca grande, onde a barra de leitura chega a 100% e as barras do símbolo se alinham. Não usar faixa escura com botão. |

### 4.2 Como funciona

Cada etapa é um bloco de altura grande, com o numeral da etapa em Bricolage 700 gigante (160–240 px) à direita, título, explicação curta, prazo médio em Geist Mono e uma captura do que o cliente vê no portal. Uma linha vertical laranja acompanha a rolagem ao lado das etapas, ligando 01 a 06. As seis etapas:

1. **Captação:** cadastro rápido com link no e-mail.
2. **Briefing com o agente:** conversa no chat, sem reunião.
3. **Proposta e contrato:** proposta no painel, assinatura eletrônica e entrada de 50%.
4. **Desenvolvimento:** barra de progresso por esforço e feed de atividades.
5. **Revisões e entrega:** comentários direto no site de teste, aprovação, pagamento final e publicação.
6. **Pós-venda:** manutenção, suporte e indicações.

Fechar com uma seção "O que você acompanha no painel", com captura do portal, e um botão "Começar projeto".

### 4.3 Portfólio e cases

- Lista de cases em linhas grandes (não grade), com filtro por tipo em etiquetas (landing page, institucional, portfólio, loja). Cada linha tem nome do cliente, tipo, prazo e resultado; no hover, a captura aparece em moldura de navegador.
- Página de cada case: a **frase original do briefing** ao lado do site entregue (o "antes e depois" da aprumação), problema, solução, resultado, imagens em moldura de navegador, depoimento (se autorizado) e link para o site no ar.
- A transição da lista para o case usa View Transitions: a captura do hover cresce e vira o topo da página do case.
- Começar com três a cinco cases reais ou projetos-piloto.

### 4.4 Planos

- Coluna "Todo projeto inclui" à esquerda (briefing pelo agente, portal com progresso ao vivo, site de teste, publicação), para não repetir a mesma lista em todos os pacotes.
- À direita, os pacotes, que diferem só no que importa: número de páginas, rodadas de revisão, prazo médio e preço "a partir de". Separação por linhas finas, não por cartões com sombra.
- Bloco do plano de manutenção mensal.
- Explicação do pagamento com uma barra dividida 50/50: a primeira metade laranja ("na aprovação da proposta") e a segunda em pedra ("na entrega").
- Botão em cada plano levando ao cadastro no portal com o pacote pré-selecionado.

### 4.5 Sobre

- Abertura com o nome como verbete de dicionário, em escala grande: "a·pru·mar *v.* pôr no prumo; endireitar; pôr em ordem".
- História curta da Apruma em um parágrafo grande, estilo manifesto.
- Quem são os sócios, com foto, nome e papel (somente com autorização de cada um).
- Princípios: transparência, sob medida, prazos claros.

### 4.6 Suporte

- Perguntas frequentes agrupadas por tema (processo, pagamento, prazos, manutenção, dados).
- Canais de contato e horário de atendimento.
- Link para o portal do cliente.

### 4.7 Contato

- Formulário curto: nome, e-mail e mensagem. Telefone opcional.
- Aviso logo abaixo do formulário explicando para que os dados serão usados, com link para o aviso de privacidade.
- Proteção contra spam sem captcha visual sempre que possível (campo oculto e limite de envios).

### 4.8 Privacidade e termos

- Aviso de privacidade escrito em linguagem simples, cobrindo: dados coletados, finalidade de cada um, base legal, compartilhamento (incluindo o provedor de IA do chat e o gateway de pagamento), prazo de retenção, direitos do titular e canal do encarregado.
- Termos de uso do site e do portal.
- Os dois textos devem ser revisados por um advogado antes da publicação.

---

## 5. Componentes

| Componente | Especificação |
|---|---|
| Botão principal | Fundo laranja, texto carvão, Instrument Sans 500, formato pílula, altura 48 px. Hover: fundo um tom mais escuro. |
| Botão secundário | Fundo transparente, borda 1 px carvão, texto carvão. |
| Link | Texto `--laranja-texto` com sublinhado no hover; em fundo escuro, texto papel sublinhado. |
| Cartão de interface | Só para mockups (chat, portal, feed). Fundo papel com borda 1 px pedra, raio 12 px, padding 24–32 px. Sem sombra. |
| Header | Fundo papel, fixo no topo ao rolar, barra de leitura laranja de 2 px na base. |
| Barra de leitura | Fio laranja de 2 px, largura proporcional à rolagem da página, animado só com `transform: scaleX()`. |
| Barra de progresso | Trilho em pedra, preenchimento laranja, 8 px de altura, cantos arredondados, percentual em Geist Mono ao lado. |
| Linhas-guia (prumo) | Linhas verticais de 1 px em pedra, posicionadas em camada fixa atrás do conteúdo, sem interferir em cliques (`pointer-events: none`). |
| Título que se apruma | H1 em três linhas com `rotate` inicial de -16°, -8° e 0°, que animam até 0°. Texto real, selecionável e lido normalmente por leitores de tela. |
| Campo de briefing | Área de texto grande com borda 1 px carvão, raio 12 px, botão laranja "Aprumar" dentro do campo. Exemplos digitados em ciclo com etiquetas inline em fundo linho. O ciclo para quando o campo recebe foco. |
| Linha de case | Linha de largura total com divisória de 1 px, nome do cliente em Bricolage 600, tipo e prazo em Geist Mono, captura em moldura de navegador no hover. |
| Etapa fixa (scroll) | Lista de etapas à esquerda e mini portal à direita, fixos durante a rolagem da seção; a etapa ativa e o percentual mudam conforme a posição. |
| Acordeão (FAQ) | Pergunta em Instrument Sans 500, divisória de 1 px, ícone de mais/menos, abre com animação curta. Sem caixas. |
| Selo de etapa | Número em Geist Mono no formato "ETAPA 03", ou numeral gigante em Bricolage nas páginas internas. |
| Marca do footer | "apruma" em Bricolage 700 na largura total do container, com o símbolo ao lado; as barras se alinham quando o footer entra na tela. |
| Banner de cookies | Fixo na base, fundo carvão, botões "Aceitar", "Recusar" e "Preferências" com o mesmo destaque visual. |
| Formulário | Campos com borda 1 px taupe, foco com anel laranja, rótulo sempre visível acima do campo. |

---

## 6. Stack técnica

Mesma base da plataforma, para reaproveitar componentes entre o site e o portal:

- **Framework:** Next.js com App Router e TypeScript.
- **Estilo:** Tailwind CSS com os tokens da seção 7.
- **Fontes:** `next/font/google` com Bricolage Grotesque, Instrument Sans e Geist Mono.
- **Conteúdo:** arquivos MDX no repositório para cases e páginas; migrar para um CMS (Sanity ou Payload) só se o volume crescer.
- **Animações:** CSS primeiro; Motion só onde CSS não resolve. Detalhes na seção 6.1.
- **Formulários:** rota de API no Next.js com validação em Zod e envio por e-mail transacional (Resend).
- **Hospedagem:** Vercel, com deploy de pré-visualização a cada pull request.
- **Analytics:** ferramenta sem cookies (Plausible ou Umami) ou, se usar Google Analytics, carregar somente após o aceite no banner de cookies.

### 6.1 Animações e performance

| Animação | Técnica | Observação |
|---|---|---|
| Barra de leitura | CSS `animation-timeline: scroll()` animando `transform: scaleX()` | Sem JavaScript. Fora da thread principal. |
| Barras do símbolo no footer | CSS `animation-timeline: view()` animando `rotate` | Alinham quando o footer entra na tela. |
| Preenchimento do mini portal na seção "Como funciona" | CSS `animation-timeline: view()` na seção; troca de tela da etapa com Motion `useScroll` | Só a troca de conteúdo usa JavaScript. |
| Título que se apruma | CSS `@keyframes` com `rotate`, disparado no carregamento | O H1 aparece já visível (sem opacidade 0), para não atrasar o LCP. |
| Exemplos digitados no campo de briefing | Motion (`motion/mini` ou `LazyMotion`) ou um script pequeno próprio | Carregar depois da hidratação; parar quando o campo recebe foco. |
| Captura do case seguindo o cursor | `transform: translate3d()` com `requestAnimationFrame` | Só em dispositivos com `hover: hover`. |
| Lista do portfólio para a página do case | View Transitions (suporte experimental do Next.js ou API do navegador) | Sem suporte, a navegação acontece normalmente. |

**Regras:**

- Animar só `transform` e `opacity`. Nunca `width`, `height`, `top` ou `left`.
- Animações por rolagem dentro de `@supports (animation-timeline: scroll())`. Sem suporte, mostrar o estado final (barras alinhadas, portal em 100%).
- Com `prefers-reduced-motion: reduce`: título já reto, campo de briefing com um exemplo fixo, mini portal mostrando a etapa e o percentual sem transição, barra de leitura desligada.
- Motion carregado com `LazyMotion` ou `motion/mini` para manter o JavaScript da home pequeno.
- Nenhuma animação em loop infinito fora da área visível; pausar com `IntersectionObserver`.

---

## 7. Tokens prontos

### CSS

```css
:root {
  --carvao: #1A1A1A;
  --chumbo: #5A5852;
  --taupe: #9A978F;
  --pedra: #DAD7CF;
  --linho: #EDEBE6;
  --papel: #FAFAF7;
  --laranja: #FF5A1F;
  --laranja-texto: #C43D0A;

  --font-display: 'Bricolage Grotesque', system-ui, sans-serif;
  --font-body: 'Instrument Sans', system-ui, sans-serif;
  --font-mono: 'Geist Mono', ui-monospace, monospace;

  --linha-prumo: 1px solid var(--pedra);
  --ease-aprumar: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-barra: 300ms;

  --radius-card: 12px;
  --radius-pill: 999px;
}

body {
  background: var(--papel);
  color: var(--carvao);
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-variation-settings: 'opsz' 96;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.dado {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}

/* Barra de leitura: só com suporte a animações por rolagem */
@supports (animation-timeline: scroll()) {
  .barra-leitura {
    transform-origin: left;
    animation: encher linear both;
    animation-timeline: scroll(root);
  }
  @keyframes encher {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
}

/* Título que se apruma */
.h1-linha { display: block; transform-origin: left center; }
.h1-linha:nth-child(1) { animation: aprumar-16 var(--dur-barra) var(--ease-aprumar) both; }
.h1-linha:nth-child(2) { animation: aprumar-8 var(--dur-barra) var(--ease-aprumar) 80ms both; }
@keyframes aprumar-16 { from { rotate: -16deg; } to { rotate: 0deg; } }
@keyframes aprumar-8  { from { rotate: -8deg; }  to { rotate: 0deg; } }

@media (prefers-reduced-motion: reduce) {
  .h1-linha, .barra-leitura { animation: none; }
}
```

### Tailwind (`tailwind.config.ts`)

```ts
theme: {
  extend: {
    colors: {
      carvao: '#1A1A1A',
      chumbo: '#5A5852',
      taupe: '#9A978F',
      pedra: '#DAD7CF',
      linho: '#EDEBE6',
      papel: '#FAFAF7',
      laranja: { DEFAULT: '#FF5A1F', texto: '#C43D0A' },
    },
    fontFamily: {
      display: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
      body: ['var(--font-instrument)', 'system-ui', 'sans-serif'],
      mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
    },
    borderRadius: { card: '12px' },
  },
},
```

### Fontes (`app/layout.tsx`)

```tsx
import { Bricolage_Grotesque, Instrument_Sans, Geist_Mono } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-bricolage',
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-instrument',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
});
```

---

## 8. SEO

- Título e descrição únicos por página, com o nome da marca no fim do título ("Como funciona · Apruma").
- Open Graph e Twitter Card com imagem padrão 1200 × 630 px: fundo papel, logo e frase da marca.
- `sitemap.xml` e `robots.txt` gerados pelo Next.js.
- Dados estruturados: `Organization` na home e `CreativeWork` nos cases.
- URLs curtas em português, sem acentos.
- Meta de Core Web Vitals: LCP abaixo de 2,5 s, CLS abaixo de 0,1, INP abaixo de 200 ms.
- Imagens em AVIF ou WebP com `next/image` e dimensões definidas.

---

## 9. Acessibilidade

- Contraste mínimo de 4,5:1 para texto (por isso o laranja escuro em links e o texto carvão em botões laranja).
- Navegação completa por teclado, com foco visível (anel laranja de 2 px).
- Hierarquia correta de títulos (um H1 por página).
- Texto alternativo em todas as imagens; o logo no header com `aria-label="Apruma, página inicial"`.
- Animações desligadas quando o visitante prefere movimento reduzido (detalhes na seção 6.1).
- O H1 inclinado é texto real; a rotação é só visual e não muda a ordem de leitura.
- Os exemplos digitados no campo de briefing ficam fora da leitura de tela (`aria-hidden`); o campo tem rótulo próprio ("Conte a sua ideia") e o ciclo para quando recebe foco.
- A seção fixa de etapas também funciona por teclado: cada etapa é um item focável que mostra a tela correspondente.
- A captura que segue o cursor no portfólio é decorativa; o link de cada linha leva ao case e funciona sem hover.
- Formulários com rótulos visíveis e mensagens de erro em texto, não só em cor.
- Meta: nota 95 ou mais em acessibilidade no Lighthouse.

---

## 10. LGPD no site

O site coleta dados pessoais no formulário de contato, no cadastro do portal e por cookies. Por isso:

- **Finalidade e necessidade:** coletar só o que cada formulário precisa (contato: nome, e-mail e mensagem; telefone opcional).
- **Campo de briefing do hero:** o texto digitado só é enviado quando o visitante clica em "Aprumar". Ele vai para o cadastro pelo armazenamento da sessão do navegador (`sessionStorage`), nunca pela URL, e não é salvo no servidor antes de o visitante concluir o cadastro. Aviso curto embaixo do campo: o texto será usado para iniciar o briefing, com link para o aviso de privacidade.
- **Transparência:** aviso curto junto a cada formulário, com link para o aviso de privacidade.
- **Cookies:** banner com opção de recusar os não essenciais com o mesmo destaque de aceitar; analytics e pixels de marketing só depois do aceite; link permanente "Preferências de cookies" no footer.
- **Retenção:** definir por quanto tempo as mensagens de contato ficam guardadas e apagar depois.
- **Direitos do titular:** canal claro (e-mail do encarregado) para acesso, correção e exclusão de dados.
- **Depoimentos, nomes, fotos e logos de clientes:** publicar somente com consentimento explícito e registrado.
- **Segurança:** HTTPS, headers de segurança (CSP, HSTS, X-Content-Type-Options) e chaves de API apenas no servidor.

---

## 11. Ordem de execução

| Etapa | Entregas | Critério de pronto |
|---|---|---|
| 1. Marca | Logo final vetorizado, nome convertido em curvas, favicon, imagem de compartilhamento | Arquivos exportados nas quatro versões |
| 2. Conteúdo | Textos de todas as páginas, três a cinco cases, perguntas frequentes | Textos revisados e aprovados pelos sócios |
| 3. Design | Layout no Figma da home, de uma página interna e dos componentes, em desktop e celular; protótipo das animações principais (título que se apruma, seção fixa de etapas, footer) | Aprovação das telas principais e do movimento |
| 4. Base técnica | Projeto Next.js, tokens, fontes, header, footer, componentes base | Componentes publicados em pré-visualização |
| 5. Páginas | Home, Como funciona, Portfólio, Planos, Sobre, Suporte, Contato | Todas as páginas navegáveis no celular e no desktop |
| 6. Legal e LGPD | Aviso de privacidade, termos, banner de cookies | Textos revisados por advogado |
| 7. Qualidade | SEO, acessibilidade, performance, teste dos formulários | Lighthouse com 90+ em todas as categorias |
| 8. Lançamento | Domínio, HTTPS, analytics, redirecionamentos dos domínios extras | Site no ar e formulário entregando mensagens |

---

## 12. Checklist final

- [ ] Marca "Apruma" pesquisada no INPI
- [ ] Domínios registrados e redirecionando para o principal
- [ ] Logo em todas as versões e favicon instalados
- [ ] Fontes carregando via `next/font` sem atraso de layout
- [ ] Laranja usado só em destaques; links em laranja escuro
- [ ] Animações testadas com movimento reduzido e em navegador sem `animation-timeline`
- [ ] H1 visível desde o primeiro quadro (sem atraso de LCP)
- [ ] Campo de briefing sem enviar dados pela URL
- [ ] Todas as páginas com título, descrição e imagem de compartilhamento
- [ ] Banner de cookies com opção de recusar
- [ ] Aviso de privacidade e termos publicados
- [ ] Depoimentos e cases com autorização registrada
- [ ] Formulário de contato testado de ponta a ponta
- [ ] Lighthouse 90+ em performance, acessibilidade, boas práticas e SEO
- [ ] Botão "Portal do cliente" levando ao portal

---

## Apêndice A. Referências visuais (Mobbin)

| Seção | Referência | O que aproveitar |
|---|---|---|
| Hero | [Ploy](https://mobbin.com/sites/sections/7a4a0e95-d40f-4d34-ac98-acc41c832d11) | Escala do título |
| Hero | [Zaro](https://mobbin.com/sites/sections/1504b865-76c3-4681-8079-da52475e6e58) | Etiquetas inline no campo de texto |
| Hero | [Relume](https://mobbin.com/sites/sections/39e8bacf-19cf-4789-86b0-8c5288bcaa3a), [Replit](https://mobbin.com/sites/sections/a0b00ff6-b2d6-4321-aebc-ac2c1cc5b9de) | Campo de briefing no lugar do mockup |
| Fio de prumo | [Zaro](https://mobbin.com/sites/sections/8c5f87b3-8ee0-4662-857f-ab40416365c1), [Corgi](https://mobbin.com/sites/sections/9b9c67e8-1c8d-4b62-9c25-aa2a70708213) | Linhas-guia verticais visíveis |
| Como funciona | [Dovetail](https://mobbin.com/sites/sections/0c8a622e-7ba8-4695-8e33-c1a6138dda78) | Lista com etapa ativa destacada |
| Como funciona | [Runway](https://mobbin.com/sites/sections/bcbe23c6-95ea-467d-abc5-d913d2bc3667) | Prazo médio por etapa |
| Como funciona | [Trawelt](https://mobbin.com/sites/sections/629aae31-4a94-46df-a97f-3180a6ae22e0) | Numerais gigantes |
| Mini portal | [Bonsai](https://mobbin.com/screens/58dd96f4-3332-455b-90df-25205c9c9e99), [Linear](https://mobbin.com/screens/9c8e3907-b7af-48d6-ae2d-9b4ff700d433) | Feed de atividades e marcos com % |
| Diferenciais | [FLORA](https://mobbin.com/sites/sections/35657c50-f894-4f9e-9a02-7ec46c414587) | Fragmentos de interface no lugar de ícones |
| Portfólio | [Raw Materials](https://mobbin.com/sites/sections/88014607-d7fa-4793-a09b-de483fe6c931) | Lista em linhas grandes |
| Portfólio | [TinyWins](https://mobbin.com/sites/sections/b497edad-c01e-4184-8d52-12689631b694) | Metadados por linha |
| Depoimentos | [Unify](https://mobbin.com/sites/sections/5115b934-3d06-4159-bd20-51acb3a03f52) | Resultado como título |
| Depoimentos | [Swap](https://mobbin.com/sites/sections/55081658-a203-4eab-817a-becdce00b7c3) | Citação única em tamanho grande |
| Planos | [Parker AI](https://mobbin.com/sites/sections/240ebeb3-dfb9-4fe3-8bc0-9f069adab348) | Coluna "o que inclui" + pacotes |
| Planos | [Corgi](https://mobbin.com/sites/sections/9b9c67e8-1c8d-4b62-9c25-aa2a70708213) | Uso contido do laranja |
| FAQ | [Square](https://mobbin.com/sites/sections/89c2cb81-bf4b-42ca-83d9-1d46d27ee7cd), [Relume](https://mobbin.com/sites/sections/108fd2bf-4651-4e0f-8972-e4d8fb30299d) | Linhas finas em duas colunas, "Ver todas" |
| Footer | [Structured](https://mobbin.com/sites/sections/cf954a98-4f2e-41d3-b2a1-168e4ba0108d), [Waka Waka](https://mobbin.com/sites/sections/98fd09b2-7134-404b-a9df-d6d91c49ec54), [BAGGU](https://mobbin.com/sites/sections/ddfad441-10db-4949-9baa-299e7e0edeee) | Marca na largura total |
| Sobre | [Instrument](https://mobbin.com/sites/sections/11dd2d6f-244e-4283-aaba-a7867f36b4e1), [MOUTHWASH](https://mobbin.com/sites/sections/448a4e6f-c7cf-4dc0-b6de-a2e375ebc761) | Tipografia em escala mista, manifesto |

**Padrões a evitar** (o modelo que deixava o roteiro genérico): faixa escura com título e botão no fechamento ([Figma](https://mobbin.com/sites/sections/bfb263aa-8a1d-447e-8146-b5a48d2878d5), [Squarespace](https://mobbin.com/sites/sections/85065c8c-1085-48f2-a17d-41558eeef54f)), três cartões de preço iguais ([Jitter](https://mobbin.com/sites/sections/efa8c705-28a2-410f-99ce-849bd36f61c7)) e FAQ em caixas ([HubSpot](https://mobbin.com/sites/sections/b9c47942-5df6-4547-941a-82bc4bdf5760)).
