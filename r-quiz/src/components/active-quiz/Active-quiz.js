import React from 'react';

import AnswersList from './answers-list/Answers-list'

import './Active-quiz.css'

const ActiveQuiz = ({answers}) => {
    return (
        <div className='ActiveQuiz'>
            <p className='Question'>
                <span>
                    <strong>
                        2.
                    </strong>&nbsp;
                    как дела?
                </span>
                <small>4 из 12</small> 
            </p>
            <AnswersList answers={answers}/>
        </div>
    )
}

export default ActiveQuiz