import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SearchBox from "./Components/SearchBox/SearchBox";

function App() {
  return (
    <>
      <NavBar />
      <div className="page-body">
        <SearchBox />
      </div>
    </>
  );
}

export default App;
