// получаем случайное число
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export default getRandomArbitrary;
