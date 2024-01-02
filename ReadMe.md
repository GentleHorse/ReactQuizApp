# React Quiz

## Logic of managing questions with the answer state

```

userAnswers = ['A', 'B'] 
---> 2 answers given (= 2 questions answered)
---> the next question shown should be the third question
---> the index of that next question would be 2 (because indexes start at 0)

```

## Move to the next question through variable

```
const activeQuestionIndex = userAnswers.length;

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

## Three js

```

"three": "^0.160.0",

"@react-three/drei": "^9.92.7",
"@react-three/fiber": "^8.15.13",

"postprocessing": "^6.34.1",
"@react-three/postprocessing": "^2.15.11",

"leva": "^0.9.35",

"r3f-perf": "^7.1.2",

```

## Sound

```

"use-sound": "^4.0.1",

```

## Performance optimization

```

"million": "^2.6.4",

```

