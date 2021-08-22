export function add(input?: string): number {
  if (input) {
    const result = input
      .split(",")
      .map(Number)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    return result;
  } else return 0;
}
