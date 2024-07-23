// Day 11: Promises and Async/Await

// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 1 resolved after 2 seconds');
    }, 2000);
});

promise1.then(message => {
    console.log(message);  // "Promise 1 resolved after 2 seconds"
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using `.catch()`.
const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error('Promise 2 rejected after 2 seconds'));
    }, 2000);
});

promise2.catch(error => {
    console.error(error.message);  // "Promise 2 rejected after 2 seconds"
});

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Data fetched');
    }, 1000);
});

fetchData
    .then(message => {
        console.log(message);  // "Data fetched"
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Data processed');
            }, 1000);
        });
    })
    .then(message => {
        console.log(message);  // "Data processed"
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Data saved');
            }, 1000);
        });
    })
    .then(message => {
        console.log(message);  // "Data saved"
    });

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function waitForPromise() {
    const message = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Async/Await resolved');
        }, 2000);
    });
    console.log(message);  // "Async/Await resolved"
}

waitForPromise();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function handleRejection() {
    try {
        await new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error('Async/Await rejected'));
            }, 2000);
        });
    } catch (error) {
        console.error(error.message);  // "Async/Await rejected"
    }
}

handleRejection();

// Activity 4: Fetching Data from an API

// Task 6: Use the `fetch` API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched using promises:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Task 7: Use the `fetch` API to get data from a public API and log the response data to the console using async/await.
async function fetchDataAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log('Fetched using async/await:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchDataAsync();

// Activity 5: Concurrent Promises

// Task 8: Use `Promise.all` to wait for multiple promises to resolve and then log all their values.
const promiseA = new Promise(resolve => setTimeout(() => resolve('Promise A resolved'), 1000));
const promiseB = new Promise(resolve => setTimeout(() => resolve('Promise B resolved'), 2000));
const promiseC = new Promise(resolve => setTimeout(() => resolve('Promise C resolved'), 3000));

Promise.all([promiseA, promiseB, promiseC])
    .then(values => {
        console.log('Promise.all resolved values:', values);
    });

// Task 9: Use `Promise.race` to log the value of the first promise that resolves among multiple promises.
Promise.race([promiseA, promiseB, promiseC])
    .then(value => {
        console.log('Promise.race resolved value:', value);
    });

// Feature Requests

// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
const promiseCreationScript = () => {
    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved after 1 second');
        }, 1000);
    });

    const promise2 = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Rejected after 2 seconds'));
        }, 2000);
    });

    promise1.then(message => console.log(message));
    promise2.catch(error => console.error(error.message));
};

promiseCreationScript();

// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
const promiseChainingScript = () => {
    const step1 = new Promise(resolve => setTimeout(() => resolve('Step 1 complete'), 1000));
    const step2 = new Promise(resolve => setTimeout(() => resolve('Step 2 complete'), 2000));
    const step3 = new Promise(resolve => setTimeout(() => resolve('Step 3 complete'), 3000));

    step1
        .then(message => {
            console.log(message);
            return step2;
        })
        .then(message => {
            console.log(message);
            return step3;
        })
        .then(message => {
            console.log(message);
        });
};

promiseChainingScript();

// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
const asyncAwaitScript = async () => {
    try {
        const resolvedMessage = await new Promise(resolve => setTimeout(() => resolve('Resolved using async/await'), 2000));
        console.log(resolvedMessage);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

asyncAwaitScript();

// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
const apiFetchScript = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => console.log('Fetched with promises:', data))
        .catch(error => console.error('Fetch error:', error));

    const fetchAsync = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();
            console.log('Fetched with async/await:', data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    fetchAsync();
};

apiFetchScript();

// 5. Concurrent Promises Script: Write a script that uses `Promise.all` and `Promise.race` to handle multiple promises concurrently and logs the results.
const concurrentPromisesScript = () => {
    const promise1 = new Promise(resolve => setTimeout(() => resolve('First resolved'), 1000));
    const promise2 = new Promise(resolve => setTimeout(() => resolve('Second resolved'), 2000));
    const promise3 = new Promise(resolve => setTimeout(() => resolve('Third resolved'), 3000));

    Promise.all([promise1, promise2, promise3])
        .then(values => {
            console.log('Promise.all results:', values);
        });

    Promise.race([promise1, promise2, promise3])
        .then(value => {
            console.log('Promise.race result:', value);
        });
};

concurrentPromisesScript();
