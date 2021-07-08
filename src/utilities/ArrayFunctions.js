export const generateRandomArray = (size) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }

  const array = Array(size)
    .fill(0)
    .map(() => getRandomInt(size * 5));
  return array;
};

export const createTrace = (array, sort) => {
  const numbers = [...array];
  let trace = [];
  if (sort) {
    trace = sort(numbers);
  }
  return trace;
};
