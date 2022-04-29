

function Withdraw(){
  const [show, setShow] =         React.useState(true);
  const [withdraw, setWithdraw] =   React.useState('');
  const [status, setStatus]     = React.useState('');

  const ctx = React.useContext(UserContext);
  let lastUser = ctx.users.length -1;
  let balance = parseInt(ctx.users[lastUser].balance);

  function validate(field, label){
    if (isNaN(withdraw)) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

function overdraft(field, label){
  if (parseInt(withdraw) >  balance) {
    setStatus('Error: ' + label);
    setTimeout(() => setStatus(''),3000);
    return false;
  }  if (withdraw < 0) {
    setStatus('Error: negative number');
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  return true;
}

  function handleWithdraw () {
    let newBalance = balance - parseInt(withdraw);
    if (!validate(withdraw,     'Type a number please'))     return;
    if (!overdraft(withdraw,     "You don't have that much money. Try a lower number"))     return;
    let submittedWithdraw = `${ctx.users[lastUser].name} withdrawed: ${withdraw}`
    console.log(ctx)
    console.log(withdraw);
    console.log(show);
    console.log(withdraw);
    setShow(false)
    console.log(newBalance);
    
    console.log(ctx)

    return ( ctx.users[lastUser].balance = newBalance, ctx.submissions.push(submittedWithdraw)
    )
  }


  function clearForm(){
    setWithdraw(0);
    setShow(true);
    console.log(ctx)
  }




  return (
    <Card
    bgcolor="primary"
    header="Withdraw Money"
    status={status}
    body= {show ? (
      <>
      <h6>Account Balance = $ {ctx.users[lastUser].balance}</h6><br/>
      <input type="input" className="form-control" id="withdraw" placeholder="Enter amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /> <br/>
      
      <button type="submit" className="btn btn-light" disabled={withdraw === 0 || withdraw === ''? true : false} onClick={handleWithdraw}>Withdraw Amount</button> <br/>
      </> ) : (<> 
      <h6>New Balance = $ {balance}</h6> <br/>
      <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdraw</button> <br/>
      
       </> )

      
    }

    />
    
  )
}
