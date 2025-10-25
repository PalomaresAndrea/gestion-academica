import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import planeacionRoutes from './src/routes/planeacionRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// =======================
// 📘 CONFIGURACIÓN SWAGGER
// =======================
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API - Gestión Planeación Académica',
      version: '1.0.0',
      description: 'Documentación de la API de pruebas para la gestión académica',
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./index.js', './src/routes/*.js'], // rutas donde estarán las anotaciones Swagger
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// =======================
// 🚀 RUTAS PRINCIPALES
// =======================

/**
 * @swagger
 * /:
 *   get:
 *     summary: Verifica que el servidor esté activo
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: Respuesta exitosa del servidor
 */
app.get('/', (req, res) => {
  res.send('Servidor backend activo 🚀');
});

/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: Endpoint de prueba del backend
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: Prueba exitosa de la API
 */
app.get('/api/test', (req, res) => {
  res.json({ mensaje: '✅ API funcionando correctamente' });
});

// Ruta principal de planeaciones
app.use('/api/planeaciones', planeacionRoutes);

// =======================
// 🔗 CONEXIÓN A MONGODB
// =======================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error de conexión:', err));

// =======================
// ⚙️ SERVIDOR EN EJECUCIÓN
// =======================
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Backend corriendo en puerto ${PORT}`));
