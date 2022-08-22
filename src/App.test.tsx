import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App.tsx", () => {
  test("renders  hager-web ", () => {
    render(<App />);
    const linkElement = screen.getByText(/hager-web/i);
    expect(linkElement).toBeInTheDocument();
  });
});
