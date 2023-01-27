import React from "react";
import {act, render, screen } from "@testing-library/react";
import App from "./App";

test("example of how to test api", async () => {
  // Arrange
  render(<App />);

  // Wait for component to render
  await act(async () => {
    await new Promise((r) => setTimeout(r, 300));
  });

  //! remove before production
  screen.debug();

  // Act
  const linkElement = screen.getByText(
    '{"id":1,"name":"test user"}'
  )

  // Assert
  expect(linkElement).toBeInTheDocument();
});