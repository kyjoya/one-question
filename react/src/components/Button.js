import React from "react"

const Button = (props) => {
  return(
    <div className="center" onClick={(e) => props.handleClick(e)}>
      <input className={`oq-button-primary ${props.buttonStatus}`} type="submit" value="?"/>
    </div>
  )
}

export default Button;
