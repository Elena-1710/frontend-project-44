// получаем случайное число
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export default getRandom;
