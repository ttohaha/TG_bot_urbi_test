import React from 'react'

import './Button'

function Button(props) {
  return (
    <button {...props} className={'button' + props.className}/>
  )
}

export default Button