import play from '../index.js';
import getRandom from '../util.js';

// функция проверка на четность
const isEven = (num) => num % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const startGames = () => {
  const question = getRandom(0, 100);
  // правильный ответ
  const correntAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correntAnswer };
};

const startEvenGame = () => { play(startGames, description); };

export default startEvenGame;
