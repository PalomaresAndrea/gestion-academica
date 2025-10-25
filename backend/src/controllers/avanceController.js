import Avance from '../models/Avance.js';

// 🟢 Crear avance
export const crearAvance = async (req, res) => {
  try {
    const nuevo = new Avance(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟡 Obtener todos los avances
export const obtenerAvances = async (req, res) => {
  try {
    const avances = await Avance.find();
    res.json(avances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔵 Actualizar avance por ID
export const actualizarAvance = async (req, res) => {
  try {
    const actualizado = await Avance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔴 Eliminar avance
export const eliminarAvance = async (req, res) => {
  try {
    await Avance.findByIdAndDelete(req.params.id);
    res.json({ message: 'Avance eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
