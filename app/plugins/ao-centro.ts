// Diretiva v-ao-centro: chama a função quando o elemento cruza o centro da tela.
// Usada na seção de etapas para trocar a tela do mini portal conforme a rolagem.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<HTMLElement & { _observador?: IntersectionObserver }, () => void>('ao-centro', {
    mounted(elemento, binding) {
      elemento._observador = new IntersectionObserver(
        (entradas) => entradas.some((entrada) => entrada.isIntersecting) && binding.value(),
        { rootMargin: '-45% 0px -45% 0px' },
      )
      elemento._observador.observe(elemento)
    },
    unmounted(elemento) {
      elemento._observador?.disconnect()
    },
    // No servidor a diretiva não renderiza nada
    getSSRProps: () => ({}),
  })
})
