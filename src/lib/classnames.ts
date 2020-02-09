export function classNames(...names: Array<string | undefined>): string {
  return names.filter((s) => s).join(' ')
}
