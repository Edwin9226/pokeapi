import React from 'react'

function MyForm() {
    // this is called when the form is submitted
    const handleSubmit= (event: any)=>{
        event.preventDefault();// Prevents default behavior
        alert('Form submit');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="submit" value="Submit"/>
    </form>
  )
}

export default MyForm