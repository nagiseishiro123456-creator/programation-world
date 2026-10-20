# Estructura propuesta del repositorio

- Versión: 0.2.
- Fecha: 2026-10-18.
- Estado: propuesta para revisión.
- Relación: [Project Charter](00-project-charter.md).

## 1. Organización

Se propone un único repositorio para juego, servidor, contenidos y documentación. Las carpetas se incorporarán cuando exista contenido real que versionar. Este paquete contiene el Charter, esta propuesta de estructura y la revisión de referencias; las demás rutas describen la estructura prevista.

| Ruta propuesta | Contenido y responsabilidad |
| --- | --- |
| README.md | Presentación, estado real, instrucciones verificadas e índice documental. |
| apps/client/ | Juego Phaser + TypeScript, escenas e interfaz del navegador. |
| apps/server/ | Servidor compartido; implementación sujeta a decisión técnica. |
| packages/shared/ | Contratos y tipos comunes; nunca secretos ni soluciones privadas. |
| packages/learning/ | Ejercicios, objetivos y rúbricas; separar datos públicos y evaluación privada. |
| content/zones/Z01/ | Datos de la primera zona: mapa, diálogos y actividades. |
| assets/game/ | Recursos exportados para el juego. |
| art/source/ | Fuentes editables y referencias que se permita redistribuir. |
| tests/ | Pruebas de integración y recorridos completos; pruebas locales junto al módulo correspondiente. |
| docs/ | Gestión, diseño, decisiones técnicas, evidencias y operación. |
| .github/ | Plantillas de issues y pull requests; automatización cuando exista código verificable. |

El mecanismo de ejecución de Python se ubicará según la decisión de aislamiento. No se impone todavía un servicio adicional ni un proveedor.

## 2. Documentación existente y prevista

| Ruta | Momento de creación o actualización |
| --- | --- |
| docs/00-project-charter.md | Este paquete; actualizar cuando cambien propósito o alcance. |
| docs/01-repository-structure.md | Este paquete; actualizar si cambia la organización. |
| docs/design/reference-review.md | Incluido: inventario visual y decisiones del Product Owner sobre formación y entrevistas. Mantener pendientes de procedencia y uso. |
| docs/design/gdd.md | Al concretar las reglas del juego y sus interacciones. |
| docs/design/art-direction.md | Después de revisar referencias y elegir una dirección visual. |
| docs/design/avatar-customization.md | Al definir opciones, combinaciones, animación y persistencia del avatar. |
| docs/learning/curriculum-python.md | Antes de producir los ejercicios de la primera ruta. |
| docs/architecture/tdd.md | Antes de implementar la base técnica. |
| docs/architecture/decisions/ | Una decisión por archivo: contexto, alternativas, elección y consecuencias. |
| docs/world/Z01.md | Antes de construir la zona; mantener alcance, recorridos y aceptación. |
| docs/management/backlog.md | Al refinar los ítems iniciales del Charter. |
| docs/management/definition-of-done.md | Al aprobar y ampliar los criterios de terminado. |
| docs/sprints/sprint-00.md | Objetivo, capacidad, tareas, decisiones, revisión y retrospectiva. |
| docs/qa/test-plan.md | Antes de validar una funcionalidad o piloto. |
| docs/qa/evidence/ | Capturas y resultados vinculados a tareas y revisiones reales. |
| docs/legal/reference-register.md | Al recibir referencias; antes de incorporar recursos. |
| docs/legal/asset-register.md | Al crear, comprar o integrar un recurso. |
| docs/legal/privacy-design.md | Antes de recoger datos de participantes. |
| docs/operations/render.md | Cuando se prepare el primer despliegue de prueba. |
| docs/operations/data-recovery.md | Antes de depender del guardado persistente. |

Los documentos se crearán con el nivel de detalle necesario para la tarea. Una ruta prevista no significa que ese entregable ya esté terminado.

## 3. Registro de referencias y recursos

Cada referencia tendrá identificador, autor o procedencia, enlace o archivo original, fecha, uso pretendido, derechos o licencia conocidos, decisión y responsable de revisión.

Cada recurso incorporado tendrá además ruta de uso, modificaciones, atribución requerida y condiciones de redistribución. Las referencias que no podamos publicar se describirán mediante metadatos o enlaces autorizados.

El nombre comercial y la licencia del proyecto siguen pendientes. No se asignará automáticamente una licencia a código, arte o material de terceros.

## 4. Flujo de Git y trazabilidad

Se propone una rama main para contenido revisado y ramas breves por tarea, por ejemplo docs/s0-01-charter. Cada cambio se revisará mediante pull request con propósito, resultado, comprobaciones, documentos afectados y limitaciones.

La cadena de seguimiento será:

Requisito del Charter → ítem del backlog → tarea o issue → cambio o pull request → evidencia → revisión.

Antes de comenzar una tarea se registrarán aceptación y dependencias. Durante el trabajo se anotarán decisiones. Al cerrarla se actualizarán documentación y evidencias. Al finalizar el sprint se registrarán demostración, observaciones y retrospectiva.

No se subirán credenciales, datos personales de prueba, dependencias descargadas ni compilaciones generadas sin una necesidad definida. Los archivos de configuración de ejemplo incluirán valores ficticios.

## 5. Evidencias y diseño visual

Las capturas se nombrarán con zona, tarea, versión y descripción, sin datos personales. Cada resultado indicará fecha, revisión de código cuando exista, navegador, dispositivo y pasos reproducibles.

La revisión visual comprobará coherencia del avatar con el escenario, animaciones, combinaciones de personalización, lectura de textos y globos, interfaz de código y comportamiento a la escala real.

Un prototipo, una imagen generada o una prueba manual se identificará como tal; no se presentará como funcionalidad terminada ni como prueba automatizada.

## 6. Incorporación del paquete

El ZIP contiene:

- docs/00-project-charter.md.
- docs/01-repository-structure.md.
- docs/design/reference-review.md.

Estos archivos pueden copiarse a la raíz del repositorio elegido, conservando la carpeta docs. Antes del primer commit se revisarán el contenido y la visibilidad del repositorio.

La revisión 0.2 mantiene coherentes los tres documentos con el alcance educativo en institutos y universidades y la exclusión del combate. El ZIP no incluye las imágenes de referencia ni modifica sus originales.

No se ha creado, conectado, publicado ni modificado un repositorio remoto. Tampoco se han generado todavía código del juego, imágenes definitivas, workflows de integración ni configuración de despliegue.

