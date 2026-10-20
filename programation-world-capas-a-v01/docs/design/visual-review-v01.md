# Primera muestra visual — programation-world

- Fecha: 2026-10-19. Versión: 0.2.
- Historia: S0-03, arte y personalización.
- Estado: aspecto de la muestra aprobado por el Product Owner el 2026-10-19; se autoriza continuar con la ficha del avatar y su prueba de vistas.
- Base: [dirección visual aprobada](art-direction.md).

## 1. Archivos de esta entrega

| Ruta | Contenido |
| --- | --- |
| art/concepts/Z01/campus-avatar-v01.png | Escena del instituto y tres apariencias del avatar. |
| art/concepts/Z01/campus-avatar-v01.json | Prompts exactos, referencias, método de generación y hash de la imagen. |
| docs/design/art-direction.md | Guía actualizada con la aprobación del Product Owner. |
| docs/design/visual-review-v01.md | Este registro de revisión. |

[Abrir imagen](../../art/concepts/Z01/campus-avatar-v01.png) · [Consultar prompts y procedencia](../../art/concepts/Z01/campus-avatar-v01.json).

## 2. Qué se ha revisado

- Escena estática de acceso a un instituto ficticio, con ladrillo, caminos, puerta, bancos y vegetación.
- Tres apariencias del avatar: abrigo verde, azul y terracota, con cambios de cabello sobre una base visual común.
- Señalética genérica «INSTITUTO» y diálogo «¡Vamos a programar!».
- Ausencia visual de nombres institucionales reales y controles de combate.
- Segunda iteración para reducir el tamaño de los avatares respecto de la puerta; se conserva como muestra seleccionada de esta entrega.

La revisión anterior es una inspección visual de concepto. La coincidencia exacta entre rasgos, tamaños y capas todavía debe verificarse en los recursos de producción.

## 3. Medidas y pendientes

La imagen entregada es PNG RGB de 1672 × 941 píxeles. La vista base aprobada sigue siendo 960 × 540, con celdas 32 × 32 y lienzos de avatar 32 × 48. No se han exportado sprites independientes ni se han medido sus cuadros en esta ilustración.

Quedan pendientes la cámara de exploración, la escala definitiva, las cuatro direcciones, el ciclo de marcha, la transparencia de sprites y la separación entre escenario, personajes y textos. La vista generada presenta la fachada de forma prominente; su encuadre para explorar se revisará en el prototipo.

No se han realizado pruebas de navegador, interacción, contraste de la interfaz implementada o lectura en vistas de 1280 × 720 y 1920 × 1080. Los textos dibujados sirven como muestra de composición; la interfaz final utilizará texto editable.

## 4. Decisión y siguiente paso

- [x] Dirección visual aprobada por el Product Owner.
- [x] Primera muestra generada y revisada visualmente por el asistente.
- [x] El Product Owner aprueba el aspecto del instituto y de los avatares: 2026-10-19.
- [ ] Se preparan y verifican los recursos y evidencias restantes de S0-03.

S0-03 continúa abierta. Con la muestra aprobada, el siguiente paso es concretar la ficha del avatar y preparar una prueba de sus recursos a las medidas acordadas. La primera imagen no demuestra una funcionalidad jugable.

## 5. Registro local

Generación realizada con la herramienta integrada image_gen: una generación a partir de REF-10, REF-12 y REF-13, y una edición para corregir escala. El modelo concreto no fue informado por el resultado de la herramienta. Los prompts completos se conservan en el JSON de procedencia.

Los originales de referencia se conservan sin cambios. Las condiciones de uso de sus materiales de entrada continúan pendientes según reference-review.md.

El desarrollador realiza los commits y push. La aprobación queda registrada en esta revisión 0.2; la muestra PNG se conserva sin cambios.
