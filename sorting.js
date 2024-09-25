// Bubble Sort
for (let i = 0; i < arr.length - 1; i++) {
  let swap = false;
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      swap = true;
    }
  }
  if (!swap) break;
}
