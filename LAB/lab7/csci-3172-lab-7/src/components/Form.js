import { useRef, useState } from 'react';
  

const Form = () =>  {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const emailInput = useRef(null);
  const seasonInput = useRef(null);
  const passwordInput = useRef(null);

  const [fn, firstN] = useState('');
  const [ln, lastN] = useState('');
  const [email, emailIn] = useState('');
  const [season, seasonPick] = useState('');
  const [password, passwordPick] = useState('');


  const handleClick = () => {
    firstN(firstName.current.value);
    lastN(lastName.current.value);
    emailIn(emailInput.current.value);
    seasonPick(seasonInput.current.value);
    passwordPick(passwordInput.current.value);

  };

  return (
    <>
    <div>
        <style>
            {`
            .Style-Me {
                color: Blue; 
                font-family: Helvetica;
                font-size: 30px;
                padding: 20px;
            }

            #fn{
                padding:15px 30px;
            }
            #ln{
                padding:15px 30px;
            }
            #email{
                padding:15px 30px;
            }
            #password{
                padding:15px 30px;
            }
            #season{
                padding:15px 30px;
            }
            `}
        </style>
      <form className='Style-Me' onSubmit={handleClick}>
        <label className='fn'>First Name: </label>
      <input ref={firstName} type="text" id="fn" name="firstName"/>
      <br></br>
      <br></br>
      <label>Last Name: </label>
      <input ref={lastName} type="text" id="ln" name="lastName"/>
      <br></br>
      <br></br>
      <label>Email Address: </label>
      <input ref={emailInput} type="email" id="email" name="emailIn" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
      <br></br>
      <br></br>
      <label>Password: </label>
      <input ref={passwordInput} type="password" id="password" name="passwordIn" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
      <br></br>
      <br></br>

      <label style={{padding:"10px 10px 10px 10px"}}>What's your favourite season?</label>
      <br></br>
      <br></br>
        <select ref={seasonInput} id="season">
            <option selected value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
        </select>
      <br></br>
      <br></br>
      <button style={{color:"white", padding:"15px 100px", backgroundColor:"green"}} type="submit" onClick={handleClick}>Get Results</button>
      </form>
      
      <h2 style={{padding:"20px"}}>PROFILE INFO </h2>
      <div style={{padding:"20px"}}>
      <h3>First Name: {fn}</h3>
      <h3>Last Name: {ln}</h3>
      <h3>Email: {email}</h3>
      <h3>Season Pick: {season}</h3>
      <h2 style={{color:"white"}}>Pass {password}</h2>
      </div>
    </div>
    
    </>
  );
}

export default Form;

