//your JS code here. If required.
function manipulateData() {
  const outputDiv = document.getElementById("output");

  // Initial Promise (3 sec delay)
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })

    // First Transformation: Filter even numbers
    .then((arr) => {
      const evenNumbers = arr.filter(num => num % 2 === 0);

      return new Promise((resolve) => {
        setTimeout(() => {
          outputDiv.textContent = evenNumbers.toString(); // "2,4"
          resolve(evenNumbers);
        }, 1000); // 1 sec delay
      });
    })

    // Second Transformation: Multiply by 2
    .then((evenNumbers) => {
      const doubled = evenNumbers.map(num => num * 2);

      return new Promise((resolve) => {
        setTimeout(() => {
          outputDiv.textContent = doubled.toString(); // "4,8"
          resolve(doubled);
        }, 2000); // 2 sec delay
      });
    });
}

// Call function on page load
manipulateData();