import "./App.css";
import Comparison from "./Components/Comparison/Comparison";
import NavBar from "./Components/NavBar/NavBar";
import SearchBox from "./Components/SearchBox/SearchBox";

function App() {
  return (
    <>
      <NavBar />
      <div className="page-body">
        <div className="body-container">
        <SearchBox />
        <Comparison/>
        </div>
      </div>
    </>
  );
}

export default App;
