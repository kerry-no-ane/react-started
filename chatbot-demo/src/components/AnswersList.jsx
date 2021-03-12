import React from 'react'
import {Answer} from './index'
import classNames from 'classnames'

const AnswersList = (props) => {
  const answerListClass = classNames('c-grid__answer', {
    'is_wait' : props.isWait
  })
  return(
    <div className={answerListClass}>
      {
        props.answers.map((value,index) => {
          return <Answer content={value.content} key={index.toString()} select={props.select} nextId={value.nextId} />
        })
      }
    </div>
  )
}

export default AnswersList