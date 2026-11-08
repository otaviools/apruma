<script setup lang="ts">
useSeoMeta({
  title: 'Planos',
  description: 'Pacotes da Apruma: landing page, site institucional e projetos sob medida. Pagamento em duas etapas.',
})
</script>

<template>
  <div>
    <CabecaPagina
      kicker="Planos"
      titulo="Escolha o tamanho. O processo é o mesmo."
      texto="Os pacotes mudam em páginas, rodadas de revisão e prazo. Briefing pelo agente e portal com progresso ao vivo valem para todos."
    />

    <section class="container camada" aria-labelledby="pacotes-titulo">
      <!-- Título para leitores de tela: mantém a ordem H1 → H2 → H3 dos pacotes -->
      <h2 id="pacotes-titulo" class="so-leitor">Pacotes</h2>
      <TabelaPlanos />
    </section>

    <section class="secao camada" aria-labelledby="manutencao-titulo">
      <div class="container extras">
        <div class="manutencao">
          <p class="kicker">Depois do site no ar</p>
          <h2 id="manutencao-titulo">{{ useAppConfig().planos.manutencao.titulo }}</h2>
          <p class="suave">{{ useAppConfig().planos.manutencao.texto }}</p>
          <p class="manutencao__preco">{{ useAppConfig().planos.manutencao.preco || 'Sob consulta' }}</p>
        </div>
        <BarraPagamento />
      </div>
    </section>
  </div>
</template>

<style scoped>
.camada {
  position: relative;
  z-index: 1;
}

.extras {
  display: grid;
  gap: 64px;
}

.manutencao {
  display: grid;
  gap: 16px;
  align-content: start;
}

.manutencao__preco {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 700;
}

@media (min-width: 900px) {
  .extras {
    grid-template-columns: 1fr 1fr;
    align-items: end;
  }
}
</style>
