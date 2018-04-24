
// Allow a prefered outcome to be passed from the command line
const outcome = process.argv[ 2 ] || 'success'

const doSomeAsyncWork = new Promise( ( resolve, reject ) => {
  console.log( `Loading...` )
  setTimeout( () => {
    if ( outcome === 'success' ) {
      resolve( 'Success' )
    }
    reject( 'Error' )
  }, 2000 );
} )

doSomeAsyncWork.then( response => {
  console.log( response )
}, error => {
  console.log( error )
} )