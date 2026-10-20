# Primera cabeza por capas — peinado A v01

- Proyecto: programation-world. Historia: S0-03, arte y personalización.
- Fecha de esta entrega: 2026-10-20. Versión: 0.1.
- Estado: composición nativa de A preparada para revisión; verificaciones de píxeles y controlador superadas. Pruebas en navegador pendientes.
- Conceptos aprobados: original, A y B, mediante «si, esos estilos estan buenos, conservamos a y b y tambien el original, y seguimos» el 2026-10-19.

## 1. Entregable de este paso

Se prepararon una cabeza auxiliar sin cabello y el cabello A como recursos separados, en las cuatro direcciones. El visor compara la base original con A, permite ver reposo y marcha, cambiar entre los tres colores de abrigo e inspeccionar las capas por separado.

Se sigue la secuencia de producción acordada: comprobar primero un peinado por capas antes de extender el procedimiento a B. Los tres conceptos permanecen aprobados. La forma B todavía no tiene capas nativas; no se presenta como integrada.

## 2. Abrir y revisar

1. Extraer el paquete completo dentro de programation-world, conservando las rutas.
2. Abrir [avatar-head-lab.html](../../tools/art-preview/avatar-head-lab.html). No requiere iniciar un servidor ni instalar paquetes.
3. Comparar Original aprobado y A en Frente, Izquierda, Derecha y Espalda.
4. Cambiar verde, azul y terracota. Pulsar Ver caminando y Volver al reposo; Cuadro siguiente recorre las poses con la reproducción detenida.
5. Desactivar Mostrar cabeza base o Mostrar cabello A para inspeccionar el montaje. Restaurar ambas capas recupera el resultado completo.
6. Comparar a tamaño real y ampliado la unión de rostro, cabello, cuello, capucha y mochila. El resultado nativo de A necesita esta revisión además de la aceptación del concepto.

El visor anterior de [colores y archivo de apariencia](../../tools/art-preview/avatar-customization.html) continúa disponible. El archivo JSON de apariencia mantiene schemaVersion 1; esta prueba no añade todavía un identificador de cabello al guardado. La pista con desplazamiento está en [avatar-walk.html](../../tools/art-preview/avatar-walk.html).

## 3. Contrato y composición

| Elemento | Valor de esta prueba |
| --- | --- |
| Cuadro y anclaje | 32 × 48; (16, 46). |
| Direcciones | Frente, izquierda, derecha y espalda. |
| Recursos nuevos | Cabeza auxiliar y cabello A, cada uno en una tira de 128 × 48. |
| Animación | Cuatro reposos y dieciséis poses de marcha existentes. |
| Composición | Retirar la franja de cabeza anterior, dibujar cabeza auxiliar, reutilizar regiones del rostro, añadir cabello y reemplazar las regiones de ojos con los bytes aprobados. |
| Original | Se devuelve íntegro, sin la nueva composición de cabeza. |

La cabeza del atlas anterior no se cubre simplemente con otro peinado: primero se limpia la franja superior de veinte filas. Esto evita dejar mechones exteriores del cabello original cuando se usa A. Las capas nuevas tienen contenido solo por encima de la fila 22; desde esa fila hasta el final, los píxeles del cuerpo, mochila inferior, piernas y pies se conservan exactamente respecto del avatar del mismo color.

El montaje reutiliza regiones concretas del rostro, no toda la cabeza anterior. Las regiones de ojos se reemplazan directamente después del cabello, sin mezclar alfa, para conservar sus valores RGBA. En el frente siguen siendo blanco exterior de una columna y negro interior de dos columnas, con borde superior oscuro. Los ojos de la fuente auxiliar generada no se usan como sustitutos de los aprobados.

El resto de la cabeza auxiliar se ha generado para esta prueba. Su ajuste con orejas, frente y cuello requiere revisión visual a tamaño nativo. El orden de dibujo resuelve este peinado corto; los recursos posteriores de B deberán comprobar sus propias superposiciones. No se declara terminado un sistema general de accesorios o capas de ropa.

## 4. Archivos y módulos

| Ruta | Responsabilidad |
| --- | --- |
| art/concepts/avatars/avatar-head-layers-a-source-v01.png | Primera fuente generada, conservada como antecedente. |
| art/concepts/avatars/avatar-head-layers-a-source-v02.png | Fuente activa, con los fragmentos de piel retirados de la fila de cabello. |
| art/exports/avatars/avatar-neutral-head-v01.png | Cuatro cabezas auxiliares en resolución nativa. |
| art/exports/avatars/avatar-hair-sidepart-v01.png | Cuatro capas nativas de cabello A. |
| art/exports/avatars/avatar-head-layers-a-v01.json | Recortes, posiciones, parches reutilizados, hashes y prompts exactos. |
| tools/art-preview/avatar-head-core.js | Composición de píxeles separada del DOM y del motor. |
| tools/art-preview/avatar-head-data.js | Datos locales para abrir el visor sin servidor ni lectura de píxeles desde imágenes file://. |
| tools/art-preview/avatar-head-lab.html | Presentación de la comparación y controles de inspección. |
| tools/art-preview/avatar-head-lab.js | Dirección, color, reproducción, capas y caché. |
| tools/art-preview/export-avatar-head-layers.cjs | Exportación reproducible desde los recortes; herramienta opcional de autoría. |
| tools/art-preview/build-avatar-head-data.py | Actualización de la copia de datos; solo Python 3 estándar. |
| tools/art-preview/check-avatar-head.cjs | Comprobaciones de fuentes, composición, ojos, cuerpo e inmutabilidad. |
| tools/art-preview/check-avatar-head-controller.cjs | Flujo del controlador con adaptador DOM/Canvas mínimo. |
| docs/qa/avatar-head-layers-a-v01-checks.json | Resultado de 120 composiciones de control. |
| docs/qa/avatar-head-layers-a-v01-controller-checks.json | Resultados de lógica de controles; no acreditan navegador. |
| docs/qa/avatar-head-layers-a-v01-render-checks.json | Verificación con Canvas de referencia. |
| docs/qa/avatar-head-layers-a-v01-comparison.png | Comparación renderizada del original y A en sus tres colores. |

El visor reutiliza los módulos de marcha y colores. Las composiciones se guardan en caché por color y visibilidad de capas; no se reconstruye el atlas completo en cada cuadro de animación.

## 5. Verificación realizada

- Original y A por tres colores y veinte cuadros: 120 composiciones verificadas. El original conserva sus bytes; A cambia la cabeza en todas las direcciones.
- Los ojos reutilizados son idénticos y el cuerpo desde la fila 22, incluidos los pies y su apoyo, conserva sus bytes. La cabeza se mantiene estable en las cuatro poses de cada dirección.
- Desactivar ambas capas no recupera el cabello original; los controles de inspección conservan el cuerpo.
- Hashes de las fuentes y exportaciones, datos locales, sintaxis y ausencia de mutación del atlas de entrada comprobados.
- En Canvas de referencia se comprobaron 80 cuadros: original verde y A en sus tres colores. Ojos y cuerpo siguen iguales después del renderizado.
- El controlador se ejercitó con Node VM y un adaptador mínimo: inicio, dirección, color, reproducción, vuelta de ciclo, paso manual, capas y regreso al reposo.

Verificaciones opcionales desde la raíz, sin instalar paquetes del proyecto:

```sh
node tools/art-preview/check-avatar-head.cjs
node tools/art-preview/check-avatar-head-controller.cjs
python3 tools/art-preview/build-avatar-head-data.py --check
```

El verificador de datos reutiliza el decodificador PNG de build-avatar-appearance-data.py. Si cambia el manifiesto, regenerar avatar-head-data.js con el comando Python sin --check y volver a comprobar.

La exportación de recursos se preparó con @napi-rs/canvas 0.1.100 disponible en el entorno de autoría. export-avatar-head-layers.cjs necesita esa herramienta para regenerar los PNG. El visor y los verificadores anteriores no la necesitan. No se ha añadido como dependencia del cliente del juego ni se ha instalado un proyecto Phaser en este paso.

## 6. Pendientes de navegador y aceptación

No se ejecutó un navegador. La comparación PNG es un renderizado de referencia, no una captura del HTML. El adaptador del controlador no prueba disposición visual, foco real ni reproducción en un navegador.

- [ ] Registrar navegador, versión y resolución de la prueba local.
- [ ] Comprobar todos los controles y la lectura con teclado y ratón.
- [ ] Revisar A a tamaño nativo y ampliado, sobre todo perfiles, orejas, cuello y mochila.
- [ ] Revisar en marcha que no haya cortes ni saltos al regresar al reposo.
- [ ] Registrar aceptación del resultado nativo o ajustes concretos.

La aceptación previa de A y B corresponde a sus conceptos. Esta comprobación nativa no solicita elegir de nuevo el catálogo; verifica su producción antes de ampliarla. S0-03 continúa abierta.

## 7. Procedencia y siguiente paso

Las fuentes se generaron con image_gen integrado. La segunda pasada retiró piel y orejas que habían aparecido en la fila destinada solo al cabello. Ambos originales RGBA de 1774 × 887 se conservan sin retoques posteriores; la fuente activa tiene transparencia real. El manifiesto registra los dos prompts completos, referencias y hashes. El modelo concreto no fue informado.

Los PNG nativos se exportan mediante recortes y escalado sin suavizado; el compositor reutiliza los ojos y las poses existentes. No se incorporan nombres, marcas ni instituciones reales. La revisión de procedencia de las referencias originales mantiene sus pendientes.

Después de revisar este paquete, el desarrollador puede guardar un commit local:

```text
feat: agregar primera prueba de cabeza y cabello A por capas
```

El proyecto ya está en GitHub; el asistente tiene autorización para incorporar avances dentro del alcance acordado. El visor se abre desde una copia local. Después corresponde producir B con este contrato comprobado y ampliar el selector y la compatibilidad del archivo de apariencia.
