import play from '../index.js';
import getRandom from '../util.js';
// Инструкция
const description = 'What is the result of the expression?';

// выполним действия '+', '-', '*'

const calculate = (operation, firstNum, secondNum) => {
  switch (operation) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return `operator ${operation} is not use`;
  }
};

const getOperation = () => {
  const arithmeticsing = ['+', '-', '*'];
  const operation = arithmeticsing[getRandom(0, arithmeticsing.length - 1)];
  const firstNum = getRandom(0, 100);
  const secondNum = getRandom(0, 100);
  const question = `${firstNum} ${operation} ${secondNum}`;
  const correntAnswer = calculate(operation, firstNum, secondNum).toString();
  return { question, correntAnswer };
};

const getCalc = () => { play(getOperation, description); };
export default getCalc;
