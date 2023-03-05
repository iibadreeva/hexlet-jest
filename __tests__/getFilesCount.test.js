import { fileURLToPath } from "url";
import path from "path";
import { jest } from "@jest/globals";
import getFunction from "../src/getFilesCount";

const getFilesCount = getFunction();

// const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (name) =>
  path.join(__dirname, "..", "__fixtures__", name);

test("getFixturePath", async () => {
  const directoryPath = getFixturePath("nested");
  const mock = jest.fn();
  getFilesCount(directoryPath, mock);
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith("Go!");
});
