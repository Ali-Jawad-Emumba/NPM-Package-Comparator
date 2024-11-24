import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { it, expect } from "vitest";
import NavBar from "./Components/NavBar/NavBar";
import SearchBox from "./Components/SearchBox/SearchBox";
import Comparison from "./Components/Comparison/Comparison";
import { Card } from "antd";
import { State } from "./state/slice";
import Recommendation from "./Components/Recommendation/Recommendation";
import { Provider, useSelector } from "react-redux";
import store from "./state/store";

const AppTestComponent:React.FC = () => {
  const selectedPackagesData = useSelector((state: State) => [
    state.firstPackageData,
    state.secondPackageData,
  ]);
  return (
    <>
      <NavBar data-testis="nav-bar" />
      <div className="page-body">
        <div className="body-container">
          <SearchBox dtat-testid="search-box" />
          {selectedPackagesData.every((data) => data) && (
            <>
              <Comparison data-testid="details" />
              <Card
                data-testid="details"
                title="Downloads"
                bordered={false}
                className="card"
              ></Card>
              <Recommendation data-testid="details" />
            </>
          )}
        </div>
      </div>
    </>
  );
};
it("shall render app and work properly", async () => {
  render(
    <Provider store={store}>
      <AppTestComponent />
    </Provider>
  );
  expect(screen.getByRole("button")).toBeDisabled();
  fireEvent.change(screen.getByText("Select two packages to compare"));
  await waitFor(() => {
    expect(screen.getByText("Compare")).toBeEnabled();
    fireEvent.click(screen.getByText("Compare"));
    waitFor(() => expect(screen.getAllByTestId("details")).toBeInTheDocument());
  });
});
