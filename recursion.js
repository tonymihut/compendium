
const limit = process.argv[ 2 ]

function fibb( count, current = 1, previous = 0 ) {
  doSomething( current );
  return count ?
    fibb( count - 1, current + previous, current ) :
    current
}

function doSomething( value ) {
  console.log( value );
}

fibb( limit )