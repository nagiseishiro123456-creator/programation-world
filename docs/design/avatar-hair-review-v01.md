# Primeros peinados — propuesta v01

- Proyecto: programation-world. Historia: S0-03, arte y personalización.
- Fecha: 2026-10-19. Actualización: 2026-10-20. Versión: 0.3.
- Estado: original, A y B aprobados como conceptos; primera producción nativa de A preparada para revisión.
- Antecedentes aprobados: reposo v04, marcha v01 y tres colores de abrigo.

## 1. Aprobación registrada

El Product Owner aceptó los tonos verde original, azul y terracota con «si me gustan avanzamos». Esta aceptación corresponde al aspecto de los colores. Las pruebas funcionales del visor en un navegador siguen pendientes según [avatar-customization-v01.md](avatar-customization-v01.md).

## 2. Propuesta para comparar

Se aprobó mantener el peinado despeinado actual y añadir estas dos alternativas. Los nombres A y B identifican opciones de la lámina, sin asignar género, habilidades ni profesión al personaje.

| Opción | Identificador propuesto | Forma | Estado |
| --- | --- | --- | --- |
| Base actual | hair-base-01 | Corto y despeinado; conserva el diseño aprobado. | Aspecto aprobado; todavía aplanado con la cabeza. |
| A | hair-sidepart-01 | Corto con raya lateral, contorno compacto y orejas visibles. | Concepto aprobado el 2026-10-19. |
| B | hair-wavy-bob-01 | Media melena ondulada, rostro abierto y largo próximo a la nuca. | Concepto aprobado el 2026-10-19. |

La lámina muestra A arriba y B abajo, con frente, izquierda, derecha y espalda en ese orden. Ambos usan castaño y abrigo verde para comparar la forma del cabello. No define todavía más tonos de pelo ni un catálogo de vestuario nuevo.

[Abrir propuesta visual](../../art/concepts/avatars/avatar-hair-options-v01.png) · [Prompts, referencias y procedencia](../../art/concepts/avatars/avatar-hair-options-v01.json).

## 3. Qué demuestra la lámina

La imagen generada permite comparar siluetas y reconocer cada peinado desde cuatro direcciones. Se inspeccionaron las ocho figuras, los rótulos y la lectura general de los ojos con negro interior y blanco exterior.

El resultado real mide 1254 × 1254, es RGB y tiene fondo crema opaco. Es una lámina de concepto, no un atlas de sprites ni una exportación 32 × 48. Sus cuerpos y rostros son aproximaciones generadas de la referencia; no acreditan igualdad de píxeles con la base aprobada. La integración conservará los ojos del recurso nativo aprobado y comprobará el resultado a tamaño real.

La opción B llega cerca del cuello y la capucha. Hay que comprobar su superposición con mochila y abrigo en los recursos de producción. La aprobación de esta forma no dará por resuelto ese detalle técnico.

## 4. Separación por capas propuesta

El atlas actual contiene cabello, cabeza, ropa y mochila en una sola imagen. Dibujar un peinado corto encima de ese atlas puede dejar visibles los mechones del peinado anterior. Antes de implementar la selección hay que preparar una base sin cabello y recursos separados.

| Recurso | Responsabilidad propuesta |
| --- | --- |
| Cuerpo y vestuario | Reutilizar poses de reposo y marcha, colores de abrigo y anclaje aprobados. |
| Cabeza base | Cabeza sin cabello anterior; conservar rostro, piel, orejas y ojos aprobados. Requiere preparación y revisión. |
| Cabello posterior | Volumen detrás de la cabeza, con su solapamiento revisado por dirección. |
| Cabello anterior | Flequillo y contorno que se dibujan delante de la cabeza; respetar las zonas de los ojos. |
| Mochila y accesorios | Resolver su orden con el cabello y el abrigo por dirección, antes de añadir más accesorios. |

La primera prueba de A ya separa cabeza auxiliar y cabello, y reutiliza regiones del rostro y los ojos aprobados. Esta tabla sigue siendo el plan completo; las capas de B y el sistema general de accesorios permanecen pendientes. El orden de dibujo deberá comprobar las superposiciones de cada forma nueva. No se considera suficiente pegar otra franja encima del cabello anterior.

Se conserva el contrato del avatar: cuadro 32 × 48, anclaje (16, 46), cuatro direcciones y veinte cuadros por conjunto. La separación no cambia las reglas de movimiento o aprendizaje.

## 5. Secuencia después de la revisión

1. Decisión completada: conservar original, A y B, según «si, esos estilos estan buenos, conservamos a y b y tambien el original, y seguimos».
2. Preparar la cabeza base y las capas del primer peinado aceptado; comparar con los ojos y proporciones originales.
3. Probar reposo en las cuatro direcciones a 32 × 48 y ampliado, y resolver el orden de dibujo con cuello, capucha y mochila.
4. Integrar el primer peinado en los veinte cuadros de reposo y marcha. Solo después extender al siguiente.
5. Combinar las formas aceptadas con los tres colores de abrigo y actualizar guardado, carga y documentación.

Con A, B y la base aceptados como conceptos, el objetivo es disponer de tres formas de cabello por tres colores de abrigo: nueve combinaciones de apariencia. Aplicadas a veinte cuadros, serán 180 composiciones verificables, no 180 dibujos que deban generarse por separado. La primera prueba de A verifica 120 composiciones contando el original de control y A, cada uno en tres colores. La producción de B completará la ampliación prevista.

El archivo de apariencia actual conserva schemaVersion 1 y sus propiedades schemaVersion, avatarId y jacketId. No se añade una propiedad de peinado hasta implementar su compatibilidad. Al ampliar el contrato, la carga deberá conservar los archivos anteriores y asignarles el peinado base; esa migración requiere código y comprobaciones en el siguiente paso de implementación.

## 6. Verificación y procedencia

- [x] Tres colores aceptados por el Product Owner; registro y catálogo actualizados.
- [x] Lámina con ocho figuras y cuatro vistas por propuesta, inspeccionada visualmente.
- [x] Fuente conservada sin retoques; dimensiones, hash y prompt registrados en el JSON.
- [x] Los verificadores del avatar existente siguen pasando después de actualizar sus datos de aprobación.
- [x] Aprobación de las nuevas formas por el Product Owner el 2026-10-19.
- [ ] Cabeza neutral y capas separadas preparadas y revisadas.
- [ ] Composición nativa, integración del selector y comprobaciones en navegador.

La lámina se creó con image_gen integrado, usando v04 como referencia de identidad y v01 para perfiles y espalda. El modelo concreto no fue informado. La imagen se conserva completa en art/concepts/avatars/avatar-hair-options-v01.png y el prompt exacto está en el JSON contiguo. Las fuentes anteriores no se sobrescribieron.

No se introducen marcas, nombres institucionales ni identidades reales. La revisión de procedencia y licencias de las referencias originales conserva los pendientes ya registrados; esta propuesta no los resuelve ni declara derechos de terceros autorizados.

La [revisión frontal de A v02](avatar-front-review-v02.md) mejora mechones y contraste a petición del Product Owner, conservando ojos, cuerpo y las otras tres vistas. Su aceptación visual sigue pendiente.

## 7. Scrum y trabajo local

S0-03 permanece abierta. La aceptación de los colores y de los tres conceptos está registrada. La [primera cabeza por capas de A](avatar-head-layers-a-v01.md) ya tiene fuentes separadas, visor y verificaciones; la producción de B sigue pendiente. No se cierra el creador de personajes con una lámina de concepto.

Después de revisar los archivos, el desarrollador puede guardar el estado local con el mensaje:

```text
art: registrar colores aprobados y proponer primeros peinados
```

GitHub está conectado y el asistente tiene autorización para incorporar los avances acordados. El siguiente trabajo es revisar la composición nativa de A y después extender la producción a B. No se vuelve a pedir la elección del catálogo ya aceptado.
