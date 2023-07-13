import React from 'react'

const Button = ({text, onClick, className}) => {
  return (
    <button
        className={`bg-[#f55d42] hover:bg-[#da4c33] transform duration-300 font-medium py-2 px-6 rounded-3xl ${className}`}
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button;