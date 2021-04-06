const API = "https://www.thecocktaildb.com/api/json/v1/1";

export const getRecipe = (id) => {
  return fetch(
    `${API}/lookup.php?i=${id}`
    ).then((res) => res.json());
};
