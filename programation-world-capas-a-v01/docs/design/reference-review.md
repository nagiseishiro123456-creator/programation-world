# S0-02 — Inventario y revisión de referencias visuales

- Proyecto: videojuego educativo ambientado en Juliaca; nombre comercial pendiente.
- Fecha de revisión inicial: 2026-10-16. Actualización: 2026-10-18. Versión: 0.2.
- Fuente: archivo del Product Owner, imagenes.zip.
- Estado: inspección visual realizada; generación con IA confirmada y decisiones de alcance registradas. Derechos y parámetros finales de arte pendientes de revisión.
- Ruta propuesta: docs/design/reference-review.md.
- SHA-256 del ZIP: bf7859e49c508296277e6d2c73fed9c9181c3461b2be03754dfa56e24270cfbf.

## 1. Alcance y método

Se abrieron individualmente las 17 imágenes. Se comprobaron formato, dimensiones, integridad de lectura, hashes y transparencia. Los originales se conservaron sin cambios.

El archivo contiene 14 JPEG y 3 PNG. Doce JPEG miden 1024 × 572 píxeles, salvo imagen 9.jpg, que mide 1024 × 573. Los dos JPEG con prefijo Gemini_Generated_Image miden 2752 × 1536. Los PNG miden 892 × 497, 892 × 512 y 897 × 502.

Los 17 hashes son distintos. Las parejas REF-01/REF-17 y REF-02/REF-16 muestran composiciones coincidentes en diferentes resoluciones; no son duplicados binarios. No se encontró un archivo denominado imagen 8.

El 2026-10-18, el Product Owner confirmó haber generado las imágenes con IA. Los nombres de dos archivos sugieren Gemini, pero no se ha confirmado la herramienta concreta para el conjunto ni el uso de fotografías, capturas, recursos de terceros o personas reales como referencia. El ZIP no contiene licencias, prompts, archivos editables, mapas de colisión ni código del juego. La declaración de generación con IA no resuelve por sí sola las condiciones de uso de los elementos representados.

## 2. Inventario por imagen

| ID y archivo | Observación directa | Utilidad y revisión necesaria |
| --- | --- | --- |
| REF-01 — imagen 1.jpg | Cuatro paneles: construcción, interiores, publicación de encargos y empresa en el mapa. Aparecen S/ 350 y Yape/Plin. | Referencia de expansión futura; constructor, publicación por usuarios y pagos no están aprobados para Z01. |
| REF-02 — imagen 2.jpg | Editor Python a la izquierda; contexto, pistas y resultados a la derecha. | Buena distribución para aprender. Corregir la correspondencia entre código y mensajes; revisar el coste de las pistas. |
| REF-03 — imagen 3.jpg | CV, inventario, equipo y árbol de tecnologías; energía, estrés y moneda. | El progreso visible encaja con el proyecto. Inventario, estadísticas y economía requieren decisiones aparte. |
| REF-04 — imagen 4.jpg | Entrevista en oficina, entrevistador frente al candidato y botones de combate. | Conservar la composición de oficina como referencia. Descartar HP, ataques y toda mecánica de combate por decisión del Product Owner. |
| REF-05 — imgen 5.jpg | Plaza/Jr. Jáuregui, habitación, servidores y entrevista sobre plataformas de combate. | Variante de combate descartada. Los restantes ambientes quedan como referencias para zonas posteriores. |
| REF-06 — imagen 6.jpg | Hospital rotulado Carlos Monge Medrano, fallo informático ficticio, ambulancias y cruces rojas. | Ambientación futura; revisar identidad institucional y sustituir emblemas protegidos. |
| REF-07 — imagen 7.jpg | Campus rotulado UPeU/UNAJ, tren, mercado Túpac Amaru y monumento junto a un centro de datos. | Referencias de variedad urbana. La composición no verifica ubicaciones reales; corregir la promesa de rendimiento de la tienda. |
| REF-08 — imagen 9.jpg | Graduación que activa postulaciones; universidad, empresas y banco. | Es la referencia más directa del recorrido aprobado. Vincular el logro a habilidades demostradas. |
| REF-09 — imagen 10.jpg | Campus con nombre UANCV y emblemas; laboratorio, tráfico y minimapa. | Útil para escala y distribución. Revisar signos y precisar el objetivo educativo del texto sobre la base de datos. |
| REF-10 — imagen 11.jpg | Campus UPeU, jardines, caminos y aula abierta con computadoras. | Referencia principal propuesta para espacios educativos; crear identidad propia y comprobar circulación. |
| REF-11 — imagen 12.jpg | Hospital EsSalud, ambulancia, sistemas de citas e historias clínicas. | Reservar para expansión. Usar instituciones y datos ficticios mientras no exista revisión específica. |
| REF-12 — imagen 13.jpg | Diseños de Mateo, Ing. Quispe, Elvira, Don Lucho y Prof. Vilca, con poses y accesorios. | Base propuesta para coherencia de personajes. Nombres y papeles siguen pendientes; el avatar del jugador será personalizable. |
| REF-13 — logo 14.png | Creador de personaje con peinado, colores, abrigo, mochila, nombre y origen; vista en la ciudad. | Principal referencia del creador. Separar apariencia de habilidades; definir opciones sin fijar un protagonista único. |
| REF-14 — logo 15.png | Secuencias rotuladas de cuatro cuadros para dos personajes: frente, perfil derecho y espalda. | Guía conceptual de movimiento. Falta la dirección izquierda explícita y una exportación limpia y consistente. |
| REF-15 — logo 16.png | Retratos de expresiones; cambian rasgos y vestuario respecto de REF-12. | Útil para intención emocional. Unificar identidades y corregir rótulos y recortes antes de producir retratos. |
| REF-16 — Gemini_Generated_Image_8pfqm38pfqm38pfq.jpg | Composición del editor de REF-02 a mayor resolución. | Preferible para estudiar distribución y detalles del editor; no es un editor funcional. |
| REF-17 — Gemini_Generated_Image_lcolcxlcolcxlcol.jpg | Composición de construcción y encargos de REF-01 a mayor resolución. | Preferible para estudiar esa ampliación. Contiene textos e iconos que necesitan revisión editorial. |

Los archivos llamados logo 14, logo 15 y logo 16 son láminas de interfaz, animación y expresiones; sus nombres no describen su contenido.

## 3. Lectura visual y base para la muestra

La familia predominante es una ciudad 2D vista desde arriba con fachadas visibles, calles ortogonales, personajes de proporciones pequeñas, contornos oscuros y superficies ilustradas con apariencia de pixel art. La oficina utiliza otra perspectiva para mostrar a los interlocutores.

Base de trabajo para preparar una muestra que revisará el Product Owner:

- Mundo exterior: tomar REF-08 y REF-10 como guía de escala y lectura; incorporar de las otras imágenes el ladrillo, las calles, comercios y vehículos que se decida representar.
- Avatar: combinar la coherencia de vistas de REF-12 con la personalización de REF-13.
- Entrevistas: usar la composición de oficina de REF-04, con conversación y retos técnicos; eliminar su interfaz y mecánicas de combate.
- Aprendizaje: usar la distribución de REF-16, con texto real, editable y legible.
- Retratos: utilizar la expresividad de REF-15 después de igualar rostro, edad aparente, peinado y vestuario con los diseños base.
- Interfaz: unificar bordes, tipografía, colores y jerarquía; evitar que todos los paneles compitan por atención.

Estas propuestas no aprueban todavía dimensiones de tiles, resolución interna, paleta definitiva, número de cuadros ni catálogo de personalización.

## 4. Correcciones de producción

### Consistencia de personajes

Mateo aparece pelirrojo con chaqueta verde en REF-12/14 y con pelo y vestuario distintos en REF-15. El entrevistador pierde rasgos como las gafas; Don Lucho cambia de chullo y abrigo a gorra y chaleco; Elvira presenta variaciones de edad, cabello y nombre escrito.

Cada personaje necesitará una ficha canónica. El cambio de expresión deberá conservar esa identidad. En el avatar personalizable, peinado, ropa y accesorios deberán seguir coincidiendo entre vista del mundo, animaciones y retrato.

### Animación y recursos

Los tres PNG son completamente opacos: su canal alfa contiene únicamente 255. REF-14 incluye controles de compartir, copiar y descargar superpuestos; REF-15 presenta elementos recortados en sus bordes.

Para producir animaciones se necesitarán cuadros limpios, anclaje estable en los pies, tamaño coherente y dirección izquierda definida. Si se propone reflejar otra dirección, se revisarán antes los accesorios asimétricos. Phaser permite organizar animaciones con hojas de cuadros o atlas; estas láminas necesitan preparación para ese uso [T1].

Las imágenes completas no contienen capas independientes para personajes, fachadas, objetos y texto. Pueden servir como referencias o fondos de prototipo, pero movimiento, colisiones, oclusión y personalización necesitan datos e integración propios.

### Mundo e interfaz

Los textos están incorporados en las imágenes. Habrá que implementarlos como interfaz editable; corregir erratas, expresiones técnicas y denominaciones inconsistentes.

Los minimapas deberán corresponder al mapa y las posiciones reales del juego. Los globos mostrados ilustran principalmente mensajes de personajes y misiones; no demuestran chat entre jugadores ni sincronización multijugador.

La primera versión incluirá únicamente institutos y universidades como lugares de aprendizaje. No se requiere una referencia de escuela independiente. La enseñanza de fundamentos para principiantes se integrará en las instituciones incluidas; su distribución se definirá en el diseño educativo. Aún deben diseñarse el diagnóstico inicial, el registro de cuentas y el primer trabajo colaborativo.

## 5. Coherencia educativa

- En REF-02/16, el bloque else contiene solamente un comentario y un espacio para completar. Al analizar sintácticamente esa transcripción sin respuesta, Python produce IndentationError; no llega al fallo de prueba dibujado en la consola. El juego deberá mostrar resultados reales de la ejecución.
- Para Python, se propone el botón «Ejecutar y comprobar». Cada mensaje distinguirá errores de sintaxis, ejecución y resultados incorrectos.
- La frase «Compila tu base de datos» necesita un objetivo preciso: crear una estructura, ejecutar una consulta o validar datos, según la lección.
- La promesa de que una GPU hará compilar el doble de rápido no está sustentada por estas referencias; no se usará como explicación técnica.
- La ruta inicial acordada es Python. Los ejercicios de JavaScript, SQL y hardware de las imágenes no se incorporan automáticamente.
- Se recomienda que pedir ayuda no bloquee la práctica. Energía, estrés, temporizadores y penalizaciones requieren aprobación.
- Los escenarios sanitarios utilizarían datos sintéticos y problemas educativos; no se presentarían como protocolos clínicos reales.

## 6. Revisión preventiva de uso

Esta revisión identifica asuntos concretos; no constituye un dictamen jurídico, una búsqueda individual de marcas ni una garantía de riesgo cero.

| Elemento observado | Tratamiento propuesto |
| --- | --- |
| UPeU, UNAJ, UANCV, EsSalud y hospital Carlos Monge Medrano | Revisar nombres, emblemas y contexto. Proponer instituciones ficticias con identidad diferenciada; no basta cambiar unas letras. |
| Fallos y urgencias atribuidos a hospitales | Evitar presentar la ficción como un hecho real o como una colaboración institucional autorizada. |
| Cruces rojas sobre fondo blanco en REF-06 | Sustituir por un símbolo sanitario original que no reproduzca emblemas protegidos; el CICR explica su protección específica [L1]. |
| Yape, Plin, Stack Overflow y otros signos | Revisar cada uso; preferir rótulos propios para dinero ficticio y ayuda cuando no sea necesaria la marca. No hay pagos reales aprobados. |
| Nombre y logotipo de Python | Mantener la denominación técnica correcta. Su política permite usos nominativos bajo condiciones; revisar la forma del logotipo y no insinuar patrocinio [L2]. |
| Monumentos, fachadas y fotografías de referencia | Verificar el caso concreto, autoría, fuente y condiciones aplicables. No se presume que todo elemento visible en la calle carezca de protección. |
| Confecciones Elvira, personajes y «Juliaca Dev Quest» | Confirmar si son inventados y revisar antecedentes antes de adoptarlos. El nombre comercial del proyecto continúa pendiente. |
| Generación con IA confirmada por el Product Owner | Registrar herramienta, materiales de entrada y condiciones de uso antes de incorporar recursos publicables. No se ha confirmado si hubo referencias de terceros. |

La revisión de signos considerará semejanzas gráficas y fonéticas, no solo coincidencias exactas [L3]. Código, arte y otros componentes de videojuegos pueden tener protección propia [L4]. No se afirma que cada referencia observada infrinja derechos.

## 7. Decisiones de alcance y siguiente paso

Se mantienen los requisitos acordados: Z01, una empresa, Python, avatar personalizable, graduación, entrevistas y multijugador con texto. La formación de la primera versión se limita a institutos y universidades, incluyendo las bases para quien empieza desde cero.

Se registran como ideas pendientes: constructor de edificios e interiores, publicación de encargos por jugadores, inventario y equipo, economía, habitación propia, tráfico con temporizadores y otras zonas. No se han añadido como compromisos del sprint.

### Decisiones confirmadas el 2026-10-18

1. El Product Owner confirma haber generado las imágenes con IA. La herramienta y los materiales de entrada quedan por documentar.
2. Se elimina la mecánica de combate tipo Pokémon. Las entrevistas se plantearán mediante conversación, preguntas y retos técnicos en oficina. No habrá ataques, daño, puntos de vida ni victoria por derrotar al entrevistador.
3. La primera versión solo incluirá institutos y universidades para aprender. Se retira la escuela independiente del alcance y de las referencias solicitadas.

La inspección de las 17 imágenes y las decisiones de esta revisión están documentadas. Continúa pendiente completar la procedencia detallada y las condiciones de uso antes de publicar recursos derivados. No se declara cerrado todo S0-02 ni aprobado un catálogo definitivo de arte.

No falta una respuesta para registrar estos cambios. El siguiente paso es preparar la guía visual inicial y una muestra del avatar en escena para revisión, respetando las decisiones anteriores. No se han creado personajes definitivos, modificado originales ni implementado mecánicas.

## 8. Fuentes consultadas

Consulta: 2026-10-16.

- [T1 — Phaser: texturas, hojas de cuadros y atlas](https://docs.phaser.io/phaser/concepts/textures).
- [L1 — CICR: protección y uso de emblemas](https://www.icrc.org/en/copyright-and-terms-use).
- [L2 — Python Software Foundation: política de marcas](https://www.python.org/psf/trademarks/).
- [L3 — INDECOPI: búsqueda de marcas y signos similares](https://www.gob.pe/institucion/indecopi/pages/16475-buscar-una-marca-o-servicio-registrado-busca-tu-marca).
- [L4 — INDECOPI: videojuegos y derecho de autor](https://www.gob.pe/institucion/indecopi/noticias/1011406-los-videojuegos-tambien-pueden-ser-protegidos-por-el-derecho-de-autor).

