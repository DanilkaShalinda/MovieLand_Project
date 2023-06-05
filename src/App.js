
import './App.css';
import {useState} from "react";

const Person =(props)=>{
    return (
      <>
          <h1>First Name : {props.fname}</h1>
          <h2>Last Name : {props.lname}</h2>
          <h2>Age : {props.age}</h2>
      </>
    );
}


const App = () => {
    const [counter , setcounter] =useState(0);
    const [Colour ,setColour] = useState('');


  return (
      <di className='App'>

          <h1>
            <Person
                fname={'john'}
                lname={'cina'}
                age={36}
            />


          <di>
              <h1>Counter</h1>
              <button onClick={()=>{setcounter((prevCount)=>prevCount + 5)}}>+</button>
              <h1>{counter}</h1>
              <button onClick={() => { setcounter((prevCount) => prevCount -5)}}>-</button>
          </di>
          <di>
              <h1>My Favorite colour Is {Colour}</h1>
              <button onClick={()=>setColour('Green')}>Green</button>
              <button onClick={()=>setColour('Blue')}>Blue</button>
              <button onClick={()=>setColour('Red')}>Red</button>
              <button onClick={()=>setColour('Pink')}>Pink</button>

          </di>
          </h1>
      </di>

  );
}

export default App ;
