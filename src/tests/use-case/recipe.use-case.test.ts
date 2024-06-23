import { InvalidRecipeError } from '../../app/errors/InvalidRecipeError';
import { recipeRepository } from '../../app/infra/repository/recipe.repository';
import * as recipeUseCase from '../../app/use-case/recipes.use-case';

jest.mock('../../app/infra/repository/recipe.repository.ts', () => ({
  recipeRepository: {
    find: jest.fn(),
    create: jest.fn(),
  },
}));

describe('Recipe use case test suite', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Recipe name with less than 5 chars is invalid', async () => {
    const mockedRecipeReceived = {
      name: "Sha",
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
    };

    await expect(recipeUseCase.createRecipe(mockedRecipeReceived))
      .rejects.toThrow(
        new InvalidRecipeError("Não é possivel criar receitas com um nome menor que 5 caractere")
      )
    expect(recipeRepository.create).toHaveBeenCalledTimes(0)
  })

  it('Recipe without ingredients is invalid', async () => {
    const mockedRecipeReceived = {
      name: "Shakshuka",
        ingredients: []
    };

    await expect(recipeUseCase.createRecipe(mockedRecipeReceived))
      .rejects.toThrow(
        new InvalidRecipeError("Não é possivel criar receitas sem ingredientes")
      )
    expect(recipeRepository.create).toHaveBeenCalledTimes(0)
  })

  it('Should ')
})