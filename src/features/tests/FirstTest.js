class Test {
  constructor({ questions } = { questions: [] }) {
    this.questions = questions
    this.answers = []
    this.correctAnswers = []
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
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const correctOptionIndex = currentQuestion.options.findIndex(option => option.value === 1);
    if (optionId === correctOptionIndex) {
      this.correctAnswers.push(this.currentQuestionIndex);
    }

    this.answers.push({ value, id, optionId });
  }

  getResult() {
    return this.answers.reduce((sum, { value }) => sum + value, 0);
  }

  getCorrectAnswersCount() {
    return this.correctAnswers.length;
  }
}

const question = {
  id: 1,
  text: "What is 3 + 2?",
  options: [{ id: 0, label: "3", value: 0 }, { id: 1, label: "5", value: 1 }],
}

const question2 = {
  id: 2,
  text: "What is 5 + 5?",
  options: [{ id: 0, label: "6", value: 0 }, { id: 1, label: "10", value: 1 }],
}

const question3 = {
  id: 3,
  text: "What is 6 + 6?",
  options: [{ id: 0, label: "3", value: 0 }, { id: 1, label: "12", value: 1 }],
}

const questions = [question, question2, question3]

// Пример использования класса Test
export const test = new Test({ questions });

// export default new Test();

// Получение следующего вопроса
// console.log(test.nextQuestion());

// Ответ на второй вопрос
// test.answerQuestion({ value: 0, id: 1, optionId: 0 });

// Получение результатов
// console.log(test.getResult(), test);
