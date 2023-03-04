import { fileURLToPath } from "url";
import fs from "fs/promises";
import path from "path";
import getFunction from "../src/html-list.js";

// const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const toHtmlList = getFunction();

const formats = ["csv", "json", "yml"];
const getFixturePath = (name) =>
  path.join(__dirname, "..", "__fixtures__", name);

let expected;
beforeAll(async () => {
  expected = await fs.readFile(getFixturePath("result.html"), "utf-8");
});

test.each(formats)("%s", async (format) => {
  const filePath = getFixturePath(`list.${format}`);
  const actual = await toHtmlList(filePath);
  expect(actual).toEqual(expected.trim());
});

const dataFake = [
  { language: "php" },
  { language: "javascript" },
  { language: "java" },
  { language: "python" },
];
