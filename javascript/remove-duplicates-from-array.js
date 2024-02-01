// * Remove Duplicates from an Array

// TIP: In-place solution

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
// SOLUTION 2

// TIP: Built-in solution

function removeDuplicates2(array) {
  return [...new Set(array)]
}

// -----------------------------
// TESTS

console.log(removeDuplicates([1, 2, 3, 2, 4, 1])) // [1, 2, 3, 4]
console.log(removeDuplicates2([1, 2, 3, 2, 4, 1])) // [1, 2, 3, 4]
