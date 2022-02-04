export const getRandomId = () => {
  const min = 100;
  const max = 999;
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
