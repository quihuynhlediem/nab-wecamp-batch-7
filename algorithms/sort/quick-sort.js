const quickSort = (arr, L, R) => {
  if (L >= R) {
    return;
  }
  let i = L;
  let j = R;
  let pivot = arr[(L + R) / 2];
  while (i < j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
    }
  }
  quickSort(arr, L, j);
  quickSort(arr, i, R);
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}