// rotate array by k times
function rotateArr(arr, k) {
  k = k % arr.length;

  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  return arr;
}

// maxsum subarray (Kadanes Algorithm)
function maxSumSubArray(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum + arr[i];
    maxSum = Math.max(maxSum, currentSum);
    currentSum = Math.max(currentSum, 0);
  }
  return maxSum;
}
