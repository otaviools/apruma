<script setup lang="ts">
useSeoMeta({
  title: 'Contato',
  description: 'Fale com a Apruma. Conte a sua ideia ou tire uma dúvida.',
})
</script>

<template>
  <div>
    <CabecaPagina kicker="Contato" titulo="Conta pra gente." texto="Nome, e-mail e a sua mensagem. Se você escreveu a ideia na página inicial, ela já está aqui." />

    <section class="container--estreito contato" aria-label="Formulário de contato">
      <FormularioContato prefixo="contato" />

      <aside class="contato__lado">
        <p class="kicker">Já é cliente?</p>
        <p>O portal é o caminho mais rápido para falar sobre o seu projeto.</p>
        <a :href="useAppConfig().portal" class="botao botao--secundario">Portal do cliente</a>
        <template v-if="useAppConfig().contato.whatsapp">
          <p class="kicker contato__horario">Prefere conversar agora?</p>
          <LinkWhatsapp />
        </template>
        <p class="kicker contato__horario">Atendimento</p>
        <p>{{ useAppConfig().contato.horario }}</p>
      </aside>
    </section>
  </div>
</template>

<style scoped>
.contato {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 64px;
  padding-bottom: var(--secao);
}

.contato__lado {
  display: grid;
  gap: 12px;
  align-content: start;
  justify-items: start;
}

.contato__horario {
  margin-top: 24px;
}

.contato__lado {
  padding-top: 40px;
  border-top: var(--linha);
}
</style>
