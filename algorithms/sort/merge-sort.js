const mergeSort = (arr, L, R) => {
	if (L >= R) {
		return;
	}
	const M = Math.floor((L + R) / 2);
	mergeSort(arr, L, M);
	mergeSort(arr, M + 1, R);
	merge(arr, L, M, R);
};

const merge = (arr, L, M, R) => {
	const leftArr = arr.slice(L, M + 1);
	const rightArr = arr.slice(M + 1, R + 1);

	// console.log(`Left arr: ${leftArr.join(" ")}`, `Right arr: ${rightArr.join(" ")}`);

	let i = 0;
	let j = 0;
	let k = L;
	while (i < leftArr.length && j < rightArr.length) {
		if (leftArr[i] <= rightArr[j]) {
			arr[k] = leftArr[i];
			i++;
		} else {
			arr[k] = rightArr[j];
			j++;
		}
		k++;
	}

	while (i < leftArr.length) {
		arr[k] = leftArr[i];
		i++;
		k++;
	}
	while (j < rightArr.length) {
		arr[k] = rightArr[j];
		j++;
		k++;
	}

	// console.log(arr.join(" "));
};

const print = (arr) => {
	console.log(arr.join(' '));
}

const arr = [3, 2, 1, 5, 4];
mergeSort(arr, 0, arr.length - 1);
console.log(arr); // [1, 2, 3, 4, 5]
