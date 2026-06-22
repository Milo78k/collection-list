export const toggleStringValue = (values: string[], value: string) => {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];
};

export const areArraysEqual = (first: number[], second: number[]) => {
  return (
    first.length === second.length &&
    first.every((item) => second.includes(item))
  );
};
