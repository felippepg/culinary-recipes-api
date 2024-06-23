import mongoose from "mongoose";
import RecipeSchema from "../schema/recipe";


export const Recipe = mongoose.model('Recipe', RecipeSchema)