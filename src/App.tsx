const classicMovies = [
  "The Godfather",
  "The Shawshank Redemption",
  "Inception",
  "Pulp Fiction",
  "The Dark Knight"
];

function Header({ data, number }: { data: string; number: number }) {
  return (
    <h1>
      {data} {number}{" "}
    </h1>
  ); // data is a variable, we will curl
}

function App() {
  return (
    <>
      {classicMovies.map((movie, idx) => {
        return <Header data={movie} number={idx} />;
      })}

      {/* <Header data="Heading 1" number={12} />
      <Header data="Heading 2" number={23} />
      <Header data="Heading 3" number={99} /> */}
      <h1>this is a functional component (Parent)</h1>
    </>
  );
}

export default App;
