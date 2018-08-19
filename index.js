const keys = ['C', '#C', 'D', '#D', 'E', 'F', '#F', 'G', '#G', 'A', '#A', 'B'];

const ionian = [2,2,1,2,2,2,1];
const dorian = [2,1,2,2,2,1,2]; // Dmi7
const phrygian = [1,2,2,2,1,2,2];
const lydian = [2,2,2,1,2,2,1];
const mixolydian = [2,2,1,2,2,1,2];
const aeolian = [2,1,2,2,1,2,2];
const locrian = [1,2,2,1,2,2,2];

const asccendingMelodicMirror = [2, 1, 2, 2, 2, 2, 1]; //CmiMa7
const dorianB2 = [1,2,2,2,2,1,2]; // Dmi7
const lydianAug = [2,2,2,2,1,2,1]; // CMa7
const lydianDominant = [2,2,2,1,2,1,2]; // G7
const aeolianDominent = [2,2,1,2,1,2,2]; // G7
const locrianSharp2 = [2,1,2,1,2,2,2]; // Dmi7b5
const alt = [1,2,1,2,2,2,2]; // G7

const calculator = (scale, beginKey) => {
	const result = [beginKey];
	for(let i = 0; i < scale.length; i++) {
  	const currentKey = keys[(keys.indexOf(beginKey) + scale[i]) % 12];
		result.push(currentKey);
    beginKey = currentKey;
	}
  return result;
}
console.clear();
console.log(calculator(dorianB2, 'D'));
console.log(calculator(alt, 'G'));
console.log(calculator(lydianAug, 'C'));