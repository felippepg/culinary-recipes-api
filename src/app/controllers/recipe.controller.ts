import { FastifyReply, FastifyRequest } from "fastify";
import * as recipeUseCase from '../use-case/recipes.use-case';

export const showAllRecipes = async(HttpRequest: FastifyRequest, HttpResponse: FastifyReply) => {
  const data = await recipeUseCase.getAllRecipes()
  const response = HttpResponse
    .code(200)
    .send(data);
  return response;
}