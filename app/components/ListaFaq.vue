<!--
  Perguntas frequentes com <details name>: acordeão nativo, acessível e exclusivo
  (abrir uma fecha a outra), sem JavaScript.
-->
<script setup lang="ts">
defineProps<{ itens: { pergunta: string; resposta: string }[]; grupo: string }>()
</script>

<template>
  <div class="faq">
    <details v-for="item in itens" :key="item.pergunta" :name="grupo" class="faq__item">
      <summary class="faq__pergunta">
        {{ item.pergunta }}
        <span class="faq__icone" aria-hidden="true" />
      </summary>
      <p class="faq__resposta">{{ item.resposta }}</p>
    </details>
  </div>
</template>

<style scoped>
.faq {
  display: grid;
  column-gap: 48px;
  border-top: var(--linha);
}



.faq__item {
  border-bottom: var(--linha);
}

.faq__pergunta {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 22px 0;
  font-weight: 500;
  cursor: pointer;
  list-style: none;
}

.faq__pergunta::-webkit-details-marker {
  display: none;
}

/* Mais/menos desenhado com duas barras */
.faq__icone {
  position: relative;
  flex: none;
  width: 14px;
  height: 14px;
  margin-top: 6px;
}

.faq__icone::before,
.faq__icone::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 0;
  width: 14px;
  height: 2px;
  border-radius: 2px;
  background: var(--texto);
  transition: rotate 200ms var(--ease-aprumar);
}

.faq__icone::after {
  rotate: 90deg;
}

.faq__item[open] .faq__icone::after {
  rotate: 0deg;
}

.faq__item[open] .faq__icone::before {
  background: var(--destaque);
}

.faq__resposta {
  max-width: 56ch;
  padding-bottom: 24px;
  color: var(--texto-2);
}

/* Abertura suave onde o navegador suporta animar até altura automática */
@supports (interpolate-size: allow-keywords) {
  .faq__item {
    interpolate-size: allow-keywords;
  }

  .faq__item::details-content {
    height: 0;
    overflow: clip;
    transition:
      height 240ms var(--ease-aprumar),
      content-visibility 240ms allow-discrete;
  }

  .faq__item[open]::details-content {
    height: auto;
  }
}
</style>
