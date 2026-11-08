<script setup lang="ts">
// A rota só existe para cases cadastrados em app.config; o resto vira 404
// A página é recriada a cada case (key), então os metadados podem ser lidos uma vez no setup
definePageMeta({
  key: (rota) => rota.fullPath,
  validate: (rota) => useAppConfig().cases.some((item) => item.slug === rota.params.case),
})

useSeoMeta({
  title: useAppConfig().cases.find((item) => item.slug === useRoute().params.case)?.cliente,
  description: useAppConfig().cases.find((item) => item.slug === useRoute().params.case)?.resultado,
})
</script>

<template>
  <article v-for="item in useAppConfig().cases.filter((c) => c.slug === $route.params.case)" :key="item.slug" class="case">
    <header class="container case__cabeca centro">
      <NuxtLink to="/portfolio" class="link dado case__voltar">← Portfólio</NuxtLink>
      <p class="kicker">{{ item.tipo }} · {{ item.prazo }} <span v-if="item.exemplo" class="selo-exemplo">Exemplo</span></p>
      <h1 class="case__titulo">{{ item.cliente }}</h1>
      <p class="case__resultado">{{ item.resultado }}</p>
    </header>

    <!-- Antes e depois da aprumação: a frase do briefing ao lado do site entregue -->
    <section class="container case__aprumacao" aria-label="Do briefing ao site">
      <figure class="case__briefing">
        <figcaption class="kicker">O briefing</figcaption>
        <blockquote>“{{ item.briefing }}”</blockquote>
      </figure>
      <MolduraNavegador class="case__tela" :style="{ viewTransitionName: `case-${item.slug}` }">
        <PreviaSite :cor="item.cor" :titulo="item.cliente" />
      </MolduraNavegador>
    </section>

    <section class="container case__detalhes" aria-label="Detalhes do projeto">
      <dl>
        <div>
          <dt class="kicker">Problema</dt>
          <dd>{{ item.problema }}</dd>
        </div>
        <div>
          <dt class="kicker">Solução</dt>
          <dd>{{ item.solucao }}</dd>
        </div>
        <div>
          <dt class="kicker">Resultado</dt>
          <dd>{{ item.resultado }}</dd>
        </div>
      </dl>
    </section>

    <section class="secao camada" aria-label="Próximo passo">
      <div class="container case__proximo centro">
        <h2>Tem uma ideia parecida?</h2>
        <NuxtLink to="/#briefing" class="botao botao--principal">Começar projeto</NuxtLink>
      </div>
    </section>
  </article>
</template>

<style scoped>
.case {
  position: relative;
  z-index: 1;
}

.camada {
  position: relative;
}

.case__cabeca {
  display: grid;
  gap: 20px;
  padding-block: 56px 64px;
}

.case__voltar {
  font-size: 13px;
}

.case__cabeca .kicker {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.case__titulo {
  font-size: clamp(44px, 8vw, 112px);
  letter-spacing: -0.045em;
  line-height: 0.95;
}

.case__resultado {
  max-width: 40ch;
  font-size: clamp(18px, 2vw, 24px);
  color: var(--texto-2);
}

.case__aprumacao {
  display: grid;
  gap: 32px;
  align-items: center;
}

.case__briefing {
  display: grid;
  gap: 16px;
  margin: 0;
}

.case__briefing blockquote {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(26px, 3.4vw, 44px);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.15;
  rotate: -2deg;
  transform-origin: left;
}

.case__detalhes {
  padding-block: 80px;
}

.case__detalhes dl {
  display: grid;
  gap: 32px;
  margin: 0;
}

.case__detalhes div {
  display: grid;
  gap: 8px;
  padding-top: 16px;
  border-top: var(--linha);
}

.case__detalhes dd {
  margin: 0;
  font-size: 18px;
}

.case__proximo {
  display: grid;
  justify-items: center;
  gap: 24px;
}

@media (min-width: 900px) {
  .case__aprumacao {
    grid-template-columns: 1fr 1.4fr;
    gap: 64px;
  }

  .case__detalhes dl {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
