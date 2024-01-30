// * Implement classNames

// classNames() accepts arbitrary arguments, filter out the falsy values, and generate the final className string.

function classNames(...args) {
  let result = ''

  for (let item of args) {
    // Check for falsy values
    if (
      item === null ||
      item === undefined ||
      item === false ||
      typeof item === 'symbol'
    )
      continue

    // Check for string or number
    if (typeof item === 'string' || typeof item === 'number') {
      result += item + ' '

      // Check for array
    } else if (Array.isArray(item)) {
      item.flat(Infinity).forEach((i) => args.push(i)) // flatten the array and push each item to args

      // Check for object
    } else if (typeof item === 'object') {
      Object.keys(item).forEach((key) => {
        if (item[key]) result += key + ' '
      })
    }
  }

  return result.trim()
}

// ------------------------------
// TESTS

console.log(classNames('foo', 'bar', 100)) // 'foo bar 100'

// Other primitives are ignored
console.log(classNames(null, undefined, Symbol(), 1n, true, false)) // ''

// Object's enumerable property keys are kept if the key is string and value is truthy
console.log(classNames({ foo: true, bar: false, duck: true })) // 'foo duck'
