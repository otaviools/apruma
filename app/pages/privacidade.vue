<script setup lang="ts">
useSeoMeta({
  title: 'Aviso de privacidade',
  description: 'Como a Apruma trata os seus dados pessoais: o que coletamos, para quê, por quanto tempo e como exercer seus direitos.',
})
</script>

<template>
  <div>
    <CabecaPagina kicker="Privacidade" titulo="Aviso de privacidade" texto="Em linguagem simples: o que coletamos, para quê e como você controla os seus dados." />
    <TextoLegal
      :secoes="[
        { titulo: 'Quais dados coletamos', texto: 'No formulário de contato: nome, e-mail, mensagem e, se você quiser, telefone. No campo Conta a ideia: o texto que você escrever, que fica só no seu navegador até você enviar. No portal do cliente: os dados do cadastro e do projeto.' },
        { titulo: 'Para que usamos', texto: 'Para responder ao seu contato, montar o briefing e a proposta, executar o contrato e dar suporte depois da publicação.' },
        { titulo: 'Base legal', texto: 'Procedimentos preliminares e execução de contrato (art. 7º, V, da LGPD) e, para cookies não essenciais, o seu consentimento.' },
        { titulo: 'Com quem compartilhamos', texto: 'Com o provedor de inteligência artificial do chat de briefing, com o gateway de pagamento e com o serviço de e-mail transacional, só no necessário para cada finalidade.' },
        { titulo: 'Por quanto tempo guardamos', texto: 'Mensagens de contato que não viram projeto: prazo a definir. Dados de projeto: enquanto durar o contrato e pelo prazo exigido em lei.' },
        { titulo: 'Cookies', texto: 'O site usa só cookies essenciais, como o que guarda a sua escolha no banner. Medição de audiência só liga com o seu aceite. Você muda a escolha em Preferências de cookies, no rodapé.' },
        { titulo: 'Seus direitos', texto: 'Você pode pedir acesso, correção, portabilidade e exclusão dos seus dados, e revogar consentimentos, pelo canal do encarregado.' },
        { titulo: 'Encarregado (DPO)', texto: 'Canal do encarregado a definir antes da publicação.' },
      ]"
    />
  </div>
</template>
