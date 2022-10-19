import React, { useState } from 'react'

function MyForm() {
    
    const [user, setUser]= useState({
        firstName:'',
        lastName:'',
        email:''
    });

    //Save input box value to state when it has been changed
    const inputChanged=(event:any)=>{
        setUser({...user, [event.target.name]:
        event.target.value});
    }
    // this is called when the form is submitted
    const handleSubmit= (event: any)=>{
        alert(`Hello ${user.firstName} ${user.lastName} ${user.email}`);
        event.preventDefault();// Prevents default behavior
       
    }

  return (
    <form onSubmit={handleSubmit}>
        <label> First Name</label>
        <input type="text" name="firstName" onChange={inputChanged}
        value={user.firstName}/><br/>
        <label> Last Name</label>
        <input type="text" name="lastName" onChange={inputChanged}
        value={user.lastName}/><br/>
        <label> Email</label>
        <input type="email" name="email" onChange={inputChanged}
        value={user.email}/><br/>

        <input type="submit" value="Press me"/>
    </form>
  )
}

export default MyForm