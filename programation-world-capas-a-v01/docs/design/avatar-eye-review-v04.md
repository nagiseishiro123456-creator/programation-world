# Avatar: pupilas interiores y blanco exterior — v04

- Proyecto: programation-world. Fecha: 2026-10-19.
- Historia: S0-03. Estado: aspecto v04 aprobado por el Product Owner el 2026-10-19 con «este pasa, ahora seguimos».

## Criterio de la referencia

El acercamiento enviado por el Product Owner muestra dos bloques negros verticales continuos orientados hacia el centro del rostro. Una franja blanca queda en el extremo exterior de cada ojo, con un borde superior oscuro.

| Ojo visto en pantalla | Lado izquierdo del ojo | Lado derecho del ojo |
| --- | --- | --- |
| Izquierdo | Blanco exterior | Negro hacia el centro |
| Derecho | Negro hacia el centro | Blanco exterior |

La revisión sustituye el borde escalonado de v03 por esta distribución continua.

## Implementación y archivos

- art/concepts/avatars/avatar-base-01-v04.png: nueva fuente frontal generada mediante image_gen integrado, sin retoques posteriores.
- art/concepts/avatars/avatar-base-01-v04.json: manifiesto vigente con prompt exacto, hashes, recortes y nativeEyeSampling.
- art/references/reviews/front-eye-layout-reference.png: referencia proporcionada por el Product Owner, conservada sin alterar.
- tools/art-preview/avatar-base-01.html: visor de la vista activa v04 y comparación con v01 y v03.
- docs/qa/avatar-base-01-checks.json: evidencia de verificación.
- docs/qa/avatar-eyes-v04-comparison.png: comparación del renderizado a tamaño real y ampliado.

El visor compone los detalles de los ojos muestreando seis regiones de la misma fuente v04: dos pupilas, dos franjas blancas y dos bordes superiores. Así conserva la distribución al reducirla a 32 × 48. Esta composición corresponde al visor; los cuatro reposos se exportaron después junto con la primera marcha; la integración en Phaser sigue pendiente.

Se mantienen el cuadro de 32 × 48, el anclaje (16, 46) y las tres direcciones restantes tomadas de v01. La nueva fuente frontal puede contener pequeñas variaciones fuera de los ojos por la generación; no se presenta como una edición idéntica píxel por píxel.

## Verificación y apertura local

La prueba usa la función real de dibujo del HTML con Canvas 2D en Node. Comprueba que ambas filas centrales sean blanco-negro-negro en el ojo izquierdo y negro-negro-blanco en el derecho, con pupilas continuas y bordes superiores oscuros. También verifica la sintaxis, los hashes, el anclaje, las otras vistas y que el muestreo adicional se limite a las regiones de ojos.

No se ejecutó un navegador en este entorno. El aspecto fue aceptado por el Product Owner. Se conservan estos pasos para repetir la inspección local:

1. Extraer programation-world-avatar-ojos-v04.zip dentro de la carpeta local programation-world, combinando las carpetas y conservando las rutas.
2. Abrir tools/art-preview/avatar-base-01.html. Si estaba abierto, recargar con Ctrl + F5.
3. Comparar v03 con v04, revisar Frente a tamaño real y ampliar los ojos. Confirmar la orientación del negro y el blanco según la tabla.

El aspecto de reposo v04 está aprobado. S0-03 sigue abierta por la revisión de marcha y los otros pendientes de arte. El Product Owner realizará el commit local cuando corresponda; no se ha ejecutado commit ni push. Mensaje sugerido: art: corregir pupilas interiores y blanco exterior del avatar.
