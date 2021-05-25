export const arraySorter = <T extends object>(data: T[], arg: keyof T) =>
  data.slice().sort((a, b) => +a[arg] - +b[arg])

export default arraySorter

export const arrayMove = (arr: any[], old_index: number, new_index: number) => {
  if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
          arr.push(undefined);
      }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
};