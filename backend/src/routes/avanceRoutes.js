import express from 'express';
import { crearAvance, obtenerAvances, actualizarAvance, eliminarAvance } from '../Controllers/avanceController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Avances
 *   description: Control y seguimiento del avance por parcial
 */

/**
 * @swagger
 * /api/avances:
 *   get:
 *     summary: Obtener todos los avances registrados
 *     tags: [Avances]
 *   post:
 *     summary: Crear un nuevo avance
 *     tags: [Avances]
 */
router.get('/', obtenerAvances);
router.post('/', crearAvance);

/**
 * @swagger
 * /api/avances/{id}:
 *   put:
 *     summary: Actualizar avance por ID
 *     tags: [Avances]
 *   delete:
 *     summary: Eliminar avance por ID
 *     tags: [Avances]
 */
router.put('/:id', actualizarAvance);
router.delete('/:id', eliminarAvance);

export default router;