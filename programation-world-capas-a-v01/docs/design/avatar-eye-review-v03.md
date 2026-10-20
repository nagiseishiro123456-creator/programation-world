# Ojos del avatar: punto medio — v03

- Proyecto: programation-world. Fecha: 2026-10-19.
- Historia: S0-03. Estado: preparado para revisión visual del Product Owner.

## Solicitud y ajuste

El Product Owner señaló que v02 tenía demasiado blanco y pidió un punto medio. La vista frontal v03 reduce el blanco y amplía la pupila; el visor permite comparar v01, v02 y v03. Izquierda, derecha y espalda siguen usando v01.

El cuadro sigue en 32 × 48 y el anclaje en (16, 46). En la referencia Canvas 2D, cada región central del ojo pasa de cuatro píxeles blancos en v02 a tres claros y tres oscuros en v03. El recorte frontal se desplaza un píxel de origen en horizontal para alinear el muestreo; equivale a 1/13 de píxel lógico. La preferencia artística sigue pendiente de revisión en navegador.

## Archivos y procedencia

La fuente es art/concepts/avatars/avatar-base-01-v03.png y el manifiesto vigente es avatar-base-01-v03.json en la misma carpeta. El PNG se produjo con image_gen, modo integrado precise-object-edit, y se conserva sin retoques posteriores. El prompt exacto, los hashes y los recortes constan en el manifiesto. Una regeneración puede introducir pequeñas variaciones fuera de los ojos en la vista frontal; las otras direcciones conservan sus fuentes originales.

## Probar localmente

1. Extraer programation-world-avatar-ojos-v03.zip dentro de la carpeta local programation-world conservando las rutas; combinar las carpetas con las existentes.
2. Abrir tools/art-preview/avatar-base-01.html y recargar con Ctrl + F5 si estaba abierto.
3. Comparar las tres versiones y la tarjeta Frente a tamaño real. Revisar el equilibrio entre blanco y pupila, las direcciones y el apoyo de los pies.

La sintaxis, los recortes, la proporción de ojos y la conservación de las otras vistas se comprueban con Canvas en Node; los resultados están en docs/qa/avatar-base-01-checks.json. No se ejecutó un navegador en el entorno de preparación.

## Seguimiento

S0-03 continúa abierta. El Product Owner conserva la revisión artística y realizará el commit local cuando corresponda. Mensaje sugerido: art: equilibrar blanco y pupilas del avatar frontal. Esta entrega no inicia la animación de marcha ni cambia el momento acordado para el push.
