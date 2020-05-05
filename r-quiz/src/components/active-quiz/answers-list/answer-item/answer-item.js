import React from 'react';

import './answer-item.css'

const AnswerItem = ({answer}) => {
    const { text } = answer
    return (
        <li className="AnswerItem">
            {text}
        </li>
    )
}

export default AnswerItem;