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
              description: 'Nombre del profesor',
              example: 'Juan Pérez'
            },
            materia: {
              type: 'string',
              description: 'Nombre de la materia',
              example: 'Matemáticas Avanzadas'
            },
            parcial: {
              type: 'number',
              description: 'Número del parcial (1, 2, 3)',
              minimum: 1,
              maximum: 3,
              example: 1
            },
            cicloEscolar: {
              type: 'string',
              description: 'Ciclo escolar (ej. 2024-2025)',
              default: '2024-2025',
              example: '2024-2025'
            },
            archivo: {
              type: 'string',
              description: 'URL o nombre del archivo subido',
              example: 'planeacion_matematicas_parcial1.pdf'
            },
            estado: {
              type: 'string',
              enum: ['pendiente', 'aprobado', 'rechazado', 'ajustes_solicitados'],
              description: 'Estado de revisión de la planeación',
              default: 'pendiente',
              example: 'pendiente'
            },
            observaciones: {
              type: 'string',
              description: 'Observaciones del coordinador',
              example: 'Favor de incluir más ejercicios prácticos'
            },
            coordinadorRevisor: {
              type: 'string',
              description: 'Nombre del coordinador que revisa',
              example: 'María García'
            }
          }
        },
        Avance: {
          type: 'object',
          required: ['profesor', 'materia', 'parcial', 'temasPlaneados', 'temasCubiertos', 'cumplimiento'],
          properties: {
            profesor: {
              type: 'string',
              description: 'Nombre del profesor',
              example: 'Juan Pérez'
            },
            materia: {
              type: 'string',
              description: 'Nombre de la materia',
              example: 'Matemáticas Avanzadas'
            },
            parcial: {
              type: 'number',
              description: 'Número del parcial (1, 2, 3)',
              minimum: 1,
              maximum: 3,
              example: 1
            },
            cicloEscolar: {
              type: 'string',
              description: 'Ciclo escolar (ej. 2024-2025)',
              default: '2024-2025',
              example: '2024-2025'
            },
            temasPlaneados: {
              type: 'array',
              description: 'Lista de temas planeados para el parcial',
              items: {
                type: 'string'
              },
              example: ['Álgebra lineal', 'Cálculo diferencial', 'Estadística descriptiva']
            },
            temasCubiertos: {
              type: 'array',
              description: 'Lista de temas cubiertos efectivamente',
              items: {
                type: 'string'
              },
              example: ['Álgebra lineal', 'Cálculo diferencial']
            },
            porcentajeAvance: {
              type: 'number',
              description: 'Porcentaje de avance calculado automáticamente',
              minimum: 0,
              maximum: 100,
              example: 67
            },
            cumplimiento: {
              type: 'string',
              enum: ['cumplido', 'parcial', 'no cumplido'],
              description: 'Nivel de cumplimiento del avance',
              example: 'parcial'
            },
            actividadesRealizadas: {
              type: 'array',
              description: 'Actividades realizadas durante el parcial',
              items: {
                type: 'string'
              },
              example: ['Exámenes parciales', 'Tareas', 'Proyectos en equipo']
            },
            dificultades: {
              type: 'string',
              description: 'Dificultades encontradas durante el parcial',
              example: 'Falta de participación en clases virtuales'
            },
            observaciones: {
              type: 'string',
              description: 'Observaciones adicionales del profesor',
              example: 'Se requieren más sesiones de práctica'
            }
          }
        },
        Evidencia: {
          type: 'object',
          required: ['profesor', 'materia', 'parcial', 'tipo', 'archivo'],
          properties: {
            profesor: {
              type: 'string',
              description: 'Nombre del profesor',
              example: 'Juan Pérez'
            },
            materia: {
              type: 'string',
              description: 'Nombre de la materia',
              example: 'Matemáticas Avanzadas'
            },
            parcial: {
              type: 'number',
              description: 'Número del parcial (1, 2, 3)',
              minimum: 1,
              maximum: 3,
              example: 1
            },
            cicloEscolar: {
              type: 'string',
              description: 'Ciclo escolar (ej. 2024-2025)',
              default: '2024-2025',
              example: '2024-2025'
            },
            tipo: {
              type: 'string',
              enum: ['examen', 'tarea', 'proyecto', 'practica', 'presentacion', 'otro'],
              description: 'Tipo de evidencia',
              example: 'examen'
            },
            archivo: {
              type: 'string',
              description: 'URL o nombre del archivo subido',
              example: 'examen_parcial1.pdf'
            },
            descripcion: {
              type: 'string',
              description: 'Descripción de la evidencia',
              example: 'Examen parcial del primer parcial con resultados'
            },
            fechaEntrega: {
              type: 'string',
              format: 'date',
              description: 'Fecha de entrega de la evidencia',
              example: '2024-03-15'
            },
            calificacion: {
              type: 'number',
              description: 'Calificación obtenida (opcional)',
              minimum: 0,
              maximum: 100,
              example: 85
            }
          }
        },
        RevisarPlaneacion: {
          type: 'object',
          required: ['estado', 'coordinadorRevisor'],
          properties: {
            estado: {
              type: 'string',
              enum: ['aprobado', 'rechazado', 'ajustes_solicitados'],
              description: 'Nuevo estado de la planeación',
              example: 'aprobado'
            },
            observaciones: {
              type: 'string',
              description: 'Observaciones del coordinador',
              example: 'Planeación completa y bien estructurada'
            },
            coordinadorRevisor: {
              type: 'string',
              description: 'Nombre del coordinador que revisa',
              example: 'María García'
            }
          }
        },
        EstadisticasAvance: {
          type: 'object',
          properties: {
            total: {
              type: 'number',
              description: 'Total de avances registrados',
              example: 15
            },
            cumplido: {
              type: 'number',
              description: 'Avances cumplidos',
              example: 8
            },
            parcial: {
              type: 'number',
              description: 'Avances parcialmente cumplidos',
              example: 5
            },
            noCumplido: {
              type: 'number',
              description: 'Avances no cumplidos',
              example: 2
            },
            promedioPorcentaje: {
              type: 'number',
              description: 'Porcentaje promedio de avance',
              example: 75.5
            },
            porMateria: {
              type: 'object',
              description: 'Avances agrupados por materia'
            },
            porParcial: {
              type: 'object',
              description: 'Avances agrupados por parcial'
            }
          }
        },
        ReporteGeneral: {
          type: 'object',
          properties: {
            totalAvances: {
              type: 'number',
              description: 'Total de avances en el sistema',
              example: 45
            },
            cumplimientoGeneral: {
              type: 'object',
              properties: {
                cumplido: { type: 'number', example: 25 },
                parcial: { type: 'number', example: 15 },
                noCumplido: { type: 'number', example: 5 }
              }
            },
            porProfesor: {
              type: 'object',
              description: 'Estadísticas por profesor'
            },
            porMateria: {
              type: 'object',
              description: 'Estadísticas por materia'
            },
            porParcial: {
              type: 'object',
              description: 'Estadísticas por parcial'
            },
            promedioGlobal: {
              type: 'number',
              description: 'Porcentaje promedio global',
              example: 78.3
            }
          }
        },
        DatosGraficas: {
          type: 'object',
          properties: {
            cumplimiento: {
              type: 'object',
              properties: {
                labels: {
                  type: 'array',
                  items: { type: 'string' },
                  example: ['Cumplido', 'Parcial', 'No Cumplido']
                },
                data: {
                  type: 'array',
                  items: { type: 'number' },
                  example: [25, 15, 5]
                }
              }
            },
            porParcial: {
              type: 'object',
              properties: {
                labels: {
                  type: 'array',
                  items: { type: 'string' },
                  example: ['Parcial 1', 'Parcial 2', 'Parcial 3']
                },
                data: {
                  type: 'array',
                  items: { type: 'number' },
                  example: [15, 20, 10]
                }
              }
            },
            porcentajePromedio: {
              type: 'number',
              description: 'Porcentaje promedio de avance',
              example: 78
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Mensaje de error',
              example: 'Recurso no encontrado'
            },
            error: {
              type: 'string',
              description: 'Detalle del error (en desarrollo)',
              example: 'User not found'
            }
          }
        }
      },
      parameters: {
        PlaneacionId: {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string'
          },
          description: 'ID de la planeación'
        },
        AvanceId: {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string'
          },
          description: 'ID del avance'
        },
        EvidenciaId: {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string'
          },
          description: 'ID de la evidencia'
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