import express from 'express';
import { crearEvidencia, obtenerEvidencias, actualizarEvidencia, eliminarEvidencia } from '../Controllers/evidenciaController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Evidencias
 *   description: Gestión de evidencias de capacitación docente
 */

/**
 * @swagger
 * /api/evidencias:
 *   get:
 *     summary: Obtener todas las evidencias registradas
 *     tags: [Evidencias]
 *   post:
 *     summary: Crear nueva evidencia
 *     tags: [Evidencias]
 */
router.get('/', obtenerEvidencias);
router.post('/', crearEvidencia);

/**
 * @swagger
 * /api/evidencias/{id}:
 *   put:
 *     summary: Actualizar evidencia por ID
 *     tags: [Evidencias]
 *   delete:
 *     summary: Eliminar evidencia por ID
 *     tags: [Evidencias]
 */
router.put('/:id', actualizarEvidencia);
router.delete('/:id', eliminarEvidencia);

export default router;
