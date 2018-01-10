import React, { Component } from "react"
import QuestionTile from '../components/QuestionTile'
import Button from '../components/Button'

class QuestionIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: "",
      hide: true
    }

    this.handleRandomRequest = this.handleRandomRequest.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  getQuestions() {
    fetch('/api/v1/random-question')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusTest})}`,
            error = new Error(errorMessage);
        throw(error)
      }
    })
    .then(response => response.json())
    .then(responseBody => {
      this.setState({
        question: responseBody.random_question.question,
        hide: false
      })
    })
    .catch(error => console.log(`Error in fetch: ${error.message}`))
  }

  handleRandomRequest(event) {
    event.preventDefault();
    this.getQuestions();
  }

  render() {
    return(
      <div>
        <div className="oq-button-container">
          <Button handleClick={this.handleRandomRequest} />
        </div>

        <div className="oq-tile-container">
          <QuestionTile
            toggle={this.state.hide}
            question={this.state.question}
          />
        </div>
      </div>
    )
  }
}

export default QuestionIndex;
