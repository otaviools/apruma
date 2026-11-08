<!--
  Link para conversar no WhatsApp. O número vem de app.config (contato.whatsapp, só dígitos
  com DDI e DDD). Sem número cadastrado, o link não aparece.
  O texto inicial da conversa vai na URL do wa.me; não leva nenhum dado da pessoa.
  Ícone: Simple Icons (CC0).
-->
<script setup lang="ts">
defineProps<{ variante?: 'botao' | 'link' | 'claro' }>()
</script>

<template>
  <a
    v-if="useAppConfig().contato.whatsapp"
    :href="`https://wa.me/${useAppConfig().contato.whatsapp}?text=${encodeURIComponent(useAppConfig().contato.whatsappMensagem)}`"
    class="whatsapp"
    :class="`whatsapp--${variante ?? 'botao'}`"
    target="_blank"
    rel="noopener"
  >
    <svg class="whatsapp__icone" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        fill="currentColor"
      />
    </svg>
    <slot>Conversar no WhatsApp</slot>
    <span class="so-leitor">(abre em nova aba)</span>
  </a>
</template>

<style scoped>
.whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.whatsapp__icone {
  flex: none;
  width: 18px;
  height: 18px;
}

/* Botão claro, para usar sobre o painel escuro do fechamento */
.whatsapp--claro {
  min-height: 48px;
  padding: 0 22px;
  border-radius: var(--radius-pill);
  background: var(--marca-papel);
  color: var(--marca-carvao);
  font-size: 15px;
  font-weight: 500;
  transition:
    background-color 160ms ease,
    transform 160ms var(--ease-aprumar);
}

.whatsapp--claro:hover {
  background: #fff;
}

.whatsapp--claro:active {
  transform: scale(0.97);
}

/* Botão secundário no tema da página */
.whatsapp--botao {
  min-height: 48px;
  padding: 0 22px;
  border: 1px solid var(--texto);
  border-radius: var(--radius-pill);
  color: var(--texto);
  font-size: 15px;
  font-weight: 500;
  transition:
    background-color 160ms ease,
    color 160ms ease;
}

.whatsapp--botao:hover {
  background: var(--texto);
  color: var(--fundo);
}

/* Link de texto, para listas como a do rodapé */
.whatsapp--link {
  gap: 8px;
  color: inherit;
}

.whatsapp--link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.whatsapp--link .whatsapp__icone {
  width: 15px;
  height: 15px;
}
</style>
