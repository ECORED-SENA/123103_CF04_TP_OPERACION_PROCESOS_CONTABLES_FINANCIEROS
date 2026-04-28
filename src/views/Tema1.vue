<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Medición del desempeño de la producción
    .caja-intro.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema1/img1.png', alt='').m-auto
        .col-xl
          p.mb-0 La #[b medición del desempeño de la producción] consiste en revisar, con datos reales, qué tan cerca estuvo la ejecución del resultado esperado. En una empresa, esto ocurre a diario cuando el supervisor compara cuántas unidades se programaron y cuántas se produjeron, cuánto tiempo debía durar una orden y cuánto tardó en realidad, o cuántas incidencias afectaron el turno. Así, la medición permite pasar de percepciones generales como “hoy se produjo poco” a evidencias concretas sobre #[b cumplimiento, retrasos, pérdidas y uso de recursos]. En trabajos aplicados sobre plantas de producción e indicadores industriales, se destaca que la medición sistemática permite #[b optimizar el rendimiento, detectar ineficiencias y orientar el mejoramiento continuo] (Salas, 2024).
    p.mb-0 En este contexto, el análisis del desempeño productivo implica revisar el grado de cumplimiento de la programación, identificar las diferencias entre lo planeado y lo ejecutado, evaluar la eficiencia operativa y estructurar la información en reportes que permitan tomar decisiones fundamentadas. El propósito no es llenar cuadros por cumplir un requisito, sino interpretar el comportamiento real de la producción para verificar si el plan se cumplió y, cuando no fue así, establecer dónde se presentaron las desviaciones y qué aspectos pueden mejorarse (Forero y Moreno, 2015). Este enfoque permite establecer una relación directa entre los datos operativos y la mejora continua del sistema productivo.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Indicadores de cumplimiento de la programación de producción
    p.mb-5 Los #[b indicadores de cumplimiento] permiten establecer si la programación se ejecutó según lo previsto. Su utilidad radica en que convierten la producción diaria en una medida de fácil interpretación: cuánto se cumplió, cuántas órdenes salieron a tiempo, qué parte del plan quedó pendiente y qué tan estable fue la ejecución. En empresas manufactureras, los sistemas de indicadores se utilizan para hacer seguimiento al programa de producción y para determinar si la planta responde como se esperaba en términos de #[b cantidades, tiempos y compromisos de entrega] (Forero y Moreno, 2015). En la práctica, estos indicadores orientan el análisis mediante preguntas clave:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center ¿Se cumplió la meta del turno? 
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center ¿Cuántas órdenes se terminaron en la fecha prevista? 
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center ¿Qué porcentaje del plan semanal quedó ejecutado? 
    p.mb-5 Cuando esta información se gestiona de forma sistemática, el equipo de producción deja de trabajar únicamente con percepciones y puede priorizar mejor las acciones correctivas. Por ejemplo, una línea puede registrar un alto volumen de producción y, aun así, no cumplir el programa si no finalizó las órdenes prioritarias (Forero y Moreno, 2015).
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Indicadores básicos de cumplimiento
    p Los indicadores básicos permiten evaluar de manera directa el grado de cumplimiento del programa de producción. Entre los más utilizados se encuentra el #[b cumplimiento de producción], que compara la cantidad ejecutada con la cantidad programada. También se emplea el #[b cumplimiento oportuno de órdenes], que determina cuántas se finalizaron dentro del plazo previsto. En contextos con mayor nivel de control, se incorporan mediciones por #[b turno, línea o centro de trabajo], lo que facilita identificar dónde se concentran los incumplimientos (Forero y Moreno, 2015).
    p.mb-5 Estos indicadores son fáciles de calcular y adquieren valor cuando se revisan con disciplina. Si una orden debía finalizar con #[b 500 unidades] y se produjeron #[b 440], se obtiene un #[b cumplimiento del 88 %]. Este resultado permite iniciar la revisión de factores como #[b materiales, tiempos, calidad o disponibilidad de recursos] (Forero y Moreno, 2015). A continuación, se presentan los principales indicadores y su interpretación operativa:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cumplimiento de producción
                p Se calcula con la fórmula:
                .caja-tema1-2.mb-3
                  p.mb-0 #[b (Cantidad ejecutada / Cantidad programada) x 100. ]
                p.mb-0 Permite determinar el nivel de logro de la meta prevista.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img4.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cumplimiento oportuno de órdenes
                p Se calcula con la fórmula: 
                .caja-tema1-2.mb-3
                  p.mb-0 #[b (Órdenes terminadas en plazo / Órdenes programadas) x 100. ]
                p.mb-0 Permite establecer la puntualidad de la ejecución.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img5.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cumplimiento por turno
                p Se calcula con la fórmula: 
                .caja-tema1-2.mb-3
                  p.mb-0 #[b (Producción real del turno / Producción programada del turno) x 100.] 
                p.mb-0 Permite analizar el desempeño del turno frente al plan.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img6.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cumplimiento por línea
                p Se calcula con la fórmula: 
                .caja-tema1-2.mb-3
                  p.mb-0 #[b (Producción real de la línea / Producción programada de la línea) x 100.] 
                p.mb-0 Permite identificar el comportamiento de cada línea o centro de trabajo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img7.png', alt='' style="max-width: 500px").m-auto
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-3(data-aos="flip-up")
          h5 Ejemplo práctico
          p Una empresa programó 1.200 unidades para la semana. Al cierre, produjo 1.080. El cumplimiento semanal es:
          .text-center
            .caja-tema1-4.mb-3(data-aos="zoom-in")
              p.mb-0 Cumplimiento (%) = (1.080 / 1.200) x 100 = 90 %
          p.mb-0 Este resultado presenta que el programa no se cumplió totalmente y que quedó un 10 % pendiente. La siguiente pregunta ya no es si hubo incumplimiento, sino por qué ocurrió.
    p.mb-5 La figura presenta un tablero simple en el que el cumplimiento se clasifica en tres categorías según el nivel de logro frente a la meta: #[b cumplido o superior], cuando el resultado alcanza o supera lo programado; #[b en riesgo], cuando el resultado se encuentra cercano a la meta pero con posibilidad de incumplimiento; y #[b no cumplido], cuando el resultado está por debajo del nivel esperado. Este esquema permite identificar qué órdenes, líneas o turnos requieren atención.
    .row.justify-content-center.mb-0
      .col-xl-9
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 1.
          span Ejemplo de tablero semaforizado de cumplimiento del programa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img8.png', alt='Tablero semaforizado de cumplimiento del programa de producción, organizado en categorías de cumplimiento: cumplido o superior, en riesgo y no cumplido, para identificar órdenes, líneas o turnos que requieren atención. ').m-auto
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Análisis de variaciones en producción
    p.mb-5 El #[b análisis de variaciones] busca explicar la diferencia entre lo programado y lo ejecutado. No se limita a identificar que hubo menor producción o mayor tiempo del previsto, sino que implica #[b cuantificar la diferencia y determinar su magnitud]. En contextos productivos, las variaciones pueden presentarse en #[b cantidades, tiempos, consumo de materiales, uso de mano de obra, paros, desperdicios o calidad]. Su estudio es relevante porque permite identificar en qué punto el plan deja de cumplirse (Forero y Moreno, 2015). En una empresa, este análisis permite responder preguntas como:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center ¿Por qué una orden quedó por debajo de lo programado? 
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center ¿Por qué una línea consumió más horas de las previstas? 
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img2.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center ¿Por qué el rendimiento de un turno fue menor que el del turno anterior? 
    p.mb-5 Cuando la variación se cuantifica y se documenta, el seguimiento deja de ser general y permite orientar acciones específicas. Por ejemplo, no es equivalente indicar “hubo retraso” que precisar que una orden consumió #[b 2,5 horas adicionales] debido a una falta de material en una operación determinada.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Variaciones de cantidad y tiempo
    p.mb-5 Las #[b variaciones de cantidad] comparan la producción lograda frente a la producción prevista, mientras que las #[b variaciones de tiempo] comparan la duración real frente al tiempo estándar o programado. Ambas suelen analizarse de manera conjunta, debido a que una menor producción puede estar asociada a un mayor tiempo de ejecución (Goicoechea, 2013). A continuación, se presentan estas variaciones de forma comparativa:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema1-5.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema1/img9.png', alt="" ).m-auto
            h4.text-center Variación de cantidad
            p.mb-0.text-center Diferencia entre la producción real obtenida y la producción programada. Permite identificar desviaciones en volumen de producción.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-tema1-5.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema1/img10.png', alt="" ).m-auto
            h4.text-center Variación de tiempo
            p.mb-0.text-center Diferencia entre el tiempo real de ejecución y el tiempo estándar o programado. Permite identificar desviaciones en la duración de las operaciones.
    p.mb-5 Cuando estas variaciones se revisan de forma periódica, es posible identificar comportamientos recurrentes en la producción. Por ejemplo, si una línea presenta menor producción de manera repetida en un mismo día de la semana, la información permite orientar la revisión hacia factores como arranque, disponibilidad de personal o abastecimiento (Forero y Moreno, 2015).
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-3(data-aos="flip-up")
          h5 Fórmulas básicas
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Variación absoluta = valor real - valor programado
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Variación porcentual (%) = [(valor real - valor programado) / valor programado] x 100
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Desviación de tiempo = tiempo real - tiempo estándar
    .caja-tema1-6.mb-5(data-aos="fade-right")   
      h4.mb-0 Ejemplo práctico
    p Si una orden tenía programadas 300 unidades y se produjeron 255:
    ul.fa-ul.estilo___ul.mb-3
      li.mb-0
        span.fa-li
          i.fas.fa-check-circle
        | Variación absoluta = 255 - 300 = -45 unidades
      li.mb-0
        span.fa-li
          i.fas.fa-check-circle
        | Variación porcentual = (-45 / 300) x 100 = -15 %
      li.mb-0
        span.fa-li
          i.fas.fa-check-circle
        | Si además debía durar 6 horas y tardó 7,2 horas
      li.mb-0
        span.fa-li
          i.fas.fa-check-circle
        | Desviación de tiempo = 7,2 - 6 = 1,2 horas
    .bg-1
      .px-5
        p.mb-5 La siguiente tabla presenta un formato sencillo para comparar lo programado y lo ejecutado en producción, permitiendo identificar desviaciones en cantidad, tiempo y consumo de recursos.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Formato básico para analizar variaciones de producción
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Concepto
                    th.ajuste-border-tabla.texto-left Programado
                    th.ajuste-border-tabla.texto-left Real
                    th.ajuste-border-tabla.texto-left Variación absoluta
                    th.texto-left Variación %
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Cantidad producida]
                    td.ajuste-border-tabla.texto-left 300
                    td.ajuste-border-tabla.texto-left 255
                    td.ajuste-border-tabla.texto-left -45
                    td.texto-left -15 %
                  tr
                    td.ajuste-border-tabla.texto-left #[b Tiempo de ejecución (h)]
                    td.ajuste-border-tabla.texto-left 6,0
                    td.ajuste-border-tabla.texto-left 7,2
                    td.ajuste-border-tabla.texto-left +1,2
                    td.texto-left +20 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Material consumido (kg)]
                    td.ajuste-border-tabla.texto-left 120
                    td.ajuste-border-tabla.texto-left 128
                    td.ajuste-border-tabla.texto-left +8
                    td.texto-left +6,7 %
        .caja-tema1-1.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Interpretación de las variaciones
        .row.justify-content-center.align-items-center
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema1/img12.png', alt='').m-auto
          .col-xl
            p La variación por sí sola no basta; es necesario interpretarla. #[b Una variación negativa] en la cantidad puede originarse en un paro de máquina, defectos de calidad, ausentismo, falta de material o una secuencia inadecuada. De igual forma, #[b una variación positiva] en el tiempo puede indicar retraso, aunque también puede asociarse con una orden más compleja, una configuración especial o cambios no previstos. Por ello, el análisis siempre debe acompañarse de una revisión operativa (García, 2023).
            .row
              .col-xl-auto(data-aos="zoom-in")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema1/img13.svg', alt='').m-auto
              .col-xl
                p.mb-0 Una práctica recomendable consiste en clasificar las causas de variación en grupos simples: materiales, método, máquina, mano de obra, medición y entorno. Esta clasificación no soluciona el problema por sí misma, pero contribuye a organizar la discusión y a evitar explicaciones imprecisas. En reuniones de seguimiento, este enfoque facilita el paso del dato al hallazgo (García, 2023).
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Métricas de eficiencia operativa en producción
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema1-7
          p.mb-0 Las #[b métricas de eficiencia operativa] permiten evaluar qué tan bien se están aprovechando los recursos durante la ejecución. Mientras el cumplimiento responde a la pregunta “#[b ¿Se logró lo planeado?]”, la eficiencia se enfoca en “#[b ¿Con qué nivel de aprovechamiento se logró o no se logró?]”. En entornos productivos, estas métricas se analizan mediante indicadores como #[b productividad, utilización, eficiencia de mano de obra y eficiencia global de equipos] (Betancurt, 2023).
      .col-xl-auto.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema1/img14.jpg', alt='').m-auto
      .col-xl
        figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img15.svg', alt='' style="max-width: 75px")
        p.mb-0 Estas métricas permiten complementar el análisis del desempeño, ya que el resultado en volumen no refleja por sí solo el uso de los recursos. Una línea puede cumplir la cantidad programada utilizando más tiempo del previsto, presentar paros frecuentes o generar defectos. También puede presentarse una situación inversa, en la que se logra un uso eficiente del tiempo, pero no se alcanza la cantidad esperada debido a condiciones del plan (Betancurt, 2023).
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Productividad, utilización y eficiencia de mano de obra
    p.mb-5 Las principales métricas de eficiencia operativa permiten relacionar el resultado obtenido con el uso de los recursos en producción.
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema1-5.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema1/img16.png', alt="" ).m-auto
            h4.text-center Productividad
            p.mb-0.text-center Relación entre la producción obtenida y el recurso utilizado (por ejemplo, unidades por hora o producción por turno).
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-5.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema1/img17.png', alt="" ).m-auto
            h4.text-center Utilización
            p.mb-0.text-center Proporción del tiempo disponible de un recurso que fue efectivamente utilizado durante la operación.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-tema1-5.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema1/img18.png', alt="" ).m-auto
            h4.text-center Eficiencia de mano de obra
            p.mb-0.text-center Relación entre el tiempo estándar ganado y el tiempo real trabajado por el personal operativo.
    p.mb-5 Estas métricas permiten analizar de manera conjunta el uso del tiempo, los recursos y el resultado alcanzado en la operación productiva. Las métricas de eficiencia operativa se calculan mediante relaciones básicas entre producción, tiempo y recursos utilizados:
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-3(data-aos="flip-up")
          h5 Fórmulas básicas
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Productividad = producción obtenida / recurso consumido
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Utilización (%) = (tiempo operando / tiempo disponible) x 100
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Eficiencia de mano de obra directa (%) = (tiempo estándar ganado / tiempo real de mano de obra) × 100
          h5 Ejemplo práctico
          ul.fa-ul.estilo___ul.mb-2
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Si una línea produjo 480 unidades en 8 horas:
          .caja-tema1-4.mb-3(data-aos="zoom-in")
            p.mb-0 #[b Productividad = 480 / 8 = 60 unidades por hora]
          ul.fa-ul.estilo___ul.mb-2
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Si una máquina estuvo operando 6,5 horas de un turno disponible de 8 horas:
          .caja-tema1-4.mb-3(data-aos="zoom-in")
            p.mb-0 #[b Utilización (%) = (6,5 / 8) x 100 = 81,25 %]
          ul.fa-ul.estilo___ul.mb-2
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Si el tiempo estándar ganado fue de 30 horas y la mano de obra real trabajó 36 horas:
          .caja-tema1-4.mb-3(data-aos="zoom-in")
            p.mb-0 #[b Eficiencia MOD (%) = (30 / 36) x 100 = 83,3 %]
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Eficiencia global de los equipos (OEE)
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img19.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La eficiencia global de los equipos, conocida como OEE por su sigla en inglés, integra tres dimensiones: disponibilidad, rendimiento y calidad. Es una métrica muy usada para revisar el desempeño de máquinas o líneas porque no se queda solo en cuántas horas estuvieron activas, sino que también considera si produjeron a la velocidad esperada y con qué proporción de producto conforme. En aplicaciones industriales en español, el OEE se usa como base para seguimiento y mejora continua del rendimiento de planta. (Betancurt, 2023).
    p.mb-5 Su utilidad práctica está en que resume, en un solo indicador, varias pérdidas del proceso. Una línea puede tener buena disponibilidad, pero mal rendimiento, o puede operar rápido con baja calidad. El OEE ayuda a ver ese efecto conjunto y a priorizar dónde actuar primero. Por eso, suele combinarse con tableros diarios y reuniones de seguimiento en áreas productivas. (Betancurt, 2023).
    .row.justify-content-center.mb-0
      .col-xl-10
        .caja-tema1-3(data-aos="flip-up")
          h5 Fórmula básica
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | OEE = disponibilidad x rendimiento x calidad
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Disponibilidad (%) = (tiempo operativo / tiempo programado) x 100
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Rendimiento (%) = (producción real / producción teórica al ritmo estándar) x 100
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Calidad (%) = (unidades buenas / unidades producidas) x 100
          h5 Ejemplo práctico
          p.mb-0 Si una línea tiene:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Disponibilidad = 90 %
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Rendimiento = 88 %
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Calidad = 96 %
          p.mb-0 Entonces:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b OEE - Eficiencia global de los equipos] = 0,90 x 0,88 x 0,96 = 0,7603 = 76,03 %
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Formatos e indicadores para el reporte del desempeño productivo 
    p.mb-5 Los formatos de reporte permiten organizar la información del desempeño productivo para su uso en la toma de decisiones. A través de estos, la empresa integra datos de #[b cumplimiento, variaciones, incidencias, tiempos y métricas de eficiencia], de manera que supervisores, programadores y responsables de producción puedan revisar el estado del proceso (García, 2023). Un reporte cumple su función cuando responde de forma clara a aspectos operativos clave:
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img20.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Qué estaba programado. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Qué se ejecutó. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Qué variaciones se presentaron. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Qué incidencias afectaron el proceso. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Qué acciones deben ejecutarse.
          br
    p.mb-5 Cuando esta información se organiza de manera concreta, el reporte se convierte en una herramienta de uso diario en la operación (García, 2023).
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Estructura práctica de un reporte diario
    p.mb-5 Un reporte diario se estructura con campos básicos que permiten registrar el desempeño sin sobrecargar la información.
    .bg-2
      .px-5
        .bg-carrusel
          .px-5
            .row.align-items-center.mb-5
              .col-xl-4(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema1/img22.png', alt='' style="max-width: 350px").m-auto
              .col-xl-8(data-aos="fade-left")
                SlyderF(columnas="col-lg-6 col-xl-6")
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema1/img23.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Fecha
                    p.mb-0.text-center Día en que se registra la información del desempeño.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema1/img24.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Orden o línea
                    p.mb-0.text-center Identificación de la orden de producción o línea evaluada.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema1/img25.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Meta programada
                    p.mb-0.text-center Cantidad o resultado esperado según el plan.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema1/img26.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Resultado real
                    p.mb-0.text-center Cantidad o resultado efectivamente obtenido.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema1/img27.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Variación
                    p.mb-0.text-center Diferencia entre lo programado y lo ejecutado.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema1/img28.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Incidencia relevante
                    p.mb-0.text-center Evento que afectó el desempeño (por ejemplo, falta de material o paro).
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema1/img29.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Acción inmediata
                    p.mb-0.text-center Medida definida para atender la situación presentada.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema1/img30.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Responsable
                    p.mb-0.text-center Persona encargada de ejecutar o dar seguimiento a la acción.
            p.mb-5 A continuación, se presenta un ejemplo de registro aplicado en un entorno productivo.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Formato básico para el reporte del desempeño productivo
            .tabla-a(data-aos="zoom-in").mb-5
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Fecha
                    th.ajuste-border-tabla.texto-left Orden / Línea
                    th.ajuste-border-tabla.texto-left Meta programada
                    th.ajuste-border-tabla.texto-left Resultado real
                    th.ajuste-border-tabla.texto-left Variación
                    th.ajuste-border-tabla.texto-left Incidencia relevante
                    th.ajuste-border-tabla.texto-left Acción inmediata
                    th.texto-left Responsable
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left 10/04
                    td.ajuste-border-tabla.texto-left Línea 2
                    td.ajuste-border-tabla.texto-left 300
                    td.ajuste-border-tabla.texto-left 255
                    td.ajuste-border-tabla.texto-left -45
                    td.ajuste-border-tabla.texto-left Falta de material
                    td.ajuste-border-tabla.texto-left Reprogramar y abastecer
                    td.texto-left Supervisor
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 10/04
                    td.ajuste-border-tabla.texto-left Línea 3
                    td.ajuste-border-tabla.texto-left 420
                    td.ajuste-border-tabla.texto-left 430
                    td.ajuste-border-tabla.texto-left +10
                    td.ajuste-border-tabla.texto-left Sin novedad
                    td.ajuste-border-tabla.texto-left Mantener secuencia
                    td.texto-left Jefe de turno
            .caja-tema1-1.mb-5(data-aos="fade-right")
              .col-lg-auto
                figure
                  img(src="@/assets/curso/tema1/img3.svg" style="max-width: 60px").m-auto
              .col
                h3 Tableros y visualización del desempeño
            p.mb-5 Los #[b tableros de desempeño] permiten organizar la información del reporte en un formato accesible para el equipo de producción. En estos se integran datos como #[b cumplimiento del plan, órdenes atrasadas, incidencias, eficiencia del turno y tendencias], facilitando el seguimiento operativo (García, 2023). 
    .caja-tema1-8.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema1/img31.png', alt='').m-auto
        .col-xl
          p Un tablero cumple su función cuando presenta información concreta para la operación diaria:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Cumplimiento del plan de producción. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Variaciones en cantidad o tiempo. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Incidencias del turno. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Estado de acciones definidas.
    p.mb-5 Cuando el tablero se mantiene actualizado, se convierte en un apoyo para la revisión periódica del desempeño y la toma de decisiones en el corto plazo (García, 2023). A continuación, se presenta la estructura básica de un tablero de seguimiento:
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/img32.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Cumplimiento del plan
        p.mb-0.text-center Nivel de ejecución frente a lo programado en el periodo.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/img33.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Variaciones
        p.mb-0.text-center Diferencias en cantidad o tiempo respecto al plan.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/img34.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Incidencias
        p.mb-0.text-center Eventos que afectaron la operación (paros, falta de material, fallas).
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/img35.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Eficiencia del turno
        p.mb-0.text-center Indicadores de uso de recursos durante la jornada.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/img36.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Acciones
        p.mb-0.text-center Estado de las acciones definidas (pendiente, en proceso o ejecutada).
    p.mb-5 La figura presenta un tablero diario en el que se consolidan el cumplimiento del plan, la variación de producción, las incidencias del turno y el estado de las acciones inmediatas. Este esquema permite identificar qué aspectos requieren atención en el siguiente periodo de seguimiento.
    .row.justify-content-center.mb-5
      .col-xl-9
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 2.
          span Ejemplo de tablero para el reporte del desempeño productivo
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img37.png', alt='Tablero de reporte del desempeño productivo que integra cumplimiento del plan, variación de producción, incidencias del turno y estado de las acciones inmediatas, con el fin de apoyar el seguimiento operativo diario. ').m-auto
    p.mb-5 A continuación, se presenta un pódcast sobre la medición del desempeño de la producción, en el que se explica su importancia para evaluar el cumplimiento del programa productivo, identificar desviaciones operativas y apoyar la toma de decisiones orientadas a la mejora continua.
    .row.align-items-center.m-0.mb-0
      .col-xl
        .row.align-items-center.justify-content-center.caja-tema1-9(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img38.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Medición del desempeño productivo"
              :audio="require('@/assets/curso/podcast/OPERACION DE PROCESOS CONTABLES Y FINANCIEROS.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img39.jpg" ).m-auto
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
