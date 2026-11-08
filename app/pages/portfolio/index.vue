<script setup lang="ts">
useSeoMeta({
  title: 'Portfólio',
  description: 'Sites sob medida feitos pela Apruma: o briefing de cada cliente e o resultado no ar.',
})
</script>

<template>
  <div>
    <CabecaPagina
      kicker="Portfólio"
      titulo="Do briefing ao site no ar."
      texto="Cada case mostra a frase com que o cliente começou e o site que saiu dela."
    />

    <section class="container lista" aria-label="Cases">
      <!-- Filtro por tipo na query (?tipo=Portfólio): funciona sem JavaScript e pode ser compartilhado -->
      <nav class="filtro" aria-label="Filtrar por tipo">
        <NuxtLink to="/portfolio" class="filtro__opcao" :class="{ 'filtro__opcao--ativa': !useRoute().query.tipo }">Todos</NuxtLink>
        <NuxtLink
          v-for="tipo in useAppConfig().tiposDeCase"
          :key="tipo"
          :to="{ path: '/portfolio', query: { tipo } }"
          class="filtro__opcao"
          :class="{ 'filtro__opcao--ativa': useRoute().query.tipo === tipo }"
        >
          {{ tipo }}
        </NuxtLink>
      </nav>

      <ListaCases :tipo="useRoute().query.tipo?.toString()" />
    </section>
  </div>
</template>

<style scoped>
.lista {
  position: relative;
  z-index: 1;
  padding-bottom: var(--secao);
}

.filtro {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 48px;
}

.filtro__opcao {
  padding: 8px 16px;
  border: 1px solid var(--borda);
  border-radius: var(--radius-pill);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: var(--texto-2);
  background: var(--fundo);
}

.filtro__opcao:hover {
  border-color: var(--texto);
  color: var(--texto);
}

.filtro__opcao--ativa {
  border-color: var(--texto);
  background: var(--texto);
  color: var(--fundo);
}

.filtro__opcao--ativa:hover {
  color: var(--fundo);
}
</style>
