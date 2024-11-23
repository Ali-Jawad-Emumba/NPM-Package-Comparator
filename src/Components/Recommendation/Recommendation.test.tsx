import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import Recommendation from "./Recommendation";
import { Provider } from "react-redux";
import { mockStore } from "../../utils";


it("shall render recommendation component", () => {
    
  render(
    <Provider store={mockStore}>
      <Recommendation />
    </Provider>
  );
  expect(screen.getByTestId("recommendation-section")).toBeInTheDocument();
  expect(screen.getByTestId("crown-icon")).toBeInTheDocument();
  expect(screen.getByTestId("package-name")).toBeInTheDocument();
  expect(screen.getByTestId("description")).toBeInTheDocument();
});
