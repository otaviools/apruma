<!--
  Símbolo "Linhas que se alinham". As cores das barras vêm dos tokens --simbolo-1 e --simbolo-2,
  então o símbolo troca sozinho entre as versões de fundo claro e escuro.
  `alinhar` faz as barras se endireitarem quando o símbolo entra na tela.
-->
<script setup lang="ts">
defineProps<{ alinhar?: boolean }>()
</script>

<template>
  <svg class="simbolo" :class="{ 'simbolo--alinhar': alinhar }" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
    <rect class="simbolo__barra simbolo__barra--1" x="20" y="20" width="60" height="12" rx="6" />
    <rect class="simbolo__barra simbolo__barra--2" x="20" y="44" width="60" height="12" rx="6" />
    <rect class="simbolo__barra--3" x="20" y="68" width="60" height="12" rx="6" />
  </svg>
</template>

<style scoped>
.simbolo__barra {
  transform-box: fill-box;
  transform-origin: center;
}

.simbolo__barra--1 {
  fill: var(--simbolo-1);
  rotate: -16deg;
}

.simbolo__barra--2 {
  fill: var(--simbolo-2);
  rotate: -8deg;
}

.simbolo__barra--3 {
  fill: var(--destaque);
}

@supports (animation-timeline: view()) {
  .simbolo--alinhar .simbolo__barra {
    animation: endireitar linear both;
    animation-timeline: view();
    animation-range: entry 10% cover 45%;
  }
}

@keyframes endireitar {
  to {
    rotate: 0deg;
  }
}

@media (prefers-reduced-motion: reduce) {
  .simbolo--alinhar .simbolo__barra {
    animation: none;
  }
}
</style>
