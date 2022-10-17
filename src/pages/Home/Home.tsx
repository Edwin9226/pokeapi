import React, { useEffect, useRef, useState } from 'react'

const divStyle= {color: 'red' , height:30};
const props =()=>{
  user:String;
  lastname: String;
}


function Home(props:any) {
  const [lastname, setLastname] = useState('Pinchao');
  const [count, setCount]= useState(0);

  const inputRef = useRef(null);

  useEffect(()=>{
    console.log('Hello from useEffect'+ count);
    return()=>{
      console.log('Clean up function');
    }
  }, [count]);
  
  const onButtonClick=()=>{
    inputRef.current;
  }
  return (
    <div style={divStyle}>Home Bienvenido {props.user} {lastname}
    <p>Counter ={count}</p>
    <button onClick={ () => setCount(count+1)}> 
    Increment
    </button>

    <input ref={inputRef}></input>
    <button onClick={ () => inputRef.current}>
      Focus Input
    </button>
    </div>
    
    )
}

export default Home