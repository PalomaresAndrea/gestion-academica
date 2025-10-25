import mongoose from 'mongoose';

const planeacionSchema = new mongoose.Schema({
  profesorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  materiaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Materia',
    required: true
  },
  parcial: {
    type: Number,
    required: true
  },
  archivoURL: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    enum: ['pendiente', 'aprobada', 'ajustes'],
    default: 'pendiente'
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  },
  fechaRevision: Date,
  comentarios: String
});

const Planeacion = mongoose.model('Planeacion', planeacionSchema);
export default Planeacion;
