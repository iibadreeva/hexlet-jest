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
