// Utility function to calculate the mean of an array of numbers
export function calculateMean(arr) {
  const sum = arr.reduce((total, num) => total + (num - 0), 0);
  let sm = sum / arr.length;
  return sm.toFixed(3);
}

// Utility function to calculate the median of an array of numbers
export function calculateMedian(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  } else {
    return sortedArr[mid];
  }
}

// Utility function to calculate the mode of an array of numbers
export function calculateMode(arr) {
  const frequencyMap = {};

  arr.forEach((num) => {
    frequencyMap[num] = frequencyMap[num] ? frequencyMap[num] + 1 : 1;
  });

  let mode = [];
  let maxFrequency = 0;

  for (const num in frequencyMap) {
    const frequency = frequencyMap[num];

    if (frequency > maxFrequency) {
      mode = [Number(num)];
      maxFrequency = frequency;
    } else if (frequency === maxFrequency) {
      mode.push(Number(num));
    }
  }
  //let sm = mode;

  return mode;
}
