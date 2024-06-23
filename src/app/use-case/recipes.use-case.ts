import { InvalidRecipeError } from "../errors/InvalidRecipeError";
import { recipeRepository as repository } from "../infra/repository/recipe.repository";
export const getAllRecipes = async () => {
  const data = await repository.find();
  return data
}

export const createRecipe = async (recipe: any) => {
  if(recipe.name?.length < 5) 
    throw new InvalidRecipeError("Não é possivel criar receitas com um nome menor que 5 caractere")

  if(recipe.ingredients?.length === 0) 
    throw new InvalidRecipeError("Não é possivel criar receitas sem ingredientes")

  const data = await repository.create(recipe)
  return data
}