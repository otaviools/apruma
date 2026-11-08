<!-- Estrutura de texto longo para as páginas legais -->
<script setup lang="ts">
defineProps<{ secoes: { titulo: string; texto: string }[] }>()
</script>

<template>
  <div class="container legal">
    <p class="legal__aviso">
      Rascunho. Este texto precisa ser revisado por um advogado antes da publicação do site.
    </p>
    <nav class="legal__indice" aria-label="Nesta página">
      <p class="kicker">Nesta página</p>
      <ol>
        <li v-for="(secao, indice) in secoes" :key="secao.titulo">
          <a :href="`#secao-${indice + 1}`">{{ secao.titulo }}</a>
        </li>
      </ol>
    </nav>
    <div class="legal__texto">
      <section v-for="(secao, indice) in secoes" :id="`secao-${indice + 1}`" :key="secao.titulo">
        <h2>{{ secao.titulo }}</h2>
        <p>{{ secao.texto }}</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.legal {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 48px;
  padding-bottom: var(--secao);
}

.legal__aviso {
  padding: 14px 16px;
  border-left: 3px solid var(--destaque);
  background: var(--superficie);
  font-size: 15px;
}

.legal__indice ol {
  display: grid;
  gap: 8px;
  margin-top: 12px;
  font-size: 15px;
  list-style: decimal inside;
}

.legal__indice a {
  color: var(--texto-2);
  text-underline-offset: 3px;
}

.legal__texto {
  display: grid;
  gap: 40px;
  max-width: 640px;
}

.legal__texto section {
  display: grid;
  gap: 12px;
}

.legal__texto h2 {
  font-size: 26px;
}

@media (min-width: 900px) {
  .legal {
    grid-template-columns: 1fr 2fr;
    align-items: start;
  }

  .legal__aviso {
    grid-column: 1 / -1;
  }

  .legal__indice {
    position: sticky;
    top: calc(var(--altura-cabecalho) + 32px);
  }
}
</style>
