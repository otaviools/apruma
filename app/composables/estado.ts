// Estados compartilhados do site (useState: mesmo valor no servidor e no cliente, sem store extra)

/** Texto do campo "Conta a ideia". Fica só na memória do navegador; nunca vai para a URL. */
export function useBriefing() {
  return useState('briefing', () => '')
}

/** Índice da etapa visível na seção "Como funciona". */
export function useEtapaAtiva() {
  return useState('etapa-ativa', () => 0)
}

/** Banner de cookies aberto pelo link "Preferências de cookies". */
export function useCookiesAbertos() {
  return useState('cookies-abertos', () => false)
}
