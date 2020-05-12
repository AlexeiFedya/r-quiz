import React from 'react';
import { connect } from 'react-redux'

import ActiveQuiz from '../active-quiz/Active-quiz'
import withQuizService from '../hoc/with-quis-service'

import {quizLoaded} from '../../actions/action'

import './quiz.css'

class  QuizList extends React.Component  {

    componentDidMount () {
        const {quizstoreService} = this.props
        const data = quizstoreService.getQuiz()

        this.props.quizLoaded(data)
    
    }

    render () {

        const {quiz} = this.props

        // const answers = [
        //     {text: "вопрос 5"},
        //     {text: "вопрос 2"},
        //     {text: "вопрос 3"},
        //     {text: "вопрос 4"}
        // ]
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1>Quiz</h1>
    
                    <ActiveQuiz answers={quiz}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({quiz}) => {
    return {quiz}
}

const mapDispatchToProps = {
    quizLoaded
}

export default withQuizService()(
    connect(mapStateToProps, mapDispatchToProps)(QuizList));