# programation-world

Videojuego educativo 2D para navegador inspirado en Juliaca. El recorrido previsto conecta aprendizaje de programación desde cero, formación en institutos y universidades, graduación, entrevistas y trabajo en tecnología.

## Estado real

**Sprint 0: preproducción y herramientas del avatar.** Están aprobados visualmente la dirección de arte, el campus, el reposo v04, la marcha v01, los tres colores de abrigo y los conceptos de cabello original, A y B.

A tiene una primera producción nativa por capas. Su aspecto final y sus controles requieren revisión en un navegador real. B conserva su concepto aprobado; sus capas siguen pendientes. El mundo jugable, el cliente Phaser, la ejecución educativa de Python, las cuentas, el servidor y el chat todavía no están implementados.

El proyecto se conserva en [GitHub](https://github.com/nagiseishiro123456-creator/programation-world). Desde el 2026-10-20 el Product Owner autoriza al asistente a incorporar avances y documentación dentro del alcance acordado. El [registro de importación](docs/management/importacion-inicial.md) identifica la carga inicial y la revisión.

## Revisar el avatar

Clonar el repositorio o descargar su contenido completo. Abrir estos archivos desde la copia local, conservando las carpetas:

| Archivo | Qué permite revisar |
| --- | --- |
| [Laboratorio de cabeza y cabello A](tools/art-preview/avatar-head-lab.html) | Comparar original y A en cuatro direcciones y tres colores, reposo, marcha e inspección de capas. |
| [Personalización de colores](tools/art-preview/avatar-customization.html) | Elegir abrigo verde, azul o terracota y guardar/cargar un JSON de apariencia. |
| [Pista de movimiento](tools/art-preview/avatar-walk.html) | Inspeccionar cuadros y mover el avatar con teclado en una pista de prueba. |
| [Visor de reposo](tools/art-preview/avatar-base-01.html) | Consultar el recurso base y los ajustes de ojos aprobados. |

Los enlaces de GitHub muestran el código HTML; para interactuar hay que abrir el archivo de la copia local. Estos visores funcionan sin servidor ni paquetes instalados. Son herramientas de preproducción.

![Comparación del original y A](docs/qa/avatar-head-layers-a-v01-comparison.png)

La imagen compara el original verde con A verde, azul y terracota. Es una renderización de referencia, no una captura de navegador. El contrato conserva cuadros de 32 × 48, anclaje (16, 46), cuatro direcciones y los ojos aprobados.

## Comprobar el proyecto

Desde la raíz, con Node.js y Python disponibles:

```sh
node tools/check-repository.cjs
node tools/art-preview/check-avatar-walk.cjs
node tools/art-preview/check-avatar-appearance.cjs
node tools/art-preview/check-avatar-head.cjs
node tools/art-preview/check-avatar-head-controller.cjs
python tools/art-preview/build-avatar-appearance-data.py --check
python tools/art-preview/build-avatar-head-data.py --check
```

La automatización de [GitHub Actions](https://github.com/nagiseishiro123456-creator/programation-world/actions) ejecuta estos controles en Linux y Windows con Node.js 24 y Python 3.13. Son versiones de herramientas de verificación; todavía no fijan las dependencias del futuro cliente del juego. No requiere instalar paquetes con npm ni pip.

La [verificación de la integración](https://github.com/nagiseishiro123456-creator/programation-world/actions/runs/39492489517) pasó en ambos sistemas sobre el commit [1cb3d39](https://github.com/nagiseishiro123456-creator/programation-world/commit/1cb3d39c60a7f07921dfa8cbcd59b7b487003388).

Los controles verifican rutas, JSON, fuentes, snapshots y composición de píxeles. El adaptador DOM/Canvas comprueba el flujo del controlador; las pruebas de navegador real y aceptación visual se registran aparte. Consultar [la auditoría de importación](docs/qa/github-import-review-v01.md).

## Documentación

| Documento | Contenido |
| --- | --- |
| [Project Charter](docs/00-project-charter.md) | Visión, alcance, backlog inicial y Definition of Done. |
| [Organización del repositorio](docs/01-repository-structure.md) | Carpetas existentes y previstas. |
| [Trabajo con GitHub](docs/management/local-workflow.md) | Copia local, ramas, commits y sincronización. |
| [Contribuciones](CONTRIBUTING.md) | Secuencia de una tarea y evidencias. |
| [Referencias](docs/design/reference-review.md) | Revisión de las 17 imágenes y pendientes de procedencia. |
| [Dirección de arte](docs/design/art-direction.md) | Estilo y contrato visual. |
| [Campus](docs/design/visual-review-v01.md) | Muestra y aprobación visual. |
| [Avatar base](docs/design/avatar-base-01.md) | Identidad, cuadros y reposo. |
| [Marcha](docs/design/avatar-walk-review-v01.md) | Ciclos, controles y aprobación. |
| [Colores](docs/design/avatar-customization-v01.md) | Opciones aprobadas y archivo de apariencia v01. |
| [Peinados](docs/design/avatar-hair-review-v01.md) | Original, A y B; secuencia de producción. |
| [Capas de A](docs/design/avatar-head-layers-a-v01.md) | Composición, procedencia y revisión pendiente. |
| [Índice de imágenes](art/references/README.md) | Referencias originales e inventario. |

## Decisiones vigentes

- Primera plataforma: navegador de escritorio, teclado y ratón.
- Futuro cliente: Phaser y TypeScript; primer lenguaje educativo: Python.
- Desarrollo por zonas, comenzando por Z01.
- Formación desde cero en institutos y universidades; sin escuela independiente en esta versión.
- Entrevistas con conversación y retos técnicos; combate descartado.
- Multijugador y chat de texto como requisitos; voz por proximidad y celulares para después.
- Sprints de dos semanas; disponibilidad indicada de dos horas diarias, con días efectivos pendientes de acordar.

El siguiente paso visual es revisar A a tamaño nativo y en marcha. Después corresponde producir B y completar el selector y su guardado. El diseño educativo de Z01 se detallará antes de implementar el recorrido.

## Carpetas actuales

| Ruta | Contenido |
| --- | --- |
| art/concepts/ | Fuentes de campus y avatares, con metadatos y prompts. |
| art/exports/avatars/ | Atlas nativo, capas y contratos JSON. |
| art/references/ | 17 imágenes originales, referencia de ojos e inventario. |
| tools/art-preview/ | Visores y verificadores del avatar. |
| tools/check-repository.cjs | Integridad de rutas y sintaxis JSON. |
| docs/ | Diseño, gestión y evidencias. |
| .github/ | Plantillas y comprobaciones automáticas. |

Las carpetas apps/client/, apps/server/, packages/ y content/zones/ se crearán al implementar esos módulos. No se publican instrucciones de ejecución de un juego que todavía no existe.

## Recursos y licencia

La licencia del proyecto sigue pendiente. La procedencia detallada, los materiales de entrada y las condiciones de uso de las 17 referencias iniciales también siguen pendientes; el Product Owner confirmó su generación con IA. Las nuevas fuentes registran image_gen y sus prompts. La publicación del repositorio no convierte estos recursos en material con licencia libre.
