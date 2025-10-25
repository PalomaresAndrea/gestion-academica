import swaggerJsdoc from 'swagger-jsdoc';

// 📄 Configuración de Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API - Gestión de Planeación Académica',
      version: '1.0.0',
      description:
        'Documentación de la API para el sistema de gestión de planeación didáctica, avances y evidencias docentes.',
      contact: {
        name: 'Equipo de Desarrollo',
        email: 'soporte@planeacion.edu.mx',
      },
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Servidor local',
      },
    ],
    components: {
      schemas: {
        Planeacion: {
          type: 'object',
          required: ['profesor', 'materia', 'parcial', 'archivo'],
          properties: {
            profesor: {
              type: 'string',
              description: 'Nombre del profesor'
            },
            materia: {
              type: 'string',
              description: 'Nombre de la materia'
            },
            parcial: {
              type: 'number',
              description: 'Número del parcial (1, 2, 3)',
              minimum: 1,
              maximum: 3
            },
            cicloEscolar: {
              type: 'string',
              description: 'Ciclo escolar (ej. 2024-2025)',
              default: '2024-2025'
            },
            archivo: {
              type: 'string',
              description: 'URL o nombre del archivo subido'
            },
            estado: {
              type: 'string',
              enum: ['pendiente', 'aprobado', 'rechazado', 'ajustes_solicitados'],
              description: 'Estado de revisión de la planeación',
              default: 'pendiente'
            },
            observaciones: {
              type: 'string',
              description: 'Observaciones del coordinador'
            },
            coordinadorRevisor: {
              type: 'string',
              description: 'Nombre del coordinador que revisa'
            }
          }
        },
        Avance: {
          type: 'object',
          properties: {
            profesor: { type: 'string' },
            materia: { type: 'string' },
            parcial: { type: 'number' },
            contenido: { type: 'string' },
            fecha: { type: 'string', format: 'date' }
          }
        },
        Evidencia: {
          type: 'object',
          properties: {
            profesor: { type: 'string' },
            materia: { type: 'string' },
            parcial: { type: 'number' },
            tipo: { type: 'string' },
            archivo: { type: 'string' },
            descripcion: { type: 'string' }
          }
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Mensaje de error'
            }
          }
        }
      }
    },
    tags: [
      {
        name: 'Planeaciones',
        description: 'Endpoints para gestión de planeaciones didácticas'
      },
      {
        name: 'Avances',
        description: 'Endpoints para control de avances por parcial'
      },
      {
        name: 'Evidencias',
        description: 'Endpoints para gestión de evidencias docentes'
      }
    ]
  },
  apis: [
    './src/routes/*.js', // Rutas donde Swagger buscará documentación
  ],
};

// Exportar configuración lista para usar en server.js
const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;