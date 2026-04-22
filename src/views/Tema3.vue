<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Identificación y priorización de oportunidades de mejora
    p.mb-5 La identificación de #[b oportunidades de mejora] permite seleccionar acciones que contribuyan a optimizar la programación y la ejecución de la producción. Dado que los recursos son limitados, este proceso implica establecer prioridades con base en el impacto esperado sobre el desempeño operativo, la capacidad y los costos (Gamarra, 2024). En este contexto, la mejora se orienta a:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Reconocer desviaciones y brechas del proceso. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Valorar alternativas de intervención. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Aplicar criterios comparables para priorizar acciones. 
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Estimar el efecto de los cambios en la operación. 
    p.mb-0 Este enfoque permite orientar los esfuerzos hacia mejoras con impacto en la operación productiva.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Oportunidades de mejora en los procesos de programación y ejecución
    p.mb-5 Las oportunidades de mejora se identifican a partir de brechas entre lo esperado y lo obtenido en la producción. Estas pueden presentarse en #[b retrasos, paros, desperdicios, sobreconsumo de materiales, tiempos de ciclo elevados, cambios frecuentes de referencia o baja utilización de recursos](García, 2023).  Estas situaciones pueden analizarse como puntos de intervención dentro del proceso productivo:
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Cambios frecuentes de referencia] pueden asociarse a la secuencia de programación. 
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Retrasos por falta de insumos] pueden relacionarse con abastecimiento. 
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Tiempos elevados de ajuste] pueden vincularse a procesos de #[i setup].
          br
    .bg-1
      .px-5
        p.mb-5 A continuación, se presentan fuentes comunes de oportunidades de mejora en producción:
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 4.
              span Fuentes frecuentes de oportunidades de mejora en producción
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Fuente de oportunidad
                    th.ajuste-border-tabla.texto-left Ejemplo en planta
                    th.texto-left Posible efecto si se mejora
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left #[b Secuencia de órdenes]
                    td.ajuste-border-tabla.texto-left Cambios frecuentes de referencia
                    td.texto-left Menos tiempos de #[i setup]
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Flujo del proceso]
                    td.ajuste-border-tabla.texto-left Esperas entre operaciones
                    td.texto-left Menor tiempo total del lote
                  tr
                    td.ajuste-border-tabla.texto-left #[b Uso de recursos]
                    td.ajuste-border-tabla.texto-left Línea saturada y otra subutilizada
                    td.texto-left Mejor balance de carga
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Materiales]
                    td.ajuste-border-tabla.texto-left Faltantes o entrega tardía
                    td.texto-left Menos paros e incumplimientos
                  tr
                    td.ajuste-border-tabla.texto-left #[b Información]
                    td.ajuste-border-tabla.texto-left Reportes tardíos o incompletos
                    td.texto-left Reacción más rápida
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Calidad]
                    td.ajuste-border-tabla.texto-left Reprocesos frecuentes
                    td.texto-left Menos pérdidas y mejor cumplimiento
        .caja-tema1-1.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Cómo reconocer una oportunidad de mejora con un ejemplo
        p.mb-5 Las oportunidades de mejora se identifican al analizar las causas que generan pérdidas dentro del proceso productivo.
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema1-5.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema3/img2.png', alt="" ).m-auto
            h4.text-center Línea con atrasos frecuentes
            p.mb-0.text-center Alto tiempo en cambios de formato entre pedidos pequeños: reorganizar la secuencia para agrupar referencias y reducir #[i setups].
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-tema1-5.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema3/img3.png', alt="" ).m-auto
            h4.text-center Cumplimiento en cantidad con reprocesos elevados
            p.mb-0.text-center Problemas en parámetros, método o control de calidad: ajustar condiciones del proceso para disminuir reprocesos.
    p.mb-5 Estas situaciones permiten relacionar el resultado observado con condiciones específicas del proceso productivo. La figura presenta un esquema en el que se agrupan pérdidas como paros menores, cambios de formato, reprocesos, faltantes de material y esperas por aprobación, lo que permite identificar su incidencia dentro del resultado operativo.
    .row.justify-content-center.mb-0
      .col-xl-9
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 4.
          span Ejemplo de árbol de pérdidas para detectar oportunidades de mejora
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img4.png', alt='Árbol de pérdidas que agrupa factores como paros menores, cambios de formato, reprocesos, faltantes de material y esperas por aprobación, con el propósito de detectar oportunidades de mejora en la producción. ').m-auto
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Criterios de evaluación de propuestas de mejora
    p.mb-5 Los #[b criterios de evaluación] permiten comparar diferentes propuestas de mejora para seleccionar aquellas que resultan más convenientes en función de su impacto, viabilidad y recursos requeridos. Estos criterios facilitan decisiones estructuradas dentro del proceso productivo (Díaz, 2024). En la práctica, la evaluación considera aspectos como:
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/img5.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center Impacto esperado en el proceso. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/img6.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center Facilidad de implementación. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/img7.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center Recursos y costos requeridos. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/img8.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center Tiempo de ejecución. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/img9.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center Riesgo operativo asociado. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/img10.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center Alineación con los objetivos del proceso. 
    p.mb-5 Estos elementos permiten establecer una relación entre beneficio, esfuerzo y viabilidad de cada propuesta.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Criterios prácticos para comparar propuestas
    p.mb-5 Los criterios permiten analizar las propuestas de mejora bajo condiciones comparables.
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Impacto")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema3/img11.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Impacto
            p.mb-0 Nivel de mejora esperado sobre el problema identificado.
      .py-3.py-md-4(titulo="Facilidad")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema3/img12.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Facilidad
            p.mb-0 Condiciones disponibles para ejecutar la propuesta.
      .py-3.py-md-4(titulo="Costo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema3/img13.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Costo
            p.mb-0 Recursos económicos requeridos para su implementación.
      .py-3.py-md-4(titulo="Tiempo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema3/img14.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Tiempo
            p.mb-0 Duración estimada para ejecutar la mejora.
      .py-3.py-md-4(titulo="Riesgo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema3/img15.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Riesgo
            p.mb-0 Posibles efectos adversos o incertidumbre en la implementación.
      .py-3.py-md-4(titulo="Sostenibilidad")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema3/img16.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Sostenibilidad
            p.mb-0 Capacidad de mantener la mejora en el tiempo.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-3(data-aos="flip-up")
          h5 Fórmula básica de puntuación ponderada
          p Para integrar estos criterios, puede utilizarse una puntuación ponderada:
          .caja-tema1-4.mb-3(data-aos="zoom-in")
            p.mb-0 Puntaje total = (impacto x peso) + (facilidad x peso) + (costo x peso) + (tiempo x peso) + (riesgo x peso)
          h5 Ejemplo breve:
          p Si una propuesta recibe impacto 5, facilidad 4, costo 4, tiempo 5 y riesgo 4, y todos los criterios pesan igual:
          .caja-tema1-4.mb-3(data-aos="zoom-in")
            p.mb-0 Puntaje total = 5 + 4 + 4 + 5 + 4 = 22 puntos
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Matriz de priorización impacto-esfuerzo
    .bg-1
      .px-5
        p.mb-5 La #[b matriz impacto-esfuerzo] permite clasificar las propuestas según el beneficio esperado y el esfuerzo requerido para su implementación.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 5.
              span Matriz de priorización impacto-esfuerzo
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Nivel de impacto / esfuerzo
                    th.texto-left Interpretación operativa
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left #[b Alto impacto - bajo esfuerzo]
                    td.texto-left Prioridad alta. Implementación recomendada
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Alto impacto - alto esfuerzo]
                    td.texto-left Requiere planificación. Evaluación detallada
                  tr
                    td.ajuste-border-tabla.texto-left #[b Bajo impacto - bajo esfuerzo]
                    td.texto-left Implementación opcional. Mejora incremental
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Bajo impacto - alto esfuerzo]
                    td.texto-left Baja prioridad o descarte
        p.mb-5 Esta herramienta permite organizar las decisiones de mejora dentro del proceso productivo. A continuación, se presenta un ejemplo de evaluación de propuestas:
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 6.
              span Ejemplo de evaluación de propuestas de mejora
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Propuesta
                    th.ajuste-border-tabla.texto-left Impacto
                    th.ajuste-border-tabla.texto-left Facilidad
                    th.ajuste-border-tabla.texto-left Costo
                    th.ajuste-border-tabla.texto-left Tiempo
                    th.texto-left Puntaje total
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left #[b Agrupar órdenes similares]
                    td.ajuste-border-tabla.texto-left 5
                    td.ajuste-border-tabla.texto-left 5
                    td.ajuste-border-tabla.texto-left 5
                    td.ajuste-border-tabla.texto-left 5
                    td.texto-left 10
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Reducir #[i setup] con ajuste rápido]
                    td.ajuste-border-tabla.texto-left 5
                    td.ajuste-border-tabla.texto-left 3
                    td.ajuste-border-tabla.texto-left 3
                    td.ajuste-border-tabla.texto-left 3
                    td.texto-left 14
                  tr
                    td.ajuste-border-tabla.texto-left #[b Adquirir nueva máquina]
                    td.ajuste-border-tabla.texto-left 5
                    td.ajuste-border-tabla.texto-left 2
                    td.ajuste-border-tabla.texto-left 1
                    td.ajuste-border-tabla.texto-left 1
                    td.texto-left 9
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Mejorar tablero de seguimiento]
                    td.ajuste-border-tabla.texto-left 4
                    td.ajuste-border-tabla.texto-left 5
                    td.ajuste-border-tabla.texto-left 5
                    td.ajuste-border-tabla.texto-left 4
                    td.texto-left 18
    p.mb-5 La figura presenta una matriz con cuatro cuadrantes que agrupan las propuestas según su impacto y esfuerzo requerido, permitiendo su organización dentro del proceso de priorización.
    .row.justify-content-center.mb-0
      .col-xl-9
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 5.
          span Ejemplo de matriz impacto-esfuerzo para priorizar mejoras
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img17.png', alt='Matriz impacto-esfuerzo con cuatro cuadrantes para clasificar propuestas de mejora según el beneficio esperado y el esfuerzo requerido, permitiendo priorizar acciones dentro del proceso productivo. ').m-auto
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Métodos de optimización de la programación de la producción
    p.mb-5 La #[b optimización de la programación] permite mejorar la asignación, secuencia y coordinación de las actividades productivas para reducir pérdidas y aumentar el desempeño del sistema. Estas mejoras pueden lograrse mediante ajustes en la organización del trabajo, sin requerir necesariamente cambios tecnológicos (Gamarra, 2024). En la operación, la optimización se orienta a:
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema3/img18.png', alt='').m-auto
        .col-xl
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Reducir interrupciones y tiempos muertos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Mejorar la secuencia de producción. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Aprovechar mejor la capacidad disponible. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Coordinar recursos y actividades.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3  Eliminación de desperdicios y simplificación del proceso
    p.mb-5 La optimización puede abordarse mediante la eliminación de actividades que no agregan valor dentro del proceso productivo.
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/img19.svg' style="max-width: 90px").m-auto
        h4.text-center Esperas
        p.mb-0.text-center Tiempos muertos entre operaciones.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/img20.svg' style="max-width: 90px").m-auto
        h4.text-center Movimientos innecesarios
        p.mb-0.text-center Desplazamientos sin aporte al proceso.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/img21.svg' style="max-width: 90px").m-auto
        h4.text-center Exceso de inventario
        p.mb-0.text-center Acumulación de materiales sin uso inmediato.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/img22.svg' style="max-width: 90px").m-auto
        h4.text-center Sobreprocesamiento
        p.mb-0.text-center Actividades adicionales sin valor para el producto.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/img23.svg' style="max-width: 90px").m-auto
        h4.text-center Defectos
        p.mb-0.text-center Reprocesos o productos no conformes.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/img24.svg' style="max-width: 90px").m-auto
        h4.text-center Transporte innecesario
        p.mb-0.text-center Traslados repetitivos entre áreas.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/img25.svg' style="max-width: 90px").m-auto
        h4.text-center Producción sin valor
        p.mb-0.text-center Fabricación sin requerimiento inmediato.
    p.mb-5 La reducción de estos elementos permite mejorar el flujo del proceso y el uso de los recursos (Higuita, 2024).
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3  Balanceo, paralelización y coordinación de recursos
    p.mb-5 La optimización también puede lograrse mediante la organización del trabajo entre recursos y actividades.
    .caja-tema3.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Balanceo de cargas: distribuir el trabajo para evitar cuellos de botella.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Paralelización:	ejecutar actividades compatibles de forma simultánea.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Coordinación de recursos: sincronizar tareas, materiales y equipos en el proceso.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema3/img26.png', alt='').m-auto
    p.mb-5 Estas prácticas permiten reducir tiempos totales y mejorar la continuidad del proceso productivo (Gamarra, 2024). Las mejoras en el proceso pueden cuantificarse mediante indicadores de tiempo y capacidad.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-3(data-aos="flip-up")
          h5 Fórmulas básicas de efecto de mejora
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Reducción de tiempo (%) = [(tiempo antes - tiempo después) / tiempo antes] × 100
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Liberación de capacidad (%) = [(capacidad después - capacidad antes) / capacidad antes] × 100
          h5 Ejemplo práctico
          p.mb-0 Si el #[i setup] promedio baja de 40 a 28 minutos:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Reducción de tiempo (%) = [(40 - 28) / 40] × 100 = 30 %
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Si una línea producía 500 unidades por turno y después de la mejora produce 575
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Liberación de capacidad (%) = [(575 - 500) / 500] × 100 = 15 %
    p.mb-5 A continuación, se resumen métodos prácticos de optimización en producción:
    .row.align-items-center.mb-0
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema3/img27.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img28.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Agrupar órdenes similares
            p.mb-0.text-center Menor número de cambios de referencia, con reducción de #[i setup].
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img29.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Balanceo de cargas
            p.mb-0.text-center Redistribuir trabajo entre recursos, con menos cuellos de botella.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img30.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Preparación estandarizada
            p.mb-0.text-center Ajustes previos y lista de verificación, con menor tiempo improductivo.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img31.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Paralelización de tareas
            p.mb-0.text-center Ejecutar actividades compatibles al mismo tiempo, con menor tiempo total.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img32.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Simplificación del flujo
            p.mb-0.text-center Quitar pasos sin valor, con menos espera y retrabajo.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img33.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Tablero diario y seguimiento
            p.mb-0.text-center Mejor reacción ante desvíos, con mayor estabilidad del programa.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Análisis del impacto de las mejoras en capacidad y costos 
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p El análisis del impacto permite evaluar los resultados de una mejora en términos de #[b capacidad del proceso y costos operativos], con el fin de sustentar decisiones y validar la efectividad de la intervención (Díaz, 2024). Este análisis se enfoca en dos dimensiones principales:
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Capacidad], relacionada con producción, tiempo disponible y uso de recursos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Costos], asociados a consumo, desperdicios y operación. 
        p.mb-0 La medición de estos efectos permite comparar la situación antes y después de la mejora.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img34.png', alt='').m-auto
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Impacto en capacidad
    p.mb-5 El impacto en capacidad se refleja en cambios en la producción o en el uso del tiempo disponible dentro del proceso productivo.
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema3/img35.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Producción por turno
            p.mb-0.text-center Incremento en unidades producidas.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/img36.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Tiempo disponible
            p.mb-0.text-center Reducción de paros o tiempos improductivos.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema3/img37.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Utilización del recurso
            p.mb-0.text-center Mayor aprovechamiento del equipo o personal.
    p.mb-5 Estas variaciones permiten relacionar la mejora con el desempeño real del sistema (Betancurt, 2023).
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Impacto en costos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p El impacto en costos se evalúa a partir de la reducción en el uso de recursos o en pérdidas del proceso.
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Horas de operación]: reducción de horas extra o tiempos improductivos.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Consumo de material]: disminución de desperdicios o reprocesos.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Costo operativo]: reducción del gasto asociado al proceso.
        p.mb-0 Para cuantificar estos efectos, se emplean relaciones básicas:
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img38.png', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-3(data-aos="flip-up")
          h5 Fórmulas básicas
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Ahorro en tiempo = tiempo antes - tiempo después
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Ahorro en costo = costo antes - costo después
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Impacto porcentual en costo (%) = [(costo antes - costo después) / costo antes] × 100
          h5 Ejemplo práctico
          p.mb-0 Una línea consumía 10 horas extra por semana. Después de reorganizar la secuencia y reducir #[i setups], baja a 6 horas extra:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Ahorro en tiempo = 10 - 6 = 4 horas
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Si cada hora extra cuesta $25.000:
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Ahorro semanal = 4 × 25.000 = $100.000
          p Si el costo semanal antes era $250.000:
          .caja-tema1-4.mb-0(data-aos="zoom-in")
            p.mb-0 Impacto en costo (%) = [(250.000 - 150.000) / 250.000] × 100 = 40 %
    .bg-1
      .px-5
        p.mb-5 A continuación, se presenta un formato comparativo para analizar el impacto:
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 7.
              span Formato comparativo para analizar el impacto de una mejora
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Variable
                    th.ajuste-border-tabla.texto-left Antes
                    th.ajuste-border-tabla.texto-left Después
                    th.ajuste-border-tabla.texto-left Diferencia
                    th.texto-left Impacto %
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left #[b Tiempo de #[i setup] (min)]
                    td.ajuste-border-tabla.texto-left 40
                    td.ajuste-border-tabla.texto-left 28
                    td.ajuste-border-tabla.texto-left -12
                    td.texto-left -30 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Producción por turno]
                    td.ajuste-border-tabla.texto-left 500
                    td.ajuste-border-tabla.texto-left 575
                    td.ajuste-border-tabla.texto-left +75
                    td.texto-left +15 %
                  tr
                    td.ajuste-border-tabla.texto-left #[b Horas extra por semana]
                    td.ajuste-border-tabla.texto-left 10
                    td.ajuste-border-tabla.texto-left 6
                    td.ajuste-border-tabla.texto-left -4
                    td.texto-left -40 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Desperdicio de material (%)]
                    td.ajuste-border-tabla.texto-left 7
                    td.ajuste-border-tabla.texto-left 4
                    td.ajuste-border-tabla.texto-left -3
                    td.texto-left -42,9 %
        p.mb-5 La identificación y priorización de oportunidades de mejora permite estructurar acciones dentro del proceso productivo con base en información analizada. En términos operativos, este proceso implica:
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Identificar brechas en el desempeño. 
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="zoom-in")
                    img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Comparar alternativas de mejora. 
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="zoom-in")
                    img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Aplicar métodos de optimización. 
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .caja-tema1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Evaluar el impacto en capacidad y costos. 
        p.mb-0 Esta secuencia permite relacionar el análisis del desempeño con la implementación de mejoras en la producción, mediante criterios definidos y seguimiento de resultados (García, 2023).
</template>

<script>
export default {
  name: 'Tema3',
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
