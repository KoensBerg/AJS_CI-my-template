export default function calcelateTotal(purchases) {
  const result = purchases.reduce(
    (acc, curr) => acc += curr.price * curr.count,
    0,
  );
  return result;
}
