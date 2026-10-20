# Dirección visual — programation-world

- Versión: 0.7 — actualización 2026-10-20; aprobación inicial 2026-10-19.
- Historia: [S0-03, arte y personalización](../00-project-charter.md).
- Estado: dirección visual y muestra campus-avatar-v01 aprobadas por el Product Owner el 2026-10-19; recursos de producción en preparación.
- Trabajo: local; el desarrollador realiza los commits y push.

## 1. Dirección aprobada para la muestra

Ciudad 2D con apariencia de pixel art detallado, vista desde arriba y fachadas visibles. Calles, patios y edificios tendrán proporciones coherentes; los personajes serán estilizados y reconocibles a la escala del mundo.

Se conservarán la composición y el ambiente de las referencias mediante recursos propios y consistentes. El Product Owner aprobó esta dirección y sus parámetros de trabajo el 2026-10-19. Su resultado debe comprobarse con la primera muestra visual antes de ampliar la producción.

El alcance confirmado incluye institutos y universidades, fundamentos desde cero, Python, avatar personalizable, graduación y entrevistas laborales. El combate está descartado.

## 2. Referencias de trabajo

| Referencia | Aplicación |
| --- | --- |
| REF-08 y REF-10 | Escala de ciudad, campus, caminos y fachadas. |
| REF-12 y REF-13 | Personajes, vestuario y personalización del avatar. |
| REF-14 | Intención del movimiento; requiere cuadros limpios y consistentes. |
| REF-15 | Expresiones, conservando la identidad de cada personaje. |
| REF-04 | Composición de oficina para entrevistas; se eliminan controles y estadísticas de combate. |
| REF-02 y REF-16 | Distribución entre editor, contexto y resultados. |

El inventario y las observaciones originales están en [reference-review.md](reference-review.md). Las imágenes están en [el índice de referencias](../../art/references/README.md).

## 3. Parámetros para probar

| Elemento | Valor aprobado para probar |
| --- | --- |
| Mundo exterior | Vista superior con calles ortogonales y fachadas visibles. |
| Oficina de entrevista | Cámara fija en tres cuartos, siguiendo REF-04. |
| Vista base del mundo | 960 × 540 píxeles; interfaz de lectura dimensionada por separado. |
| Cuadrícula del escenario | Celdas de 32 × 32 píxeles. |
| Lienzo por cuadro del avatar | 32 × 48 píxeles, fondo transparente y anclaje común en los pies. |
| Direcciones | Frente, espalda, izquierda y derecha. |
| Animación prevista | Cuatro cuadros de marcha y uno de reposo por dirección: 20 cuadros por conjunto completo. |
| Escalado del arte | Preferir factores enteros y bordes nítidos; validar la adaptación al navegador. |

El lienzo incluye espacio transparente; no obliga a que todas las siluetas llenen el mismo rectángulo. La primera muestra probará estas proporciones antes de producir una colección de animaciones.

## 4. Paleta orientativa

Esta paleta fue aprobada como guía para la muestra; no es una extracción exacta de las imágenes ni limita por sí sola todos los tonos del escenario.

| Uso | Color |
| --- | --- |
| Contornos y texto oscuro | #1F2933 |
| Paneles claros | #F4E8D3 |
| Ladrillo | #B9684B |
| Caminos y suelo | #D8C5A4 |
| Vegetación | #607565 |
| Vidrios y acentos fríos | #8CB8C4 |
| Logros y selección | #D8A64A |
| Confirmación | #2D6A4F |
| Error | #9C3D3D |

## 5. Reglas de coherencia

- Avatar: conservar rostro, peinado, ropa y accesorios entre mundo, retrato y animación. No fijar un protagonista obligatorio.
- Personalización: probar cambios de pelo y abrigo sobre la misma base. Los tres colores iniciales de abrigo fueron aprobados visualmente. Original, A y B fueron aceptados como conceptos; la primera prueba nativa de A tiene cabeza y cabello separados. Las capas de B y el resto del catálogo siguen pendientes; la apariencia no asignará habilidades.
- Arquitectura: compartir perspectiva, iluminación y escala entre instituto, universidad y oficina. Las referencias no determinan la geografía real de Juliaca.
- Interfaz: marcos discretos y jerarquía clara. Los textos y el código serán editables, separados del dibujo del escenario.
- Lectura: proponer texto principal de 16 píxeles CSS y código monoespaciado ajustable. La familia tipográfica y su licencia quedan pendientes.
- Contraste: objetivo mínimo de 4.5:1 para texto de tamaño normal, siguiendo el criterio 1.4.3 de WCAG. Se comprobará cada combinación; la paleta sola no acredita cumplimiento.
- Mensajes: acompañar el color con texto o iconos. El chat debe distinguirse del diálogo de personajes.
- Entrevistas: mostrar interlocutor, pregunta, respuesta y devolución. Su evaluación se definirá después; no habrá ataques ni barras de vida.

## 6. Primera muestra autorizada

Preparar una escena de acceso a una institución educativa ficticia, con un avatar base y dos variantes de pelo o abrigo. Comparar su tamaño con puerta, camino y mobiliario. Añadir un ejemplo de globo de texto para comprobar lectura.

La muestra será una prueba visual estática. El ciclo completo de animación y el catálogo de personalización corresponden a pasos posteriores.

La primera muestra se entrega como [campus-avatar-v01.png](../../art/concepts/Z01/campus-avatar-v01.png). Sus observaciones y pendientes están en [visual-review-v01.md](visual-review-v01.md). El archivo generado mide 1672 × 941 píxeles; no representa una exportación nativa de la vista 960 × 540 ni de los cuadros de avatar 32 × 48.

El Product Owner aprobó el aspecto del instituto y de los avatares el 2026-10-19, y autorizó avanzar a la ficha del avatar y su prueba de vistas. Esta aceptación corresponde al concepto visual; las medidas y el comportamiento de los recursos se verificarán por separado.

## 7. Revisión de referencias e identidades

Usar nombres, emblemas y señalética propios para las instituciones. Revisar semejanzas y antecedentes antes de adoptar nombres; cambiar unas letras no se tratará como autorización. INDECOPI ofrece búsquedas de signos similares o idénticos.

La generación con IA está confirmada por el Product Owner. La herramienta, los materiales de entrada y las condiciones de uso siguen pendientes de documentar. Ninguna referencia se declara autorizada para publicación mediante esta guía. Los detalles de revisión permanecen en reference-review.md.

## 8. Criterios de aceptación

- [x] El Product Owner revisa y aprueba estilo, perspectiva, medidas y paleta para preparar la muestra: 2026-10-19.
- [ ] La muestra permite reconocer al avatar y diferenciarlo del escenario.
- [ ] Las variantes conservan identidad, proporción y anclaje.
- [ ] La escala funciona junto a puertas y mobiliario.
- [ ] Los textos se leen en vistas de 1280 × 720 y 1920 × 1080.
- [ ] Se registran observaciones y cambios antes de ampliar la producción.

La dirección documental está aprobada. S0-03 seguirá abierta hasta revisar también la muestra y sus evidencias. El desarrollador realizará los commits y push; el asistente prepara los archivos y sus instrucciones de revisión.

La aprobación del concepto no acredita medidas exactas de sprites, animaciones, contraste o comportamiento del juego en el navegador. Los recursos visuales se referenciarán por identificadores estables y datos de cuadro; cambios en perspectiva, tamaño o anclaje necesitarán revisar también cámara, orden de dibujo y colisiones.

## 9. Fuentes

Consulta: 2026-10-19.

- [W3C: contraste mínimo, criterio 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
- [INDECOPI: buscar marcas similares o idénticas](https://www.gob.pe/16475-buscar-una-marca-o-servicio-registrado-busca-tu-marca).

## 10. Estado del avatar y la marcha

El Product Owner aprobó la base de reposo v04 el 2026-10-19 con «este pasa, ahora seguimos» y autorizó continuar. Se prepararon los cuatro cuadros de marcha por cada dirección previstos en esta guía. El atlas de prueba contiene 20 cuadros nativos de 32 × 48, con anclaje (16, 46).

El Product Owner aceptó visualmente la marcha v01 con «okey si me gusta seguimos seguimos». Puede inspeccionarse en [avatar-walk.html](../../tools/art-preview/avatar-walk.html); la fuente, la composición para conservar el rostro y las verificaciones están en [avatar-walk-review-v01.md](avatar-walk-review-v01.md).

La primera [prueba de personalización](../../tools/art-preview/avatar-customization.html) ofrece abrigo verde original, azul y terracota. El Product Owner aceptó esos tonos con «si me gustan avanzamos» el 2026-10-19. Conserva cabeza, ojos, silueta, sombreado y ciclo, mediante una transformación de color sobre el atlas. El [registro v01](avatar-customization-v01.md) distingue esta prueba de las futuras capas de peinados y prendas. La [propuesta de peinados v01](avatar-hair-review-v01.md) muestra corto con raya y media melena, conservando el peinado actual como opción base. Sus nuevas formas fueron aceptadas el 2026-10-19, conservando también el original. La [primera composición por capas de A](avatar-head-layers-a-v01.md) se verifica en resolución nativa; B todavía requiere su propia producción. La verificación real de navegador y el catálogo completo siguen pendientes. Esta actualización no cierra S0-03.
