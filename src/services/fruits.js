export const getAllFruits = async () => {
  const res = await fetch("https://fruityvice.com/api/fruit/all");

  return res.json();
};
