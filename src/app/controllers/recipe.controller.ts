import { FastifyReply, FastifyRequest } from "fastify";
import * as recipeUseCase from '../use-case/recipes.use-case';

export const showAllRecipes = async(HttpRequest: FastifyRequest, HttpResponse: FastifyReply) => {
  const data = await recipeUseCase.getAllRecipes()
  const response = HttpResponse
    .code(200)
    .send(data);
  return response;
}

export const createRecipe = async(HttpRequest: FastifyRequest, HttpResponse: FastifyReply) => {
  const recipe = HttpRequest.body;
  const data = await recipeUseCase.createRecipe(recipe)
  const response = HttpResponse
    .code(200)
    .send(data);
  return response;
}
