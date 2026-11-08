# Apruma · site institucional

Site institucional da Apruma, construído a partir do [ROTEIRO-SITE.md](ROTEIRO-SITE.md). Esta versão não tem APIs: todas as páginas são estáticas e geradas no build.

## Stack

- Node 24.15.0 (testado), npm 11
- Nuxt 4.6.4, Vue 3.5, TypeScript
- CSS puro (tokens em `app/assets/css/base.css`, estilos de componente com `<style scoped>`)
- `@nuxtjs/color-mode`: tema claro e escuro
- `@nuxt/fonts`: Bricolage Grotesque, Instrument Sans e Geist Mono, baixadas no build e servidas pelo próprio site

## Como rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # checagem de tipos
npm run generate   # site estático em .output/public
npm run preview    # serve o build gerado
```

## Onde fica cada coisa

| Caminho | Conteúdo |
|---|---|
| `app/app.config.ts` | Todo o conteúdo editável: navegação, etapas, cases, depoimentos, planos, FAQ, contato |
| `app/assets/css/base.css` | Tokens da marca, base, botões, animação "aprumar" e barra de leitura |
| `app/components/` | Componentes (auto-importados pelo Nuxt) |
| `app/pages/` | Rotas do mapa do site (roteiro, seção 3) |
| `app/composables/estado.ts` | Estados compartilhados com `useState` (briefing, etapa ativa, banner de cookies) |
| `app/plugins/ao-centro.ts` | Diretiva `v-ao-centro`, que troca a etapa ativa conforme a rolagem |
| `app/utils/` | Funções pequenas usadas em eventos (`fecharPopover`, `slug`) |
| `public/` | Favicon e `robots.txt` |
| `logo/` | Arquivos-fonte do logo |

## Guia de layout

Vale para qualquer componente novo. Os valores ficam em `app/assets/css/base.css` (seção 3).

| Regra | Como aplicar |
|---|---|
| Um eixo central | Todo conteúdo fica em `.container` (1200 px) ou `.container--estreito` (760 px), sempre centralizado. |
| Cabeçalho de seção | `.cabeca-secao`: kicker, título, texto e link, centralizados, nessa ordem. |
| Ritmo entre seções | `.secao` dá o espaçamento vertical (`--secao`). Para separar seções, alternar `.secao--superficie`; não usar linhas de fundo. |
| Divisor de seção | Toda `.secao--superficie` já se dissolve em meio-tom (seis fileiras de pontos) acima e abaixo, sem marcação extra. Depois da abertura de cada página vem o `DivisorSecao` (pontos e símbolo que se alinha); a `CabecaPagina` já inclui. |
| Detalhes de fundo | `.campo-pontos` na seção adiciona a grade de pontos que se dissolve a partir da base. Usar só nas aberturas (hero e cabeçalhos de página), para não poluir. |
| Animações de card | Ciclos leves em CSS (6 s, defasados por `--ordem`): as peças surgem por escala, tortas, e se aprumam. Só `transform`; no hover, `translate` para não brigar com `.revelar`. |
| Entrada de seção | Classe `.revelar`: o bloco sobe 40 px levemente torto (-1,5°) e se apruma enquanto entra na tela. Em listas, `--ordem` faz cada card entrar um pouco depois do anterior. |
| Grades | Colunas iguais com `gap: var(--coluna-gap)`; cartões com `--radius-card` e fundo `--superficie-elevada`. |
| Texto em bloco centralizado | Classe `.centro` (alinha texto e itens da grade). |
| Espaçamento | Múltiplos de 8 px. |
| Cores | Só tokens semânticos (`--fundo`, `--texto`, `--superficie`, `--borda`, `--destaque`...). A paleta `--marca-*` não é usada direto nos componentes. Texto sobre laranja usa `--sobre-destaque` (carvão nos dois temas). |
| Objetos | O componente `ObjetoPrumo` usa `--sombra-objeto`, `--metal-claro` e `--metal-escuro`, que já mudam com o tema. Interfaces do produto aparecem no `PalcoPortal`, nunca dentro de aparelhos. |

## Performance e acessibilidade

**Meça sempre o build de produção.** O `npm run dev` serve o código sem otimização (centenas de módulos soltos, sem minificação) e derruba o Lighthouse. Para medir:

```bash
npm run generate
npx serve .output/public -l 4173
```

Depois rode o Lighthouse em `http://localhost:4173`. Medição de 08/11/2026 (Lighthouse 13.6):

| Página | Celular | Desktop |
|---|---|---|
| Home | Perf. 95–100 · Acess. 100 | Perf. 100 · Acess. 100 |
| Como funciona | Perf. 99–100 · Acess. 100 | Perf. 100 · Acess. 100 |
| Suporte, Planos, Sobre, Contato, Portfólio | Perf. 97–100 · Acess. 100 | Perf. 100 · Acess. 100 |

Boas práticas e SEO: 100. A performance no celular varia alguns pontos entre medições por causa do tempo de bloqueio (TBT).

Regras que mantêm esses números:

- **Animações só com `transform`** (escala, deslocamento, rotação). Nada de animar `opacity` em texto (o Lighthouse mede o contraste no meio da animação) nem `color`, `width` ou `left` (não são processados pela GPU).
- **`content-visibility: auto`** no container de cada `.secao`: fora da tela, o navegador pula renderização e animações em ciclo.
- **Hidratação sob demanda do Nuxt** na home: `hydrate-on-visible` em seções com interação e `hydrate-never` nas só visuais (diferenciais, depoimento, FAQ com `<details>`, nível de bolha).
- **Fontes:** só o subconjunto latino e pré-carregamento apenas de Bricolage 700 e Instrument 400 (evita mudança de layout na troca de fonte).
- **Cabeçalho:** o desfoque de fundo (`backdrop-filter`) só liga em telas grandes com mouse.
- **Cache:** `/_nuxt/**` com cache de um ano (arquivos com hash). Em hospedagem estática, configure o mesmo cabeçalho no provedor.
- **Títulos em ordem** (H1 → H2 → H3). Quando o H2 não aparece no design, use `.so-leitor`.

## Tema claro e escuro

- `@nuxtjs/color-mode` aplica a classe `.dark` no `<html>`, sem piscar no carregamento.
- Padrão: segue o sistema. O botão no cabeçalho (`TrocaTema.vue`) troca e guarda a escolha em `localStorage` (`apruma-tema`).
- Os valores do tema escuro estão em `:root.dark`, em `base.css`.

## Técnicas usadas

- **Conteúdo em `app.config.ts`** lido com `useAppConfig()` direto no template, sem constantes de dados nos componentes.
- **`useState`** para o texto do briefing: o que a pessoa escreve no hero chega preenchido em `/contato`, sem passar pela URL e sem ir ao servidor.
- **Animações em CSS primeiro**: barra de leitura e alinhamento do símbolo no rodapé com `animation-timeline` (com estado final quando não há suporte); título que se apruma com `@keyframes`; exemplos do briefing só com CSS.
- **Objetos reais em SVG e CSS** (referências do Mobbin: Apple, Vizcom, Ghost e Daylight, com objeto físico centralizado e sombra suave):
  - `ObjetoPrumo`: prumo de pedreiro que balança e para no eixo central do hero.
  - `PalcoPortal`: palco em laranja diluído com pontos, onde a janela do portal sai pela borda (referência: Sana, no Mobbin) e um selo flutuante mostra a etapa.
  - `SecaoFechamento`: cartão dividido (referências: Zaro e Maze, no Mobbin), com painel escuro de pontos, símbolo que se apruma, selos em mono e atalho para o WhatsApp, ao lado do formulário "Fale com a gente" (`FormularioContato`, o mesmo da página /contato).
- **Revelação ao rolar** com a classe `.revelar` (`animation-timeline: view()`).
- **Recursos nativos do navegador**: menu do celular com a Popover API, FAQ com `<details name>` (acordeão exclusivo sem JS), depoimentos com `scroll-snap`.
- **View Transitions** (`experimental.viewTransition`) entre a lista do portfólio e a página do case.
- **`definePageMeta({ validate })`** para gerar 404 em cases inexistentes; `useSeoMeta` em cada página; JSON-LD `Organization` na home.
- `prefers-reduced-motion` desliga as animações e mostra o estado final.

## Antes de publicar

- Trocar os itens marcados com `exemplo: true` em `app.config.ts` (cases e depoimentos) por dados reais, com autorização registrada.
- Preencher `contato.whatsapp` (só dígitos, com DDI e DDD; vazio esconde os links do WhatsApp), `contato.email`, `contato.cnpj`, `contato.redes`, os preços dos pacotes e o endereço do `portal`.
- Substituir as prévias desenhadas em CSS (`PreviaSite.vue`) por capturas reais dos sites.
- Revisar com um advogado os textos de `/privacidade` e `/termos` (estão como rascunho).
- Criar a imagem de compartilhamento (1200 × 630) e o `sitemap.xml`.
- Configurar CSP e HSTS na hospedagem (os outros cabeçalhos de segurança já estão em `nuxt.config.ts`).

## Fora do escopo desta versão

- Envio do formulário de contato (o botão mostra que o envio ainda não está ativo). Ao criar a rota em `server/api/`, validar todos os campos no servidor.
- Portal do cliente (aplicação separada).
- Analytics (o banner de cookies já guarda a escolha da pessoa).
