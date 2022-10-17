import React, { useEffect } from 'react'

function UseTitle(title:any) {
    useEffect(()=>{
        document.title=title
    },[title])
  return ( 
    <div></div>
  )
}

export default UseTitle