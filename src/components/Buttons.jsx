import React from 'react';
import './Buttons.css';

const STYLE = [
  "btn--primary--solid",
  "btn--secondary--solid",
  "btn--primary--outline",
  "btn--secondary--outline"
]

const SIZE = [
  "btn--med",
  "btn--lg"
]

export const Buttons = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

  const checkButtonStyle = STYLE.includes(buttonStyle)
  ? buttonStyle
  : STYLE[0];

  const checkButtonSize = SIZE.includes(buttonSize)
  ? buttonSize
  : SIZE[0]

  return (
    <button 
    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    onClick={onClick} 
    type={type}> 
      {children}
    </button>
  )
}

