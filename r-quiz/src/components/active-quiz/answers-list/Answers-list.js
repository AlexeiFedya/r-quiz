import React from 'react';

import AnswerItem from './answer-item/answer-item'

import './answers-list.css'


const AnswersList = ({answers}) => {


    return (
        <ul className="AnswersList">
            {answers.map((answer, index) => {
                return (
                    <AnswerItem 
                        key={index}
                        answer={answer}/>
                )
            }) }
        </ul>
    )
}

export default AnswersList;