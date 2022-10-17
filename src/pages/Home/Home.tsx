import React, { useEffect, useRef, useState } from 'react'
import UseTitle from '../../componentes/UseTitle';
import { MyList } from './componente/MyList';
import { MyTable } from './componente/MyTable';

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

  UseTitle('You clicked ${count} times')
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
    <MyList/>
    <MyTable/>
    </div>
    
    )
}

export default Home