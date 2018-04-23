
const limit = process.argv[ 2 ]

function fibb( count, current = 1, previous = 0 ) {
  console.log( current );
  if ( !count ) {
    return
  } else {
    return fibb( count - 1, current + previous, current )
  }
}

fibb( limit )