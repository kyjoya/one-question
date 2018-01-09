import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/questions')
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
        questions: responseBody.questions
      })
    })
    .catch(error => console.log(`Error in fetch: ${error.message}`))
  }


  render() {
    let questionsIndex = this.state.questions.map(item => {
      return(
        <h1>{item.question}</h1>
      )
    })

    return(
      <div>
        {questionsIndex}
      </div>
    )
  }
}

export default App;
