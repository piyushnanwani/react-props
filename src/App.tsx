function BadList() {
  const items = ['Apple', 'Banana', 'Mango'];

  return (
    <ul>
      {items.map((fruit, index) => {
        return (
          <li>{fruit} </li>
        )
      })}
    </ul>
  )
}

function BadList2() {
  const items = ["Apple", "Banana", "Mango"];

  return (
    <ul>
      {items.map((fruit, index) => {
        return <li key={index} >{fruit} </li>;
      })}
    </ul>
  );
}

function GoodList() {
  const items = [{ name: "Apple", id: 1}, {name: "Banana", id: 4}, {name: "Mango", id: 10}];

  return (
    <ul>
      {items.map((fruit, index) => {
        return <li key={fruit.id}>{fruit.name} </li>;
      })}
    </ul>
  );
}



function App() {
  return (
    <>
      <BadList />
      <BadList2 />
      <GoodList />
    </>
  );
}

export default App;
