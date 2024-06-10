import { FastifyReply, FastifyRequest } from "fastify";

export const showAllRecipes = async(HttpRequest: FastifyRequest, HttpResponse: FastifyReply) => {
  const response = HttpResponse
    .code(200)
    .send({
      id: 1,
      name: 'Shakshuka',
      ingredients: [
        "4 ovos",
        "1 lata de tomate pelado em cubos (400 g)",
        "½ pimentão vermelho",
        "½ cebola",
        "1 dente de alho",
        "1 colher (sopa) de azeite",
        "½ colher (chá) de orégano seco",
        "1 pitada de pimenta calabresa seca",
        "sal a gosto"
      ]
    });
  return response;
}