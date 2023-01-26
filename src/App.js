import './App.css';
import React,{useState} from 'react'
import Todo from "./components/Todo";

function App() {
//create state to track your input and pass an empty string 
  const [input, setInput]= useState("")
  //create state to track the input list and pass an empty array
  const [inputList, setInputList] = useState([])

  //add onSubmit buildin method
  const handleSubmit =(e)=> {
    e.preventDefault();
    //avoid the user from adding empty strings 
    if(input.length===0){
      return false;
    }
    //check box
    const inputItem = {
      isCompelted : false,
      text:input
    }
    //store/add them into array list
    setInputList([...inputList,inputItem ])
    //clearing the input state: and make sure adding a value attribute in the input form to clear the input box aswell.
    setInput("")

  }
  //delete it by index
  const handleDelete=(delIdx)=> {
    const filteredArray=inputList.filter((_input, i)=>{
      return i !==delIdx;
    });
    //update the array 
    setInputList(filteredArray);
  };
  const handleComplete =(idx)=>{
    const updateInputList = inputList.map((input, i)=>{
      if(idx===i){
        input.isCompelted=!input.isCompelted;
      }
      return input
    })
    setInputList(updateInputList);
  }
  return (
    <div className="App">
      <form onSubmit={(e)=>{
        handleSubmit(e);
      }}>
        <input 
        onChange={(e)=>{setInput(e.target.value);
        }}
        type="text" value={input}
        />
        <button>Add</button>
      </form>
      {// Display 
      }
      { 
        inputList.map((input,i)=>{
          return(
            <Todo 
            key ={i} 
            i = {i}
            input = {input}
            handleComplete={handleComplete}
            handleDelete ={handleDelete} 
            />
          );
        })}
    </div>
  );
}

export default App;
