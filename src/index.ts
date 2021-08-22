export function add(input?: string): number {
  if (input) {
    const delimiter: RegExp = /\n|,/;
    const result = input
      .split(delimiter)
      .map(Number)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    return result;
  } else return 0;
}
