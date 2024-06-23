import { recipeRepository as repository } from "../infra/repository/recipe.repository";
export const getAllRecipes = async () => {
  const data = await repository.find();
  return data
}

export const createRecipe = async (recipe: any) => {
  if(recipe.name?.length < 5) 
    throw new Error('Não é possivel criar receitas com um nome menor que 5 caracterse')

  const data = await repository.create(recipe)
  return data
}