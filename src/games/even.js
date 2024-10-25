import mainEngine from '../index.js';
import getRandomArbitrary from '../util.js';

// функция проверка на четность
const isEven = (num) => num % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const startGames = () => {
  const question = getRandomArbitrary(0, 100);
  // правильный ответ
  const qwestionRight = isEven(question) ? 'yes' : 'no';
  return [question, qwestionRight];
};

const startEvenGame = () => { mainEngine(startGames, description); };

export default startEvenGame;
