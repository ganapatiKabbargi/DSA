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

//merge sort
function mergeSort(arr) {
  function divide(arr, si, ei) {
    if (si >= ei) {
      return;
    }
    let mid = Math.floor((si + ei) / 2);
    divide(arr, si, mid);
    divide(arr, mid + 1, ei);
    conquer(arr, si, mid, ei);
  }
  function conquer(arr, si, mid, ei) {
    let mergedArr = [];
    let idx1 = si;
    let idx2 = mid + 1;
    let x = 0;

    while (idx1 <= mid && idx2 <= ei) {
      if (arr[idx1] <= arr[idx2]) {
        mergedArr[x++] = arr[idx1++];
      } else {
        mergedArr[x++] = arr[idx2++];
      }
    }
    while (idx1 <= mid) {
      mergedArr[x++] = arr[idx1++];
    }
    while (idx2 <= ei) {
      mergedArr[x++] = arr[idx2++];
    }

    for (let i = 0, j = si; i < mergedArr.length; i++, j++) {
      arr[j] = mergedArr[i];
    }
  }
  return arr;
}
