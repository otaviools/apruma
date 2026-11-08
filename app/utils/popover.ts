/** Fecha o popover que contém o elemento clicado (menu do celular ao trocar de página). */
export function fecharPopover({ currentTarget }: Event) {
  if (currentTarget instanceof HTMLElement) currentTarget.closest<HTMLElement>('[popover]')?.hidePopover()
}
