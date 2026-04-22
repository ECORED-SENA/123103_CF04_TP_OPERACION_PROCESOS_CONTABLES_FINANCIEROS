<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .caja-intro.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/intro/img1.png', alt='').m-auto
        .col-xl
          p.mb-0 Este componente formativo se orienta al análisis del comportamiento real de la producción mediante indicadores, variaciones entre lo programado y lo ejecutado, métricas de rendimiento y registros del proceso. Su relevancia radica en que permite interpretar el desempeño más allá de los resultados, identificando desviaciones en tiempos, cantidades, recursos, calidad y costos, como señales clave para evaluar el cumplimiento del plan.
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .caja-intro-1(data-aos="fade-right")
          p.mb-0 Asimismo, el componente no se limita a identificar problemas, sino que promueve su explicación y documentación. A partir del análisis de causas, reportes de hallazgos y evaluación de oportunidades de mejora, el aprendiz desarrolla una mirada crítica sobre la ejecución, comprendiendo cómo las desviaciones pueden convertirse en insumos para proponer ajustes técnicos y operativos.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/intro/img2.jpg', alt='').m-auto
      .col-xl
        figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/intro/img3.svg', alt='' style="max-width: 75px")
        p.mb-0 Finalmente, este componente acerca al aprendiz a la lógica con la que las organizaciones gestionan la mejora continua. El uso de herramientas como planes de acción, indicadores de seguimiento y metodologías como PHVA o #[i lean manufacturing] permite entender que mejorar la producción implica intervenir con criterios de análisis, seguimiento y sostenibilidad.

</template>

<script>
export default {
  name: 'Introduccion',
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
