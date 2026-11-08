<!-- Moldura simples de navegador para mostrar telas de sites entregues -->
<script setup lang="ts">
defineProps<{ endereco?: string }>()
</script>

<template>
  <figure class="moldura">
    <div class="moldura__barra" aria-hidden="true">
      <span /><span /><span />
      <span v-if="endereco" class="moldura__endereco dado">{{ endereco }}</span>
    </div>
    <div class="moldura__tela">
      <slot />
    </div>
  </figure>
</template>

<style scoped>
.moldura {
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--borda);
  border-radius: var(--radius-card);
  background: var(--fundo);
}

.moldura__barra {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  border-bottom: var(--linha);
  background: var(--superficie);
}

.moldura__barra > span:not(.moldura__endereco) {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--borda);
}

.moldura__endereco {
  margin-inline: auto;
  font-size: 11px;
  color: var(--texto-suave);
}
</style>
