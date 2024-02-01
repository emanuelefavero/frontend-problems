// * Remove Duplicates from an Array

function removeDuplicates(array) {
  let hash = {}

  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = true
    } else {
      array.splice(i, 1)
    }
  }

  return array
}

// -----------------------------
// TESTS

console.log(removeDuplicates([1, 2, 3, 2, 4, 1])) // [1, 2, 3, 4]
