import React from "react"

const QuestionTile = (props) => {
  return(
    <div className="oq-tile ${props.hide}">
      <h1>{props.question}</h1>
    </div>
  )
}

export default QuestionTile;
