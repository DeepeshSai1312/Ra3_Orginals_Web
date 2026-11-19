/**
 * Compact count for display, rounded down so we never over-claim:
 * 60412 -> "60K", 1530000 -> "1.5M", 920 -> "920".
 */
export const formatCount = (count: number) => {
  if (count < 1000) return String(Math.floor(count));
  const units: [number, string][] = [
    [1e9, 'B'],
    [1e6, 'M'],
    [1e3, 'K'],
  ];
  const [divisor, unit] = units.find(([d]) => count >= d) as [number, string];
  const scaled = count / divisor;
  // One decimal below 10 (e.g. 1.5M), whole numbers above (e.g. 92K).
  const rounded =
    scaled < 10 ? Math.floor(scaled * 10) / 10 : Math.floor(scaled);
  return `${rounded}${unit}`;
};
