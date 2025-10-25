import mongoose from 'mongoose';

const avanceSchema = new mongoose.Schema({
  profesor: { type: String, required: true },
  materia: { type: String, required: true },
  parcial: { type: Number, required: true },
  cumplimiento: { type: String, enum: ['cumplido', 'parcial', 'no cumplido'], required: true },
  observaciones: { type: String },
  fechaRegistro: { type: Date, default: Date.now }
});

export default mongoose.model('Avance', avanceSchema);
