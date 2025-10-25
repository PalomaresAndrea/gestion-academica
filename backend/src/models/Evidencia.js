import mongoose from 'mongoose';

const evidenciaSchema = new mongoose.Schema({
  profesor: { type: String, required: true },
  nombreCurso: { type: String, required: true },
  institucion: { type: String, required: true },
  fecha: { type: Date, required: true },
  horas: { type: Number, required: true },
  archivo: { type: String, required: true }, // ruta o URL del archivo
  estado: { type: String, enum: ['pendiente', 'validada', 'rechazada'], default: 'pendiente' },
  fechaSubida: { type: Date, default: Date.now }
});

export default mongoose.model('Evidencia', evidenciaSchema);
