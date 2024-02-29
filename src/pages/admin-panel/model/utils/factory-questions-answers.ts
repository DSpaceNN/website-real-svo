import {optionsStorage, questionStorage} from "../../../../shared/model/types/surveys";

const factoryOptionId = createIncrementalNumber();
const factoryQuestionSequence = createIncrementalNumber();

const randOption = (): optionsStorage => ({
  id: factoryOptionId(),
  optionText: '',
  isCorrect: false
});

export const randQuestion = (sequence?: number): questionStorage => ({
  questionText: '',
  questionType: 0,
  options: [
    randOption(),
    randOption(),
    randOption()
  ],
  sequence: sequence ?? factoryQuestionSequence(),
  showAnswers: false
});

function createIncrementalNumber() {
  let number = 0;
  return function(): number {
    number++;
    return number;
  };
}
