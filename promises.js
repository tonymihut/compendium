
/**
* Allow an outcome to be passed from the command line
*/
const outcome = process.argv[ 2 ] || 'success'


/**
* Create a new promise object
* @param {function} [resolve] Callback function for success outcome
* @param {function} [reject] Callback function for fail outcome
*/

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