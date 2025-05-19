export function formatMoney(value) {
  if (typeof value !== "number") value = parseFloat(value);
  return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
