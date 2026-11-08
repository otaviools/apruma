<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Apruma · Conta a ideia. A gente apruma.',
  ogDescription: useAppConfig().marca.descricao,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Apruma',
        slogan: useAppConfig().marca.frase,
        description: useAppConfig().marca.descricao,
      }),
    },
  ],
})
</script>

<!--
  Ritmo da home (guia de layout): fundo e superfície se alternam entre as seções,
  e todo cabeçalho de seção é centralizado (.cabeca-secao).
-->
<template>
  <div>
    <HeroAprumado />
    <DivisorSecao />

    <!-- Prova rápida: só aparece quando houver números reais em app.config -->
    <section v-if="useAppConfig().provaRapida.length" class="secao secao--superficie" aria-label="Números da Apruma">
      <ul class="container prova">
        <li v-for="item in useAppConfig().provaRapida" :key="item.rotulo">
          <strong class="dado prova__valor">{{ item.valor }}</strong>
          <span class="suave">{{ item.rotulo }}</span>
        </li>
      </ul>
    </section>

    <!--
      Hidratação sob demanda (Nuxt): abaixo da dobra, o JS de cada seção só carrega quando
      ela aparece na tela (hydrate-on-visible); seções só visuais nunca hidratam (hydrate-never).
    -->
    <LazySecaoEtapas hydrate-on-visible />
    <LazyBlocoDiferenciais class="secao--superficie" hydrate-never />

    <section class="secao" aria-labelledby="portfolio-titulo">
      <div class="container">
        <header class="cabeca-secao revelar">
          <div>
            <p class="kicker">Portfólio</p>
            <h2 id="portfolio-titulo">Ideias que já saíram do papel.</h2>
          </div>
          <NuxtLink to="/portfolio" class="link">Ver todos os cases →</NuxtLink>
        </header>
        <LazyListaCases hydrate-on-visible />
      </div>
    </section>

    <LazyDepoimentoDestaque class="secao--superficie" hydrate-never />

    <section class="secao" aria-labelledby="planos-titulo">
      <div class="container">
        <header class="cabeca-secao revelar">
          <div>
            <p class="kicker">Planos</p>
            <h2 id="planos-titulo">Escolha o tamanho. O processo é o mesmo.</h2>
          </div>
          <NuxtLink to="/planos" class="link">Detalhes dos planos →</NuxtLink>
        </header>
        <LazyTabelaPlanos hydrate-on-visible />
      </div>
    </section>

    <section class="secao secao--superficie" aria-labelledby="faq-titulo">
      <div class="container--estreito">
        <header class="cabeca-secao revelar">
          <div>
            <p class="kicker">Perguntas frequentes</p>
            <h2 id="faq-titulo">O que costumam perguntar.</h2>
          </div>
          <NuxtLink to="/suporte" class="link">Todas as perguntas →</NuxtLink>
        </header>
        <LazyListaFaq grupo="faq-home" :itens="useAppConfig().faq.filter((item) => item.home)" hydrate-never />
      </div>
    </section>

    <!-- Fechamento: cartão dividido; a página termina onde começou, no campo de briefing -->
    <SecaoFechamento />
  </div>
</template>

<style scoped>
.prova {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--coluna-gap);
  text-align: center;
}

.prova li {
  display: grid;
  gap: 4px;
}

.prova__valor {
  font-size: 40px;
  font-weight: 500;
}
</style>
