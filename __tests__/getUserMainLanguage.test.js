import nock from "nock";
import OctokitFake from "../src/octokitFake";
import getFunction from "../src/userMainLanguage";

const getUserMainLanguage = getFunction();

let username;
beforeAll(async () => {
  username = "iibadreeva";
});
test("getUserMainLanguage", async () => {
  const dataFake = [
    { language: "ruby" },
    { language: "php" },
    { language: "java" },
    { language: "javascript" },
    { language: "java" },
    { language: "php" },
    { language: "python" },
  ];
  const client = new OctokitFake(dataFake);

  const privateForks = await getUserMainLanguage(username, client);
  // console.log(privateForks);
  expect(privateForks).toEqual("php");
});
test("is null", async () => {
  const dataFake = [];
  const client = new OctokitFake(dataFake);

  const privateForks = await getUserMainLanguage("user-without-repos", client);
  //console.log(privateForks);
  expect(privateForks).toBeNull();
});

test("getUserMainLanguage with nock", async () => {
  nock(/api\.github\.com/)
    .get("/users/john/repos")
    .reply(200, [
      { language: "ruby" },
      { language: "php" },
      { language: "java" },
      { language: "php" },
      { language: "js" },
    ]);
  const mainLanguage = await getUserMainLanguage("john");
  // console.log(mainLanguage)
  expect(mainLanguage).toEqual("php");
});

test("getUserMainLanguage with nock when empty", async () => {
  nock(/api\.github\.com/)
    .get("/users/user-without-repos/repos")
    .reply(200, []);
  const mainLanguage = await getUserMainLanguage("user-without-repos");
  expect(mainLanguage).toBeNull();
});
