import { recipeRepository as repository } from "../infra/repository/recipe.repository";
export const getAllRecipes = async () => {
  const data = await repository.find();
  return data
}

export const createRecipe = async (recipe: any) => {
  const data = await repository.create(recipe)
  return data
}