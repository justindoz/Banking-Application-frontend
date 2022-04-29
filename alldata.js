function AllData(){
  const ctx = React.useContext(UserContext);
  const subm =  React.useContext(UserSubmissions);
  return (
    <>
    <h5>Bank Customers</h5>

    {ctx.users.map((item, index) => {
      return (
        <ul key={"110"+index}>
        <li key={"1"+index} className="list-group-item active">   {`Name: ${ctx.users[index].name}`} </li>
        <li key={"2"+index} className="list-group-item">     {`Email: ${ctx.users[index].email}`} </li>
        <li key={"3"+index} className="list-group-item">     {`Password: ${ctx.users[index].password}`} </li>
        <li key={"4"+index} className="list-group-item">     {`Balance: ${ctx.users[index].balance}`} </li>
        </ul> 

      )
    })}

<h5>New users to Bad Bank</h5>


    {ctx.submissions.map((item, index) => {
      return (
        <ul key={"25"+index}>
         <li key={"10"+index} className="list-group-item">     {`Action: ${ctx.submissions[index]}`} </li>

        </ul> 

      )
    })}

    </>
  );
}
