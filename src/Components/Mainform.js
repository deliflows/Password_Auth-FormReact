import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function Mainform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [email, setEmail] = useState("");

  function onUsernameChange(event) {
    setUsername(event.target.value);
  }
  function onPasswordChange(event) {
    setPassword(event.target.value);
  }
  function onCheckPasswordChange(event) {
    setCheckPassword(event.target.value);
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();
  }
  function clearInputs() {
    setUsername("");
    setPassword("");
    setCheckPassword("");
    setEmail("");
  }

  // --------------------------------------------------------------USERNAME-------------

  let UsernameInfo;
  if (username.length > 0 && username.length < 8) {
    UsernameInfo = <p>Please enter more than 8 characters</p>;
  }
  // --------------------------------------------------------------PASSWORD------------
  //ABC
  // minimum maxlenght
  let PasswordInfo;
  let PasswordColor = "primary";
  // let OtherPasswordInfo;
  if (password.length > 0) {
    let theWarnings = [];
    let theError = false;
    if (password.length < 12) {
      theWarnings.push(["Please enter more than 12 characters", 0]);
      theError = true;
    }
    if (password === password.toLowerCase()) {
      theWarnings.push(["Please enter an upper case letter.", 1]);
      theError = true;
    }
    if (password === password.toUpperCase()) {
      theWarnings.push(["Please enter a lower case letter.", 2]);
      theError = true;
    }
    if (!/\d/.test(password)) {
      theWarnings.push(["Please enter a number.", 3]);
    }
    PasswordInfo = theWarnings.map(function (theError) {
      return <li key={theError[1]}>{theError[0]}</li>;
    });
    // If statements only go into it
    if (theError) {
      PasswordColor = "error";
    } else if (password.length > 0) {
      PasswordColor = "success";
    }
  }
  // if(password.length > 0 && password.toUpperCase() == password){
  //     PasswordInfo = (
  //                 <li>Please enter a lower case letter.</li>
  //     )
  // }
  // if(password.length > 0 && password.toLowerCase() == password){
  //     OtherPasswordInfo = (<li>Please enter an upper case letter.</li>)
  // }
  // if(password.length > 0 && password.includes)

  // --------------------------------------------------------------------CHECK PASSWORD-------
  let CheckPasswordInfo;
  if (password != checkPassword) {
    CheckPasswordInfo = <li>Enter the same password</li>;
    PasswordColor = "error";
  } else {
    PasswordColor = "success";
  }
  // ---------------------------------------------------------------------EMAIL------------
  let EmailInfo;
  if (email > 0 && email < 8) {
    EmailInfo = <p>Please enter a valid email</p>;
  }

  return (
    <form onSubmit={onFormSubmit}>
      <TextField
        onChange={onUsernameChange}
        value={username}
        id="outlined-basic"
        label="Username"
        variant="outlined"
      />
      <ul>{UsernameInfo}</ul>

      <TextField
        onChange={onPasswordChange}
        value={password}
        id="outlined-password-input"
        label="Password"
        type="password"
        color={PasswordColor}
      />
      <ul>
        {PasswordInfo}
        {/* {OtherPasswordInfo} */}
      </ul>

      <TextField
        onChange={onCheckPasswordChange}
        value={checkPassword}
        id="outlined-password-input"
        label="Password"
        type="password"
        color={PasswordColor}
      />
      <ul>{CheckPasswordInfo}</ul>

      <TextField
        onChange={onEmailChange}
        value={email}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <ul>{EmailInfo}</ul>

      <Button variant="contained">Submit</Button>
      {/* Must tell material UI button to submit, but tell normal button that it should not submit */}
      <Button variant="contained" onClick={clearInputs}>
        Clear
      </Button>
    </form>
  );
}

export default Mainform;
