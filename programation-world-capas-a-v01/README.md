# programation-world

Proyecto 2D para navegador ambientado en una ciudad inspirada en Juliaca, que conecta el aprendizaje de programación, la graduación, las entrevistas y el trabajo en tecnología. La carpeta del proyecto se llama programation-world.

## Estado actual

Sprint 0: preproducción. La dirección visual, la muestra del campus, el reposo v04 y la marcha v01 están aprobados visualmente. Se entrega una primera prueba de personalización del abrigo en verde, azul y terracota sobre los 20 cuadros del avatar. Incluye selección, reproducción y guardado/carga de apariencia local. Los tres colores están aprobados visualmente. Original, A y B están aprobados como conceptos. Se entrega la primera composición por capas de A, con comparación en reposo y marcha; el mundo educativo y sus sistemas siguen pendientes.

Por decisión del Product Owner del 2026-10-19, trabajaremos primero en una carpeta local con Git. El repositorio remoto se conectará más adelante. La guía de [trabajo local y momentos de commit y push](docs/management/local-workflow.md) explica la secuencia.

## Decisiones vigentes

- Plataforma inicial: navegador de escritorio, teclado y ratón.
- Juego: Phaser + TypeScript. Primer lenguaje educativo: Python.
- Desarrollo progresivo por zonas; primera zona identificada como Z01.
- Aprendizaje inicial en institutos y universidades, incluyendo fundamentos desde cero.
- Avatar personalizable, graduación y acceso a oportunidades laborales.
- Entrevistas mediante conversación y retos técnicos. Combate descartado.
- Multijugador y chat de texto como requisitos; voz por proximidad para después.
- Sprints de dos semanas y disponibilidad indicada de dos horas diarias; días efectivos por acordar.

## Documentación

| Documento | Contenido |
| --- | --- |
| [Project Charter](docs/00-project-charter.md) | Visión, alcance, decisiones, backlog inicial y Definition of Done. |
| [Estructura prevista](docs/01-repository-structure.md) | Organización propuesta del código, arte, contenidos y documentación. |
| [Revisión de referencias](docs/design/reference-review.md) | Análisis de las 17 imágenes, decisiones y cuestiones pendientes de uso. |
| [Dirección visual](docs/design/art-direction.md) | Estilo y parámetros aprobados para preparar los recursos. |
| [Muestra del campus](docs/design/visual-review-v01.md) | Registro de aprobación del aspecto del instituto y los avatares. |
| [Ficha del avatar](docs/design/avatar-base-01.md) | Identidad visual, contrato de cuadros y aprobación del reposo. |
| [Primera marcha](docs/design/avatar-walk-review-v01.md) | Atlas, visor, controles, verificaciones y aprobación visual. |
| [Personalización v01](docs/design/avatar-customization-v01.md) | Colores aprobados, módulos, archivos de apariencia y comprobaciones. |
| [Peinados v01](docs/design/avatar-hair-review-v01.md) | Aceptación de original, A y B, y secuencia de producción. |
| [Cabeza por capas A](docs/design/avatar-head-layers-a-v01.md) | Capas nativas, comparación, verificaciones y pendientes de navegador. |
| [Índice de imágenes](art/references/README.md) | Archivo original, identificador y enlace a cada imagen. |
| [Forma de trabajo](CONTRIBUTING.md) | Trabajo local, documentación por tarea y revisión posterior en GitHub. |
| [Trabajo local](docs/management/local-workflow.md) | Carpeta en la computadora, commits locales y momento del primer push. |

La estructura prevista describe también carpetas que se crearán cuando comience su implementación. Los documentos de diseño y los registros de revisión indican el estado real de cada entregable.

## Contenido de esta carga

| Ruta | Estado |
| --- | --- |
| docs/ | Charter, estructura prevista y revisión visual. |
| art/references/originals/ | 17 imágenes sin alterar sus bytes. |
| art/references/manifest.json | Nombres originales, dimensiones y hashes de las imágenes. |
| art/concepts/ | Muestra del campus y lámina del avatar, con procedencia y prompts. |
| tools/art-preview/ | Visores de reposo, marcha y personalización; abrir avatar-customization.html para la nueva prueba. |
| art/exports/avatars/ | Atlas nativo de 20 cuadros, metadatos de rectángulos y catálogo provisional. |
| docs/qa/ | Comprobaciones de la prueba de recursos y verificaciones pendientes. |
| .github/ | Plantillas para tareas y pull requests. |
| .gitignore y .gitattributes | Reglas iniciales para versionar archivos. |

Más adelante se incorporarán apps/client/, apps/server/, packages/, content/zones/ y assets/game/ según las decisiones documentadas. No se incluyen dependencias ni instrucciones de ejecución ficticias.

## Seguimiento del proyecto

El backlog inicial está en el Charter. Durante esta etapa se registrarán el trabajo y sus evidencias en archivos Markdown y commits locales. Al conectar el repositorio se trasladarán las tareas que se acuerde ejecutar a Issues y se utilizarán pull requests. Las plantillas ya están preparadas; todavía no hay issues, tablero ni pull requests creados para este proyecto.

Abrir [avatar-customization.html](tools/art-preview/avatar-customization.html), conservando la estructura de carpetas. Elegir el color, cambiar de dirección y probar reposo y marcha. Guardar apariencia descarga un JSON que puede cargarse después. La pista con teclado sigue disponible en [avatar-walk.html](tools/art-preview/avatar-walk.html). El reposo, la marcha y los tres tonos están aprobados visualmente; la verificación de controles en navegador sigue pendiente. La geometría se comprobó con Canvas 2D de referencia y las transformaciones de color sobre los bytes de los 60 cuadros resultantes.

La [propuesta de peinados](docs/design/avatar-hair-review-v01.md) fue aceptada: original, A y B. Abrir [avatar-head-lab.html](tools/art-preview/avatar-head-lab.html) para comparar la primera producción de A con el original en cuatro direcciones y tres colores. La cabeza y el cabello pueden inspeccionarse por separado. Las capas de B y el selector completo con guardado de peinado siguen pendientes.

El desarrollador realiza los commits y push. El primer push se hará cuando se active GitHub y exista un commit de la base revisada; no depende de terminar el juego ni todo el Sprint 0.

## Recursos y licencia

Las 17 imágenes iniciales se conservan como referencias de preproducción. El Product Owner confirmó su generación con IA; su herramienta, materiales de entrada y condiciones de uso siguen por documentar. Las nuevas muestras registran image_gen y sus prompts en archivos JSON. Las marcas y los elementos descartados que aparecen en las referencias no se incorporan automáticamente al juego.

La licencia del proyecto está pendiente. Este paquete no añade una licencia general a materiales de terceros. El inventario permite comprobar que las imágenes conservadas coinciden con las entregadas.
