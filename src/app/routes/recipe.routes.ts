import { FastifyInstance } from 'fastify';
import * as recipeController from '../controllers/recipe.controller';

async function recipeRoutes(fastify: FastifyInstance) {
  fastify.get('/api/v1/culinary-recipes/recipes', recipeController.showAllRecipes);
}

export default recipeRoutes;
