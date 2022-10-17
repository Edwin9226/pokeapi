import React, { useState } from 'react'

const divStyle= {color: 'red' , height:30};
const props =()=>{
  user:String;
  lastname: String;
}


function Home(props:any) {
  const [lastname, setLastname] = useState('Pinchao');
  return (
    <div style={divStyle}>Home Bienvenido {props.user} {lastname}</div>
  )
}

export default Home