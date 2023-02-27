import {str as reverse} from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
  expect(["pink wool", "diorite"]).toEqual(["pink wool", "diorite"]);
})
