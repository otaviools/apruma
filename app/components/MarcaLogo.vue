<!-- Lockup: símbolo + nome em caixa baixa. Herda a cor do texto, então funciona nos dois temas. -->
<template>
  <span class="logo">
    <MarcaSimbolo class="logo__simbolo" />
    <span class="logo__nome">apruma</span>
  </span>
</template>

<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--texto);
}

.logo__simbolo {
  width: 30px;
  height: 30px;
}

.logo__nome {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
  translate: 0 -1px;
}
</style>
