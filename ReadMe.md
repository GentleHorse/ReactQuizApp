# React Quiz

## Managing questions with the answer state

```

userAnswers = ['A', 'B'] 
---> 2 answers given (= 2 questions answered)
---> the next question shown should be the third question
---> the index of that next question would be 2 (because indexes start at 0)

```

## Shuffle answers

```

const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
shuffledAnswers.sort(() => Math.random() - 0.5);

```

## Tell wheather the quiz is finished or not

```
const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

```