
/**
* Read argument provided by node call or default to 10
* @param {number} limit any number
*/
const limit = process.argv[ 2 ]

/**
* Calculate @count fibbonaci numbers from the series starting from @current
* @param {number} [count=10] any number
* @param {number} [current=1] any number
* @param {number} [previous=0] any number
* @param {array} [stack=[]] any array
* @returns {array} containing the resulting sub-series
*/
function fibb( count = 10, current = 1, previous = 0, stack = [] ) {
  // Add the value to the accumulator array
  stack.push( current )
  // If count is not 0 it means we still have calculations to do
  if ( count ) {
    // Recall fibb with new parameters
    return ( fibb( count - 1, current + previous, current, stack ) )
  }
  // Else return the stack
  return stack
}

// Call the function
console.log( fibb( limit ) )