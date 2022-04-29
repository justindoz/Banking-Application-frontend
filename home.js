function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Homepage"
      title="Welcome to the bad bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
