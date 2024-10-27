import mainEngine from '../index.js';
import getRandomArbitrary from '../util.js';

const description = 'What number is missing in the progression?';
const getProgression = (startNum, progressionStep, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + i * progressionStep);
  }
  return progression;
};

const playProgression = () => {
  const startNum = getRandomArbitrary(1, 100);
  const progressionStep = getRandomArbitrary(1, 20);
  const progressionLength = getRandomArbitrary(5, 10);

  const progression = getProgression(startNum, progressionStep, progressionLength);
  const answerIndex = getRandomArbitrary(1, (progression.length - 1));
  const questionRigth = String(progression[answerIndex]);
  progression[answerIndex] = '..';
  const question = progression.join(' ');
  return { question, questionRigth };
};
const startProgression = () => { mainEngine(playProgression, description); };
export default startProgression;
