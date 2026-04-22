<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Análisis de desviaciones y control de calidad en la producción
    p.mb-5 En la producción, la ejecución puede diferir de lo programado en aspectos como cantidad, tiempo, calidad, uso de materiales o necesidad de retrabajo. Por ello, después de medir el desempeño, el análisis de desviaciones y la revisión de la calidad permiten comprender con mayor precisión las causas, los efectos y las posibilidades de corrección. En enfoques de control de calidad y mejora continua, el análisis de datos fuera de especificación permite identificar no conformidades, documentarlas y orientar acciones de mejora (Instituto Nacional de Salud, 2025). En este contexto, el análisis de desviaciones se orienta a:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Identificar causas de las diferencias detectadas. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Revisar el cumplimiento de criterios de calidad. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Documentar lo ocurrido en la operación. 
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Sustentar acciones correctivas con base en evidencia. 
    p.mb-0 Este enfoque permite relacionar las desviaciones con decisiones de control y mejora en el proceso productivo.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Causas de desviaciones en la ejecución de la producción
    p.mb-5 Una #[b desviación en producción] corresponde a cualquier diferencia relevante entre lo previsto y lo ejecutado durante la operación. Puede presentarse en #[b cantidad, tiempo, calidad, secuencia, uso de recursos o cumplimiento de procedimientos]. En sistemas de gestión de calidad, estas situaciones se asocian con #[b no conformidades, observaciones o resultados fuera de especificación o tendencia], los cuales permiten identificar riesgos y oportunidades de mejora (Instituto Nacional de Salud, 2025). El análisis de causas permite diferenciar el origen de las desviaciones y orientar acciones específicas sobre el proceso.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Causas técnicas, operativas y de recursos
    p.mb-5 Las desviaciones pueden clasificarse según su origen en causas técnicas, operativas, de recursos, de medición o del entorno, lo que permite estructurar su análisis en la operación productiva.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Técnica
                p.mb-0 Mal ajuste de máquina, parámetro fuera de rango o falla de equipo: genera retrasos, defectos o reprocesos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img1.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Operativa
                p.mb-0 Error de secuencia, método inadecuado o instrucción incompleta: provoca incumplimientos y pérdida de tiempo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img2.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Recursos
                p.mb-0 Falta de material, ausencia de operario o recurso no disponible: ocasiona paros o reducción del ritmo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img3.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Medición
                p.mb-0 Dato erróneo, registro incompleto o lectura incorrecta: conduce a decisiones equivocadas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img4.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Entorno
                p.mb-0 Energía inestable, temperatura o condiciones externas: produce variación en el proceso.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img5.png', alt='' style="max-width: 500px").m-auto
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Cómo leer una desviación en la práctica
    p.mb-5 La lectura de una desviación requiere complementar la comparación entre el valor real y el programado con información del contexto en el que ocurrió.
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img6.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Cuándo ocurrió
        p.mb-0.text-center Momento o turno en el que se presentó la desviación.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img7.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Dónde ocurrió
        p.mb-0.text-center Línea, área o proceso en el que se identificó la diferencia.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img8.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Operación
        p.mb-0.text-center Etapa específica del proceso productivo afectada.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img9.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Recurso involucrado
        p.mb-0.text-center Equipo, material o personal relacionado con la desviación.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img10.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Condiciones
        p.mb-0.text-center Situaciones asociadas (paro, falta de material, ajuste, error).
    p.mb-5 Esta información permite registrar la desviación como un hecho analizable dentro del proceso productivo. A continuación, se presenta un ejemplo comparativo de registro:
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema2/img11.png', alt='').m-auto
        .col-xl
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Registro general]: faltaron 40 unidades.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Registro detallado]: la orden OP-325 quedó 40 unidades por debajo de la meta durante el turno de noche, en la operación de sellado, por detención de 35 minutos debida a falta de material.
    p.mb-0 El registro detallado permite documentar la desviación con información suficiente para su análisis y seguimiento.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Criterios de calidad de productos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Los #[b criterios de calidad] establecen las condiciones que permiten determinar si un producto o proceso cumple con lo esperado. Estos criterios pueden estar relacionados con #[b dimensiones, peso, acabado, apariencia, funcionalidad, tolerancias o cumplimiento de especificaciones], definidas por el diseño, la norma o el cliente. En el control de calidad, funcionan como referencia para establecer la conformidad o no conformidad del producto (Cabezón Gutiérrez, 2014).
        p.mb-0 En el entorno productivo, la calidad se relaciona directamente con la ejecución del proceso. Un producto que no cumple con los criterios establecidos puede generar #[b retrabajo, retrasos, desperdicios o incumplimientos del plan], por lo que su revisión forma parte del análisis del desempeño.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img12.png', alt='').m-auto
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Conformidad, no conformidad y tolerancias
    p.mb-5 Los criterios de calidad permiten clasificar los resultados del proceso productivo según su cumplimiento frente a lo establecido.
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/tema2/img13.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Conformidad
          p.mb-0.text-center Cumplimiento de los requisitos definidos en especificaciones, normas o diseño.
      .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/img14.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center No conformidad
          p.mb-0.text-center Incumplimiento de uno o más requisitos establecidos.
      .col-lg-4.col-md-9(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema2/img15.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Tolerancia
          p.mb-0.text-center Margen permitido de variación respecto a un valor objetivo definido.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Las #[b tolerancias] definen el rango aceptable dentro del cual un producto se considera conforme.
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Valor nominal]: 50 mm
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Tolerancia]: ± 0,5 mm
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Rango aceptable]: Entre 49,5 mm y 50,5 mm
        p.mb-0 Cuando un resultado se encuentra dentro del rango definido, se clasifica como conforme. Si se encuentra por fuera, se registra como no conformidad y requiere análisis dentro del proceso de producción (Cabezón Gutiérrez, 2014).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img16.png', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-3(data-aos="flip-up")
          h5 Fórmulas básicas
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Porcentaje de conformidad = (unidades conformes / unidades inspeccionadas) x 100
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Porcentaje de no conformidad = (unidades no conformes / unidades inspeccionadas) x 100
          h5 Ejemplo práctico
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Si se inspeccionan 250 unidades y 235 cumplen especificación:
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Porcentaje de conformidad = (235 / 250) x 100 = 94 %
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Porcentaje de no conformidad = (15 / 250) x 100 = 6 %
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Criterios prácticos para revisar la calidad en producción
    p.mb-5 Los criterios de calidad en producción se establecen mediante instrumentos como listas de chequeo, hojas de verificación, fichas técnicas o instructivos de inspección, los cuales permiten evaluar el producto con base en condiciones definidas y comparables (Cabezón Gutiérrez, 2014). Estos criterios deben formularse de manera concreta para facilitar su aplicación en la operación:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center  Condiciones medibles o verificables. 
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Rangos o especificaciones definidos. 
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Descripciones claras del estado esperado. 
    p.mb-5 Por ejemplo, expresiones como “#[b peso entre 198 y 202 gramos]” o “#[b etiqueta legible y centrada]” permiten una verificación directa, a diferencia de formulaciones generales que no establecen un criterio preciso (Cabezón Gutiérrez, 2014).
    .bg-1
      .px-5
        .caja-tema2-1.mb-5(data-aos="flip-up")
          p.mb-0 En la operación, la revisión de calidad se complementa con el registro de información asociada a la desviación, como lote, cantidad afectada, equipo involucrado o recurrencia del defecto, lo que permite su análisis posterior. A continuación, se presenta un ejemplo de organización de criterios de calidad en producción:
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Ejemplo de criterios de calidad de producto en un control de producción
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Característica revisada
                    th.ajuste-border-tabla.texto-left Criterio aceptable
                    th.texto-left Resultado posible
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Dimensión]
                    td.ajuste-border-tabla.texto-left Dentro de tolerancia definida
                    td.texto-left Conforme / no conforme
                  tr
                    td.ajuste-border-tabla.texto-left #[b Peso]
                    td.ajuste-border-tabla.texto-left Dentro del rango permitido
                    td.texto-left Conforme / no conforme
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Acabado]
                    td.ajuste-border-tabla.texto-left Sin rebabas, manchas ni deformaciones
                    td.texto-left Conforme / no conforme
                  tr
                    td.ajuste-border-tabla.texto-left #[b Ensamble o cierre]
                    td.ajuste-border-tabla.texto-left Ajuste completo y funcional
                    td.texto-left Conforme / no conforme
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Rotulado o identificación]
                    td.ajuste-border-tabla.texto-left Visible, correcto y completo
                    td.texto-left Conforme / no conforme
        Separador
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Reporte y documentación de desviaciones
        p.mb-5 El #[b reporte de desviaciones] permite registrar de manera estructurada las diferencias identificadas en la producción, con el fin de facilitar su análisis y seguimiento. Documentar una desviación implica describir el evento de forma clara, trazable y verificable, de modo que pueda ser comprendido y analizado posteriormente. En los sistemas de gestión, estas desviaciones pueden originarse en #[b auditorías, análisis de datos, indicadores, autoinspecciones o resultados fuera de especificación] (Instituto Nacional de Salud, 2025). 
    .caja-tema1-8.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema2/img17.png', alt='').m-auto
        .col-xl
          p La documentación también permite evaluar aspectos como:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Frecuencia de ocurrencia. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Impacto en la operación. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |	Nivel de criticidad. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Posibilidad de recurrencia.
    p.mb-5 Cuando una desviación se repite o no se corrige de forma efectiva, su análisis requiere mayor profundidad y puede derivar en acciones correctivas más estructuradas (Instituto Nacional de Salud, 2025).
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Qué debe contener un reporte de desviación
    p.mb-5 Un reporte de desviación debe incluir información suficiente para describir el evento y facilitar su análisis.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img18.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Orden o proceso afectado]: código o nombre del proceso o producto involucrado.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Fecha y hora]: momento en que se detecta la desviación.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Descripción del evento]: detalle de lo ocurrido y forma en que se evidenció.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Lugar o etapa]: área, línea o fase del proceso donde ocurrió.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Impacto observado]: efecto sobre cantidad, tiempo, calidad o costo.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Evidencia]: registro, muestra, medición, fotografía o dato asociado.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Acción inmediata]: medida aplicada para contener o corregir la situación.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Responsable del reporte]: persona que registra la desviación.
          br
    p.mb-5 Este tipo de estructura permite que el reporte sea comprensible y útil para el análisis posterior.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Del reporte al análisis
    p.mb-5 El registro de la desviación permite iniciar su análisis dentro del proceso productivo.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema2/img19.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Impacto
            p.mb-0.text-center Nivel de afectación sobre producción, calidad o tiempo.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/img20.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Frecuencia
            p.mb-0.text-center Número de veces que se presenta la desviación.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/img21.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Criticidad
            p.mb-0.text-center Gravedad del efecto en el proceso o producto.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema2/img22.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Recurrencia
            p.mb-0.text-center Probabilidad de que la desviación vuelva a presentarse.
    p Según estos criterios, la empresa puede determinar si la situación se gestiona mediante una corrección inmediata o si requiere un análisis más profundo con herramientas de causa raíz y acciones correctivas formales.
    p.mb-0 En la operación, una desviación aislada puede resolverse en el mismo turno si no vuelve a presentarse. Cuando la desviación se repite en condiciones similares, el reporte permite sustentar la necesidad de un análisis más detallado dentro del proceso productivo.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Técnicas de análisis de causa raíz y hallazgos 
    p El #[b análisis de causa raíz] permite identificar las condiciones que originan una desviación, con el fin de evitar su repetición. Este proceso se desarrolla mediante la definición del problema, la formulación de hipótesis, la validación de causas y la aplicación de acciones sobre la causa identificada.
    p.mb-5 Su aplicación permite diferenciar entre la corrección inmediata del efecto y la intervención sobre el origen del problema, lo que contribuye a la prevención de recurrencias en la producción.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Técnica de los 5 porqués
    p.mb-5 La técnica de los #[b 5 porqués] consiste en formular de manera secuencial la pregunta “¿por qué?” hasta identificar una causa más profunda y controlable dentro del proceso.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img23.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p #[b Problema]: la orden se retrasó.
        br
        br
        ol.lista-ol--cuadro.mb-0
          li.mb-1.d-flex
            .lista-ol--cuadro__vineta
              span 1
            | 
            p.mb-0 #[b ¿Por qué? (1)]: porque la máquina se detuvo.
          li.mb-1.d-flex 
            .lista-ol--cuadro__vineta
              span 2
            | 
            p.mb-0 #[b ¿Por qué? (2)]: porque el rodamiento falló.
          li.mb-1.d-flex 
            .lista-ol--cuadro__vineta
              span 3
            | 
            p.mb-0 #[b ¿Por qué? (3)]: porque no recibió mantenimiento oportuno.
          li.mb-1.d-flex 
            .lista-ol--cuadro__vineta
              span 4
            | 
            p.mb-0 #[b ¿Por qué? (4)]: porque no estaba incluido en el plan preventivo. 
          li.mb-1.d-flex 
            .lista-ol--cuadro__vineta
              span 5
            | 
            p.mb-0 #[b ¿Por qué? (5)]: porque no se identificó como componente crítico dentro del programa de mantenimiento.
    p.mb-5 Esta técnica permite estructurar la indagación del problema mediante preguntas encadenadas que orientan la identificación de causas dentro del proceso.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Diagrama de Ishikawa y hallazgos
    p.mb-5 El #[b diagrama de Ishikawa] organiza las posibles causas de una desviación en categorías que facilitan su análisis.
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img24.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Método
        p.mb-0.text-center Secuencia de trabajo, procedimientos, instrucciones.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img25.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Máquina
        p.mb-0.text-center Fallas, ajustes, mantenimiento.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img26.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Materiales
        p.mb-0.text-center Calidad, disponibilidad, especificaciones.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img27.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Mano de obra
        p.mb-0.text-center Capacitación, errores operativos, disponibilidad.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img28.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Medición
        p.mb-0.text-center Registros, instrumentos, datos.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img29.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Entorno
        p.mb-0.text-center Condiciones externas, energía, temperatura.
    p.mb-5 El #[b hallazgo] corresponde al resultado documentado del análisis realizado.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Situación observada
            p.mb-0.text-center Qué ocurrió en el proceso.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Requisito o condición
            p.mb-0.text-center Qué debía cumplirse.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Evidencia
            p.mb-0.text-center Información que respalda el hallazgo.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Efecto
            p.mb-0.text-center Consecuencia sobre el proceso o producto.
    p.mb-5 La figura presenta un diagrama causa-efecto en el que el problema central corresponde al incumplimiento de una orden de producción y las causas se agrupan en categorías como método, materiales, máquinas, mano de obra, medición y entorno.
    .row.justify-content-center.mb-5
      .col-xl-9
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 3.
          span Ejemplo de diagrama causa-efecto para una desviación de producción
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img30.png', alt='Diagrama causa-efecto sobre el incumplimiento de una orden de producción, con causas agrupadas en método, materiales, máquina, mano de obra, medición y entorno para facilitar el análisis de la causa raíz. ').m-auto
    p.mb-5 El análisis de desviaciones y el control de calidad permiten examinar las diferencias entre lo programado y lo ejecutado considerando no solo cantidades y tiempos, sino también condiciones del proceso, uso de recursos y cumplimiento de especificaciones. En términos operativos, este proceso implica:
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema2/img31.png', alt='').m-auto
        .col-xl
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Detectar la desviación en la producción. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Clasificar su origen y características. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Evaluar su impacto en la calidad y el proceso. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Documentar la información de forma estructurada. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Analizar la causa raíz y definir acciones.
    p.mb-0 Esta secuencia permite estructurar el análisis del desempeño productivo y orientar acciones dentro del proceso de mejora continua.
</template>

<script>
export default {
  name: 'Tema2',
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
