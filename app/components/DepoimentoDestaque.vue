<!--
  Um depoimento por vez, com o resultado como título. A troca usa rolagem horizontal
  com scroll-snap (nativa, funciona com teclado e toque), sem carrossel automático.
-->
<template>
  <section v-if="useAppConfig().depoimentos.length" class="secao" aria-labelledby="depoimentos-titulo">
    <div class="container">
      <p id="depoimentos-titulo" class="kicker depoimentos__kicker">Quem já aprumou</p>
      <ul class="depoimentos" tabindex="0" aria-label="Depoimentos, role para o lado para ver o próximo">
        <li v-for="item in useAppConfig().depoimentos" :key="item.citacao" class="depoimento">
          <figure>
            <p class="depoimento__resultado">{{ item.resultado }}</p>
            <blockquote class="depoimento__citacao">“{{ item.citacao }}”</blockquote>
            <figcaption class="depoimento__autor">
              <strong>{{ item.nome }}</strong>
              <span class="suave">{{ item.empresa }}</span>
              <span v-if="item.exemplo" class="selo-exemplo">Exemplo</span>
            </figcaption>
          </figure>
        </li>
      </ul>
      <p v-if="useAppConfig().depoimentos.length > 1" class="dado suave depoimentos__dica" aria-hidden="true">
        {{ String(useAppConfig().depoimentos.length).padStart(2, '0') }} depoimentos · role para o lado →
      </p>
    </div>
  </section>
</template>

<style scoped>
.depoimentos__kicker,
.depoimentos__dica {
  text-align: center;
}

.depoimentos {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  gap: 48px;
  margin-top: 32px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.depoimentos::-webkit-scrollbar {
  display: none;
}

.depoimento {
  scroll-snap-align: start;
}

.depoimento figure {
  display: grid;
  justify-items: center;
  gap: 24px;
  margin: 0;
  text-align: center;
}

.depoimento__resultado {
  font-family: var(--font-display);
  font-size: clamp(44px, 8vw, 104px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 0.95;
}

.depoimento__citacao {
  max-width: 36ch;
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(20px, 2.4vw, 30px);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.3;
  color: var(--texto-2);
}

.depoimento__autor {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 15px;
}

.depoimentos__dica {
  margin-top: 32px;
  font-size: 13px;
}


</style>
