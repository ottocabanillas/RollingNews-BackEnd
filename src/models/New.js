import mongoose, { Schema } from "mongoose";

const newsSchema = new Schema({
  categoriaNoticia: {
    type: String,
    required: true,
  },
  idCategoriaNoticia: {
    type: Number,
    required: true,
  },
  tituloNoticia: {
    type: String,
    maxlength: 50,
    required: true,
  },
  autorNoticia: {
    type: String,
    maxlength: 30,
    required: true,
  },
  fechaNoticia: {
    type: String,
    required: true,
  },
  imagenNoticia: {
    type: String,
  },
  contenidoNoticia: {
    type: String,
    required: true,
  },
});

const News = mongoose.model("Noticia", newsSchema);

export default News;