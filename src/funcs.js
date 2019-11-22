// Concatenate Array

export function concatArray(original) {
  // if (typeof original == {}) {
  const compressed = [];
  // make a copy of the input array
  const copy = original.slice(0);
  // first loop goes over every element
  for (let i = 0; i < original.length; i++) {
    let myCount = 0;
    // loop over every element in the copy and see if it's the same
    for (let w = 0; w < copy.length; w++) {
      if (original[i] === copy[w]) {
        // increase amount of times duplicate is found
        myCount++;
        // sets item to undefined
        delete copy[w];
      }
    }
    if (myCount > 0) {
      let a = {};
      a.id = original[i];
      a.count = myCount;
      compressed.push(a);
    }
  }

  return compressed;
  // } else {
  // console.error(`${original} is not an array.`);
  // }
}

// Convert to kebabcase

export const kebabCase = string =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
