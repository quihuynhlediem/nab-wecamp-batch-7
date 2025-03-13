let arr = [3, 4, 1, 2];

let bubbleSort = (arr) => {
  let arrLength = arr.length;
  for (let i = 1; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
       }
     }
   }
}

bubbleSort(arr);
for (const a of arr) {
  console.log(a);
 }