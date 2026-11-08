/** Converte um texto em âncora de URL sem acentos: "Manutenção" vira "manutencao". */
export function slug(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
}
