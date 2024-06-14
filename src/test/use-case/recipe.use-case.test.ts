import { describe } from "node:test";
import { getAllRecipes } from "../../app/use-case/recipes.use-case";

describe('Recipe test suite', () => {
    it('Should return Shakshuka recipe', async () => {
      const expected = [{
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
      }]

      const actual = await getAllRecipes();

      expect(actual).toEqual(expected)

    });
})


