export default {
  global: {
    componenteFormativo:
      'Programación de la producción y la logística sostenible inversa',
    descripcionCurso:
      'La programación de la producción permite asignar recursos, establecer fechas, gestionar controles de calidad y dimensionar las órdenes teniendo en cuenta cada estado. La dinamización de este proceso productivo se da debido a la logística involucrada, en la que, a su vez, se encuentra e implementa la logística inversa, aportando una mayor responsabilidad empresarial y sostenibilidad a la misma.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        titulo: 'Programación de la producción de bienes y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Funciones del área de producción y servicios',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modelos de planeación y control de procesos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Sistemas de producción en la transformación de bienes y servicios',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Control de calidad en los sistemas de producción',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Procesamiento de órdenes de producción y servicios',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Logística inversa en la cadena de suministros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Aprovisionamiento sostenible de materias primas e insumos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Canales de distribución del producto y/o servicio',
            hash: 't_2_2',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: '1.1. Funciones del área de producción y servicios',
      referencia:
        'Palacios, L. (2019). <em>Administración de la producción</em> (1ra ed.). Ecoe Ediciones.',
      tipo:
        'Capítulo. Programación de la producción del libro “Administración de la producción”.',
      link:
        'https://www-ebooks7-24-com.bdigital.sena.edu.co/stage.aspx?il=9340&pg=5&ed=',
    },
    {
      tema: '2.1. Aprovisionamiento sostenible de materias primas e insumos',
      referencia:
        'Fondevilla, M. (2010). <em>Guía de compras sostenibles</em>. ENECO.',
      tipo: 'Guía virtual',
      link: 'https://ecodes.org/docs/ENECO2010.pdf',
    },
    {
      tema: '2.1. Aprovisionamiento sostenible de materias primas e insumos',
      referencia:
        'González, M. y Ruiz, J. (2020). La logística inversa como estrategia de diferenciación para los mercados dinámicos. <em>INNOVA</em>, 5(2), pp. 140-156.',
      tipo: 'Artículo',
      link: 'https://revistas.uide.edu.ec/index.php/innova/article/view/1291',
    },
  ],
  glosario: [
    {
      termino: 'Carga de trabajo',
      significado:
        'cantidad de actividad que puede ser asignada a una parte o elemento de una cadena productiva, sin entorpecer el desarrollo total de las operaciones.',
    },
    {
      termino: 'Logística',
      significado:
        'garantizar la optimización de los flujos de materiales, informativo y financiero de manera racional y coordinada con el propósito de proveer a los clientes de los productos y/o servicios en la cantidad, calidad, plazos y lugar determinados, preservando el medioambiente.',
    },
    {
      termino: 'Órdenes de compra',
      significado:
        'llamada también orden de pedido, estas son recepcionadas en el área de <em>stock</em>, en donde se formula el pedido y documenta la simbiosis entre proveedor-cliente.',
    },
    {
      termino: 'Plan de producción',
      significado:
        'se denomina así porque parte de las necesidades específicas, tiene como objetivo describir las operaciones de la empresa, es decir, el proceso fabricación del producto o de prestación del servicio, así como los recursos humanos, materiales y tecnológicos necesarios para el funcionamiento de dichas operaciones.',
    },
    {
      termino: 'Plan maestro de producción',
      significado:
        'es una herramienta que permite cumplir en tiempo y forma con la demanda de los clientes, al mismo tiempo que se cuida la rentabilidad del negocio.',
    },
    {
      termino: 'Programación de la producción',
      significado:
        'distribución de acciones y responsabilidades a puestos de trabajo concretos con sus respectivas fechas de inicio y terminación.',
    },
    {
      termino: '<em>Stock</em>',
      significado:
        'conjunto de mercancías o productos que se tienen almacenados en espera de su venta o comercialización.',
    },
    {
      termino: 'Valor agregado de la cadena de suministro',
      significado:
        'es la diferencia entre el valor del producto final para el cliente y los costos incurridos en la cadena para cumplir la petición de este (Flores, 2019).',
    },
  ],
  referencias: [
    {
      referencia:
        'Cabeza, D. (2012). <em>Logística inversa en la gestión de la cadena de suministro</em>. Marge Books.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/172841',
    },
    {
      referencia:
        'Calderio, Y., Domínguez, F., Fernández, Y., Lopes, I., Quiala, L. & Vallín, A. (2018). Una nueva visión en la gestión de la logística de aprovisionamientos en la industria biotecnológica cubana. <em>Vaccimonitor</em>, 27(3).',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1025-028X2018000300003#t1',
    },
    {
      referencia:
        'Chopra, S. y Meindl, P. (2008). <em>Administración de la cadena de suministro. Estrategia, planeación y operación</em>. (3ra ed.) Editorial Pearson Educación',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w24567w/Sunil_Chopral.pdf',
    },
    {
      referencia:
        'Flores, J., Manrique, M., Quispe, J. & Taco, A. (2019). Gestión de cadena de suministro: una mirada desde la perspectiva teórica. <em>Revista Venezolana de Gerencia</em>, 24(88), pp. 1136-1146.',
      link: 'https://www.redalyc.org/journal/290/29062051009/html/',
    },
    {
      referencia:
        'González, M. y Ruiz, J. (2020). La logística inversa como estrategia de diferenciación para los mercados dinámicos. <em>INNOVA</em>, 5(2), pp. 140-156.',
      link: 'https://revistas.uide.edu.ec/index.php/innova/article/view/1291',
    },
    {
      referencia:
        'Oltra, R. (2015). <em>La logística inversa: concepto y definición</em>. Universidad Politécnica de Valencia.',
      link:
        'https://riunet.upv.es/bitstream/handle/10251/46172/Art_Docente_LI_Cast.pdf',
    },
    {
      referencia:
        'Paz, H. (2008). <em>Canales de distribución: gestión comercial y logística</em>. (3ra ed.). Ugerman Editor.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/76765?page=25',
    },
    {
      referencia:
        'ResponSable. (2020). <em>Todo lo que debes saber sobre compras sostenibles en 5 minutos</em>. ResponSable.',
      link:
        'https://www.responsable.net/2020/09/28/todo-lo-que-debes-saber-sobre-compras-sostenibles-en-5-minutos/',
    },
    {
      referencia:
        'Velasco, J. (2015). <em>Gestión de la producción en la empresa: planificación, programación y control</em>. Difusora Larousse - Ediciones Pirámide.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
