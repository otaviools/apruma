<!--
  Divisor com o símbolo: uma fileira de pontos que some para os lados e,
  no centro, o símbolo cujas barras se aprumam quando o divisor entra na tela.
  Regra do guia: usar logo depois da abertura de cada página.
-->
<template>
  <div class="divisor container" aria-hidden="true">
    <span class="divisor__pontos" />
    <MarcaSimbolo class="divisor__simbolo" alinhar />
    <span class="divisor__pontos divisor__pontos--direita" />
  </div>
</template>

<style scoped>
.divisor {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;
}

.divisor__pontos {
  height: 6px;
  background-image: radial-gradient(circle, var(--borda-forte) 1.5px, transparent 2px);
  background-size: 14px 6px;
  background-position: right center;
  mask-image: linear-gradient(to left, #000, transparent);
}

.divisor__pontos--direita {
  background-position: left center;
  mask-image: linear-gradient(to right, #000, transparent);
}

.divisor__simbolo {
  width: 44px;
  height: 44px;
}
</style>
