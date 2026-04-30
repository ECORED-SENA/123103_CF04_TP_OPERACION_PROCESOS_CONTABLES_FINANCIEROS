export default {
  global: {
    Name: 'Análisis del desempeño y mejora continua en la producción',
    Description:
      'En este componente, el aprendiz utiliza herramientas para analizar el comportamiento real de la producción, contrastar lo programado con lo ejecutado e interpretar indicadores, tiempos y uso de recursos. Con este análisis identifica desviaciones, reconoce sus causas y convierte los datos en evidencia para evaluar el desempeño operativo, registrar hallazgos y sustentar decisiones de mejora del plan productivo general continuo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Medición del desempeño de la producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Indicadores de cumplimiento de la programación de producción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Análisis de variaciones en producción',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Métricas de eficiencia operativa en producción',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Formatos e indicadores para el reporte del desempeño productivo ',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Análisis de desviaciones y control de calidad en la producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Causas de desviaciones en la ejecución de la producción',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Criterios de calidad de productos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Reporte y documentación de desviaciones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Técnicas de análisis de causa raíz y hallazgos ',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Identificación y priorización de oportunidades de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Oportunidades de mejora en los procesos de programación y ejecución',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Criterios de evaluación de propuestas de mejora',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Métodos de optimización de la programación de la producción',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Análisis del impacto de las mejoras en capacidad y costos ',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Implementación de acciones de mejora en la producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Protocolos para la implementación de cambios',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Plan de acción para la mejora',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Recursos, responsables y cronograma de implementación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Validación, documentación y justificación de cambios ',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguimiento y mejora continua del desempeño productivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Indicadores de seguimiento a las mejoras implementadas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Técnicas de mejora continua en producción',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Monitoreo, ajustes periódicos y sostenibilidad de las mejoras',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Monitoreo de las mejoras',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Documentación y cultura de mejora continua',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/123103_CF4_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'medida que se implementa para eliminar la causa de una desviación o no conformidad y evitar que vuelva a ocurrir.',
    },
    {
      termino: 'Capacidad productiva',
      significado:
        'posibilidad real que tiene una operación para producir una cantidad determinada de bienes o servicios en un tiempo definido.',
    },
    {
      termino: 'Cumplimiento',
      significado:
        'grado en que la producción ejecutada coincide con la programación o el plan establecido.',
    },
    {
      termino: 'Desviación',
      significado:
        'diferencia identificada entre lo programado y lo ejecutado en variables como cantidad, tiempo, calidad o uso de recursos.',
    },
    {
      termino: 'Eficiencia operativa',
      significado:
        'relación entre los resultados obtenidos y los recursos utilizados durante la ejecución de la producción.',
    },
    {
      termino: 'Hallazgo',
      significado:
        'resultado documentado del análisis de una situación, evidencia o desviación detectada en el proceso productivo.',
    },
    {
      termino: 'Indicador',
      significado:
        'medida cuantitativa o cualitativa que permite evaluar el desempeño de un proceso, una orden o un recurso.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'proceso permanente de revisión, ajuste y fortalecimiento de las actividades productivas para lograr mejores resultados.',
    },
    {
      termino: 'Oportunidad de mejora',
      significado:
        'situación o aspecto del proceso en el que es posible intervenir para aumentar el desempeño, reducir pérdidas o fortalecer el control.',
    },
    {
      termino: 'Productividad',
      significado:
        'relación entre la cantidad producida y los recursos empleados para obtenerla, como tiempo, mano de obra o maquinaria.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, C. A. (2015). Metodología de implementación de Kaizen y 7 desperdicios para Tablemac S.A.-Planta de Yarumal. Universidad EAFIT.',
      link: '',
    },
    {
      referencia:
        'Álvarez, F. M. (2024). Diseño de plan de mejoramiento continuo del sistema de producción de una empresa de artes gráficas soportado en la metodología DMAIC. Universidad Autónoma de Occidente.',
      link: '',
    },
    {
      referencia:
        'Betancurt, C. A. (2023). Aplicación del indicador de eficiencia de equipos OEE para el área de inyección como una forma de optimizar los procesos y recursos en la empresa Inversiones Pérez Vélez S.A.S. Universidad Nacional Abierta y a Distancia (UNAD).',
      link: '',
    },
    {
      referencia:
        'Cabezón Gutiérrez, S. (2014, agosto). Control de calidad en la producción industrial.',
      link: 'https://uvadoc.uva.es/bitstream/handle/10324/13153/TFG-I-174.pdf',
    },
    {
      referencia:
        'Cárdenas, N. P. (2024). Estrategias de mejora continua basadas en metodología Lean Management y Six Sigma. Universidad de Antioquia.',
      link: '',
    },
    {
      referencia:
        'Díaz, J. J. (2024). Plan de mejoramiento continuo para la gestión de las áreas funcionales de la empresa Ingarqcol S.A.S.',
      link: '',
    },
    {
      referencia:
        'Forero, L. V., & Moreno, R. E. (2015). Diseño de un sistema de indicadores de gestión y control de las materias primas críticas para el área de ingeniería industrial en la fábrica de explosivos Antonio Ricaurte. Universidad Libre de Colombia.',
      link: '',
    },
    {
      referencia:
        'Gamarra, C. A. (2024). Optimización de operaciones y recursos de producción en la línea de retail de la planta de manufactura de la empresa Azembla S.A.S. para incrementar la productividad y eficiencia y disminuir los costos de producción. Universidad Nacional Abierta y a Distancia (UNAD).',
      link: '',
    },
    {
      referencia:
        'García, M. A. (2023). Implementación de una metodología de mejora continua en las zonas de producción A, B y C de la Compañía Nacional de Chocolates sede Rionegro. Universidad de Antioquia.',
      link: '',
    },
    {
      referencia:
        'Giménez, E. A. (2017). Sistema de gestión interna de la calidad. Universitat Oberta de Catalunya.',
      link: '',
    },
    {
      referencia:
        'Goicoechea, I. E. (2013). La gestión de las operaciones. Universitat Oberta de Catalunya.',
      link: '',
    },
    {
      referencia:
        'Guataquira, R. A. (2021). Implementación del plan de mejoramiento para el proceso de producción de botellas PET aplicando la metodología Kaizen. Institución Universitaria Antonio José Camacho.',
      link: '',
    },
    {
      referencia:
        'Higuita, A. C. (2024). Implementación de procesos de mejora continua que impacten positivamente el indicador OEE en las plantas líquidas de AkzoNobel-Pintuco Rionegro. Universidad de Antioquia.',
      link:
        'https://bibliotecadigital.udea.edu.co/server/api/core/bitstreams/1d4e68ba-fca3-420f-9345-611f35f81a77/content',
    },
    {
      referencia:
        'Hoyos, C. I. (2021). Implementación y seguimiento de indicadores de gestión para el mejoramiento. Universitaria Agustiniana.',
      link:
        'https://backend.uniagustiniana.edu.co/server/api/core/bitstreams/07a6499c-6a22-4e2a-8246-cb9a668dad25/content',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2025, octubre 3). Proceso de producción.',
      link: 'https://www.ins.gov.co/conocenos/sig/SIG/POE-R04.0000-007.pdf',
    },
    {
      referencia:
        'Salas, J. D. (2024). Implementación de indicadores en el área de producción en la empresa Diseños y Soluciones Industriales S.A.S. Universidad Nacional Abierta y a Distancia (UNAD).',
      link: '',
    },
    {
      referencia:
        'Zambrano Valdivieso, O., & Sánchez, J. (2018). Mejora continua en productividad organizacional y su impacto en colaboradores. Desarrollo Gerencial, 10(2), 83–102.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Jose Calderon Gutierrez',
          cargo: 'Diseñador de contenidos',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Ricardo Ortiz Puentes',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
