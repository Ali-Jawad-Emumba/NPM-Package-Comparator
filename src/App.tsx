import { useSelector } from "react-redux";
import "./App.css";
import Comparison from "./Components/Comparison/Comparison";
import Downloads from "./Components/Downloads/Downloads";
import NavBar from "./Components/NavBar/NavBar";
import Recommendation from "./Components/Recommendation/Recommendation";
import SearchBox from "./Components/SearchBox/SearchBox";
import { State } from "./state/slice";

function App() {
  const selectedPackagesData = useSelector((state: State) => [
    state.firstPackageData,
    state.secondPackageData,
  ]);
  return (
    <>
      <NavBar />
      <div className="page-body">
        <div className="body-container">
          <SearchBox />
          {selectedPackagesData.every((data) => data) && (
            <>
              <Comparison />
              <Downloads />
              <Recommendation />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
