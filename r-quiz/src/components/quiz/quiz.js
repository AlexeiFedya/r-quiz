import React from 'react';
import { connect } from 'react-redux'

import ActiveQuiz from '../active-quiz/Active-quiz'
import withQuizService from '../hoc/with-quis-service'

import {quizLoaded} from '../../actions/action'

import './quiz.css'

class  QuizList extends React.Component  {
    render () {
        const answers = [
            {text: "вопрос 1"},
            {text: "вопрос 2"},
            {text: "вопрос 3"},
            {text: "вопрос 4"}
        ]
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1>Quiz</h1>
    
                    <ActiveQuiz answers={answers}/>
                </div>
            </div>
        )
    }
}

export default QuizList;