import { AppError } from "./AppError";

export class InvalidRecipeError extends AppError{
  constructor(message: string) {
    super(message, 400);
  }
}


