# Organización del repositorio

- Versión: 0.3.
- Actualización: 2026-10-20.
- Relación: [Project Charter](00-project-charter.md).
- Repositorio: https://github.com/nagiseishiro123456-creator/programation-world.

## Carpetas existentes

Código, documentación, imágenes y evidencias se conservan en un solo repositorio. La carpeta de entrega programation-world-capas-a-v01 se integró en la raíz sin volver a codificar los recursos binarios.

| Ruta | Responsabilidad |
| --- | --- |
| README.md | Estado real, visores, verificaciones e índice documental. |
| CONTRIBUTING.md | Secuencia de tarea y criterios de revisión. |
| art/concepts/ | Fuentes de campus y avatar, con metadatos y prompts. |
| art/exports/avatars/ | Atlas nativo, capas y contratos JSON. |
| art/references/ | Referencias originales, revisión de ojos e inventario. |
| tools/art-preview/ | Visores HTML y módulos de composición y verificación. |
| tools/check-repository.cjs | Integridad de archivos requeridos, enlaces locales y JSON. |
| docs/design/ | Dirección de arte y revisiones del avatar. |
| docs/management/ | Flujo de GitHub e importación. |
| docs/qa/ | Resultados, comparaciones y límites de verificación. |
| .github/ISSUE_TEMPLATE/ | Plantilla de tareas. |
| .github/PULL_REQUEST_TEMPLATE.md | Resultado, validación y pendientes del cambio. |
| .github/workflows/verify.yml | Verificaciones en Linux y Windows. |
| .gitignore y .gitattributes | Exclusiones locales y tratamiento de texto y binarios. |

## Carpetas previstas

Se crearán cuando exista contenido real aprobado para implementar.

| Ruta prevista | Responsabilidad |
| --- | --- |
| apps/client/ | Juego Phaser y TypeScript, escenas e interfaz. |
| apps/server/ | Mundo compartido; solución de servidor pendiente de decisión. |
| packages/shared/ | Contratos y tipos compartidos. |
| packages/learning/ | Objetivos, ejercicios y rúbricas, con evaluación privada separada. |
| content/zones/Z01/ | Mapa, diálogos y actividades de la primera zona. |
| assets/game/ | Recursos preparados para integrar en el cliente. |
| art/source/ | Fuentes editables de producción. |
| tests/ | Integraciones y recorridos del futuro juego. |
| docs/architecture/ | TDD y decisiones técnicas. |
| docs/learning/ | Recorrido educativo y evaluación de Python. |
| docs/world/ | Diseño y aceptación de cada zona. |
| docs/sprints/ | Planificación, revisión y retrospectiva. |
| docs/legal/ | Procedencia, licencias y decisiones de uso. |
| docs/operations/ | Despliegue, operación y recuperación. |

El código de Python educativo necesitará una decisión de aislamiento. La automatización actual solo comprueba recursos y herramientas de preproducción.

## Trazabilidad

Requisito del Charter → tarea → cambio → documento y evidencia → revisión. Los estados propuestos no se presentan como aprobados. La aceptación del concepto, las pruebas de píxeles y la comprobación en navegador se registran por separado.

La guía vigente está en [local-workflow.md](management/local-workflow.md); el resultado de la migración está en [importacion-inicial.md](management/importacion-inicial.md).

## Recursos

Conservar los originales y registrar procedencia, uso y condiciones conocidas. Una referencia no se incorpora automáticamente como recurso final. La licencia del proyecto y la procedencia detallada de las referencias iniciales siguen pendientes.

No se guardan credenciales, archivos de entorno, dependencias descargadas ni datos personales de participantes.
