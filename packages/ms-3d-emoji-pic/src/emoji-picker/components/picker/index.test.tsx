import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Picker } from "./";

describe("絵文字ピッカーの表示を確認する", () => {
  it("isOpen=trueのとき、dialog要素が表示される", () => {
    render(<Picker isOpen={true} />);
    expect(screen.findByRole("dialog")).toBeInTheDocument();
  });
});
