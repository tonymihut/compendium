/**
 * Standardized error handling for promises
 *
 * This function is meant to wrap around a promise and
 * handle its outcome in an array
 *
 * The function wraps a try-catch around your promise and its body should contain
 * any standardized success or error handling that you require (eg. show a toaster) and
 * then you can further handle the outcome on a per-case basis by destructuring the
 * result array [result, error] and handling each case as you need. For a given instance
 * 'result' will be defined if the promise resolved and null if the promise rejected, the
 * reverse applies for 'error' - null if the promise resolved and defined if the promise rejected.
 */

/** Mock a promise which we assume will also take parameters */
const fetchData = (param) => {
  /** Generate a random outcome for each call so that we can run tests and
   * simulate behaviour (1 for error, 2 for success)
   */
  const outcome = Math.round(Math.random() + 1);

  /** Generate a random timeout each time to better simulate concurrent
   * behaviour if we wish (between 1000 and 5000)
   */
  const timeout = Math.round(Math.random() * (5 - 1) + 1) * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (outcome % 2 === 0) {
        resolve(`The promise has resolved with parameters => ${param}`);
      } else {
        reject(`The promise has rejected with parameters => ${param}`);
      }
    }, timeout);
  });
};

/**
 * handlePromise
 *
 * A function that wraps a promise in a try-catch block and returns the outcome
 *
 * @param {Function} promiseCallback A function that wraps and returns the target promise
 *
 * @returns {Array} An array containing the outcome, with the following structure => [result, error]
 */
async function handlePromise(promiseCallback) {
  try {
    const result = await promiseCallback();
    return [result, null];
  } catch (error) {
    console.log("Internal standard error handling goes here");
    return [null, error];
  }
}

/** Alternative implementation that returns an object instead of an array */
/**
 * @typedef {Object} PromiseOutcome
 * @property {} error - Error outcome, defined if the promise rejected, 'null' otherwise
 * @property {} result - Error flag, defined if the promise resolved, 'null' otherwise
 */
/**
 * handlePromiseAlternative
 *
 * A function that wraps a promise in a try-catch block and returns the outcome
 *
 * @param {Function} promiseCallback A function that wraps and returns the target promise
 *
 * @returns {PromiseOutcome} An object containing the outcome, with the following structure => {result, error}
 */
async function handlePromiseAlternative(promiseCallback) {
  const outcome = {
    error: null,
    result: null,
  };

  try {
    const result = await promiseCallback();
    return { ...outcome, result };
  } catch (error) {
    console.log("Internal standard error handling goes here");
    return { ...outcome, error };
  }
}

/**
 * Test the implementation
 */
async function testWithAwait() {
  const [result, error] = await handlePromise(() => fetchData("These are the promise parameters"));

  if (result) {
    console.log(`Success using await => ${result}`);
  } else {
    console.log(`Error using await => ${error}`);
  }
}

function testWithThen() {
  handlePromise(() => fetchData("These are the promise parameters")).then((outcome) => {
    const [result, error] = outcome;

    if (result) {
      console.log(`Success using .then => ${result}`);
    } else {
      console.log(`Error using .then => ${error}`);
    }
  });
}

testWithAwait();
testWithThen();

/**
 * ================================================================================================
 */
