<template>
  <a class="pular so-leitor" href="#conteudo">Pular para o conteúdo</a>
  <SiteCabecalho />
  <main id="conteudo">
    <slot />
  </main>
  <LazySiteRodape hydrate-on-visible />
  <BannerCookies />
</template>

<style scoped>
.pular:focus {
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 100;
  width: auto;
  height: auto;
  padding: 12px 16px;
  clip-path: none;
  background: var(--texto);
  color: var(--fundo);
  border-radius: 8px;
}

main {
  position: relative;
}
</style>
