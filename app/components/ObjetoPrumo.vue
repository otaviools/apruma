<!--
  Prumo de pedreiro em SVG. Entra balançando e para no eixo vertical: é o "aprumar" da marca.
  O fio marca o eixo central do layout (guia de layout, base.css seção 3).
-->
<template>
  <div class="prumo" aria-hidden="true">
    <svg class="prumo__peca" viewBox="0 0 80 260" focusable="false">
      <defs>
        <linearGradient id="prumo-metal" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" style="stop-color: var(--metal-escuro)" />
          <stop offset="0.35" style="stop-color: var(--metal-claro)" />
          <stop offset="0.55" style="stop-color: var(--metal-claro)" />
          <stop offset="1" style="stop-color: var(--metal-escuro)" />
        </linearGradient>
        <linearGradient id="prumo-laranja" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#c43d0a" />
          <stop offset="0.4" stop-color="#ff7a45" />
          <stop offset="1" stop-color="#c43d0a" />
        </linearGradient>
      </defs>

      <!-- Fio -->
      <line x1="40" y1="0" x2="40" y2="150" class="prumo__fio" />
      <!-- Tampa rosqueada -->
      <rect x="31" y="148" width="18" height="10" rx="2" fill="url(#prumo-metal)" />
      <rect x="27" y="156" width="26" height="8" rx="3" fill="url(#prumo-laranja)" />
      <!-- Corpo em gota até a ponta -->
      <path d="M24 166 Q24 162 28 162 H52 Q56 162 56 166 V184 Q56 196 40 236 Q24 196 24 184 Z" fill="url(#prumo-metal)" />
      <!-- Brilho -->
      <path d="M33 168 V186 Q33 196 38 214" class="prumo__brilho" />
    </svg>
  </div>
</template>

<style scoped>
.prumo {
  display: grid;
  justify-items: center;
}

.prumo__peca {
  width: 56px;
  height: auto;
  overflow: visible;
  transform-origin: 50% 0;
  filter: drop-shadow(0 18px 14px rgb(0 0 0 / 0.18));
  animation: balancar 2.2s var(--ease-aprumar) both;
}

.prumo__fio {
  stroke: var(--texto);
  stroke-width: 1.2;
}

.prumo__brilho {
  fill: none;
  stroke: rgb(255 255 255 / 0.7);
  stroke-width: 2;
  stroke-linecap: round;
}

/* Oscilação amortecida até parar no prumo (0°) */
@keyframes balancar {
  0% {
    rotate: -16deg;
  }
  22% {
    rotate: 10deg;
  }
  42% {
    rotate: -6deg;
  }
  60% {
    rotate: 3deg;
  }
  78% {
    rotate: -1.2deg;
  }
  100% {
    rotate: 0deg;
  }
}

@media (prefers-reduced-motion: reduce) {
  .prumo__peca {
    animation: none;
  }
}
</style>
