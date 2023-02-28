import { fileURLToPath } from 'url';
import os from 'os';
import path from 'path';
import fs from 'fs/promises';
import getFunction from '../src/prettifyHTMLFile.js';

// const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prettifyHTMLFile = getFunction();

// BEGIN (write your solution here)
const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);
const tmpFilePath = path.join(os.tmpdir(), 'tmp.html'); // создаем временынй путь

let after;
beforeAll(async () => {
  const afterPath = getFixturePath('after.html')
  after = await fs.readFile(afterPath, 'utf-8')
});

beforeEach(async () => {
  await fs.copyFile(getFixturePath('before.html'), tmpFilePath); // копируем из нужного файла в копию
})

test('Read file', async () => {
  await prettifyHTMLFile(tmpFilePath); // проиводим модификацию

  const before = await fs.readFile(tmpFilePath, 'utf-8');
  expect(before).toEqual(after)
});
// END
