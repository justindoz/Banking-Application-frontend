

function Deposit(){
  const [show, setShow] =         React.useState(true);
  const [deposit, setDeposit] =   React.useState('');
  const [status, setStatus]     = React.useState('');

  const ctx = React.useContext(UserContext);
  const subm =  React.useContext(UserSubmissions);

  let lastUser = ctx.users.length -1;
  let balance = parseInt(ctx.users[lastUser].balance);

  function validate(field, label){
    if (isNaN(deposit)) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }     if (deposit < 0) {
      setStatus('Error: negative number');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

  function handleDeposit () {
    if (!validate(deposit,     'Type a number please'))     return;
    let newBalance = balance + parseInt(deposit);
    let submittedDeposit = `${ctx.users[lastUser].name} deposited: ${deposit}`

    setShow(false)
    console.log(newBalance);
    
    console.log(ctx)

    return ( ctx.users[lastUser].balance = newBalance, ctx.submissions.push(submittedDeposit)
    )
  }


  function clearForm(){
    setDeposit(0);
    setShow(true);
    console.log(ctx)
  }




  return (
    <Card
    bgcolor="primary"
    header="Deposit Money"
    status={status}
    body= {show ? (
      <>
      <h6>Account Balance = $ {ctx.users[lastUser].balance}</h6><br/>
      <input type="input" className="form-control" id="deposit" placeholder="Enter amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /> <br/>
      
      <button type="submit" className="btn btn-light" disabled={deposit === 0 || deposit === ''? true : false} onClick={handleDeposit}>Deposit Amount</button> <br/>
      </> ) : (<> 
      <h6>New Balance = $ {balance}</h6> <br/>
      <button type="submit" className="btn btn-light"  onClick={clearForm}>Make another deposit</button> <br/>
      
       </> )

   
    
      
    }

    />
    
  )
}
