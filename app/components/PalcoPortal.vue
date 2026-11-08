<!--
  Palco do portal (substitui o notebook). Referências do Mobbin: Sana (a interface sai
  da borda de um palco de fundo suave, sem aparelho em volta) e FLORA/Firecrawl (moldura
  arredondada com rótulos em mono). A janela fica cortada à direita e embaixo, e um selo
  flutuante mostra a etapa. Só transform nas animações.
-->
<script setup lang="ts">
defineProps<{ selo?: string }>()
</script>

<template>
  <figure class="palco">
    <div class="palco__janela">
      <div class="palco__barra" aria-hidden="true"><span /><span /><span /></div>
      <slot />
    </div>
    <figcaption v-if="selo" class="palco__selo dado">
      <span class="palco__ponto" aria-hidden="true" />
      {{ selo }}
    </figcaption>
  </figure>
</template>

<style scoped>
.palco {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 0 0 40px;
  overflow: hidden;
  border-radius: 24px;
  /* Laranja bem diluído no fundo da página, com grade de pontos da marca */
  background-color: color-mix(in srgb, var(--destaque) 10%, var(--fundo));
  background-image: radial-gradient(circle, color-mix(in srgb, var(--destaque) 35%, transparent) 1.2px, transparent 1.7px);
  background-size: 16px 16px;
  aspect-ratio: 6 / 5;
}

/* A janela passa da borda direita e de baixo: o palco recorta */
.palco__janela {
  position: relative;
  width: calc(100% + 24px);
  height: calc(100% + 24px);
  overflow: hidden;
  border: var(--linha);
  border-radius: 16px 0 0 0;
  background: var(--superficie-elevada);
  box-shadow: var(--sombra-objeto);
}

.palco__barra {
  display: flex;
  gap: 6px;
  padding: 12px 16px;
  border-bottom: var(--linha);
}

.palco__barra span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--borda);
}

/* O portal ocupa a janela sem moldura própria */
.palco__janela :deep(.portal) {
  min-height: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  /* Compensa o trecho da janela recortado pela borda: o texto nunca fica cortado */
  padding-right: 48px !important;
}

.palco__barra {
  padding-right: 48px;
}

.palco__selo {
  position: absolute;
  left: 16px;
  bottom: 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: var(--linha);
  border-radius: var(--radius-pill);
  background: var(--superficie-elevada);
  box-shadow: 0 12px 24px -12px rgb(0 0 0 / 0.35);
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  animation: selo-flutuar 6s ease-in-out infinite alternate;
}

.palco__ponto {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--destaque);
}

/* Telas estreitas: altura fixa no lugar da proporção, para o conteúdo do portal caber */
@media (max-width: 600px) {
  .palco {
    aspect-ratio: auto;
    height: 460px;
    padding: 24px 0 0 24px;
  }

  .palco__selo {
    left: 12px;
    bottom: 12px;
  }
}

@keyframes selo-flutuar {
  from {
    transform: translateY(0) rotate(-2deg);
  }
  to {
    transform: translateY(-6px) rotate(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .palco__selo {
    animation: none;
  }
}
</style>
