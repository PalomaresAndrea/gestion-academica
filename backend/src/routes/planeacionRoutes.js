import express from 'express';
import Planeacion from '../models/Planeacion.js';

const router = express.Router();

// Crear planeación
router.post('/', async (req, res) => {
  try {
    const nuevaPlaneacion = new Planeacion(req.body);
    const saved = await nuevaPlaneacion.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas las planeaciones
router.get('/', async (req, res) => {
  try {
    const planeaciones = await Planeacion.find();
    res.json(planeaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
