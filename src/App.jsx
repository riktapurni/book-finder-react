import BookContainer from "./components/Books/BookContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <BookContainer />
      </main>
    </>
  );
}

export default App;
