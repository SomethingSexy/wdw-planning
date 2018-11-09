export const alphabetical = (key: string | null, a, b) => {
  const aLookup = key ? a[key] : a;
  const bLookup = key ? b[key] : b;

  if (aLookup < bLookup) {
    return -1;
  }
  if (aLookup > bLookup) {
    return 1;
  }
  return 0;
};
