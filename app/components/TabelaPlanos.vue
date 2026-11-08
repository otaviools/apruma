<!--
  Planos: o que todo projeto inclui fica numa linha centralizada acima dos pacotes,
  e os pacotes ocupam três colunas iguais (guia de layout: grade centralizada).
-->
<template>
  <div class="planos">
    <div class="planos__inclui">
      <p class="kicker">Todo projeto inclui</p>
      <ul>
        <li v-for="item in useAppConfig().planos.inclui" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>

    <ul class="planos__pacotes">
      <li
        v-for="(pacote, indice) in useAppConfig().planos.pacotes"
        :key="pacote.nome"
        class="pacote revelar"
        :class="{ 'pacote--destaque': pacote.destaque }"
        :style="{ '--ordem': indice }"
      >
        <span v-if="pacote.destaque" class="dado pacote__selo"
          >Mais pedido</span
        >
        <h3>{{ pacote.nome }}</h3>
        <p class="suave">{{ pacote.para }}</p>
        <p class="pacote__preco">
          <template v-if="pacote.preco"
            ><span class="suave">a partir de</span> {{ pacote.preco }}</template
          >
          <template v-else>Sob consulta</template>
        </p>
        <dl class="pacote__dados">
          <div>
            <dt>Páginas</dt>
            <dd class="dado">{{ pacote.paginas }}</dd>
          </div>
          <div>
            <dt>Revisões</dt>
            <dd class="dado">{{ pacote.revisoes }}</dd>
          </div>
          <div>
            <dt>Prazo médio</dt>
            <dd class="dado">{{ pacote.prazo }}</dd>
          </div>
        </dl>
        <NuxtLink
          to="/contato"
          class="botao pacote__botao"
          :class="pacote.destaque ? 'botao--principal' : 'botao--secundario'"
        >
          Começar com {{ pacote.nome }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.planos {
  display: grid;
  gap: 48px;
}

.planos__inclui {
  display: grid;
  justify-items: center;
  gap: 16px;
  text-align: center;
}

.planos__inclui ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

/* Cada item com a barra aprumada do símbolo como marcador */
.planos__inclui li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: var(--linha);
  border-radius: var(--radius-pill);
  font-size: 14px;
  background: var(--superficie-elevada);
}

.planos__inclui li::before {
  content: "";
  width: 10px;
  height: 3px;
  border-radius: 2px;
  background: var(--destaque);
}

.planos__pacotes {
  display: grid;
  gap: var(--coluna-gap);
}

.pacote {
  position: relative;
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 14px;
  padding: 32px 28px;
  border: var(--linha);
  border-radius: var(--radius-card);
  background: var(--superficie-elevada);
  text-align: center;
}

.pacote--destaque {
  border: 2px solid var(--destaque);
  box-shadow: var(--sombra-objeto);
}

.pacote h3 {
  font-size: 28px;
}

.pacote__selo {
  position: absolute;
  top: -13px;
  left: 50%;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  background: var(--destaque);
  color: var(--sobre-destaque);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  translate: -50% 0;
}

.pacote__preco {
  font-family: var(--font-display);
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.pacote__preco .suave {
  display: block;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
}

.pacote__dados {
  display: grid;
  width: 100%;
  margin: 0;
}

.pacote__dados div {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-top: var(--linha);
  font-size: 15px;
}

.pacote__dados dd {
  margin: 0;
}

.pacote__botao {
  width: 100%;
  margin-top: 8px;
}

@media (min-width: 900px) {
  .planos__pacotes {
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
  }
}
</style>
