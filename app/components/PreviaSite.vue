<!--
  Prévia ilustrativa de um site, desenhada em CSS. Substituir por capturas reais
  (NuxtImg ou <img> com largura e altura definidas) quando os cases forem publicados.
-->
<script setup lang="ts">
defineProps<{ cor: string; titulo: string }>()
</script>

<template>
  <div class="previa" :style="{ '--cor': cor }" role="img" :aria-label="`Prévia ilustrativa do site: ${titulo}`">
    <div class="previa__menu"><span /><span /><span /></div>
    <p class="previa__titulo">{{ titulo }}</p>
    <div class="previa__linhas"><span /><span /></div>
    <div class="previa__grade"><span /><span /><span /></div>
  </div>
</template>

<style scoped>
/*
  A prévia imita o site do cliente, que tem cores próprias: usa a paleta fixa da marca
  e não os tokens do tema, para manter contraste no tema escuro também.
*/
.previa {
  color: var(--marca-carvao);
  display: grid;
  gap: 14px;
  aspect-ratio: 16 / 10;
  padding: 18px 22px;
  background: var(--cor);
  align-content: start;
}

.previa__menu {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.previa__menu span {
  width: 28px;
  height: 6px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--marca-carvao) 25%, transparent);
}

.previa__titulo {
  max-width: 12ch;
  font-family: var(--font-display);
  font-size: clamp(18px, 2.4vw, 30px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
}

.previa__linhas {
  display: grid;
  gap: 6px;
}

.previa__linhas span {
  width: 60%;
  height: 6px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--marca-carvao) 18%, transparent);
}

.previa__linhas span + span {
  width: 42%;
}

.previa__grade {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 6px;
}

.previa__grade span {
  aspect-ratio: 4 / 3;
  border-radius: 6px;
  background: color-mix(in srgb, var(--marca-papel) 70%, transparent);
}
</style>
