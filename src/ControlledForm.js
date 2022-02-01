


import React, {useState} from "react";

  function ControlledForm() {
      
    
    const [inputField , setInputField]=useState({

      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      courses: '',
    })

    const[error, setErrorMessage] = useState({
      firstName: '',
      lastName: '',
      email: '',
    })
    const handleSubmit= (e) => {
     
      e.preventDefault();
      console.log(inputField)
    }
    
    const inputsHandler = (e)=>{
      if (e.target.value === '') {
        setErrorMessage({...error,[e.target.name] : `${e.target.name} is required`})
        //errors.firstName = 'FirstName is required'
      } else {
        setErrorMessage({...error,[e.target.name] : ''});
      }
    setInputField({ ...inputField, [e.target.name]: e.target.value });
    }
      
    
  
    return (
      <form >
          <h2>Controlled Forms</h2>
        <label>First Name:</label>
        <br />
        <input 
          name='firstName' 
          type='text'
          onChange={inputsHandler}
          value={inputField.firstName}
        />
        <span style={{color:'red'}}>
          {' '}
          {error.firstName}{' '}
        </span>
        <br/>
        <label>Last Name:</label>
        <br />
        <input 
          name='lastName' 
          type='text' 
          onChange={inputsHandler}
          value={inputField.lastName}
          
        />
        <span style={{color:'red'}}>
          {' '}
          {error.lastName}{' '}
        </span>
        <br />
        <label>Email:</label>
        <br />
        <input
          name='email' 
          type='email'
          onChange={inputsHandler}
          value={inputField.email}
        />
         <span style={{color:'red'}}>
          {' '}
          {error.email}{' '}
        </span>
        <br />
        <br />
            <label> Gender : </label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={inputsHandler}
              
            />
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={inputsHandler}

    
            />
            Female
            <br />
            <br />
        
            <label> Courses : </label>
            <select
              name="courses"
              value={inputField.courses}
              onChange={inputsHandler}
            >
              <option> Angular </option>
              <option> React </option>
              <option> Node </option>
              <option> Mongo </option>
            </select>
         
          <br />
          <br />

        <button onClick={handleSubmit}>Submit</button> &nbsp;
          <button type="button"> Reset </button> &nbsp;
          
      </form>
    )
  }

  export default ControlledForm;



