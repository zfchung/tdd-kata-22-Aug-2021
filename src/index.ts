export function add(input?: string): number {
  if (input) {
    if (input.substring(0, 2) == "//") {
      return customDelimiter(input);
    } else {
      const delimiter: RegExp = /\n|,/;
      return calculation(input, delimiter);
    }
  } else return 0;

  function customDelimiter(input: string): number {
    const delimiter: string = input.charAt(2);
    const splitString: string = input.split("\n")[1];
    return calculation(splitString, delimiter);
  }
}

function calculation(input: string, delimiter: RegExp | string): number {
  return input
    .split(delimiter)
    .map(Number)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}
