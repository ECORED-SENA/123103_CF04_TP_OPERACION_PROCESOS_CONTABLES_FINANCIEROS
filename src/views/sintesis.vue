<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis del análisis del desempeño y la mejora continua en la producción. .Organiza la información en componentes como medición del desempeño productivo, indicadores de cumplimiento, análisis e interpretación de variaciones, eficiencia operativa, control de calidad, oportunidades y priorización de mejoras, y mejora continua. Incluye subelementos como la comparación entre lo programado y lo ejecutado, detección de desviaciones, cumplimiento de producción y órdenes, variaciones de cantidad y tiempo, análisis por materiales, método, máquina y mano de obra, métricas como productividad, utilización y eficiencia de mano de obra (OEE), criterios de calidad como conformidad y tolerancias, identificación de fallas, reducción de pérdidas, optimización de procesos, evaluación por impacto, costo y tiempo, e implementación de mejoras mediante plan de acción, ejecución y seguimiento, integrando finalmente indicadores, PHVA y monitoreo para sostener la mejora continua. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
