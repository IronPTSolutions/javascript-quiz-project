class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  // choices: ['a', 'b', 'c', 'd']
  shuffleChoices() {
    this.choices.sort((a, b) => {
      if (Math.random() > 0.5) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
