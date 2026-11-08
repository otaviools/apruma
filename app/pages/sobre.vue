<script setup lang="ts">
useSeoMeta({
  title: 'Sobre',
  description: 'Apruma vem de aprumar: pôr no prumo, endireitar, pôr em ordem. Conheça a história e os princípios.',
})
</script>

<template>
  <div>
    <!-- O nome como verbete de dicionário -->
    <header class="container verbete centro">
      <p class="kicker">Sobre</p>
      <h1 class="verbete__palavra">a·pru·mar</h1>
      <p class="verbete__definicao">
        <abbr title="verbo" class="dado">v.</abbr>
        pôr no prumo; endireitar; pôr em ordem.
      </p>
    </header>

    <section class="secao secao--superficie" aria-labelledby="historia-titulo">
      <div class="container--estreito historia centro">
        <h2 id="historia-titulo" class="so-leitor">Nossa história</h2>
        <MarcaSimbolo class="historia__simbolo" alinhar />
        <p class="historia__manifesto">
          Toda ideia chega meio torta. É normal: ela ainda não tem estrutura. A Apruma existe para pegar essa ideia do jeito que ela vem, numa conversa, e devolver um site alinhado, com cada etapa à vista até a publicação.
        </p>
      </div>
    </section>

    <section class="secao camada" aria-labelledby="principios-titulo">
      <div class="container">
        <header class="cabeca-secao">
          <div>
            <p class="kicker">Princípios</p>
            <h2 id="principios-titulo">O que não muda de um projeto para outro.</h2>
          </div>
        </header>
        <ol class="principios">
          <li v-for="(principio, indice) in useAppConfig().principios" :key="principio.titulo">
            <span class="dado suave">{{ String(indice + 1).padStart(2, '0') }}</span>
            <h3>{{ principio.titulo }}</h3>
            <p class="suave">{{ principio.texto }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Sócios: publicar nome, foto e papel só com autorização de cada um (roteiro 4.5) -->
  </div>
</template>

<style scoped>
.camada {
  position: relative;
  z-index: 1;
}

.verbete {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 16px;
  padding-block: 96px;
}

.verbete__palavra {
  font-size: clamp(64px, 15vw, 200px);
  letter-spacing: -0.05em;
  line-height: 0.85;
}

.verbete__definicao {
  font-family: var(--font-display);
  font-size: clamp(24px, 3.6vw, 44px);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: var(--texto-2);
}

.verbete__definicao abbr {
  margin-right: 8px;
  font-size: 0.6em;
  text-decoration: none;
  color: var(--destaque-texto);
}

.historia {
  display: grid;
  gap: 40px;
}

.historia__simbolo {
  width: 120px;
  height: 120px;
}

.historia__manifesto {
  font-family: var(--font-display);
  font-size: clamp(26px, 3.6vw, 48px);
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

.principios {
  display: grid;
  gap: 0;
  border-top: var(--linha);
}

.principios li {
  display: grid;
  justify-items: center;
  gap: 10px;
  padding: 28px 0;
  border-bottom: var(--linha);
  text-align: center;
}

@media (min-width: 900px) {
  .historia__simbolo {
    width: 180px;
    height: 180px;
  }

  .principios {
    grid-template-columns: repeat(3, 1fr);
    border-top: 0;
  }

  .principios li {
    padding: 0 28px 28px;
    border-bottom: 0;
    border-left: var(--linha);
  }
}
</style>
