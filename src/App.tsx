function Header({data}) {
  return (<h1>{data}</h1>); // data is a variable, we will curl 
}

function App() {
  
  return (
    <>
      <Header data="Heading 1" />
      <Header data="Heading 2" />
      <Header data="Heading 3" />
      <h1>this is a functional component (Parent)</h1>
    </>
  );
}

export default App;
