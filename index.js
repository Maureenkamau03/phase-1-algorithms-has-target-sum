function hasTargetSum(array, target) {
	// Write your algorithm here
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			let sum = array[i] + array[j];
			if (sum === target) return true;
		}
	}
	return false;
}

/*
  Write the Big O time complexity of your function here
  It uses Quadratic time because of the nested loops
  Thus;
  = O(n^2)
*/

/*
  Add your pseudocode here
  Iterate over the numbers array
  Variable to the sum of the items
  compare the sum with the target.
  If equal  return true
  Else, return false
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log("Expecting: true");
	console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

	console.log("");

	console.log("Expecting: true");
	console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

	console.log("");

	console.log("Expecting: false");
	console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
