/**
 * Merge props over defaults, ignoring undefined / null / empty-string props.
 * Builder sends every input, including ones an editor has cleared.
 */
export const withDefaults = <T extends object>(
  props: Partial<T> | undefined,
  defaults: T
): T => {
  const merged = { ...defaults };
  Object.entries(props ?? {}).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      (merged as Record<string, unknown>)[key] = value;
    }
  });
  return merged;
};
