<!--
  Botão de tema claro/escuro. O ícone é um disco meio cheio que gira 180° na troca.
  ClientOnly evita diferença entre o HTML gerado no build e a preferência salva no navegador.
-->
<template>
  <ClientOnly>
    <button
      type="button"
      class="tema"
      :class="{ 'tema--escuro': useColorMode().value === 'dark' }"
      :aria-label="useColorMode().value === 'dark' ? 'Usar tema claro' : 'Usar tema escuro'"
      @click="useColorMode().preference = useColorMode().value === 'dark' ? 'light' : 'dark'"
    >
      <span class="tema__disco" aria-hidden="true" />
    </button>
    <template #fallback>
      <span class="tema" aria-hidden="true" />
    </template>
  </ClientOnly>
</template>

<style scoped>
.tema {
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

.tema__disco {
  width: 16px;
  height: 16px;
  border: 1.5px solid var(--texto);
  border-radius: 50%;
  /* Metade preenchida com uma borda interna, sem gradiente */
  box-shadow: inset 8px 0 0 0 var(--texto);
  transition: rotate 400ms var(--ease-aprumar);
}

.tema--escuro .tema__disco {
  rotate: 180deg;
}
</style>
