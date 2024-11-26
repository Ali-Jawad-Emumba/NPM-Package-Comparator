import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { it, expect } from "vitest";
import SearchBox from "./SearchBox";
import { Provider } from "react-redux";
import { mockStore } from "../../utils/__tests__/mocks/mockData";

const description =
  "shall render TreeSelect component and Compare Btn and disable/enable based on selectedVals, as well as change the compare btn icon on click";
it(description, async () => {
  render(
    <Provider store={mockStore}>
      <SearchBox />
    </Provider>
  );
  expect(
    screen.getByText("Select two packages to compare")
  ).toBeInTheDocument();
  expect(screen.getByText("Compare")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeDisabled();
  expect(screen.getByRole("button")).toContainHTML("search"); // Confirm initial icon (SearchOutlined)
  fireEvent.change(screen.getByText("Select two packages to compare"));

  await waitFor(() => {
    expect(screen.getByText("Compare")).toBeEnabled();
    fireEvent.click(screen.getByRole("button"));
    waitFor(() => {
      expect(screen.getByRole("button")).toContainHTML("loading"); // Confirm updated icon (LoadingOutlined)
    });
  });

  expect(screen.getByText("Compare")).toBeInTheDocument();
});
