import { defineFunction } from "@aws-amplify/backend";

export const exampleFunction = defineFunction({
  entry: "./example.ts",
  runtime: 20,
});
