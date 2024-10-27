import mainEngine from '../index.js';
import getRandomArbitrary from '../util.js';
// Инструкция
const description = 'Find the greatest common divisor of given numbers.';

const GCD = (firstNum, secondNum) => {
  let gcd = 1;
  for (let i = 2; i <= firstNum; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      gcd = i;
    }
  } return gcd;
};
const getGCD = () => {
  const firstNum = getRandomArbitrary(1, 20);
  const secondNum = getRandomArbitrary(1, 20);
  const quwestion = `${firstNum} ${secondNum}`;
  const questionRigth = GCD(firstNum, secondNum).toString();
  return { quwestion, questionRigth };
};

const playGCD = () => { mainEngine(getGCD, description); };

export default playGCD;
