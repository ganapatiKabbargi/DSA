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

// Selection Sort
for (let i = 0; i < arr.length; i++) {
  let smallest = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[smallest] > arr[j]) {
      smallest = j;
    }
  }
  let temp = arr[smallest];
  arr[smallest] = arr[i];
  arr[i] = temp;
}

// Insertion sort
for (let i = 1; i < arr.length; i++) {
  let current = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > current) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = current;
}
