function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [state, setState]       = React.useState('');
  const ctx = React.useContext(UserContext); 
  const subm =  React.useContext(UserSubmissions);

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function validatePassword(field, label){
    if (field.length < 8) {
      setStatus('Password too short... Minimum length 8 characters');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

  function handleCreate(){
    let submitted = `${name} created account`;
    // console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if (!validatePassword(password, 'password')) return;
    ctx.users.push({name,email,password,balance:0});
    ctx.submissions.push(submitted);
    console.log(ctx);
    // subm.push({submissions});
    console.log(subm);
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }


  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light"
               disabled={name === "" && email === "" && password === "" ? true : false}
               onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light d-flex justify-content-between" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}