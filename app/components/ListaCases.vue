<!--
  Portfólio em lista de linhas grandes, sem prévia flutuante.
  No hover, a linha ganha fundo de superfície e a seta vira um botão redondo laranja.
  Toda a área da linha tem respiro lateral, então nada encosta na borda do container.
-->
<script setup lang="ts">
defineProps<{ tipo?: string }>()
</script>

<template>
  <ul class="cases">
    <li v-for="item in useAppConfig().cases.filter((c) => !tipo || c.tipo === tipo)" :key="item.slug" class="case">
      <NuxtLink :to="`/portfolio/${item.slug}`" class="case__link">
        <span class="case__cliente">
          {{ item.cliente }}
          <span v-if="item.exemplo" class="selo-exemplo">Exemplo</span>
        </span>
        <span class="dado case__meta">{{ item.tipo }} · {{ item.prazo }}</span>
        <span class="case__resultado">{{ item.resultado }}</span>
        <span class="case__seta" aria-hidden="true">↗</span>
      </NuxtLink>
    </li>
    <li v-if="!useAppConfig().cases.some((c) => !tipo || c.tipo === tipo)" class="case case--vazio suave">
      Nenhum case deste tipo ainda.
    </li>
  </ul>
</template>

<style scoped>
.cases {
  display: grid;
  border-bottom: var(--linha);
}

.case {
  border-top: var(--linha);
}

.case--vazio {
  padding: 48px 20px;
}

.case__link {
  display: grid;
  gap: 8px;
  padding: 28px 20px;
  border-radius: var(--radius-card);
  text-decoration: none;
  transition: background-color 240ms ease;
}

.case__cliente {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  font-family: var(--font-display);
  font-size: clamp(28px, 4.4vw, 56px);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.05;
  transition: color 240ms ease;
}

.case__meta {
  font-size: 13px;
  color: var(--texto-suave);
}

.case__resultado {
  color: var(--texto-2);
}

/* Seta dentro de um círculo: fica sempre dentro da linha, mesmo animando */
.case__seta {
  display: grid;
  place-items: center;
  justify-self: start;
  width: 44px;
  height: 44px;
  border: var(--linha);
  border-radius: 50%;
  font-size: 18px;
  line-height: 1;
  transition:
    background-color 240ms ease,
    border-color 240ms ease,
    color 240ms ease,
    rotate 300ms var(--ease-aprumar);
}

.case__link:hover,
.case__link:focus-visible {
  background: var(--superficie);
}

.case__link:hover .case__cliente,
.case__link:focus-visible .case__cliente {
  color: var(--destaque-texto);
}

/* A seta se apruma (de ↗ para →) e o círculo fica laranja */
.case__link:hover .case__seta,
.case__link:focus-visible .case__seta {
  border-color: var(--destaque);
  background: var(--destaque);
  color: var(--sobre-destaque);
  rotate: 45deg;
}

@media (min-width: 900px) {
  .case__link {
    grid-template-columns: 1.4fr 0.8fr 1.2fr auto;
    align-items: center;
    gap: 32px;
  }

  .case__seta {
    justify-self: end;
  }
}
</style>
