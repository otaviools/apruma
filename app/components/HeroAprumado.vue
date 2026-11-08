<!--
  Hero centralizado. O prumo balança e para no eixo central; em seguida o título,
  que começa torto como as barras do símbolo, se apruma.
  Fundo: campo de pontos (.campo-pontos) e barras soltas da marca que flutuam nas laterais
  e oscilam entre tortas e aprumadas.
-->
<template>
  <section class="hero campo-pontos" aria-labelledby="hero-titulo">
    <div class="hero__barras" aria-hidden="true">
      <span v-for="indice in 6" :key="indice" class="hero__barra" :style="{ '--ordem': indice }" />
    </div>

    <div class="container hero__conteudo">
      <ObjetoPrumo class="hero__prumo" />
      <p class="kicker">Sites sob medida · briefing por conversa · progresso ao vivo</p>
      <h1 id="hero-titulo" class="hero__titulo">
        <span class="aprumar" style="--angulo: -7deg; --ordem: 0">Conta a ideia.</span>
        <span class="aprumar hero__destaque" style="--angulo: -3.5deg; --ordem: 1">A gente apruma.</span>
      </h1>
      <p class="hero__sub">
        Você conta a ideia ao nosso agente, no chat. A gente desenha e constrói o site sob medida, e você acompanha cada etapa em tempo real até a publicação.
      </p>
      <div id="briefing" class="hero__campo">
        <CampoBriefing id="briefing-hero" />
        <NuxtLink to="/como-funciona" class="link">Ver como funciona →</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  overflow-x: clip;
  padding-bottom: var(--secao);
}

.hero__conteudo {
  display: grid;
  justify-items: center;
  gap: 28px;
  text-align: center;
}

/* O fio do prumo começa colado no cabeçalho */
.hero__prumo {
  margin-bottom: 8px;
}

.hero__titulo {
  font-size: clamp(44px, 9vw, 128px);
  letter-spacing: -0.05em;
  line-height: 0.95;
}

.hero__destaque {
  color: var(--destaque-texto);
}

.hero__sub {
  max-width: 52ch;
  font-size: clamp(17px, 1.6vw, 20px);
  color: var(--texto-2);
}

.hero__campo {
  display: grid;
  justify-items: center;
  gap: 16px;
  width: 100%;
  margin-top: 12px;
}

/* Barras soltas: três de cada lado, simétricas em relação ao eixo central */
.hero__barras {
  display: none;
}

@media (min-width: 1100px) {
  .hero__barras {
    display: block;
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }
}

.hero__barra {
  position: absolute;
  width: 72px;
  height: 12px;
  border-radius: var(--radius-pill);
  background: var(--simbolo-1);
  animation: flutuar 9s var(--ease-aprumar) infinite alternate both;
  animation-delay: calc(var(--ordem) * -1.4s);
}

.hero__barra:nth-child(1) {
  top: 22%;
  left: 8%;
  --de: -16deg;
}

.hero__barra:nth-child(2) {
  top: 40%;
  left: 4%;
  --de: -8deg;
  background: var(--simbolo-2);
}

.hero__barra:nth-child(3) {
  top: 58%;
  left: 9%;
  --de: -4deg;
  background: var(--destaque);
  width: 56px;
}

.hero__barra:nth-child(4) {
  top: 22%;
  right: 8%;
  --de: 16deg;
}

.hero__barra:nth-child(5) {
  top: 40%;
  right: 4%;
  --de: 8deg;
  background: var(--simbolo-2);
}

.hero__barra:nth-child(6) {
  top: 58%;
  right: 9%;
  --de: 4deg;
  background: var(--destaque);
  width: 56px;
}

/* Oscila entre torta e aprumada, subindo um pouco: leve, só transform */
@keyframes flutuar {
  from {
    transform: translateY(0) rotate(var(--de));
  }
  to {
    transform: translateY(-14px) rotate(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__barra {
    animation: none;
    transform: rotate(var(--de));
  }
}
</style>
