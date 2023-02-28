import getFunction from '../src/build-user.js';

const buildUser = getFunction();

// BEGIN (write your solution here)
test('call any users', () => {
  expect(buildUser()).toEqual(
    expect.objectContaining({
      email: expect.any(String),
      firstName: expect.any(String),
      lastName: expect.any(String)
    })
  )
});
test('buildUser override', () => {
  const newData1 = {
    email: 'test@email.com',
  };
  const user1 = buildUser(newData1);
  expect(user1).toMatchObject(newData1);
});

test('buildUser random', () => {
  const user1 = buildUser();
  const user2 = buildUser();
  expect(user1).not.toEqual(user2);
});
// END
