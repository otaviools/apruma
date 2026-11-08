<!--
  Diferenciais: cada card mostra um pedaço real da interface no lugar de ícone.
  Os fragmentos se animam em ciclo, no mesmo espírito do campo "Conte a sua ideia":
  as peças entram levemente tortas e se aprumam. Só CSS e só transform (sem opacidade: o texto nunca perde contraste).
  Cada card começa com um atraso diferente (--ordem) para não pulsarem juntos.
-->
<template>
  <section class="secao" aria-labelledby="diferenciais-titulo">
    <div class="container">
      <header class="cabeca-secao revelar">
        <div>
          <p class="kicker">Por que a Apruma</p>
          <h2 id="diferenciais-titulo">Menos reunião, mais site.</h2>
        </div>
      </header>

      <ul class="diferenciais">
        <li
          v-for="(item, indice) in useAppConfig().diferenciais"
          :key="item.titulo"
          class="diferencial revelar"
          :style="{ '--ordem': indice }"
        >
          <div class="fragmento" aria-hidden="true">
            <!-- Conversa: a pergunta do agente e a resposta chegam uma depois da outra -->
            <template v-if="item.fragmento === 'chat'">
              <span class="balao balao--agente">Qual é o objetivo do site?</span>
              <span class="balao balao--cliente">Vender mais pelo WhatsApp.</span>
            </template>

            <!-- Progresso: a barra avança e o número vira de 61% para 62% -->
            <template v-else-if="item.fragmento === 'barra'">
              <span class="dado">ETAPA 04 · DESENVOLVIMENTO</span>
              <span class="trilho"><span class="trilho__fim" /></span>
              <span class="dado numero">
                <span class="numero__antes">61%</span>
                <span class="numero__depois">62%</span>
              </span>
            </template>

            <!-- Sob medida: a segunda versão entra torta e se apruma sobre a primeira -->
            <template v-else-if="item.fragmento === 'versoes'">
              <span class="versao"><span /><span /><span class="versao__bloco" /></span>
              <span class="versao versao--nova"><span class="versao__bloco" /><span /><span /></span>
            </template>

            <!-- Pagamento: a primeira metade enche na proposta, a segunda na entrega -->
            <template v-else>
              <span class="pagamento">
                <span class="pagamento__parte pagamento__parte--1">50%<span class="pagamento__trilho"><span class="pagamento__cheio" /></span></span>
                <span class="pagamento__parte pagamento__parte--2">50%<span class="pagamento__trilho"><span class="pagamento__cheio" /></span></span>
              </span>
              <span class="dado suave">proposta · entrega</span>
            </template>
          </div>
          <h3>{{ item.titulo }}</h3>
          <p class="suave">{{ item.texto }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.diferenciais {
  display: grid;
  gap: var(--coluna-gap);
}

@media (min-width: 700px) {
  .diferenciais {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1100px) {
  .diferenciais {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Ciclo comum: 6 s por volta, cada card defasado */
.diferencial {
  --ciclo: 6s;
  --atraso: calc(var(--ordem, 0) * 0.45s);
  display: grid;
  gap: 12px;
  align-content: start;
  justify-items: center;
  padding: 16px 16px 28px;
  border: var(--linha);
  border-radius: var(--radius-card);
  background: var(--superficie-elevada);
  text-align: center;
  transition:
    translate 300ms var(--ease-aprumar),
    border-color 300ms ease,
    box-shadow 300ms ease;
}

/* translate (e não transform) para não brigar com a animação .revelar */
.diferencial:hover {
  translate: 0 -6px;
  border-color: var(--borda-forte);
  box-shadow: var(--sombra-objeto);
}

.diferencial h3 {
  margin-top: 12px;
}

.diferencial p {
  font-size: 16px;
}

.fragmento {
  display: grid;
  gap: 10px;
  align-content: center;
  width: 100%;
  height: 160px;
  padding: 18px;
  overflow: hidden;
  border-radius: 10px;
  background: var(--superficie);
  font-size: 13px;
  text-align: left;
}

/* Conversa */
.balao {
  padding: 8px 12px;
  border-radius: 12px 12px 3px 12px;
  animation: var(--ciclo) var(--ease-aprumar) var(--atraso) infinite both;
}

.balao--agente {
  justify-self: start;
  border-radius: 12px 12px 12px 3px;
  background: var(--fundo);
  color: var(--texto);
  transform-origin: left bottom;
  animation-name: chegar-agente;
}

.balao--cliente {
  justify-self: end;
  background: var(--texto);
  color: var(--fundo);
  transform-origin: right bottom;
  animation-name: chegar-cliente;
}

@keyframes chegar-agente {
  0% {
    transform: translateY(10px) rotate(-5deg) scale(0);
  }
  8%,
  86% {
    transform: none;
  }
  94%,
  100% {
    transform: scale(0);
  }
}

@keyframes chegar-cliente {
  0%,
  20% {
    transform: translateY(10px) rotate(5deg) scale(0);
  }
  30%,
  86% {
    transform: none;
  }
  94%,
  100% {
    transform: scale(0);
  }
}

/* Progresso */
.trilho {
  height: 8px;
  border-radius: 8px;
  background: var(--borda);
  overflow: hidden;
}

.trilho__fim {
  display: block;
  width: 62%;
  height: 100%;
  border-radius: 8px;
  background: var(--destaque);
  transform-origin: left;
  animation: avancar var(--ciclo) var(--ease-aprumar) var(--atraso) infinite both;
}

@keyframes avancar {
  0% {
    transform: scaleX(0.92);
  }
  35%,
  55% {
    transform: scaleX(0.984);
  }
  70%,
  92% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0.92);
  }
}

.numero {
  display: grid;
  overflow: hidden;
  font-size: 15px;
  font-weight: 500;
}

/*
  Os dois números ocupam a mesma célula e trocam como um contador. A animação vai completa
  em cada classe (e não num seletor genérico), senão o nome da animação era anulado e os
  dois números ficavam parados um sobre o outro.
*/
.numero__antes,
.numero__depois {
  grid-area: 1 / 1;
}

.numero__antes {
  animation: sair-numero var(--ciclo) var(--ease-aprumar) var(--atraso) infinite both;
}

/* Fora da animação, o 62% fica escondido abaixo da linha */
.numero__depois {
  color: var(--destaque-texto);
  transform: translateY(120%);
  animation: entrar-numero var(--ciclo) var(--ease-aprumar) var(--atraso) infinite both;
}

@keyframes sair-numero {
  0%,
  60% {
    transform: none;
  }
  68%,
  96% {
    transform: translateY(-120%);
  }
  97% {
    transform: translateY(120%);
  }
  100% {
    transform: none;
  }
}

@keyframes entrar-numero {
  0%,
  62% {
    transform: translateY(120%);
  }
  70%,
  92% {
    transform: none;
  }
  100% {
    transform: translateY(-120%);
  }
}

/* Sob medida */
.versao {
  display: grid;
  gap: 6px;
  padding: 10px;
  border: var(--linha);
  border-radius: 8px;
  background: var(--fundo);
}

.versao span {
  height: 8px;
  border-radius: 3px;
  background: var(--borda);
}

.versao .versao__bloco {
  height: 18px;
  background: var(--destaque);
}

.versao--nova {
  margin-top: -40px;
  margin-left: 30%;
  transform-origin: left bottom;
  animation: aprumar-versao var(--ciclo) var(--ease-aprumar) var(--atraso) infinite both;
}

.versao--nova .versao__bloco {
  background: var(--texto);
}

@keyframes aprumar-versao {
  0% {
    transform: translate(24px, 18px) rotate(-14deg) scale(0);
  }
  14% {
    transform: translate(8px, 6px) rotate(-14deg) scale(1);
  }
  40%,
  86% {
    transform: none;
  }
  96%,
  100% {
    transform: scale(0);
  }
}

/* Pagamento */
.pagamento {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
}

.pagamento__parte {
  display: grid;
  gap: 8px;
  padding: 10px 10px 12px;
  border-radius: 6px;
  background: var(--fundo);
  font-family: var(--font-mono);
  font-size: 14px;
  text-align: center;
}

/* Cada metade tem um trilho que enche de laranja (só transform: composto pela GPU) */
.pagamento__trilho {
  height: 6px;
  overflow: hidden;
  border-radius: 6px;
  background: var(--borda);
}

.pagamento__cheio {
  display: block;
  height: 100%;
  background: var(--destaque);
  transform-origin: left;
  animation: var(--ciclo) var(--ease-aprumar) var(--atraso) infinite both;
}

.pagamento__parte--1 .pagamento__cheio {
  animation-name: encher-1;
}

.pagamento__parte--2 .pagamento__cheio {
  animation-name: encher-2;
}

@keyframes encher-1 {
  0% {
    transform: scaleX(0);
  }
  25%,
  90% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

@keyframes encher-2 {
  0%,
  45% {
    transform: scaleX(0);
  }
  70%,
  90% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

/* Movimento reduzido: tudo parado no estado final */
@media (prefers-reduced-motion: reduce) {
  .balao,
  .trilho__fim,
  .numero__antes,
  .numero__depois,
  .versao--nova,
  .pagamento__cheio {
    animation: none;
  }

  .numero__antes {
    display: none;
  }

  .numero__depois {
    transform: none;
  }
}
</style>
