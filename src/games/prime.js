import mainEngine from '../index.js';
import getRandomArbitrary from '../util.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrime = () => {
  const question = getRandomArbitrary(1, 100);
  const questionRigth = isPrime(question) ? 'yes' : 'no';
  return { question, questionRigth };
};

const playPrime = () => { mainEngine(getPrime, description); };

export default playPrime;
