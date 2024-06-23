import RecipeSchema from '../../schema/recipe'
import * as connection from '../database'

const COLLECTION_NAME = 'Recipe'
export const recipeRepository = connection.default()
  .model(COLLECTION_NAME, RecipeSchema)