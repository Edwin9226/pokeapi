import React, { useState } from 'react'

function MyList() {
    const data=[1,2,3,4,5];
    const [text, setText]= useState('');
    // Save input element value to state when it has been changed
    const inputChanged =(event: any) =>{
        alert('You typed: ${text}');
        event.preventDefault();
    }

    const handleSubmit= (event: any)=>{
        alert('You typed: ${text}');
        event.preventDefault();
    }

  return (
    <div>
        <ul>
        {
           data.map(
            (number, index)=><li key={index}>
                ListItem {number}
            </li>
           )
        }
        </ul>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={event => setText(event.target.value)} value={text} />

        <input  type="submit" value="Press me"/>
    </form>    
    </div>
  )
}

export default MyList