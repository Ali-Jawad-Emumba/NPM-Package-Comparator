import "./App.css";
import Comparison from "./Components/Comparison/Comparison";
import Downloads from "./Components/Downloads/Downloads";
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
        <Downloads/>
        </div>
      </div>
    </>
  );
}

export default App;
