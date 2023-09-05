import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Picker } from "./";

const arrange = () => {
  render(<Picker isOpen={true} />);
};

describe("Verify the display of the emoji picker", () => {
  it("When isOpen is true, the picker is displayed", () => {
    arrange();

    const picker = screen.getByRole("region", { name: "Picker" });
    expect(picker).toBeInTheDocument();
  });

  it("When isOpen is false, the picker is not displayed", () => {
    render(<Picker isOpen={false} />);

    waitFor(() => {
      const picker = screen.queryByRole("region", { name: "Picker" });
      expect(picker).not.toBeInTheDocument();
    });
  });
});
