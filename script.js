window.promises = [];

// Array of promises with random times between 1 and 5 seconds
for (let i = 0; i < 5; i++) {
  const randomTime = Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${randomTime} seconds`);
    }, randomTime * 1000);
  });
  window.promises.push(promise);
}

// Use Promise.any() to wait for the first resolved promise
Promise.any(window.promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.log(error);
  });


// Do not change the code above this
// add your promises to the array `promises`
