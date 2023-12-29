import { expect, test } from "vitest";
import { screen, render } from "@testing-library/react";
import { Hello } from ".";

test("hello", async () => {
  render(<Hello name="test" />);
  expect(
    await screen.findByText("Hello TEST!!!", { exact: true }),
  ).toBeInTheDocument();
});
