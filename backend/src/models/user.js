const { Schema, model } = require("mongoose");

// Definimos los tipos de dato del usuario

const userSchema = new Schema(
  {
    name: String,
    lastname: String,
    age: Number,
    cellphone: Number,
    email: String,
  },
  {
    timestamps: true, // almacena fecha y hora de la modificacion del documento
  }
);

module.exports = model("User", userSchema); // nuestro modelo de usuario es el userSchema
