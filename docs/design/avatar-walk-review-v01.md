# Primera marcha del avatar — v01

- Proyecto: programation-world. Historia: S0-03.
- Fecha: 2026-10-19. Estado: marcha v01 aprobada visualmente por el Product Owner.
- Antecedente: reposo v04 aprobado con «este pasa, ahora seguimos».
- Aceptación de marcha: «okey si me gusta seguimos seguimos». La aceptación visual no acredita las pruebas funcionales de navegador.

## Entrega

Se prepararon cuatro cuadros de marcha para frente, izquierda, derecha y espalda. El atlas nativo reúne los 16 cuadros nuevos y los cuatro reposos aprobados: 20 cuadros de 32 × 48 dentro de un PNG de 160 × 192. Todos conservan el anclaje (16, 46).

| Ruta | Función |
| --- | --- |
| art/concepts/avatars/avatar-base-01-walk-v01.png | Fuente generada de 16 poses; se conserva sin retoques. |
| art/concepts/avatars/avatar-base-01-walk-v01.json | Recortes, orden, composición, hashes y prompt exacto. |
| art/exports/avatars/avatar-base-01-walk-v01.png | Atlas de 20 cuadros nativos para inspección e integración posterior. |
| art/exports/avatars/avatar-base-01-walk-v01.json | Rectángulos y relación entre dirección, estado y ciclo. |
| tools/art-preview/avatar-walk.html | Visor local, revisión por cuadros y pista con teclado. |
| tools/art-preview/avatar-walk-core.js | Composición, lectura del atlas, tiempo de cuadros y movimiento de prueba. |
| tools/art-preview/avatar-walk-studio.js | Controles del visor. |
| tools/art-preview/avatar-walk-data.js | Copia de datos para abrir el HTML sin servidor. |
| docs/qa/avatar-walk-v01-checks.json | Resultados de las verificaciones y pendientes de navegador. |
| docs/qa/avatar-walk-v01-contact-sheet.png | Reposo y cuatro cuadros de cada dirección. |
| docs/qa/avatar-walk-v01-preview.mp4 | Vista animada del atlas, renderizada como evidencia. |

## Conservación del diseño

La fuente de marcha se generó con image_gen integrado, tomando v04 y v01 como referencias. La exportación conserva las primeras 22 filas de cada reposo aprobado y compone debajo el cuerpo de cada pose nueva. Así mantiene exactamente rostro, peinado y ojos en los cuadros pequeños. Los PNG de origen permanecen sin cambios.

Las fuentes siguen aplanadas: esta composición no añade capas editables de pelo, abrigo o accesorios. El Product Owner aceptó visualmente la marcha. El formato del atlas usa rectángulos propios del proyecto; el adaptador de Phaser sigue pendiente. La primera prueba de color del abrigo tiene su propio [registro de personalización](avatar-customization-v01.md).

## Abrir y revisar

1. Extraer el ZIP dentro de la carpeta local programation-world, conservando y combinando las rutas existentes.
2. Abrir tools/art-preview/avatar-walk.html; no requiere instalar paquetes ni iniciar un servidor.
3. Cambiar dirección, alternar Marcha en bucle y Reposo, pausar y recorrer los cuadros con Anterior y Siguiente.
4. Probar 4, 6, 8, 10 y 12 cuadros/s. Son ajustes de inspección; 8 es el valor inicial de prueba.
5. Activar el desplazamiento, hacer clic en la pista y usar WASD o las flechas. Al soltar debe regresar al reposo. El movimiento de prueba usa cuatro direcciones y queda limitado a la cuadrícula; no incorpora Z01 ni colisiones del mundo.

## Evidencia

Canvas 2D en Node verificó las 16 poses, la conservación exacta de la franja aprobada, los ojos interiores negros y el blanco exterior, el apoyo común y la igualdad de los 20 cuadros después de exportarlos y volverlos a leer del atlas. Se comprobaron la sintaxis, los hashes, los límites de ciclo y las funciones de dirección, liberación de teclas y límites de posición.

El verificador adicional no requiere paquetes externos y puede ejecutarse si Node está instalado:

```sh
node tools/art-preview/check-avatar-walk.cjs
```

No se ejecutó un navegador en el entorno de preparación. La reproducción, los controles reales de teclado y la transición a reposo requieren comprobación local. La aprobación visual ya está registrada, sin dar por realizadas esas comprobaciones. El video es una renderización del atlas, no una captura de navegador.

## Scrum y Git

La aceptación visual de v04 y de marcha v01 queda registrada. S0-03 permanece abierta por las comprobaciones de navegador y la personalización. La integración en Phaser, el mapa y el multijugador no forman parte de esta entrega.

La marcha ya está aceptada. Después de comprobar los archivos locales, el desarrollador puede guardar un commit:

```text
art: agregar primera marcha del avatar en cuatro direcciones
```

En la entrega original el asistente no ejecutó commit ni push. Desde el 2026-10-20 el repositorio está conectado y la autorización vigente permite incorporar los avances acordados.
