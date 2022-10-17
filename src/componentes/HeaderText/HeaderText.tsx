import React, {memo} from 'react'

function HeaderText(props:any) {
  return (
    <h1>
        {props.text}
    </h1>
  )
}

export default memo(HeaderText);