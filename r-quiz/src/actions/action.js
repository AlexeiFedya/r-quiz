const quizLoaded = (newQuiz) => {
    return {
      type: 'QUIZ_LOADED',
      payload: newQuiz
    };
  };
  
  export {
    quizLoaded
  };