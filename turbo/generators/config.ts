import type { PlopTypes } from "@turbo/gen";

export default function (plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("example", {
    description: "Add an example",
    prompts: [],
    actions: [],
  });
}
