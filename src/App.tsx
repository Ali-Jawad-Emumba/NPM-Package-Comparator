import { useSelector } from "react-redux";
import "./App.css";
import { State } from "./utils/types";
import Downloads from "./components/downloads/Downloads";
import NavBar from "./components/navbar/NavBar";
import SearchBox from "./components/searchbox/SearchBox";
import Comparison from "./components/comparison/Comparison";
import Recommendation from "./components/recommendation/Recommendation";

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
