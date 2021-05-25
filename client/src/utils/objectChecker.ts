export const objectHasEmptyProperty = (rowData: any) => {
  for (var key in rowData) {
    if (
      rowData[key] === undefined ||
      rowData[key] === null ||
      rowData[key].length === 0
    ) {
      return false
    }
  }
  return true
}
