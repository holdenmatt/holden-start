import { describe, expect, it } from "vitest";

import { cn } from "@/lib/utils";

// Example tests file
describe("cn", () => {
  it("should conditionally merge class names", () => {
    expect(cn("foo", false && "bar", "baz")).toBe("foo baz");
  });

  it("should handle tailwind conflicts", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});
