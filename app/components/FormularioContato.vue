<!--
  Formulário "Fale com a gente", usado na página /contato e no cartão de fechamento da home.
  `prefixo` mantém os ids únicos. A mensagem chega preenchida com o texto do campo
  "Conta a ideia" (useBriefing), que nunca vai para a URL.
  Sem API por enquanto: a validação é do navegador e nada é enviado. Quando a rota de envio
  existir, validar tudo de novo no servidor (roteiro, seções 6 e 10).
  LGPD: só o necessário para responder (nome, e-mail, mensagem; telefone opcional).
-->
<script setup lang="ts">
defineProps<{ prefixo: string }>()
</script>

<template>
  <form class="formulario" @submit.prevent="useState(`contato-${prefixo}`).value = 'pendente'">
    <div class="formulario__linha">
      <p class="formulario__campo">
        <label :for="`${prefixo}-nome`">Nome</label>
        <input :id="`${prefixo}-nome`" name="nome" type="text" autocomplete="name" required maxlength="120">
      </p>
      <p class="formulario__campo">
        <label :for="`${prefixo}-email`">E-mail</label>
        <input :id="`${prefixo}-email`" name="email" type="email" autocomplete="email" required maxlength="160">
      </p>
    </div>
    <p class="formulario__campo">
      <label :for="`${prefixo}-telefone`">Telefone <span class="suave">(opcional)</span></label>
      <input :id="`${prefixo}-telefone`" name="telefone" type="tel" autocomplete="tel" maxlength="20">
    </p>
    <p class="formulario__campo">
      <label :for="`${prefixo}-mensagem`">Mensagem</label>
      <textarea
        :id="`${prefixo}-mensagem`"
        v-model="useBriefing().value"
        name="mensagem"
        rows="4"
        required
        minlength="10"
        maxlength="2000"
        placeholder="Conte a sua ideia ou a sua dúvida"
      />
    </p>

    <!-- Campo oculto contra robôs: pessoas não veem nem preenchem -->
    <p class="formulario__isca" aria-hidden="true">
      <label :for="`${prefixo}-site`">Site</label>
      <input :id="`${prefixo}-site`" name="site" type="text" tabindex="-1" autocomplete="off">
    </p>

    <button type="submit" class="botao botao--principal formulario__enviar">Enviar mensagem</button>

    <p v-if="useState(`contato-${prefixo}`).value === 'pendente'" class="formulario__status" role="status">
      O envio pelo site ainda não está ativo.
      <template v-if="useAppConfig().contato.whatsapp">Fale com a gente pelo WhatsApp.</template>
      <template v-else-if="useAppConfig().contato.email">
        Escreva para <a :href="`mailto:${useAppConfig().contato.email}`" class="link">{{ useAppConfig().contato.email }}</a>.
      </template>
    </p>

    <p class="formulario__aviso suave">
      Usamos seus dados só para responder a esta mensagem.
      <NuxtLink to="/privacidade" class="link">Aviso de privacidade</NuxtLink>
    </p>
  </form>
</template>

<style scoped>
.formulario {
  display: grid;
  gap: 18px;
  width: 100%;
  text-align: left;
}

.formulario__linha {
  display: grid;
  gap: 18px;
}

@media (min-width: 640px) {
  .formulario__linha {
    grid-template-columns: 1fr 1fr;
  }
}

.formulario__campo {
  display: grid;
  gap: 8px;
}

label {
  font-size: 14px;
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 13px 16px;
  border: 1px solid var(--borda-forte);
  border-radius: 10px;
  background: var(--fundo);
  transition: border-color 160ms ease;
}

input:hover,
textarea:hover {
  border-color: var(--texto-2);
}

input:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--destaque);
  outline-offset: 1px;
  border-color: var(--texto);
}

/* Erro em texto e borda, não só em cor */
input:user-invalid,
textarea:user-invalid {
  border-color: var(--destaque-texto);
  border-style: dashed;
}

textarea {
  resize: vertical;
}

textarea::placeholder {
  color: var(--texto-suave);
}

.formulario__isca {
  position: absolute;
  left: -9999px;
}

.formulario__enviar {
  width: 100%;
}

.formulario__status {
  padding: 14px 16px;
  border-left: 3px solid var(--destaque);
  background: var(--superficie);
  font-size: 15px;
}

.formulario__aviso {
  font-size: 13px;
}
</style>
