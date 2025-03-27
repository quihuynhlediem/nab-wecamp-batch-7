var twoSum = function (nums, target) {
	let inputMap = new Map();
	let id = 0;
	for (let element of nums) {
    let difference = target - element;
    if (inputMap.has(difference)) {  
      let output = [];
      output.push(inputMap.get(difference));
			output.push(id);
			return output;
    }
    inputMap.set(element, id);
		id++;
  }
};



console.log(twoSum([3,3], 6));
