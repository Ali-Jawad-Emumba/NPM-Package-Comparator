import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import NavBar from "./NavBar";

it("shall render Navbar", () => {
  render(<NavBar />);
  expect(screen.getByText("NPM Package Comparator")).toBeInTheDocument();
  expect(
    screen.getByText("Compare & Recommend the best NPM package")
  ).toBeInTheDocument();
  expect(screen.getByTestId("home-icon")).toBeInTheDocument();
});
