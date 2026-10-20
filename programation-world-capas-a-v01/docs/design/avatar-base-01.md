# Ficha del avatar base 01 — programation-world

- Fecha inicial: 2026-10-19. Actualización: 2026-10-20. Versión: 0.8.
- Historia: S0-03, arte y personalización.
- Estado: reposo v04 y marcha v01 aprobados visualmente el 2026-10-19; colores de abrigo aceptados con «si me gustan avanzamos». Original, A y B aprobados como conceptos; primera composición por capas de A preparada. S0-03 abierta.
- Antecedente: el aspecto del campus y los avatares fue aprobado por el Product Owner.

## 1. Identidad visual

Esta base de prueba conserva el avatar «BASE» de la muestra aprobada: cabello castaño corto y despeinado, rostro y tono de piel de esa referencia, abrigo verde, camiseta gris, pantalón azul oscuro, botas marrones y mochila gris.

El identificador avatar-base-01 corresponde a un recurso de apariencia. No asigna nombre, historia, habilidades ni profesión al jugador. La primera prueba permite elegir color de abrigo; el catálogo completo del creador se definirá después.

## 2. Contrato de la prueba

| Elemento | Valor |
| --- | --- |
| Identificador estable | avatar-base-01 |
| Cuadro presentado en el navegador | 32 × 48 píxeles |
| Anclaje de prueba | (16, 46), asociado al apoyo de los pies |
| Vistas | front: frente; left: izquierda; right: derecha; back: espalda |
| Estado de la base v04 | Reposo aprobado, una vista por dirección |
| Prueba de marcha v01 | Cuatro cuadros por dirección; aprobada visualmente |
| Personalización v01 | Verde original, azul y terracota del abrigo; aprobados visualmente |
| Lámina de origen | PNG RGBA de 2048 × 768 píxeles |
| Rectángulo de origen por vista | 416 × 624 píxeles; coordenadas registradas en el JSON |

Los recortes y su escala se presentan mediante Canvas en la página de inspección. El frente usa la revisión v04; izquierda, derecha y espalda siguen usando v01. Las láminas se conservan sin alterar los PNG de origen. Para dibujar los ojos a 32 × 48, el visor compone regiones de pupila, blanco y borde superior tomadas de la fuente v04; los datos están en nativeEyeSampling del manifiesto. La marcha aprobada se presenta en un visor separado y exporta un atlas nativo de 160 × 192: cuatro reposos y dieciséis cuadros de marcha de 32 × 48.

## 3. Separación por módulos

Propuesta de arquitectura: la lógica de movimiento, aprendizaje y progreso referenciará un identificador de apariencia y una dirección; las rutas de imágenes, recortes y anclajes estarán en datos de recursos. Phaser dispone de texturas identificadas por claves y cuadros, que permiten esta separación [T1].

Mantener el identificador y el contrato de cuadros facilitará sustituir el arte. Cambiar la perspectiva, el tamaño de los personajes o el punto de apoyo requerirá revisar también cámara, profundidad de dibujo y colisiones.

La apariencia se separa de las reglas de progreso. Las fuentes originales están aplanadas; la primera prueba de A ya añade cabeza auxiliar y cabello separados. Las capas de B, nuevas prendas y accesorios siguen pendientes. La exportación original de marcha reutiliza los primeros 22 píxeles de cada reposo aprobado para conservar cabeza y rostro, y compone debajo el cuerpo de cada pose nueva. La prueba de A reutiliza ese atlas como cuerpo de referencia y compone su nueva cabeza, conservando los ojos aprobados.

La prueba de personalización v01 separa catálogo, configuración y transformación de color del visor. Cambia el tono de los píxeles verdes del abrigo, incluyendo su cuello, sin cambiar la geometría ni los ojos. El verde devuelve los bytes originales. La regla de selección es específica de este atlas; no sustituye la producción futura de capas para nuevos peinados y prendas. Su contrato está en [avatar-customization-v01.md](avatar-customization-v01.md).

## 4. Archivos y apertura local

| Ruta | Contenido |
| --- | --- |
| art/concepts/avatars/avatar-base-01-v01.png | Fuente conservada para izquierda, derecha y espalda, y comparación del frente anterior. |
| art/concepts/avatars/avatar-base-01-v02.png | Antecedente con exceso de blanco según la revisión del Product Owner; se conserva para comparar. |
| art/concepts/avatars/avatar-base-01-v03.png | Antecedente del ajuste con borde escalonado; se conserva para comparar. |
| art/concepts/avatars/avatar-base-01-v04.png | Fuente frontal para la distribución solicitada; las otras figuras de esta lámina no se utilizan. |
| art/references/reviews/front-eye-layout-reference.png | Referencia de ojos enviada por el Product Owner, conservada sin cambios. |
| art/concepts/avatars/avatar-base-01-v04.json | Manifiesto vigente: fuente original y sustitución de fuente solo para front; recortes, anclaje, procedencia y prompts. |
| docs/design/avatar-eye-review-v04.md | Motivo del ajuste, instalación y criterios de revisión. |
| tools/art-preview/avatar-base-01.html | Visor del reposo v04 aprobado. |
| tools/art-preview/avatar-walk.html | Reproducción, pausa, revisión de cuadros y pista con teclado. |
| art/exports/avatars/avatar-base-01-walk-v01.png | Atlas nativo con 20 cuadros. |
| art/exports/avatars/avatar-base-01-walk-v01.json | Rectángulos de cuadros, estados, direcciones y orden del ciclo. |
| docs/design/avatar-walk-review-v01.md | Registro de la primera marcha y comprobaciones pendientes. |
| tools/art-preview/avatar-customization.html | Primera prueba de color del abrigo, con guardado y carga de apariencia. |
| art/exports/avatars/avatar-appearance-v01.json | Catálogo provisional, contrato y referencia al atlas. |
| docs/qa/avatar-base-01-checks.json | Resultados de sintaxis y renderizado de referencia; comprobaciones de navegador pendientes. |

Copiar los archivos conservando estas rutas dentro de programation-world y abrir [avatar-base-01.html](../../tools/art-preview/avatar-base-01.html) con el navegador. La herramienta no requiere instalar paquetes ni iniciar un servidor. Cambiar de dirección y probar los fondos y ampliaciones disponibles.

El manifiesto vigente es [avatar-base-01-v04.json](../../art/concepts/avatars/avatar-base-01-v04.json). Los manifiestos v01, v02 y v03 se conservan como antecedentes. sourceOverride en front selecciona la fuente v04; nativeEyeSampling registra los recortes que conservan el detalle al dibujar el cuadro pequeño. Las demás vistas heredan source. Las comparaciones históricas mantienen sus propios recortes y no reciben el ajuste de v04.

Para funcionar sin servidor, el visor incluye una copia de los datos de esta versión del manifiesto. Cuando cambie el recurso, también deberá actualizarse esa copia en el visor. Este archivo es una herramienta de inspección; la integración de carga de recursos del juego se definirá con el cliente Phaser.

## 5. Qué revisar

- Reconocer el mismo personaje en las cuatro direcciones.
- Comprobar que cabello, abrigo, botas y mochila conservan su identidad.
- Comprobar que el ojo izquierdo en pantalla tenga blanco exterior a su izquierda y negro continuo a su derecha; el ojo derecho debe tener negro continuo a su izquierda y blanco exterior a su derecha.
- Evaluar la lectura a tamaño real y ampliado, y el apoyo de los pies sobre la cuadrícula.
- Registrar ajustes antes de ampliar el catálogo de personalización.

La transparencia y la geometría de la prueba se inspeccionan por separado de la aprobación artística. Las colisiones, el movimiento y la sincronización del juego no se evalúan con esta página. S0-03 continúa abierta.

La revisión v04 se verifica con el código de dibujo del visor mediante Canvas 2D de referencia en Node. La prueba comprueba la posición del blanco y de los bloques negros continuos, sus bordes superiores, la composición limitada a los ojos, los cuadros de 32 × 48, el anclaje y la conservación de las otras tres vistas. Los resultados están en docs/qa/avatar-base-01-checks.json. El Product Owner aprobó visualmente v04 con «este pasa, ahora seguimos» y la marcha con «okey si me gusta seguimos seguimos». Las pruebas funcionales de navegador siguen pendientes; no se ejecutó Chromium en este entorno.

## 6. Procedencia y registro

Las cuatro vistas se generaron con la herramienta integrada image_gen, tomando como referencia la muestra aprobada campus-avatar-v01.png. El prompt exacto y el hash de la lámina se guardan en el JSON. El resultado no informó el modelo concreto utilizado.

La revisión v04 se generó con image_gen, modo precise-object-edit, usando v01 como objetivo y el acercamiento de ojos enviado por el Product Owner como referencia. El prompt exacto y los hashes están en el manifiesto v04. Solo se utiliza la nueva vista frontal; una generación puede introducir variaciones sutiles fuera de los ojos. Las otras tres direcciones usan exactamente la fuente v01.

El visor añade muestreo por regiones de esa misma fuente para conservar la forma a 32 × 48: blanco exterior de una columna, negro interior de dos columnas y borde superior oscuro. Las pupilas son rectangulares y continuas en ambas filas centrales. Los PNG fuente no se retocaron después de generarse. La exportación de marcha ya incluye los cuatro reposos compuestos con esos ojos. El cliente Phaser y su adaptador de recursos siguen pendientes de integración.

Los aspectos de procedencia de las referencias iniciales conservan el estado documentado en reference-review.md. Este recurso no añade nombres, logotipos ni identidad de una institución real.

El desarrollador realizará los commits y push. La marcha ya está aceptada; mensaje de commit local sugerido: art: agregar primera marcha del avatar en cuatro direcciones. Los colores de la personalización también fueron aceptados. Los peinados nuevos requieren su propia revisión. No se ha ejecutado commit ni push.

## 7. Referencia técnica

- [T1 — Phaser: texturas, claves y cuadros](https://docs.phaser.io/phaser/concepts/textures), consultado el 2026-10-19. La modularidad descrita es una propuesta de organización; la integración en el cliente Phaser está pendiente.

## 8. Aceptación y avance

El 2026-10-19 el Product Owner aceptó v04 y después la primera marcha con cuatro cuadros por dirección, conservando el cuadro de 32 × 48 y el anclaje (16, 46). La guía específica es [avatar-walk-review-v01.md](avatar-walk-review-v01.md). Se aceptaron visualmente los tres colores del abrigo. Se aceptó la [propuesta de dos peinados](avatar-hair-review-v01.md), conservando también el original. Se preparó la primera composición de cabeza y cabello por capas para A. La [primera producción de A](avatar-head-layers-a-v01.md) ya exporta cabeza auxiliar y cabello por separado; B sigue pendiente. La composición conserva exactamente los ojos y el cuerpo desde la fila 22. S0-03 continúa abierta por las comprobaciones de navegador y el resto de la personalización.
