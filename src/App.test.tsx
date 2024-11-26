import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { it, expect } from "vitest";
import NavBar from "./components/navbar/NavBar";
import SearchBox from "./components/searchbox/SearchBox";
import Comparison from "./components/comparison/Comparison";
import { Card } from "antd";
import Recommendation from "./components/recommendation/Recommendation";
import { Provider, useSelector } from "react-redux";
import store from "./state/store";
import { State } from "./utils/types";

const AppTestComponent: React.FC = () => {
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
