import calcelateTotal from '../purchases';

test('should calculate total for purchases', () => {
  const input = [
    {
      id: 1, name: '...', price: 33, count: 3,
    },
    {
      id: 1, name: '...', price: 55, count: 2,
    },
  ];

  const expected = 209;
  const received = calcelateTotal(input);

  expect(received).toBe(expected);
});
