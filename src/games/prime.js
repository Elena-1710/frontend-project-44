import play from '../index.js';
import getRandom from '../util.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandom(1, 100);
  const correntAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correntAnswer };
};

const playPrimeGame = () => { play(generateRound, description); };

export default playPrimeGame;
