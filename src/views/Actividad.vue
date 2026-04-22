<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Cuestionario de verificación sobre análisis del desempeño y mejora continua en la producción',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión de los temas del componente relacionados con el análisis del desempeño y la mejora continua en la producción.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'La principal función de los indicadores de cumplimiento de la programación de producción es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calcular el costo total del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comparar lo programado con lo ejecutado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Registrar los materiales defectuosos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la orden de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Cuando se analiza una variación en producción, se busca identificar:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el volumen vendido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El número de clientes atendidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La estructura salarial del área.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La diferencia entre lo programado y lo ejecutado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Una métrica de eficiencia operativa en producción permite evaluar:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de reuniones del equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El diseño del producto final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El aprovechamiento de recursos y resultado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El valor comercial de la marca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'El OEE se utiliza para medir:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La eficiencia global de los equipos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El nivel de ventas del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El costo de la mano de obra administrativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La satisfacción del cliente externo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'Una desviación en producción se entiende como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un error contable del proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un inventario final de almacén.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una diferencia entre lo previsto y lo ejecutado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un cambio de proveedor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'Una causa técnica de desviación en producción puede ser:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falta de material de oficina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Error en el ajuste de máquina.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Demora en una reunión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambio de supervisor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Los criterios de calidad de producto sirven para:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir el salario del operario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar el cronograma de vacaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer la publicidad de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar si el producto cumple o no con lo esperado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'Un producto no conforme es aquel que:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se fabricó en horas extra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tiene bajo costo de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incumple un requisito o especificación definida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se entregó antes del plazo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'El reporte de una desviación debe incluir:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente la fecha del problema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Descripción del evento, impacto, evidencia y acción inmediata.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivamente el costo del error.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente la fecha del problema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'La técnica de los 5 porqués se utiliza para:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calcular tiempos estándar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Encontrar la causa raíz de un problema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estimar la demanda del mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Encontrar la causa raíz de un problema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'El diagrama de Ishikawa ayuda a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar visualmente posibles causas de un problema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registrar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calcular el OEE.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Asignar turnos de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Una oportunidad de mejora en producción se identifica cuando:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El inventario se mantiene estable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El proceso no presenta ninguna novedad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se detecta una brecha o pérdida que puede corregirse.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se cierra una orden en la fecha prevista.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
