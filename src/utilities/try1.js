function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

const array = Array(10)
  .fill(0)
  .map(() => getRandomInt(10 * 5));
console.log(array);
