export class Test {
  constructor({ questions } = { questions: [] }) {
    this.questions = questions
    this.answers = []
    this.currentQuestionIndex = 0
  }

  nextQuestion() {
    const questionObj = this.questions[this.currentQuestionIndex];
    if (questionObj) {
      const { text, options, id } = questionObj;
      this.currentQuestionIndex++;
      return { text, options, id };
    } else {
      return "No more questions!";
    }
  }

  answerQuestion({ value, id, optionId }) {
    this.answers.push({ value, id, optionId });
  }

  getResult() {
    return this.answers.reduce((sum, { value }) => sum + value, 0);
  }
}

const question = {
  id: 1,
  text: "What is 3 + 2?",
  options: [{ id: 0, label: "3", value: 0 }, { id: 1, label: "5", value: 1 }],
}

const questions = [question]

// Пример использования класса Test
const test = new Test({ questions });

// Получение следующего вопроса
console.log(test.nextQuestion());

// Ответ на второй вопрос
test.answerQuestion({ value: 0, id: 1, optionId: 0 });

// Получение результатов
console.log(test.getResult(), test);
