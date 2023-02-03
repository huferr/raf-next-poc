export const getCatFacts = async () => {
  const res = await fetch('https://meowfacts.herokuapp.com/?count=3');

  return res.json()
}