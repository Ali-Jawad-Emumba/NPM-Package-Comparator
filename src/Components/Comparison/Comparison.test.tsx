import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import Comparison from "./Comparison";
import { Provider } from "react-redux";
import { mockStore } from "../../utils/__tests__/mocks/mockData";

it("shall render Card and Table", () => {
  render(
    <Provider store={mockStore}>
      <Comparison />
    </Provider>
  );
  expect(screen.getByText("Comparison")).toBeInTheDocument();
  expect(screen.getByText("Package Name")).toBeInTheDocument();
});
