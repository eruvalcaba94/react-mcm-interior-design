import React from 'react'

const Button = ({text, onClick, className}) => {
  return (
    <button
        className={`transform duration-300 font-medium py-2 px-6 rounded-3xl ${className}`}
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button;