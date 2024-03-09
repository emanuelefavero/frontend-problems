// * Implement Math.mySqrt()

// Math.sqrt() helps us getting the square root of a number.

// Can your write your own mySqrt() ? You should return the integer part only, truncating the fraction part.

/**
 * @param {number} x
 * @returns {number}
 */

// O(log n) time | O(1) space
function mySqrt(x) {
  if (typeof x !== 'number' || x < 0 || isNaN(x)) return NaN
  if (x === 0 || x === 1) return x

  let left = 1
  let right = x
  let result = 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (mid * mid === x) return mid // found the exact square root
    else if (mid * mid < x) {
      left = mid + 1
      result = mid // store the floor of the square root
    } else {
      right = mid - 1
    }
  }

  // if no exact square root found, return the floor of the square root
  return result
}

console.log(mySqrt(9)) // 3
