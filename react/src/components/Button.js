import React from "react"

const Button = (props) => {
  return(
    <div onClick={(e) => props.handleClick(e)}>
      <input className="button-primary" type="submit" value="random question"/>
    </div>
  )
}

export default Button;
