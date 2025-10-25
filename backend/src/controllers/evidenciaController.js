import Evidencia from '../models/Evidencia.js';

// 🟢 Crear evidencia
export const crearEvidencia = async (req, res) => {
  try {
    const nueva = new Evidencia(req.body);
    await nueva.save();
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟡 Obtener todas las evidencias
export const obtenerEvidencias = async (req, res) => {
  try {
    const evidencias = await Evidencia.find();
    res.json(evidencias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔵 Actualizar evidencia
export const actualizarEvidencia = async (req, res) => {
  try {
    const actualizada = await Evidencia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔴 Eliminar evidencia
export const eliminarEvidencia = async (req, res) => {
  try {
    await Evidencia.findByIdAndDelete(req.params.id);
    res.json({ message: 'Evidencia eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
