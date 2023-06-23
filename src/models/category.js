import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
      id: {type: String},
      nome: {type: String, minLength: 3, required: true, match: /^(?![0-9])[a-zA-Z0-9]{3,}$/}  ,
      status: {type: String, enum: ["ATIVA", "INATIVA"], required: true}
    }
);


const categories = mongoose.model("categories", categorySchema);

export default categories;