
interface User {
  id: number;
  name: string;
  email: string
}

function App() {
  const user: User | null = {id: 1, name: "Rahul", email:"rahul@gmail.com"}
  // const user: User | null = null;  
  
  if (user == null) {
    return <h1>Please login to continue</h1>
  }

  return (
    <>
    <h1>Hi {user.name}!</h1>
    <h2>{user.id === 1 ? "You are the 1st user!" : ""}</h2>
    </>
  );
}

export default App;
