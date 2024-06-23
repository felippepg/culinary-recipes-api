import { FastifyInstance } from 'fastify';
import * as recipeController from '../controllers/recipe.controller';

async function recipeRoutes(fastify: FastifyInstance) {
  const BASE_URL = '/api/v1/culinary-recipes'
  
  fastify.get(
    `${BASE_URL}/recipes`, 
    recipeController.showAllRecipes
  );

  fastify.post(
    `${BASE_URL}/createRecipe`, 
    recipeController.createRecipe
  )
}

export default recipeRoutes;
