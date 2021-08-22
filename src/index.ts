export function add(input?: string): number {
  if (input) {
    const separator: RegExp = /\n|,/;
    const result = input
      .split(separator)
      .map(Number)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    return result;
  } else return 0;
}
