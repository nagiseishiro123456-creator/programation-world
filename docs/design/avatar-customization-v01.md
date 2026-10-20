# Personalización del avatar — prueba v01

- Proyecto: programation-world. Historia: S0-03, arte y personalización.
- Fecha: 2026-10-19. Versión: 0.2. Estado: colores aprobados visualmente por el Product Owner; comprobaciones de navegador pendientes.
- Aceptación: «si me gustan avanzamos». La aceptación visual no acredita el diálogo de descarga, la carga de archivos ni los controles en un navegador.
- Antecedentes: reposo v04 y marcha v01 aprobados visualmente por el Product Owner.
- Decisión de implementación: comenzar con el color del abrigo sobre la misma base. Nuevas formas de pelo y prendas requieren un paso de diseño posterior.

## 1. Objetivo y alcance

Comprobar una elección de apariencia que funcione en reposo y caminando, en las cuatro direcciones, antes de producir muchas opciones. El visor ofrece verde original, azul y terracota. Estas familias ya aparecen en el concepto del campus aprobado; el Product Owner aceptó los tres tonos de esta prueba el 2026-10-19. El catálogo completo del creador sigue abierto.

La apariencia se representa por identificadores estables y queda separada de movimiento, aprendizaje y progreso. Se conserva el avatar-base-01, el cuadro 32 × 48, el anclaje (16, 46), la geometría y el orden del ciclo. Esta entrega no define nuevas formas de pelo, prendas, accesorios ni el resto de opciones del futuro creador de personajes.

## 2. Abrir y usar

1. Extraer el paquete completo dentro de programation-world, conservando las rutas.
2. Abrir [avatar-customization.html](../../tools/art-preview/avatar-customization.html). No necesita instalar paquetes ni iniciar un servidor.
3. Elegir un color y cambiar entre Frente, Izquierda, Derecha y Espalda.
4. Pulsar Ver caminando para reproducir; Volver al reposo para detener. Cuadro siguiente permite recorrer las cuatro poses con la animación detenida.
5. Comparar las vistas a tamaño nativo y ampliado, y la tira de reposo más cuatro cuadros.
6. Guardar apariencia descarga programation-world-avatar.json. Cargar apariencia permite recuperar esa elección; Volver al verde restaura la base.

La selección vive en la sesión del visor. Para conservarla entre aperturas hay que descargar su archivo. No se registra una cuenta ni se guarda progreso del juego en esta prueba. La pista con WASD y flechas sigue en [avatar-walk.html](../../tools/art-preview/avatar-walk.html).

## 3. Módulos y archivos

| Ruta | Responsabilidad |
| --- | --- |
| art/exports/avatars/avatar-appearance-v01.json | Catálogo provisional, valores iniciales, referencia del atlas y regla de selección de píxeles. |
| tools/art-preview/avatar-appearance-core.js | Validación del archivo de apariencia y transformación de color, sin depender del DOM ni de Phaser. |
| tools/art-preview/avatar-appearance-data.js | Copia del catálogo y bytes RGBA del atlas para abrir la prueba sin servidor. |
| tools/art-preview/avatar-customization.html | Presentación y controles. |
| tools/art-preview/avatar-customization-studio.js | Selección, caché de cuadros, reproducción y archivos locales. |
| tools/art-preview/avatar-walk-core.js | Módulo compartido de lectura de cuadros y orden del ciclo. |
| tools/art-preview/build-avatar-appearance-data.py | Regenera los datos locales desde el PNG y el catálogo; usa solo Python 3 estándar. |
| tools/art-preview/check-avatar-appearance.cjs | Comprueba píxeles, integridad y contrato JSON; usa solo Node estándar. |
| docs/qa/avatar-customization-v01-checks.json | Resultados de las verificaciones sobre 60 cuadros: tres colores por 20 cuadros. |
| docs/qa/avatar-customization-v01-render-checks.json | Lectura del atlas y conservación de la cabeza mediante Canvas de referencia. |
| docs/qa/avatar-customization-v01-controller-checks.json | Lógica de controles ejercitada con un adaptador DOM mínimo; no acredita navegador. |
| docs/qa/avatar-customization-v01-comparison.png | Comparación renderizada con los módulos de esta prueba. |

El catálogo permite cambiar los tonos sin mezclar la elección con la interfaz. Reemplazar el dibujo requerirá revisar su regla de selección y regenerar los datos. No se garantiza que cualquier imagen nueva funcione con la misma máscara.

## 4. Contrato de apariencia

```json
{
  "schemaVersion": 1,
  "avatarId": "avatar-base-01",
  "jacketId": "green"
}
```

Valores aceptados de jacketId en esta prueba: green, blue y terracotta. El importador admite solo estas tres propiedades, la versión 1 y este avatar; rechaza identificadores desconocidos, propiedades adicionales, JSON inválido y archivos de más de 4 KB. Un archivo rechazado conserva la selección anterior.

Este contrato sirve para probar la selección local. La integración con una cuenta, la validación del servidor y el almacenamiento del juego se diseñarán después.

## 5. Conservación del arte y procedencia

No se generaron nuevas fuentes de imagen ni se modificaron los PNG existentes. El visor aplica una transformación de tono a los píxeles verdes del abrigo del atlas aprobado; mantiene su valor y saturación para conservar el sombreado. El verde original no aplica transformación y devuelve exactamente los mismos bytes RGBA.

La selección se limita a las filas locales 19–33 y a colores verdes suficientemente diferenciados. Incluye el cuello del abrigo. Las filas 0–18, los ojos con blanco exterior y negro interior, los materiales grises, la transparencia y las botas se conservan. La regla se verificó sobre los 20 cuadros de este atlas y sigue siendo específica de este recurso aplanado. No equivale a tener capas editables de ropa.

Los bytes RGBA se incorporan a un script local para evitar la lectura de píxeles desde imágenes con origen file://. El atlas original y su hash se mantienen como referencia. Cada color se compone una vez y se reutiliza durante la reproducción.

Las familias cromáticas remiten a [campus-avatar-v01.png](../../art/concepts/Z01/campus-avatar-v01.png). La procedencia de las fuentes generadas sigue en los manifiestos del avatar y la marcha. Esta prueba no incorpora nombres, marcas, fachadas ni instituciones reales; no cambia el estado pendiente de las licencias y referencias iniciales.

## 6. Verificación

Comprobado en la preparación:

- Sintaxis JavaScript, coincidencia entre catálogo y copia local, hash PNG y hash de bytes RGBA.
- Verde idéntico al original; las transformaciones no mutan la fuente.
- Los 60 cuadros conservan alfa, cabeza, ojos, botas y materiales no verdes. Azul y terracota cambian el abrigo en todos sus cuadros y conservan el sombreado.
- Guardado y lectura del contrato JSON, y rechazo de entradas incompatibles o demasiado grandes.
- Lectura y composición de los 60 cuadros con Canvas de referencia. El verde renderizado coincide con el PNG original y las otras dos variantes conservan exactamente las filas 0–18 de cada cabeza.
- Flujo del controlador con Node VM y un adaptador DOM mínimo: selección, dirección, animación, avance manual, contenido de descarga, importación y recuperación tras error. Esta prueba no abre un navegador ni verifica su diálogo de descarga o la disposición visual del HTML.
- La marcha conserva sus verificaciones previas. La aprobación visual se registra aparte de estas pruebas.

Verificación opcional desde la raíz del proyecto:

```sh
node tools/art-preview/check-avatar-walk.cjs
node tools/art-preview/check-avatar-appearance.cjs
python3 tools/art-preview/build-avatar-appearance-data.py --check
```

Si se modifica el catálogo después de revisarlo, regenerar avatar-appearance-data.js con el mismo comando Python sin --check y volver a comprobar. El generador admite el PNG RGBA8 no entrelazado usado por el proyecto; rechaza otros formatos.

No se ejecutó un navegador en este entorno. La comparación PNG es un renderizado de referencia, no una captura del visor. Antes de dar por terminada esta prueba, comprobar en el navegador del desarrollador:

- [ ] Elegir los tres colores y recorrer las cuatro direcciones.
- [ ] Alternar reposo y marcha, y recorrer manualmente los cuatro cuadros.
- [ ] Descargar un JSON, cambiar de color y volver a cargarlo para recuperar la elección.
- [ ] Cargar un JSON inválido y confirmar que se muestra el error sin perder la selección.
- [ ] Comprobar lectura de etiquetas, foco con teclado y presentación a 1280 × 720 y 1920 × 1080.
- [ ] Registrar navegador y versión, resultado y cualquier ajuste visual.

## 7. Scrum, revisión y commit

La aprobación «okey si me gusta seguimos seguimos» corresponde a la marcha v01. La aceptación posterior «si me gustan avanzamos» aprueba visualmente los colores verde, azul y terracota. Los controles todavía requieren comprobación en navegador. S0-03 sigue abierta; la existencia de este visor no cierra el creador de personajes ni la integración en el cliente.

Al revisar los archivos de este paquete, el desarrollador puede guardar un commit local con:

```text
feat: agregar prueba local de colores del avatar y registrar marcha aprobada
```

Desde el 2026-10-20 GitHub está conectado y el asistente tiene autorización para incorporar los avances acordados. Consultar la guía vigente de trabajo.

Siguiente punto de diseño: revisar las dos formas de cabello de [avatar-hair-review-v01.md](avatar-hair-review-v01.md). Se propone conservar el peinado actual y añadir A o B tras su aceptación; la producción por capas y la integración se realizarán después.
