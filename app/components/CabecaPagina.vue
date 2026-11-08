<!--
  Abertura das páginas internas: kicker, H1 grande e texto de apoio, centralizados,
  sobre o campo de pontos e fechada pelo divisor com o símbolo (guia de layout).
-->
<script setup lang="ts">
defineProps<{ kicker: string; titulo: string; texto?: string }>()
</script>

<template>
  <div class="abertura campo-pontos">
    <header class="cabeca container">
      <p class="kicker">{{ kicker }}</p>
      <h1 class="cabeca__titulo">{{ titulo }}</h1>
      <p v-if="texto" class="cabeca__texto">{{ texto }}</p>
      <slot />
    </header>
    <DivisorSecao />
  </div>
</template>

<style scoped>
.abertura {
  padding-bottom: 64px;
}

.cabeca {
  display: grid;
  justify-items: center;
  gap: 24px;
  padding-block: 72px 64px;
  text-align: center;
}

.cabeca__titulo {
  max-width: 16ch;
  font-size: clamp(44px, 7.5vw, 96px);
  letter-spacing: -0.045em;
  line-height: 0.95;
}

.cabeca__texto {
  max-width: 52ch;
  font-size: clamp(17px, 1.6vw, 20px);
  color: var(--texto-2);
}

@media (min-width: 900px) {
  .cabeca {
    padding-block: 112px 80px;
  }
}
</style>
