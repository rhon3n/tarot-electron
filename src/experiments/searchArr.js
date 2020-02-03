export function searchArr(num) {
  const arr = ['one', 'two', 'three'];

  if (num && num < arr.length && num >= 0) {
    return arr[num];
  }
}
