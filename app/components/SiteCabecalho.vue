<!-- Cabeçalho em três colunas (1fr auto 1fr): a navegação fica exatamente no eixo central da página -->
<template>
  <header class="cabecalho">
    <div class="container cabecalho__linha">
      <NuxtLink
        to="/"
        class="cabecalho__logo"
        aria-label="Apruma, página inicial"
      >
        <MarcaLogo />
      </NuxtLink>

      <nav class="cabecalho__nav" aria-label="Principal">
        <NuxtLink
          v-for="item in useAppConfig().navegacao"
          :key="item.para"
          :to="item.para"
          class="cabecalho__link"
        >
          {{ item.rotulo }}
        </NuxtLink>
      </nav>

      <div class="cabecalho__acoes">
        <TrocaTema />
        <a
          :href="useAppConfig().portal"
          class="botao botao--secundario botao--pequeno cabecalho__portal"
          >Portal do cliente</a
        >
        <NuxtLink
          to="/#briefing"
          class="botao botao--principal botao--pequeno cabecalho__comecar"
          >Começar projeto</NuxtLink
        >
        <button
          class="cabecalho__menu"
          popovertarget="menu-celular"
          aria-label="Abrir menu"
        >
          <span aria-hidden="true" />
        </button>
      </div>
    </div>

    <!-- Menu do celular com a Popover API: abre e fecha sem JavaScript próprio -->
    <nav id="menu-celular" popover class="menu" aria-label="Menu">
      <NuxtLink
        v-for="item in useAppConfig().navegacao"
        :key="item.para"
        :to="item.para"
        class="menu__link"
        @click="fecharPopover"
      >
        {{ item.rotulo }}
      </NuxtLink>
      <a :href="useAppConfig().portal" class="botao botao--secundario"
        >Portal do cliente</a
      >
      <NuxtLink
        to="/#briefing"
        class="botao botao--principal"
        @click="fecharPopover"
        >Começar projeto</NuxtLink
      >
    </nav>

    <span class="barra-leitura cabecalho__leitura" aria-hidden="true" />
  </header>
</template>

<style scoped>
.cabecalho {
  position: sticky;
  top: 0;
  z-index: 20;
  /* Fundo quase opaco no celular: o desfoque (backdrop-filter) repinta a cada rolagem */
  background: color-mix(in srgb, var(--fundo) 96%, transparent);
  border-bottom: var(--linha);
}

@media (min-width: 900px) and (hover: hover) {
  .cabecalho {
    background: color-mix(in srgb, var(--fundo) 88%, transparent);
    backdrop-filter: blur(12px) saturate(1.4);
  }
}

.cabecalho__linha {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
  height: var(--altura-cabecalho);
}

.cabecalho__logo {
  justify-self: start;
  text-decoration: none;
  border-radius: 6px;
}

.cabecalho__nav {
  display: none;
  gap: 28px;
}

.cabecalho__link {
  position: relative;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  color: var(--texto-2);
  transition: color 160ms ease;
}

.cabecalho__link:hover,
.cabecalho__link.router-link-active {
  color: var(--texto);
}

/* Link ativo marcado com a barra laranja do símbolo */
.cabecalho__link.router-link-active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 2px;
  border-radius: 2px;
  background: var(--destaque);
}

.cabecalho__acoes {
  grid-column: 3;
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 10px;
}

.cabecalho__comecar,
.cabecalho__portal {
  display: none;
}

@media (min-width: 1280px) {
  .cabecalho__portal {
    display: inline-flex;
  }
}

.cabecalho__menu {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: var(--linha);
  border-radius: var(--radius-pill);
  background: transparent;
  cursor: pointer;
}

/* Ícone de menu desenhado com as barras do símbolo */
.cabecalho__menu span,
.cabecalho__menu span::before {
  display: block;
  width: 16px;
  height: 2px;
  border-radius: 2px;
  background: var(--texto);
}

.cabecalho__menu span {
  position: relative;
  top: -3px;
  rotate: -8deg;
}

.cabecalho__menu span::before {
  content: "";
  position: absolute;
  top: 6px;
  rotate: 8deg;
  background: var(--destaque);
}

.cabecalho__leitura {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: var(--destaque);
}

.menu {
  inset: var(--altura-cabecalho) 0 auto auto;
  width: min(340px, 100% - 32px);
  margin: 8px 16px 0 0;
  padding: 16px;
  border: var(--linha);
  border-radius: var(--radius-card);
  background: var(--superficie-elevada);
  color: var(--texto);
  box-shadow: var(--sombra-objeto);
}

.menu:popover-open {
  display: grid;
  gap: 4px;
}

.menu__link {
  padding: 12px 8px;
  border-bottom: var(--linha);
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
}

.menu .botao {
  margin-top: 8px;
}

@media (min-width: 560px) {
  .cabecalho__comecar {
    display: inline-flex;
  }
}

@media (min-width: 1040px) {
  .cabecalho__nav {
    display: flex;
  }

  .cabecalho__menu {
    display: none;
  }
}
</style>
