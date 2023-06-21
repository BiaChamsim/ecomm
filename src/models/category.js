import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
      id: {type: String},
      nome: {type: String, minLength: 3, required: true}  ,
      status: {type: String, enum: ["ATIVA", "INATIVA"], required: true}
    }
);


const categories = mongoose.model("categories", categorySchema);

export default categories;