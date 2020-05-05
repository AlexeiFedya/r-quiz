import React from 'react';
import {QuizServiceConsumer} from '../quiz-service-context/quiz-service-context'

const withQuizService = (Wrapped) => {
    return (props) => {
        return (
            <QuizServiceConsumer>
                {
                    (quizstoreService)=>{
                        return(
                            <Wrapped {...props}
                            quizstoreService={quizstoreService}/>
                        )
                    }
                }
            </QuizServiceConsumer>
        )
    }
}

export default withQuizService