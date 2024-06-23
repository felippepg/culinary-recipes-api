import { Schema } from "mongoose";

const RecipeSchema = new Schema({
  id:Schema.Types.ObjectId,
  name: String,
  ingredients: [String]
});

RecipeSchema.set('toJSON', {
  transform: function (_doc, ret) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  },
})

export default RecipeSchema