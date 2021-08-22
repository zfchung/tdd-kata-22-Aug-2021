export function add(input?: string): number {
  if (input) {
    if (input.substring(0, 2) == "//") {
      const delimiter: string = input.charAt(2);
      const splitString: string = input.split("\n")[1];
      const result = splitString
        .split(delimiter)
        .map(Number)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
      return result;
    } else {
      const delimiter: RegExp = /\n|,/;
      const result = input
        .split(delimiter)
        .map(Number)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
      return result;
    }
  } else return 0;
}
