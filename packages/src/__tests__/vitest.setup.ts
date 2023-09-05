import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { beforeEach } from "vitest";

// expect.extend(matchers);

beforeEach(() => {
  cleanup();
});
