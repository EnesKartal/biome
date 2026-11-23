/* should not generate diagnostics */
export function withDefault(flag: boolean | undefined = false, other: boolean) {
  return flag || other;
}
