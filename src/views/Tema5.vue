<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Seguimiento y mejora continua del desempeño productivo
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p El #[b seguimiento del desempeño productivo] permite verificar si las mejoras implementadas generan resultados sostenidos en el tiempo y contribuyen al aprendizaje del proceso. Este seguimiento se apoya en la revisión de indicadores, el control periódico y la consolidación de prácticas dentro de la operación (García, 2023). Para sostener la mejora continua, la empresa requiere:
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  Medir resultados después de la implementación. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Ajustar desviaciones detectadas. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Mantener prácticas efectivas en el tiempo. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Fortalecer el aprendizaje del proceso. 
        p.mb-0 Este enfoque permite integrar la mejora como parte del funcionamiento habitual del sistema productivo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img1.png', alt='').m-auto
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Indicadores de seguimiento a las mejoras implementadas
    p.mb-5 A continuación, se presenta un video  sobre los indicadores de seguimiento en la mejora de procesos productivos, con el propósito de analizar su función, clasificación y aplicación en la evaluación de resultados posteriores a la implementación de mejoras.
    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9HD7CTW_cUg?si=OC3rkdvPtuGBI2yB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]. Indicadores de seguimiento a las mejoras implementadas.
    .bg-1
      .px-5
        p.mb-5 A continuación, se presentan indicadores de uso frecuente para el seguimiento de mejoras:
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 10.
              span Indicadores de seguimiento a mejoras implementadas
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Indicador
                    th.ajuste-border-tabla.texto-left Fórmula básica
                    th.texto-left Qué permite verificar
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Cumplimiento del programa
                    td.ajuste-border-tabla.texto-left (Producción real / producción programada) × 100
                    td.texto-left Si la mejora favorece el logro del plan
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Tiempo de #[i setup] promedio
                    td.ajuste-border-tabla.texto-left Tiempo total de setup / número de cambios
                    td.texto-left Si disminuyen los alistamientos
                  tr
                    td.ajuste-border-tabla.texto-left Órdenes detenidas
                    td.ajuste-border-tabla.texto-left (Órdenes detenidas / órdenes abiertas) × 100
                    td.texto-left Si bajan las interrupciones.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Productividad
                    td.ajuste-border-tabla.texto-left Producción obtenida / recurso consumido
                    td.texto-left Si mejora el aprovechamiento del recurso.
                  tr
                    td.ajuste-border-tabla.texto-left OEE
                    td.ajuste-border-tabla.texto-left Disponibilidad × rendimiento × calidad
                    td.texto-left Si mejora el desempeño integral del equipo.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Retrabajo
                    td.ajuste-border-tabla.texto-left (Unidades reprocesadas / unidades producidas) × 100
                    td.texto-left Si disminuyen errores o defectos.
        .caja-tema1-1.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Ejemplo práctico de seguimiento a una mejora
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            p Supóngase que una empresa implementa una nueva rutina de alistamiento para reducir el #[i setup] en una línea de corte. Antes de la mejora, el tiempo promedio de #[i setup] era de 42 minutos y el cumplimiento diario del programa se ubicaba en 88 %. Después de dos semanas de implementación, el tiempo promedio desciende a 31 minutos y el cumplimiento aumenta a 95 %. En este caso, el seguimiento permite identificar un efecto positivo tanto en la variable intervenida como en el desempeño general del turno (Salas, 2024).
            p.mb-0 Si, en cambio, el tiempo de #[i setup] disminuye, pero el cumplimiento no mejora debido a faltantes de material, el indicador evidencia que la mejora fue útil, aunque insuficiente. Esto permite al aprendiz comprender que el seguimiento no solo valida logros, sino que también contribuye a identificar qué problema persiste y qué acción adicional se requiere (García, 2023).
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema5/img2.png', alt='').m-auto
        .row.justify-content-center.mb-0
          .col-xl-10
            .caja-tema1-3(data-aos="flip-up")
              h5 Fórmulas básicas
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Impacto de la mejora (%) = [(resultado después - resultado antes) / resultado antes] × 100
              h5 Ejemplo:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Si el #[i setup] baja de 42 a 31 minutos:
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Impacto (%) = [(31 - 42) / 42] × 100 = -26,2 %
              p.mb-0 Esto indica una reducción del 26,2 % en el tiempo de #[i setup].
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Técnicas de mejora continua en producción
    p.mb-5 Las #[b técnicas de mejora continua] permiten sostener la revisión del proceso productivo mediante prácticas sistemáticas de análisis, seguimiento y ajuste. Estas técnicas se aplican tanto para intervenir desviaciones como para fortalecer la operación diaria a través de mejoras graduales (Zambrano Valdivieso, 2018). En la operación, estas técnicas se integran a rutinas de trabajo como:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Revisión periódica del desempeño. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Análisis de pérdidas del proceso. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Seguimiento de acciones definidas. 
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Ajustes progresivos en la operación. 
    p.mb-5 Este enfoque permite mantener la mejora como parte del funcionamiento habitual del sistema productivo.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 PHVA, Kaizen y mejora incremental
    p.mb-5 Las técnicas de mejora continua pueden organizarse en enfoques estructurados que orientan la intervención del proceso.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 PHVA (Planear, Hacer, Verificar, Actuar)
                p.mb-0 Secuencia que organiza la mejora desde la planificación hasta la verificación y estandarización del cambio.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema5/img3.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Kaizen
                p.mb-0 Enfoque basado en mejoras pequeñas, continuas y sostenidas dentro de la operación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema5/img4.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Mejora incremental
                p.mb-0 Ajustes progresivos sobre actividades, métodos o recursos del proceso productivo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema5/img5.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 Estos enfoques permiten estructurar la mejora como un proceso continuo dentro de la producción (Zambrano Valdivieso, 2018).
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Tableros, reuniones cortas y seguimiento visual	
    p.mb-5 El seguimiento de la mejora continua se apoya en herramientas que facilitan la revisión del desempeño en la operación diaria.
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema5/img6.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/img7.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tableros de seguimiento
                p.mb-0.text-center Registro visible de indicadores, desviaciones y acciones.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/img8.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Reuniones cortas
                p.mb-0.text-center Espacios breves para revisar cumplimiento, desviaciones y acciones.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/img9.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Seguimiento visual
                p.mb-0.text-center Uso de información accesible para el equipo en el área de trabajo.
        p Estas herramientas permiten mantener actualizada la información del proceso y facilitar la toma de decisiones en el corto plazo (García, 2023).
        p.mb-5 La figura presenta un ciclo continuo de mejora aplicado al desempeño productivo:
    .row.justify-content-center.mb-0
      .col-xl-9
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 6.
          span Ejemplo de ciclo de mejora continua aplicado al desempeño productivo
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema5/img10.png', alt='Ciclo de mejora continua aplicado al desempeño productivo, compuesto por las etapas medir el desempeño, analizar desviaciones, implementar mejoras y volver a medir resultados para verificar el impacto de las acciones ').m-auto
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Monitoreo, ajustes periódicos y sostenibilidad de las mejoras
    .caja-intro.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema5/img11.png', alt='').m-auto
        .col-xl
          p Después de implementar una mejora, el proceso necesita monitoreo periódico. Esto significa revisar si el cambio sigue funcionando después de los primeros días, si el equipo lo está aplicando de la misma manera y si los indicadores mantienen una tendencia favorable. En proyectos orientados a sostenibilidad y desempeño, se recomienda justamente combinar monitoreo continuo, informes periódicos y ajustes necesarios para alcanzar los objetivos planteados.
          p.mb-0.ajuste-caja-2p La sostenibilidad de una mejora depende mucho de este monitoreo. Muchas acciones presentan buenos resultados durante la primera semana porque reciben atención especial, pero luego se debilitan cuando se pierde seguimiento. Por eso, el ajuste periódico es necesario: permite corregir desviaciones de la propia mejora, reforzar la disciplina del equipo y evitar que el proceso regrese a la práctica anterior. (García, 2023).
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Ajustes periódicos y control de la sostenibilidad
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Los ajustes periódicos permiten corregir desviaciones en la aplicación del cambio. Puede ocurrir que el nuevo instructivo sea útil, pero poco claro en un punto; que el tablero ayude, pero requiera mejor diseño; o que la secuencia nueva funcione en un turno, pero no en otro. Ajustar no significa que la mejora fracasó, sino que el proceso de implantación todavía necesita refinamiento.
        p.mb-0 La sostenibilidad se fortalece cuando la empresa incorpora esos ajustes a la rutina y no deja la mejora como una práctica “extra”. Si el cambio se vuelve parte del trabajo diario, de los formatos y de las reuniones, sus probabilidades de mantenerse aumentan. Si queda solo como iniciativa temporal, tiende a desaparecer con el tiempo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img12.png', alt='').m-auto
    .bg-1
      .px-5
        p.mb-5 La tabla presenta una forma simple de organizar el monitoreo posterior a la implementación de una mejora.
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 11.
              span Seguimiento y sostenibilidad de una mejora implementada
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Aspecto a revisar
                    th.ajuste-border-tabla.texto-left Frecuencia
                    th.ajuste-border-tabla.texto-left Evidencia
                    th.texto-left Posible ajuste
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Indicador principal
                    td.ajuste-border-tabla.texto-left Diario o semanal
                    td.ajuste-border-tabla.texto-left Tablero o reporte
                    td.texto-left Ajustar meta o método
                  tr
                    td.ajuste-border-tabla.texto-left Cumplimiento del nuevo procedimiento
                    td.ajuste-border-tabla.texto-left Diario
                    td.ajuste-border-tabla.texto-left Lista de chequeo
                    td.texto-left Reforzar capacitación
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Incidencias asociadas
                    td.ajuste-border-tabla.texto-left Diario
                    td.ajuste-border-tabla.texto-left Registro de novedades
                    td.texto-left Corregir punto crítico
                  tr
                    td.ajuste-border-tabla.texto-left Resultado global del cambio
                    td.ajuste-border-tabla.texto-left Semanal o mensual
                    td.ajuste-border-tabla.texto-left Comparativo antes-después
                    td.texto-left Mantener, ajustar o retirar
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Participación del equipo
                    td.ajuste-border-tabla.texto-left Semanal
                    td.ajuste-border-tabla.texto-left Reunión y acta breve
                    td.texto-left Aclarar responsabilidades
        Separador
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Monitoreo de las mejoras
        p.mb-5 El #[b monitoreo de las mejoras] permite verificar si los cambios implementados mantienen su efecto en el tiempo y si continúan aplicándose de forma consistente en la operación. Este seguimiento se realiza mediante la revisión periódica de:
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema5/img13.png', alt='').m-auto
        .col-xl
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Indicadores del proceso. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Cumplimiento del nuevo método de trabajo. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Aplicación uniforme del cambio en los turnos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Tendencia de los resultados obtenidos.
    p.mb-5 El monitoreo permite identificar desviaciones en la aplicación de la mejora y mantener su efectividad dentro del proceso productivo.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3  Ajustes periódicos y control de la sostenibilidad
    p.mb-5 Los ajustes periódicos permiten corregir diferencias en la forma en que se aplica la mejora dentro de la operación.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema5/img14.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Instructivo poco claro.
            p.mb-0.text-center Ajustar contenido o formato.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema5/img15.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Uso parcial del tablero.
            p.mb-0.text-center Mejorar diseño o capacitación.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema5/img16.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Diferencias entre turnos.
            p.mb-0.text-center Estandarizar aplicación del método.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema5/img17.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Resultados inestables.
            p.mb-0.text-center Revisar condiciones del proceso.
    .bg-1
      .px-5
        p.mb-5 La sostenibilidad de la mejora se consolida cuando se integra de manera permanente a las rutinas del proceso productivo, incorporándose en formatos e instructivos, revisándose en espacios periódicos de análisis, reflejándose en indicadores de seguimiento y asumiéndose como una práctica habitual del equipo. Este enfoque permite que los cambios no se diluyan con el tiempo, sino que se mantengan, se fortalezcan y continúen aportando valor dentro de la operación. A continuación, se presenta una estructura para el seguimiento de la sostenibilidad:
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 12.
              span Seguimiento y sostenibilidad de una mejora implementada
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Aspecto a revisar
                    th.ajuste-border-tabla.texto-left Frecuencia
                    th.ajuste-border-tabla.texto-left Evidencia
                    th.texto-left Posible ajuste
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Indicador principal]
                    td.ajuste-border-tabla.texto-left Diario o semanal
                    td.ajuste-border-tabla.texto-left Tablero o reporte
                    td.texto-left Ajustar meta o método
                  tr
                    td.ajuste-border-tabla.texto-left #[b Cumplimiento del nuevo procedimiento]
                    td.ajuste-border-tabla.texto-left Diario
                    td.ajuste-border-tabla.texto-left Lista de chequeo
                    td.texto-left Reforzar capacitación
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Incidencias asociadas]
                    td.ajuste-border-tabla.texto-left Diario
                    td.ajuste-border-tabla.texto-left Registro de novedades
                    td.texto-left Corregir punto crítico
                  tr
                    td.ajuste-border-tabla.texto-left #[b Resultado global del cambio]
                    td.ajuste-border-tabla.texto-left Semanal o mensual
                    td.ajuste-border-tabla.texto-left Comparativo antes-después
                    td.texto-left Mantener, ajustar o retirar
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Participación del equipo]
                    td.ajuste-border-tabla.texto-left Semanal
                    td.ajuste-border-tabla.texto-left Reunión y acta breve
                    td.texto-left Aclarar responsabilidades
        Separador
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Documentación y cultura de mejora continua
        p.mb-5 La #[b documentación de la mejora continua] permite conservar información sobre el proceso de intervención, facilitando su análisis y reutilización en futuras acciones (Hoyos, 2021).
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img18.svg' style="max-width: 90px").m-auto
        h4.text-center Oportunidad detectada
        p.mb-0.text-center Problema o situación inicial.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img19.svg' style="max-width: 90px").m-auto
        h4.text-center Análisis realizado
        p.mb-0.text-center Causas y condiciones identificadas.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img20.svg' style="max-width: 90px").m-auto
        h4.text-center Acción implementada
        p.mb-0.text-center Mejora aplicada en el proceso.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img21.svg' style="max-width: 90px").m-auto
        h4.text-center Responsables y fechas
        p.mb-0.text-center Participantes y tiempos de ejecución.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img22.svg' style="max-width: 90px").m-auto
        h4.text-center Resultados obtenidos
        p.mb-0.text-center Evidencia del efecto de la mejora.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img23.svg' style="max-width: 90px").m-auto
        h4.text-center Decisión final
        p.mb-0.text-center Continuidad, ajuste o cierre del cambio.
    p.mb-5 Los elementos clave para documentar la mejora y fortalecer una cultura organizacional orientada al seguimiento, el aprendizaje y la sostenibilidad del proceso productivo son: 
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema5/img24.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Qué debe documentarse en un proceso de mejora").ajuste-cajaAcordion
            p.mb-3 La documentación debe permitir comprender el proceso completo de la mejora dentro de la operación. Para ello, se registran elementos clave como el problema identificado, que describe la situación inicial del proceso; la acción aplicada, donde se detalla la mejora implementada; el indicador de seguimiento, que corresponde a la variable utilizada para medir el cambio; y el resultado obtenido, que establece la comparación entre el antes y el después. Este registro no solo organiza la información, sino que también permite dar continuidad al aprendizaje dentro del proceso productivo y facilitar la toma de decisiones futuras.
          .row(titulo="Cómo se fortalece una cultura de mejora continua").ajuste-cajaAcordion
            p.mb-3 La cultura de mejora continua se construye a partir de prácticas organizacionales que promueven el seguimiento, el análisis y el aprendizaje del proceso. Entre ellas se encuentran la revisión periódica de indicadores, las reuniones de seguimiento, la documentación de acciones, la participación del equipo, el uso de tableros actualizados y los ajustes periódicos. Estas prácticas permiten sostener los resultados e integrar la mejora dentro de la gestión diaria.
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
