<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Implementación de acciones de mejora en la producción
    p.mb-5 La #[b implementación de acciones de mejora] permite llevar a la operación los cambios definidos durante el análisis y la priorización. En esta etapa, las propuestas se convierten en modificaciones concretas sobre métodos, secuencias, tiempos, controles y uso de recursos, con el fin de generar resultados verificables en la producción. Para lograrlo, la implementación requiere organizar aspectos clave:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Definir el cambio a realizar. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Establecer responsables y recursos. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Planificar la ejecución. 
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Verificar el resultado obtenido. 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Protocolos para la implementación de cambios
    p.mb-5 Los #[b protocolos de implementación] organizan la forma en que se introducen mejoras en el proceso productivo, asegurando que los cambios se apliquen de manera estructurada y consistente.
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Cambio a implementar")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema4/img1.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Cambio a implementar
            p.mb-0 Definición clara de la mejora a introducir.
      .py-3.py-md-4(titulo="Área de aplicación")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema4/img2.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Área de aplicación
            p.mb-0 Proceso, línea o actividad donde se ejecutará el cambio.
      .py-3.py-md-4(titulo="Condiciones de ejecución")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema4/img3.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Condiciones de ejecución
            p.mb-0 Requisitos previos para aplicar la mejora.
      .py-3.py-md-4(titulo="Evidencia requerida")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema4/img4.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Evidencia requerida
            p.mb-0 Registros o datos que validan la implementación.
      .py-3.py-md-4(titulo="Seguimiento")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema4/img5.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Seguimiento
            p.mb-0 Mecanismo para evaluar el comportamiento del cambio.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Preparación del cambio antes de su puesta en marcha
    p.mb-5 La preparación del cambio permite verificar las condiciones necesarias antes de su ejecución.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema4/img6.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Información disponible
            p.mb-0.text-center Claridad sobre el objetivo y el método a aplicar.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/img7.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Formación del personal
            p.mb-0.text-center Capacitación en el nuevo procedimiento.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/img8.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Recursos
            p.mb-0.text-center Disponibilidad de materiales, herramientas o formatos.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema4/img9.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Alcance definido
            p.mb-0.text-center Área, línea o turno donde se iniciará el cambio.
    p.mb-5 Esta preparación permite ejecutar la mejora bajo condiciones controladas (García, 2023).
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Implementación controlada del cambio
    p.mb-5 La implementación controlada permite aplicar la mejora de forma progresiva y registrar su comportamiento inicial.
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Prueba piloto]:	aplicación del cambio en una línea, turno u orden específica.
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Registro de resultado]: recolección de datos durante la ejecución.
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Evaluación inicial]: análisis del comportamiento del cambio.
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Ajuste]: modificación del método según resultados obtenidos.
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Escalamiento]: extensión del cambio a otras áreas o procesos.
          br
    p.mb-5 A continuación, se presenta una secuencia de implementación de mejoras en la producción:
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-0
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/img11.svg' style="max-width: 90px").m-auto
        h4.text-center Identificación de la mejora
        p.mb-0.text-center Determinar áreas de oportunidad y problemas a resolver.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/img12.svg' style="max-width: 90px").m-auto
        h4.text-center Preparación del cambio
        p.mb-0.text-center Planificar recursos, tiempos y acciones.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/img13.svg' style="max-width: 90px").m-auto
        h4.text-center Socialización con el equipo
        p.mb-0.text-center Comunicar el cambio a los involucrados.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/img14.svg' style="max-width: 90px").m-auto
        h4.text-center Ejecución controlada
        p.mb-0.text-center Aplicar la mejora en un entorno piloto.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/img15.svg' style="max-width: 90px").m-auto
        h4.text-center Seguimiento inicial
        p.mb-0.text-center Medir el desempeño y recopilar datos.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/img16.svg' style="max-width: 90px").m-auto
        h4.text-center Ajuste y consolidación
        p.mb-0.text-center Refinar la mejora y establecer el nuevo estándar.
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Plan de acción para la mejora
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p El #[b plan de acción] organiza la ejecución de la mejora mediante la definición de actividades, responsables, tiempos y recursos, lo que permite convertir la propuesta en una secuencia operativa dentro del proceso productivo. Este instrumento permite estructurar la mejora en términos concretos:
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  Actividades a ejecutar. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Responsables definidos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Fechas de cumplimiento. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Recursos requeridos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Resultados esperados. 
        p.mb-0 De esta forma, el plan facilita el seguimiento y la gestión de la implementación.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img17.png', alt='').m-auto
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Estructura práctica de un plan de acción
    p.mb-5 Un plan de acción se construye con elementos que permiten organizar la ejecución de la mejora de forma clara y verificable.
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img18.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Actividad]: acción específica a realizar dentro del plan.
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Objetivo]: propósito de la actividad en la mejora.
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Fecha de inicio]: momento en que inicia la actividad.
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Fecha de terminación]: momento en que finaliza la actividad.
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Recursos]: materiales, tiempo o herramientas requeridas.
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Responsable]: persona encargada de ejecutar la actividad.
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Resultado esperado]: resultado que se busca obtener con la actividad.
          br
    .bg-1
      .px-5
        p.mb-5 A continuación, se presenta un ejemplo aplicado:
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 8.
          span Estructura básica de un plan de acción para la mejora
        .tabla-a(data-aos="zoom-in").mb-5 
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Actividad
                th.ajuste-border-tabla.texto-left Objetivo
                th.ajuste-border-tabla.texto-left Fecha de inicio
                th.ajuste-border-tabla.texto-left Fecha de terminación
                th.ajuste-border-tabla.texto-left Recursos
                th.ajuste-border-tabla.texto-left Responsable
                th.texto-left Resultado esperado
            tbody
              tr
                td.ajuste-border-tabla.texto-left #[b Capacitación inicial]
                td.ajuste-border-tabla.texto-left Explicar el cambio al equipo
                td.ajuste-border-tabla.texto-left 02/05
                td.ajuste-border-tabla.texto-left 03/05
                td.ajuste-border-tabla.texto-left Formato, material de apoyo, tiempo del equipo
                td.ajuste-border-tabla.texto-left Supervisor
                td.texto-left Personal informado
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Prueba piloto]
                td.ajuste-border-tabla.texto-left Aplicar la mejora en una línea
                td.ajuste-border-tabla.texto-left 04/05
                td.ajuste-border-tabla.texto-left 06/05
                td.ajuste-border-tabla.texto-left Línea, operarios, registro de datos
                td.ajuste-border-tabla.texto-left Jefe de línea
                td.texto-left Validar funcionamiento
              tr
                td.ajuste-border-tabla.texto-left #[b Seguimiento diario]
                td.ajuste-border-tabla.texto-left Revisar cumplimiento y novedades
                td.ajuste-border-tabla.texto-left 04/05
                td.ajuste-border-tabla.texto-left 10/05
                td.ajuste-border-tabla.texto-left Tablero, formato de control
                td.ajuste-border-tabla.texto-left Coordinador de mejora
                td.texto-left Detectar ajustes
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Ajuste final]
                td.ajuste-border-tabla.texto-left Corregir desvíos y formalizar el cambio
                td.ajuste-border-tabla.texto-left 11/05
                td.ajuste-border-tabla.texto-left 12/05
                td.ajuste-border-tabla.texto-left Reunión, reporte, instructivo
                td.ajuste-border-tabla.texto-left Jefe de producción
                td.texto-left Cambio estabilizado
        .caja-tema1-1.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Seguimiento del plan de acción
        p.mb-5 El seguimiento del plan permite controlar el avance de las actividades y verificar su cumplimiento dentro de los tiempos establecidos.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema4/img19.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Estado de la actividad
                p.mb-0.text-center Pendiente, en ejecución o finalizada.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="zoom-in")
                    img(src='@/assets/curso/tema4/img20.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Cumplimiento de fechas
                p.mb-0.text-center Comparación entre fecha programada y real.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="zoom-in")
                    img(src='@/assets/curso/tema4/img21.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Dificultades
                p.mb-0.text-center Obstáculos que afectan la ejecución.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .caja-tema1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema4/img22.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Acciones de ajuste
                p.mb-0.text-center Medidas para corregir desviaciones del plan.
    p.mb-5 El control periódico de estos elementos permite mantener actualizado el plan y ajustar su ejecución dentro del proceso productivo (García, 2023). Este seguimiento convierte el plan de acción en una herramienta activa de gestión dentro de la implementación de mejoras.
    .row.justify-content-center.mb-0
      .col-xl-10
        .caja-tema1-3(data-aos="flip-up")
          h5 Fórmula básica de avance del plan
          .caja-tema1-4.mb-3(data-aos="zoom-in")
            p.mb-0 Avance del plan (%) = (número de actividades ejecutadas / número de actividades programadas) × 100
          h5 Ejemplo breve:
          p.mb-0 Si un plan tiene 8 actividades y 5 ya fueron ejecutadas:
          .caja-tema1-4.mb-3(data-aos="zoom-in")
            p.mb-0 Avance (%) = (5 / 8) × 100 = 62,5 %
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Recursos, responsables y cronograma de implementación
    p.mb-5 La implementación de mejoras requiere definir #[b recursos, responsables y cronograma], con el fin de organizar la ejecución de las acciones dentro del proceso productivo (Guataquira, 2021). Estos elementos permiten estructurar la mejora como una actividad planificada:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Recursos necesarios para ejecutar las acciones. 
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Responsables de coordinación, ejecución y verificación. 
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Secuencia temporal de las actividades. 
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3  Asignación de recursos y responsables
    p.mb-5 La asignación permite garantizar que cada actividad cuente con lo necesario para su ejecución y con una persona encargada de su desarrollo.
    .caja-tema3.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Recursos: materiales, tiempo, herramientas, formatos o espacios requeridos.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Responsable líder: persona encargada de coordinar la actividad.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Participantes: personas que ejecutan la acción.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Verificación: responsable de validar el cumplimiento y resultado.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema4/img23.png', alt='').m-auto
    p.mb-5 Esta asignación permite que la mejora se ejecute de manera organizada dentro del proceso productivo.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Cronograma de implementación
    p.mb-5 El cronograma permite distribuir las actividades en el tiempo, definiendo inicio, duración y finalización de cada acción.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema4/img24.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Inicio de actividad
            p.mb-0.text-center Momento en que comienza la acción.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/img25.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Duración
            p.mb-0.text-center Tiempo estimado de ejecución.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/img26.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Finalización
            p.mb-0.text-center Momento en que debe completarse la actividad.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema4/img27.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Secuencia
            p.mb-0.text-center Orden en que se desarrollan las acciones.
    .bg-1
      .px-5
        p.mb-5 A continuación, se presenta un ejemplo de distribución temporal:
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 9.
              span Ejemplo de cronograma simple para implementar una mejora
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Actividad
                    th.ajuste-border-tabla.texto-left Semana 1
                    th.ajuste-border-tabla.texto-left Semana 2
                    th.texto-left Semana 3
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Socialización del cambio]
                    td.ajuste-border-tabla X
                    td.ajuste-border-tabla -
                    td -
                  tr
                    td.ajuste-border-tabla.texto-left #[b Capacitación del equipo]
                    td.ajuste-border-tabla X
                    td.ajuste-border-tabla -
                    td -
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Prueba piloto]
                    td.ajuste-border-tabla -
                    td.ajuste-border-tabla X
                    td -
                  tr
                    td.ajuste-border-tabla.texto-left #[b Seguimiento diario]
                    td.ajuste-border-tabla -
                    td.ajuste-border-tabla X
                    td X
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Ajuste y cierre]
                    td.ajuste-border-tabla -
                    td.ajuste-border-tabla -
                    td X
        Separador
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Validación, documentación y justificación de cambios 
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p La #[b validación, documentación y justificación] permiten comprobar si la mejora implementada produjo el efecto esperado y asegurar que el cambio quede integrado en el proceso productivo. Este proceso implica comparar resultados, registrar la información y sustentar técnicamente la decisión de mantener, ajustar o descartar la mejora (Higuita, 2024). Estos elementos permiten consolidar la mejora dentro de la operación:
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Verificar resultados obtenidos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Registrar el cambio implementado. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Sustentar la decisión tomada. 
        p.mb-0 De esta forma, la mejora deja de depender de la experiencia individual y se integra al sistema de trabajo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img28.png', alt='').m-auto
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Validación de resultados
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p La validación de una mejora en el proceso productivo se desarrolla a partir de la comparación sistemática del desempeño antes y después de su implementación. Para ello, se utilizan indicadores como el tiempo de setup, el cumplimiento de órdenes, las horas detenidas, el nivel de desperdicio y la productividad, los cuales permiten analizar si el cambio introducido generó variaciones reales en la operación. Esta lectura no se limita a registrar cifras, sino que facilita interpretar si existe una reducción en tiempos, una mayor estabilidad en la ejecución, una disminución de interrupciones o un mejor aprovechamiento de los recursos disponibles.
        p.mb-0 A partir de esta comparación, es posible identificar resultados concretos frente a situaciones evaluadas, como la estandarización del alistamiento de una línea, la variabilidad entre turnos o la puntualidad en el inicio de órdenes. Cuando los resultados reflejan mejoras, se fortalece la decisión de mantener el cambio dentro del proceso; sin embargo, si no se evidencian avances o surgen efectos no previstos, se requiere revisar, ajustar o replantear la intervención antes de consolidarla. De esta manera, la validación se convierte en un paso clave para asegurar que las acciones implementadas realmente aporten al desempeño productivo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img29.png', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-3(data-aos="flip-up")
          h5 Fórmulas básicas de validación
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Impacto de mejora (%) = [(resultado después - resultado antes) / resultado antes] × 100
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Cumplimiento de implementación (%) = (acciones ejecutadas / acciones planificadas) × 100
          h5 Ejemplo breve:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Si el tiempo promedio de #[i setup] era 40 minutos y después de la mejora bajó a 30:
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Impacto (%) = [(30 - 40) / 40] × 100 = -25 %
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Esto significa una reducción del 25 % en el tiempo de setup.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Documentación y justificación del cambio
    p.mb-5 La documentación del cambio permite registrar de manera estructurada la información asociada a la mejora implementada, asegurando su trazabilidad dentro del proceso productivo (Higuita, 2024).
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/img30.svg' style="max-width: 90px").m-auto
        h4.text-center Cambio implementado
        p.mb-0.text-center Modificación realizada en el proceso.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/img31.svg' style="max-width: 90px").m-auto
        h4.text-center Motivo del cambio
        p.mb-0.text-center Problema o desviación que originó la mejora.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/img32.svg' style="max-width: 90px").m-auto
        h4.text-center Evidencia antes
        p.mb-0.text-center Indicadores o registros previos a la intervención.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/img33.svg' style="max-width: 90px").m-auto
        h4.text-center Evidencia después
        p.mb-0.text-center Resultados obtenidos tras la implementación.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/img34.svg' style="max-width: 90px").m-auto
        h4.text-center Resultado de validación
        p.mb-0.text-center Nivel de logro alcanzado con la mejora.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/img35.svg' style="max-width: 90px").m-auto
        h4.text-center Decisión
        p.mb-0.text-center Definición sobre mantener, ajustar o retirar el cambio.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/img36.svg' style="max-width: 90px").m-auto
        h4.text-center Documento actualizado
        p.mb-0.text-center Formato, instructivo o estándar modificado.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img37.png', alt='').m-auto
      .col-xl
        p Esta estructura permite organizar y consolidar la información relacionada con una mejora dentro del sistema productivo, facilitando su análisis y documentación. La justificación del cambio se construye a partir de la relación entre el problema identificado, la acción implementada y los resultados obtenidos, lo que permite sustentar de manera clara la pertinencia de la intervención. Elementos como el problema identificado, la acción aplicada, el resultado alcanzado y el sustento de la decisión aportan una visión integral del proceso, fortaleciendo la toma de decisiones basada en evidencia operativa.
        p.mb-0 Además, la integración de aspectos como el cambio implementado, el motivo del ajuste, las evidencias antes y después, el resultado de la validación y la decisión final permite cerrar de forma técnica el ciclo de mejora. Este enfoque no solo facilita determinar si la mejora debe mantenerse, ajustarse o retirarse, sino que también asegura la actualización de documentos asociados, como instructivos, estándares o reportes. De esta manera, la mejora queda formalmente incorporada al proceso productivo, garantizando coherencia, trazabilidad y continuidad en la operación.
    p.mb-5 La implementación de acciones de mejora permite trasladar el análisis previo a cambios concretos en la operación productiva. En términos operativos, este proceso implica:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Preparar el cambio antes de su ejecución. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Aplicarlo de forma controlada. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Hacer seguimiento a su desarrollo. 
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Validar y documentar los resultados. 
    p.mb-0 Esta secuencia permite integrar la mejora como una práctica estructurada dentro del proceso productivo.
</template>

<script>
export default {
  name: 'Tema4',
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
