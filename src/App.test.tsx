import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("render", () => {
    render(<App />);

    expect(screen.getByText("Vite + React")).toBeDefined();
  });
});
