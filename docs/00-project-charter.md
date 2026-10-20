# Project Charter — Videojuego educativo ambientado en Juliaca

- Versión: 0.7.
- Fecha inicial: 2026-10-19. Actualización: 2026-10-20.
- Etapa: Sprint 0 — preproducción.
- Estado: redactado para revisión del Product Owner; no equivale al cierre del sprint.
- Nombre comercial: pendiente. «Juliaca Programación» es una etiqueta descriptiva de trabajo.

## 1. Visión y propósito

Crear un videojuego 2D para navegador que permita aprender programación desde cero explorando una ciudad inspirada en Juliaca. La formación, la graduación, la búsqueda de empleo y el trabajo en tecnología constituirán un recorrido conectado, con humor sobre la vida profesional.

La ciudad crecerá por zonas. Cada ampliación deberá aportar una experiencia verificable, con diseño, contenido educativo, pruebas y documentación.

## 2. Público y aprendizaje

El público son personas que empiezan desde cero o desean identificar y reforzar conocimientos previos. La visión de largo plazo incluye rutas apropiadas para distintas edades.

Se contempla un piloto cerrado, inicialmente con el Product Owner y después con adultos invitados. La orientación educativa de 12 años en adelante sigue siendo una hipótesis por validar; no define una edad legal de consentimiento ni autoriza abrir el servicio a menores.

Python será el primer lenguaje enseñado. El recorrido deberá permitir comprender lógica, escribir programas y construir un pequeño proyecto. Se diseñará un diagnóstico inicial y se comprobará el aprendizaje mediante acciones y soluciones, además de completar actividades.

## 3. Alcance acordado

| Área | Primera versión |
| --- | --- |
| Plataforma | Navegador en computadoras, con teclado y ratón. |
| Mundo | Una zona pequeña inspirada en Juliaca; lugares concretos por seleccionar. |
| Formación | Institutos y universidades con una ruta inicial de Python; las bases para principiantes se enseñarán dentro de estas instituciones. |
| Progresión | Evaluación, graduación y logro que habilita oportunidades laborales. |
| Empleo | Una empresa; postulación, entrevista mediante conversación y retos técnicos, contratación e inicio del trabajo. Sin mecánicas de combate. |
| Retos | Lógica, escritura de código y un proyecto con criterios de evaluación. |
| Personajes | Creación y personalización del avatar por cada jugador. |
| Funciones sociales | Cuentas, presencia compartida y chat de texto con globos sobre los avatares. |
| Colaboración | Una primera actividad compartida, cuya mecánica se diseñará con el Product Owner. |
| Persistencia | Guardado de identidad del avatar y progreso; solución técnica por validar. |

La universidad como requisito de progresión será una regla de este mundo ficticio. El juego no afirmará que todas las empresas reales exigen el mismo título o aplican una entrevista idéntica.

Por decisión del Product Owner del 2026-10-18, la primera versión no incluirá una escuela o colegio independiente. La distribución de contenidos entre institutos y universidades se definirá en el diseño educativo de Z01. Se descarta el combate tipo Pokémon: las entrevistas no tendrán ataques, daño, puntos de vida ni victoria por derrotar al entrevistador.

## 4. Ampliaciones registradas

Quedan para etapas posteriores: nuevas zonas, hospitales, bancos y otras instituciones; más universidades y empresas; JavaScript, Kotlin y otros lenguajes; voz por proximidad; adaptación a celulares; rutas infantiles; y mayores capacidades de concurrencia.

No se fija todavía una reproducción completa de Juliaca, un catálogo de edificios, un número de jugadores simultáneos, una fecha de lanzamiento ni una promesa de empleo o certificación real.

## 5. Decisiones técnicas

| Decisión | Estado |
| --- | --- |
| Phaser + TypeScript para el juego | Aceptada. |
| Python como primer lenguaje educativo | Aceptada. |
| Web de escritorio como plataforma inicial | Aceptada. |
| Render gratuito para pruebas iniciales | Aceptada; despliegue todavía no realizado. |
| Node.js + Colyseus para el servidor compartido | Propuesta técnica pendiente de validación. |
| PostgreSQL para datos persistentes | Propuesta; proveedor y continuidad pendientes. |
| Ejecución de código Python, editor y evaluación | Pendientes de prueba técnica y decisión documentada. |

Antes de programar se fijarán versiones compatibles y herramientas de construcción. El código de los ejercicios deberá ejecutarse con aislamiento y límites de recursos; no se ejecutará directamente dentro del proceso que controla el mundo compartido.

## 6. Dirección de arte y avatares

El diseño visual comienza en Sprint 0. Se dedicará trabajo específico a:

- Mantener el análisis de las referencias aportadas, su procedencia y las decisiones de uso en [reference-review.md](design/reference-review.md).
- Definir una identidad visual original: paleta, proporciones, perspectiva, iluminación, tipografía e interfaz.
- Diseñar el personaje base, sus animaciones y las opciones iniciales de personalización.
- Comprobar compatibilidad entre opciones del avatar, legibilidad y coherencia con edificios y escenarios.
- Revisar una muestra visual del personaje dentro de una escena antes de producir muchos recursos.

La guía visual aprobada fija cuadros de avatar de 32 × 48, anclaje (16, 46), cuatro direcciones y cuatro cuadros de marcha más un reposo por dirección. El reposo v04 y la primera marcha v01 fueron aceptados visualmente por el Product Owner el 2026-10-19. Los tres colores iniciales de abrigo también fueron aceptados visualmente. El original y los conceptos A y B también están aceptados. La primera producción nativa de A tiene cabeza y cabello por separado; la producción de B y el catálogo completo siguen pendientes.

Se inspeccionaron las 17 imágenes recibidas. El Product Owner confirmó haberlas generado con IA; la herramienta concreta y los materiales de entrada no están documentados. La oficina sirve como referencia de composición para las entrevistas; sus elementos de combate quedan descartados. La dirección visual y la muestra del campus fueron aceptadas el 2026-10-19. La guía de arte y los registros de avatar documentan las aprobaciones y los pendientes de producción.

La calidad visual se verificará en el navegador, a la escala real de juego. Cada revisión registrará capturas, problemas y correcciones. No se considerará terminada únicamente porque exista una ilustración.

## 7. Trabajo por zonas

La primera zona tendrá el identificador Z01, sin asignarle todavía un barrio real.

Cada zona seguirá esta secuencia:

1. Seleccionar referencias y revisar su uso.
2. Definir recorrido, habilidades educativas y criterios de aceptación.
3. Aprobar diseño visual y distribución.
4. Implementar e integrar con los sistemas compartidos.
5. Probar funcionamiento, aprendizaje, presentación y comportamiento multijugador aplicable.
6. Actualizar documentación, registrar evidencias y revisar con el Product Owner.

Una zona puede ocupar varios sprints. Se avanzará a la siguiente cuando cumpla los criterios acordados. Cuentas, chat, avatares y progreso serán sistemas reutilizables, no implementaciones independientes para cada zona.

## 8. Scrum y capacidad

El usuario será Product Owner y desarrollador principal. El asistente apoyará la facilitación Scrum, arquitectura, diseño, documentación y revisión de riesgos.

Los sprints durarán dos semanas. La disponibilidad indicada es de dos horas diarias; falta confirmar los días de trabajo por semana. La capacidad se calculará como dos horas por día efectivo, incluyendo reuniones, aprendizaje, pruebas y documentación. Diez días efectivos equivaldrían a veinte horas; es un ejemplo, no una disponibilidad asumida.

Rutina propuesta de 120 minutos: 10 para revisar objetivo y bloqueos, 75 para la tarea principal, 25 para validación y documentación, y 10 para registrar el avance y siguiente acción.

Cada sprint tendrá planificación, seguimiento breve, revisión del entregable y retrospectiva. Las fechas se fijarán al acordar el inicio. No se promete terminar la primera zona durante Sprint 0.

## 9. Backlog inicial y secuencia

| ID | Trabajo | Entregable verificable |
| --- | --- | --- |
| S0-01 | Bases del proyecto | Charter y propuesta de repositorio revisados. |
| S0-02 | Referencias de Juliaca y estilo | Inventario de 17 imágenes y decisiones de alcance registrados; generación con IA confirmada, materiales de entrada y condiciones de uso pendientes. |
| S0-03 | Arte y personalización | Guía, campus, reposo v04 y marcha v01 aprobados visualmente. Tres colores y tres conceptos de cabello aprobados; primera producción por capas de A preparada para revisión nativa. Catálogo completo e integración pendientes. |
| S0-04 | Diseño educativo de Z01 | Recorrido, habilidades, evaluación y criterios de aceptación. |
| S0-05 | Viabilidad técnica | Decisiones sobre servidor, Python aislado y persistencia. |
| Z01-01 | Exploración y avatar | Acceso, personalización, movimiento e interacción. |
| Z01-02 | Formación y empleo | Formación en institutos y universidades, graduación y acceso a una empresa mediante entrevista y retos técnicos. |
| Z01-03 | Mundo compartido | Presencia, chat y primera actividad colaborativa. |
| Z01-04 | Piloto cerrado | Pruebas, correcciones, evidencias y documentación de operación. |

Esta tabla es una base de refinamiento. Los ítems se dividirán en historias pequeñas antes de comprometerlos en un sprint. Las pruebas de conexión entre clientes comenzarán temprano para validar el multijugador.

## 10. Definition of Done

Una tarea se cerrará cuando:

- Cumpla sus criterios de aceptación y se haya revisado su resultado.
- Tenga las verificaciones pertinentes a su naturaleza: funcionales, educativas, visuales o documentales.
- Incluya documentación actualizada y trazabilidad entre requisito, cambio y evidencia.
- Registre la procedencia y condiciones de uso de los recursos incorporados.
- Deje conocidos sus errores pendientes, limitaciones y decisiones.
- Esté lista para incorporarse mediante revisión a GitHub.

Las tareas documentales requieren revisión de coherencia y enlaces; no pruebas de software artificiales. Las tareas visuales requieren evidencia en contexto. El cierre de una zona incluye la aceptación del Product Owner.

## 11. Condiciones para evaluar la primera versión

El piloto deberá demostrar que se puede crear un avatar, recorrer Z01, resolver ejercicios de Python, graduarse por los criterios acordados y completar una entrevista y primera tarea laboral.

Dos sesiones independientes deberán poder encontrarse, verse y comunicarse por texto. Se comprobarán también la actividad compartida definida y la conservación del progreso tras salir y volver a entrar.

Antes de invitar participantes se fijarán navegadores, dispositivos, volumen de prueba y criterios de usabilidad y aprendizaje. Estos resultados aún no existen.

## 12. Riesgos y controles iniciales

- Infraestructura: Render Free suspende servicios web después de 15 minutos sin tráfico entrante; su disco es efímero y PostgreSQL gratuito caduca a los 30 días [R1]. Se resolverá la persistencia antes de depender de progreso duradero.
- Costes: tener servicios gratuitos no garantiza ausencia de cargos por excedentes si existe un medio de pago [R2]. No se ha autorizado gasto ni contratado un servicio.
- Propiedad intelectual: cada nombre, marca, fachada, imagen, música y recurso se revisará por separado. Cambiar letras o alegar parodia no garantiza ausencia de reclamaciones. No se promete riesgo cero [L1, L2].
- Datos personales: se definirá qué se recoge, para qué, cómo se protege y cuánto se conserva. La apertura a menores y las funciones sociales requieren una revisión específica antes de su lanzamiento [L3].
- Acceso al piloto: se restringirá el acceso de las pruebas; disponer de una URL no convierte un despliegue en privado.
- Alcance: la expansión de zonas y lenguajes dependerá del aprendizaje obtenido en el piloto y de la capacidad disponible.

La revisión legal de este paquete es preliminar; no constituye autorización de uso de una referencia concreta ni un dictamen jurídico.

## 13. Próximo paso y pendientes

El proyecto se conserva en GitHub y permite trabajar con una copia local. Reúne documentación, referencias, arte y herramientas de avatar; el cliente Phaser, el mapa, el aprendizaje y el servidor del mundo compartido todavía no están implementados.

La revisión inicial de imágenes, la guía visual y las aceptaciones del campus, el reposo y la marcha están documentadas. Los tres colores iniciales del abrigo fueron aceptados. Original, A y B fueron aceptados como conceptos. El siguiente paso es revisar la primera composición nativa por capas de A y después extender la producción a B, antes de integrar el selector completo de cabello. Después se precisarán el recorrido educativo de Z01 y las reglas de las entrevistas. El Product Owner autorizó al asistente a incorporar avances y documentación en GitHub el 2026-10-20. Se conservan el historial y la revisión paso a paso. La guía vigente está en [local-workflow.md](management/local-workflow.md).

Quedan por concretar: nombre comercial del juego, días disponibles, experiencia técnica actual, ubicación de Z01, catálogo completo de personalización, versiones y configuración del cliente, infraestructura persistente, licencia del proyecto y alcance de la apertura pública. La carpeta local se llama programation-world. La procedencia detallada y las condiciones de uso de las referencias deberán revisarse antes de incorporarlas como recursos publicables.

### Cambios acordados el 2026-10-18

- Primera versión educativa: institutos y universidades; sin escuela o colegio independiente.
- Aprendizaje desde cero: fundamentos dentro de las instituciones incluidas.
- Empleo: entrevistas laborales con conversación y retos técnicos; combate descartado.
- Referencias: generación con IA confirmada por el Product Owner; condiciones de uso aún por documentar.

## 14. Referencias

Consultadas el 2026-10-16; verificar condiciones de servicios y normativa antes del lanzamiento.

- [R1 — Render: servicios gratuitos](https://render.com/docs/free).
- [R2 — Render: facturación y preguntas frecuentes](https://render.com/docs/faq).
- [L1 — INDECOPI: videojuegos y derecho de autor](https://www.gob.pe/institucion/indecopi/noticias/1011406-los-videojuegos-tambien-pueden-ser-protegidos-por-el-derecho-de-autor).
- [L2 — INDECOPI: búsqueda de marcas](https://pi.indecopi.gob.pe/buscatumarca/).
- [L3 — ANPD: Reglamento de Protección de Datos Personales](https://www.gob.pe/institucion/anpd/campa%C3%B1as/128319-nuevo-reglamento-de-proteccion-de-datos-personales).
- [T1 — Colyseus: documentación oficial](https://docs.colyseus.io/).

