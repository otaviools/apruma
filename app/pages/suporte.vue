<script setup lang="ts">
useSeoMeta({
  title: 'Suporte',
  description: 'Perguntas frequentes sobre processo, pagamento, prazos, manutenção e dados, e os canais de atendimento da Apruma.',
})
</script>

<!--
  Suporte segue o guia de layout:
  1. Abertura centralizada (CabecaPagina) com atalhos para cada tema.
  2. Uma única seção de perguntas, em coluna estreita, com um grupo por tema.
  3. Canais de atendimento em seção de superfície, com cabeçalho padrão e três cartões iguais.
-->
<template>
  <div>
    <CabecaPagina kicker="Suporte" titulo="Como podemos ajudar?" texto="As respostas mais comuns estão aqui. Se for algo do seu projeto, o caminho mais rápido é o portal.">
      <a :href="useAppConfig().portal" class="botao botao--secundario">Abrir o portal do cliente</a>
    </CabecaPagina>

    <section class="secao perguntas" aria-label="Perguntas frequentes">
      <div class="container--estreito">
        <!-- Atalhos para os temas, no mesmo padrão do filtro do portfólio -->
        <nav class="temas" aria-label="Temas">
          <a
            v-for="tema in [...new Set(useAppConfig().faq.map((item) => item.tema))]"
            :key="tema"
            :href="`#${slug(tema)}`"
            class="temas__opcao"
          >
            {{ tema }}
          </a>
        </nav>

        <div class="grupos">
          <section
            v-for="tema in [...new Set(useAppConfig().faq.map((item) => item.tema))]"
            :id="slug(tema)"
            :key="tema"
            class="grupo revelar"
            :aria-labelledby="`titulo-${slug(tema)}`"
          >
            <header class="grupo__cabeca">
              <p class="kicker">Perguntas sobre</p>
              <h2 :id="`titulo-${slug(tema)}`" class="grupo__titulo">{{ tema }}</h2>
            </header>
            <ListaFaq :grupo="`faq-${slug(tema)}`" :itens="useAppConfig().faq.filter((item) => item.tema === tema)" />
          </section>
        </div>
      </div>
    </section>

    <section class="secao secao--superficie" aria-labelledby="canais-titulo">
      <div class="container">
        <header class="cabeca-secao revelar">
          <div>
            <p class="kicker">Atendimento</p>
            <h2 id="canais-titulo">Não achou a resposta?</h2>
          </div>
          <p>Fale com a gente pelo canal certo para o seu caso.</p>
        </header>

        <ul class="canais">
          <li class="canal revelar">
            <p class="kicker">Clientes</p>
            <h3>Portal do cliente</h3>
            <p class="suave">Dúvidas, pedidos e ajustes sobre o seu projeto.</p>
            <a :href="useAppConfig().portal" class="botao botao--principal canal__acao">Abrir o portal</a>
          </li>
          <li class="canal revelar">
            <p class="kicker">Novos projetos</p>
            <h3>Formulário de contato</h3>
            <p class="suave">Para quem ainda não é cliente ou tem outro assunto.</p>
            <NuxtLink to="/contato" class="botao botao--secundario canal__acao">Falar com a gente</NuxtLink>
          </li>
          <li class="canal revelar">
            <p class="kicker">Horário</p>
            <h3>Atendimento</h3>
            <p class="suave">{{ useAppConfig().contato.horario }}</p>
            <p class="dado canal__nota">Respostas no portal ficam registradas no projeto.</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.perguntas {
  padding-top: 0;
}

/* Atalhos centralizados, mesmo estilo do filtro do portfólio */
.temas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;
}

.temas__opcao {
  padding: 8px 16px;
  border: var(--linha);
  border-radius: var(--radius-pill);
  background: var(--superficie-elevada);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: var(--texto-2);
  transition:
    border-color 160ms ease,
    color 160ms ease;
}

.temas__opcao:hover {
  border-color: var(--texto);
  color: var(--texto);
}

.grupos {
  display: grid;
  gap: 80px;
}

.grupo {
  display: grid;
  gap: 24px;
  scroll-margin-top: calc(var(--altura-cabecalho) + 32px);
}

.grupo__cabeca {
  display: grid;
  justify-items: center;
  gap: 8px;
  text-align: center;
}

.grupo__titulo {
  font-size: clamp(28px, 3vw, 40px);
}

/* Canais: três cartões iguais, conteúdo centralizado (guia de layout) */
.canais {
  display: grid;
  gap: var(--coluna-gap);
}

.canal {
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 12px;
  padding: 36px 28px;
  border: var(--linha);
  border-radius: var(--radius-card);
  background: var(--superficie-elevada);
  text-align: center;
}

.canal__acao {
  margin-top: 12px;
}

.canal__nota {
  margin-top: 12px;
  font-size: 13px;
  color: var(--texto-suave);
}

@media (min-width: 900px) {
  .canais {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
