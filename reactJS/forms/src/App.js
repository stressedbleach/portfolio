import './App.css';
import { useState } from 'react';

function MyForm(){
  const[inputs, setInputs] = useState("")


  const submitForm=function(event){
    event.preventDefault();
    alert(`Welcome to React forms ${inputs.username}. \nYour lucky number is ${inputs.lucky}. \nYour gender: ${myGender} \nComments: ${textcomments}`)
  }

  const handleChanges = function(event){
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]:value}))
  }



  //gender value
  const [myGender,gender]=useState("female")
  const selectedgender=(event)=>{
    gender(event.target.value)
  }

  const [textcomments, setComments]=useState("")
  const submitcomments = (event)=>{
    setComments(event.target.value)
  }


  return(
    <div>
      <h1>Forms in React by Simridhi Sharma</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Forms in React</legend>
          <label for="name"> Enter your name: </label>
          <input type='text' id='name' name="username" value={inputs.username} onChange={handleChanges} placeholder='type name...'/>
          <label for="luckynum">Enter your lucky number: </label>
          <input type='number' name='lucky' value={inputs.lucky} onChange={handleChanges} placeholder='type lucky number...'/>
          

          {/* gender form */}
          <label for='gender'>Gender: </label>
          <select value={myGender} onChange={selectedgender}>
            <option value='Female'>Female</option>
            <option value='Male'>Male</option>
            <option value='Non-binary'>Non-binary</option>
            <option value='other'>Other</option>
          </select>



          <textarea value={textcomments} onChange={submitcomments} placeholder='type comment'/>
          {/* submit form */}
          <div>
            <input type='submit'/>
          </div>
        </fieldset>
      </form>







      </div>
  )
}

export default MyForm;
