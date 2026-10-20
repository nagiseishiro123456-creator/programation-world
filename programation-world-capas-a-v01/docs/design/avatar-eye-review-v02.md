# Revisión de ojos del avatar — v02

- Proyecto: programation-world.
- Fecha: 2026-10-19.
- Historia: S0-03. Estado: corrección preparada, pendiente de revisión visual del Product Owner.

## Solicitud

En la vista frontal pequeña los ojos parecían demasiado negros. El Product Owner señaló que la parte blanca de los ojos sí se veía en la lámina grande y pidió conservar esa lectura al reducir el personaje.

## Cambio

Se preparó una fuente v02 con blanco más amplio en ambos ojos frontales y pupilas oscuras. El visor mantiene el cuadro de 32 × 48 y el anclaje (16, 46). Incluye una comparación del frente anterior con el corregido, ambos dibujados primero en ese tamaño y después ampliados.

El manifiesto v02 cambia la fuente únicamente de front mediante sourceOverride. Izquierda, derecha y espalda siguen usando el PNG v01. La fuente anterior y su manifiesto permanecen disponibles.

La edición se produjo con la herramienta integrada image_gen; el prompt exacto y el hash figuran en art/concepts/avatars/avatar-base-01-v02.json. El PNG generado no se retocó después. La vista frontal regenerada conserva el diseño y puede incluir pequeñas variaciones de color o contorno fuera de los ojos; las otras tres vistas activas se conservan exactamente desde v01.

## Aplicar la entrega local

1. Extraer el contenido de programation-world-avatar-ojos-v02.zip dentro de la carpeta local programation-world, conservando las rutas relativas. El paquete contiene únicamente los archivos de esta prueba y sus registros; no sustituir ni borrar el resto del proyecto.
2. Abrir tools/art-preview/avatar-base-01.html en el navegador. Si ya estaba abierto, recargar con Ctrl + F5 o cerrar y volver a abrir la página.
3. Comparar la tarjeta Frente a tamaño real, la ampliación y el bloque «Ojos de frente: antes y corrección».
4. Revisar también las tres direcciones restantes, los fondos y el apoyo de los pies. La lámina inferior sigue la dirección seleccionada.

## Evidencia y criterio de aceptación

En la referencia Canvas 2D de Node, las dos filas centrales de cada ojo frontal pasan de dos a cuatro píxeles blancos, conservando la pupila oscura. El resultado medido y la sintaxis del visor se registran en docs/qa/avatar-base-01-checks.json.

La medición confirma la presencia del blanco en ese renderizador; la aprobación artística corresponde a la revisión en el navegador del Product Owner. La ejecución de navegador en el entorno de preparación sigue pendiente por falta de Chromium.

- El blanco debe distinguirse en ambos ojos a tamaño real y ampliado.
- Debe conservarse una pupila oscura en cada ojo y reconocerse la misma identidad del avatar.
- Deben mantenerse el cuadro, el anclaje y las otras tres vistas activas.

## Estado de Scrum y Git

S0-03 sigue abierta hasta revisar el resultado. Esta corrección no incorpora animación de marcha ni nuevos módulos del juego. El Product Owner realizará el commit local después de aprobar el aspecto. El push sigue reservado para el momento acordado de conectar el repositorio remoto.

Mensaje sugerido:

```text
art: mejorar lectura de ojos frontales del avatar
```
