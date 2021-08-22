export function add(input?: string): number {
  if (input) {
    if (input.substring(0, 2) == "//") {
      const delimiter: string = input.charAt(2);
      const splitString: string = input.split("\n")[1];
      return calculation(splitString, delimiter);
    } else {
      const delimiter: RegExp = /\n|,/;
      return calculation(input, delimiter);
    }
  } else return 0;
}

function calculation(input: string, delimiter: RegExp | string): number {
  return input
    .split(delimiter)
    .map(Number)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}
