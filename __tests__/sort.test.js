import "jest-sorted";
import fc from "fast-check";
import getFunction from "../src/sort";

const sort = getFunction();

// Еестируем функцию sort(), которая сортирует массив целых чисел по возрастанию.
// Функция возвращает новый отсортированный массив
// расширяет jest.expect матчером toBeSorted
// fc.array(fc.integer()) - тестируем массив чисел
test("sort", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (arr) => expect(sort(arr)).toBeSorted())
  );
});
