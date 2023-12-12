<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Programación de la producción de bienes y servicios
    
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-6.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/1.png")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        .cont_1_1
          p Conforma el crecimiento económico de un país que puede ser comparado entre vigencias actuales y anteriores. Cuando el valor de la producción de bienes y servicios aumenta genera como resultados grandes ganancias para la empresa y, por ende, el alza a los precios de acciones más altos que contribuyen a la contratación de talento humano necesario para cumplir con la entrega de la producción. En el accionar del crecimiento económico, siendo este uno de los indicadores que se observan en el mercado, como tal se tienen en cuenta la inflación, el producto nacional bruto y el producto interno bruto, mediciones que se estudian para establecer el impacto económico y, por tanto, la versatilidad de los bienes y servicios.
    
    .cont_1_2.mt-5.pt-4.pb-4(data-aos="zoom-in-up")
      p La programación de la producción consiste en la asignación de material (materia prima), mano de obra y procesos para fabricar bienes para los clientes. Incluye acciones tales como la distribución de horas en las que estarán operando las máquinas (hora de inicio y finalización de los procesos de producción) y la mano de obra que las manipula, cumpliendo así con los tiempos pactados. También, tiene en cuenta otros aspectos involucrados como el stock para evitar que disminuya el curso de producción y se conserve con lo planificado por la empresa.
      p.mt-4.mb-0 En otras palabras, la programación de la producción busca que el proceso funcione adecuadamente tanto en los recursos de producción como con los requisitos disponibles de la manera más rentable posible. 
    
    .col-xl-10.m-auto.mt-5
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4.p-lg-5
          p.mb-0 Si la gestión en la programación es sólida sumados a la técnica de planeación de la producción, entonces, se encuentra frente a mejores fabricaciones y es así como, incluso, el negocio más pequeño puede hacer la diferencia, destacándose en el manejo y programa de la producción.
    
    p.mt-5(data-aos="fade-right") Dentro de las actividades de programación es necesario tener en cuenta las siguientes:

    TabsB.color-acento-contenido.mt-4(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Máquinas abarrotadas" :icono="require('@/assets/curso/tema1/3.svg')")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            h5 Máquinas abarrotadas
            p Actividad implementada en las empresas que trabajan con producción bajo pedido. Se alistan las operaciones de las máquinas que fabrican los productos, distribuyendo sus funciones. Aquí se hace la anotación de que ninguna máquina en óptimas condiciones puede estar parada, teniendo en cuenta la ruta de rendimiento, estructura de costes y cumplimiento de entrega a la que apunta la empresa. La idea de esta herramienta es determinar las operaciones que efectuará la máquina y por ende quien la maneja en el menor tiempo posible. 
            p.mt-4 Previamente hay que establecer las máquinas y equipos óptimos, que ha adquirido la empresa en los últimos tiempos, ya que estos serán quienes faciliten el tiempo de producción.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/4.png')
      .py-4.py-md-5(titulo="Trabajo equilibrado" :icono="require('@/assets/curso/tema1/3.svg')")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            h5 Trabajo equilibrado
            p La capacidad de producción entrelaza la cantidad de máquinas frente a la cantidad de personal haciendo que se detallen aspectos como la adición de turnos, el incremento de personal, calendario de entrega de pedido, gestión de horas extras, entre otros, que favorezcan el equilibrio del trabajo para que así ningún turno se sobrecargue, ni se desmotiven las fuerzas por represamiento en ciertas desviaciones del proceso.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/5.png')
      .py-4.py-md-5(titulo="Secuencia de la máquina" :icono="require('@/assets/curso/tema1/3.svg')")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            h5 Secuencia de la máquina
            p Si dentro del proceso de fabricación intervienen varias máquinas es necesario contar con un engranaje en donde se hayan especificado las acciones de cada operación con su respectivo tiempo (menor tiempo posible), ya que puede que una máquina se vea afectada en su inicio porque quien la precede se averió o hubo retraso del proceso.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/6.png')
      .py-4.py-md-5(titulo="Horario de operación" :icono="require('@/assets/curso/tema1/3.svg')")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            h5 Horario de operación
            p Dentro de la programación es vital la consideración del tiempo en el que tarda en efectuar la producción, es entonces cuando los detalles de los horarios entran a realzar el cumplimiento de estos tiempos. 
            p.mt-4 Es necesario establecer una hora para dar inicio al proceso y una hora para cerrar el proceso, así se tendrá parametrizado las operaciones que se gestionan de la producción.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/7.png')
      .py-4.py-md-5(titulo="Órdenes de producción" :icono="require('@/assets/curso/tema1/3.svg')")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            h5 Órdenes de producción
            p Teniendo en cuenta los pedidos y los márgenes de desviación, se busca controlar la secuencia de las operaciones, pues es a esto a lo que se le llama órdenes de producción, es decir, definir cuáles serán las operaciones que encabezan el desarrollo y cuáles se ejecutarán al final.
            p.mt-4 Todo esto parte de qué tan larga o corta sea la operación que se realice, teniendo en cuenta que quienes están al frente de esta área son quienes toman la decisión de este orden de acuerdo con el mayor lapso de proceso o el mínimo tiempo que requiere operar en la máquina. Se debate el orden de primero según lo extenso o lo reducido del proceso.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/8.png')
    
    .col-xl-10.m-auto.mt-5
      .p-4(style="background-color:#F7E9E1;" data-aos="flip-up")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/9.svg")
          .col(style="place-self:center;")
            p.mb-0 #[strong La calidad y cantidad de la producción diagnostica] el impulso o estancamiento del crecimiento económico, donde además se extraen datos, tales como la materia prima o los recursos utilizados para crear el bien o servicio que promueve la empresa. Los insumos o recursos necesarios para fabricar estos bienes y servicios son parte indispensable para el área de producción de la empresa, pues es así como le permiten generar las ganancias y la rentabilidad.
    
    p.mt-5(data-aos="fade-right") Dentro de las herramientas clave para el crecimiento económico se encuentra la tecnología, siendo esta la que gestiona los procesos de producción de manera rápida y eficaz, traduciéndose en agilidad en la producción de bienes. Las empresas pueden producir más bienes y servicios en menos tiempo; sin embargo, la tecnología a menudo conduce a la automatización en la producción de bienes y servicios, dando como resultado una reducción de puestos de trabajo. Este proceso queda claramente demostrado cuando una economía pasa por la industrialización u otras revoluciones tecnológicas; cada hora de trabajo puede generar cantidades crecientes de bienes valiosos.
    p.mt-4(data-aos="fade-left") Dentro de estos recursos de producción de bienes y servicios se encuentran los siguientes:

    .tarjeta.tarjeta--azul.p-4.p-lg-5.pb-lg-4.mt-4(style="background-color:#FAF5EA;" data-aos="zoom-in")
      SlyderA(tipo="b")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Bienes raíces
            p Hace referencia a los recursos naturales (tierra, petróleo, carbón, cobre, metales, gas), renovables (bosques).
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/10.png')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Mano de obra
            p Este recurso es uno de los más importantes para la empresa, el cual consiste en el trabajo que desempeña el personal a cargo de la fabricación de bienes y servicios. 
            p.mt-4 El talento humano más calificado tendrá una remuneración mayor que aquel con menos capacitación y habilidad. Con la llegada de diferentes tecnologías que contribuyen a la eficiencia de los procesos de una organización este recurso (mano de obra) ha perdido relevancia, puesto que las empresas le apuestan a equipos y maquinaria que ha suplido la presencia de mano de obra.
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/11.png')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Activos de producción
            p Van desde el capital (dinero en efectivo) hasta maquinaria, equipos o plantas que se utilizan para el proceso de producción, maquinaria pesada y camiones. Asimismo, la generación de inversiones es capital que permite que la economía de la empresa se esparza y promueva más ganancias en donde deben reducirse costos, para así asegurar que el capital se conserve y sea rentable.
            p.mt-4 Entiéndase entonces, que los activos de producción son netamente comerciales y utilizados para la fabricación de bienes y servicios, por lo cual son exclusivos para el uso, manejo y producción, excluyendo cualquier uso o acceso para beneficio personal.
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/12.png')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Innovación
            p Aquí se califica a los recursos que generan novedad para el bien o servicio que fabrica la empresa, incluyendo el espíritu emprendedor, los innovadores o creadores de idea que generen valor agregado al proceso de producción. 
            p.mt-4 Es entonces como en este último factor de producción se ponen en circulación los anteriores mencionados para entregar un producto o servicio de calidad. Son los impulsores de cualquier cambio técnico en el sistema económico que ha demostrado ser una fuente importante de crecimiento económico.
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/13.png')
    
    .col-xl-10.m-auto.mt-5
      .p-4(style="background-color:#F7E9E1;" data-aos="flip-up")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/14.svg")
          .col(style="place-self:center;")
            p.mb-0 #[strong Cuando las empresas pueden optimizar] la eficiencia de los recursos de producción es lógico que puedan incrementar la producción y creación de bienes de mayor calidad a precios más bajos. Cualquier aumento en la producción conduce al crecimiento económico medido por el PIB. Esta métrica simplemente representa la producción total de todos los bienes y servicios en una economía. Un mayor crecimiento económico eleva el nivel de vida al reducir los costos y aumentar los salarios.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_1 1.1 Funciones del área de producción y servicios

    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-6.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/15.png")
      .col-lg-7(data-aos="fade-left")
        p El área de producción es la columna vertebral de la empresa, pues su posición dentro de la misma es equilibrar las necesidades del proceso de fabricación y así mismo, generar retorno para la empresa a través de las ganancias y ofrecer a los consumidores lo que quieren de manera técnica y operativa. La gestión de la producción se refiere a planear, coordinar, dirigir y controlar todos los procesos que intervienen en la creación del bien o servicio.
        p.mt-4.mb-0 La principal función del área de producción es generar valor a través de lo que fabrica. La calidad en la creación y entrega del producto o servicio fortalece la relación entre las partes (empresa-cliente), en donde además juega un papel relevante quienes distribuyen los productos a los clientes y recolectan cierta información crucial, que posteriormente puede ser debatida en el área de producción al ser, por ejemplo, retroalimentaciones de clientes o consumidores.
    
    p.mt-4(data-aos="fade-right") Dentro de las responsabilidades de producción se encuentra el garantizar que se entreguen los productos a tiempo y con alta calidad, permitiendo así no solo satisfacer la necesidad del consumidor, sino que además pueda posicionarse en el mercado por su excelencia. Hay otras responsabilidades de producción que, aunque menos trascendentales que la citada anteriormente, se deben considerar las que se presentan a continuación:  

    ImagenInfografica.color-acento-botones.mt-5.imageninfografica1(data-aos="zoom-in-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/16.svg')
      .tarjeta.color-acento-botones.p-3(x="15%" y="50.5%" numero="+" style="background-color:#fff;box-shadow:0px 0px 20px rgba(0,0,0,.15);")
        p.mb-0(style="color:inherit;") #[strong(style="color:inherit;") Diseño del producto.] La empresa se acercará al mercado con productos económicos y valiosos que garanticen el éxito y el progreso de la empresa. Por ello, el producto que va a ser producido por la empresa debe seleccionarse y diseñarse, utilizando la ingeniería de valor y el análisis de valor.
      .tarjeta.color-acento-botones.p-3(x="35.5%" y="27%" numero="+" style="background-color:#fff;box-shadow:0px 0px 20px rgba(0,0,0,.15);")
        p.mb-0(style="color:inherit;") #[strong(style="color:inherit;") Proceso de producción.] Aquí juega un papel importante la planeación, teniendo en cuenta detalles como la mano de obra requerida para producir, el tipo de tecnología que se utilizará, el capital que se requiere, las máquinas y el sistema de producción adecuado. Lo anterior, será seleccionado y preparado para una función de trabajo exitosa.
      .tarjeta.color-acento-botones.p-3(x="49%" y="8%" numero="+" style="background-color:#fff;box-shadow:0px 0px 20px rgba(0,0,0,.15);")
        p.mb-0(style="color:inherit;") #[strong(style="color:inherit;") Capacidad de producción.] Intervienen términos como la demanda y el punto de equilibrio, los cuales deben coincidir con la capacidad de producción. Dicho en otras palabras, es relevante la planeación de la capacidad de producción, ya que puede surgir  una valoración inadecuada que pueda afectar la producción del bien, puesto que una capacidad mayor o menor que la que realmente se necesita puede crear problemas.
      .tarjeta.color-acento-botones.p-3(x="54%" y="49%" numero="+" style="background-color:#fff;box-shadow:0px 0px 20px rgba(0,0,0,.15);")
        p.mb-0(style="color:inherit;") #[strong(style="color:inherit;") Planeación de la producción.]  Aquí se alista la operación secuencial que tendrá lugar, mientras que la programación es el medio para planificar todo el proceso de producción, cuándo se iniciará y cuándo finalizará la actividad.
      .tarjeta.color-acento-botones.p-3(x="60%" y="68.5%" numero="+" style="background-color:#fff;box-shadow:0px 0px 20px rgba(0,0,0,.15);")
        p.mb-0(style="color:inherit;") #[strong(style="color:inherit;") Control de producción, calidad, costes e inventario.]  Tomar las medidas necesarias para corregir desviaciones en la producción y el proceso real. Los productos han de ser de primera calidad con precios justos y bajos. La abundancia y la escasez de inventarios no son apropiados, por tanto, en el área de producción se controlará efectivamente los inventarios para que no se desperdicien o se mal utilicen.
      .tarjeta.color-acento-botones.p-3(x="78.5%" y="51.5%" numero="+" style="background-color:#fff;box-shadow:0px 0px 20px rgba(0,0,0,.15);")
        p.mb-0(style="color:inherit;") #[strong(style="color:inherit;") Mantenimiento y sustitución de equipo y maquinaria implementada.]  La maquinaria que sea necesaria para la producción será revisada antes del proceso de producción, además han de contar con un sistema para inspeccionarse periódicamente, en donde se haga el lavado, reparación, cambio de repuestos, entre otros procedimientos técnicos para el mantenimiento.
    
    p.mt-5(data-aos="fade-right") Ayudar a las empresas a cumplir sus objetivos tiene su génesis en las áreas de producción y servicios. El pilar o la mina de oro se esconde en las necesidades humanas a satisfacer, por tanto, el cliente o consumidor tendrá las expectativas y deseos puestos en los resultados de esta área de producción, quien viene a ser el engranaje con las demás áreas que conforman la empresa. 
    p.mt-4(data-aos="fade-left") La introducción de nuevos productos en el mercado viene respaldada por la información recolectada por el consumidor y el cliente; pero adicional a ello, es la gestión de la producción la que avala la credibilidad, la imagen corporativa y el crecimiento de la economía. No obstante, también pueden desarrollar productos innovadores que retornen inversión a la empresa y aumenten sus ingresos con productos de calidad a precios justos.

    .col-xl-10.m-auto.mt-5
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/17.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Cuando las empresas pueden optimizar la eficiencia de los recursos de producción es lógico que puedan incrementar la producción y creación de bienes de mayor calidad a precios más bajos. Cualquier aumento en la producción conduce al crecimiento económico medido por el PIB. Esta métrica simplemente representa la producción total de todos los bienes y servicios en una economía. Un mayor crecimiento económico eleva el nivel de vida al reducir los costos y aumentar los salarios.
    
    p.mt-5(data-aos="fade-right") Las necesidades humanas son ilimitadas e insaciables, por lo que el ser humano busca satisfacerlas con bienes y servicios que se transportan a través de diversas actividades económicas, ejemplificando lo dicho anteriormente se puede decir que hay gran variedad de bienes y servicios que movilizan la economía, tal como se muestra en el siguiente gráfico.

    .mt-5.p-3(style="background-color:#583CB6;" data-aos="zoom-in-down")
      h5.mb-0.text-white.text-center Bienes y servicios
    .row.justify-content-center
      .col-lg.col-md-6(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#F6F6F6;")
          p.text-center Si tiene sed, bebe agua
          figure.m-auto.col-6.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/18.svg")
      .col-lg.col-md-6(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#fff;")
          p.text-center Si va a escribir, usa un esfero y papel
          figure.m-auto.col-6.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/19.svg")
      .col-lg.col-md-6(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#F6F6F6;")
          p.text-center Si tiene ropa sucia, hace uso de la lavadora
          figure.m-auto.col-6.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/20.svg")
      .col-lg.col-md-6(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#fff;")
          p.text-center El médico receta el medicamento correcto para la cura de una enfermedad
          figure.m-auto.col-6.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/21.svg")
      .col-lg.col-md-6(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#F6F6F6;")
          p.text-center Si necesita un corte, va al estilista.
          figure.m-auto.col-6.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/22.svg")
    .p-3(style="background-color:#DEE4F0;" data-aos="zoom-in-up")
      p.mb-0.text-center Las necesidades satisfechas hacen que el consumidor movilice la producción de la empresa.

    p.mt-5(data-aos="fade-right") Los servicios, al igual que los bienes en la empresa son otro factor que mueve masas económicas. La siguiente tabla presenta una comparación entre ambas salidas de valor.

    .col-xl-8.m-auto.mt-5.col-lg-10
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Tabla 1.
        span Comparación entre bienes y servicios
      .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
        table
          caption.mt-0.fw-normal(style="background-color:#E8E8E8;") #[strong Nota.] Adaptado de Duque et al. (2014).
          thead(style="border:0;")
            tr(style="background-color:#583CB6;")
              th.text-center.text-white(style="border:0;") Tangibles
              th.text-center.text-white(style="border:0;") No tangibles
          tbody
            tr(style="background-color:#F6F6F6;")
              td.text-center.p-4(style="border-right:1px #16263D solid;border-left:0;") Producción primero y consumo después
              td.text-center.p-4(style="border-right:0px;") Producción y consumo en simultáneo
            tr(style="background-color:#fff;")
              td.text-center.p-4(style="border-right:1px #16263D solid;border-left:0;") Almacenamiento
              td.text-center.p-4(style="border-right:0px;") No almacenamiento
            tr(style="background-color:#F6F6F6;")
              td.text-center.p-4(style="border-right:1px #16263D solid;border-left:0;") Bienes gratuitos
              td.text-center.p-4(style="border-right:0px;") Servicios gratuitos
            tr(style="background-color:#fff;")
              td.text-center.p-4(style="border-right:1px #16263D solid;border-left:0;") Bienes económicos
              td.text-center.p-4(style="border-right:0px;") Servicios económicos
            tr(style="background-color:#F6F6F6;")
              td.text-center.p-4(style="border-right:1px #16263D solid;border-left:0;") Bienes de consumo
              td.text-center.p-4(style="border-right:0px;") Servicios al consumidor
            tr(style="background-color:#fff;")
              td.text-center.p-4(style="border-right:1px #16263D solid;border-left:0;") Bienes de producción
              td.text-center.p-4(style="border-right:0px;") Servicios al productor
            tr(style="background-color:#F6F6F6;")
              td.text-center.p-4(style="border-right:1px #16263D solid;border-left:0;") Bienes públicos y privados
              td.text-center.p-4(style="border-right:0px;") Servicios públicos y privados
    
    p.mt-5(data-aos="fade-right") Ahora conoce que tanto los bienes como los servicios son importantes para satisfacer las necesidades de la humanidad. La calidad y la cantidad de bienes y servicios determinan el nivel de producción, inversión, consumo y satisfacción de las necesidades humanas.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_2 1.2  Modelos de planeación y control de procesos
    
    p(data-aos="fade-right") Los estándares de la planeación son responsables de analizar e interpretar, a través de factores cualitativos o cuantitativos en los que se pueda establecer esquemas para dirigir la planificación de la demanda, la producción futura y las operaciones financieras y de marketing en la empresa, es decir, que los modelos de planeación son transversales con la previsión empresarial en donde se efectúan estimaciones acerca del futuro en las operaciones de producción y comercialización diagnosticada por la investigación.
    p.mt-4(data-aos="fade-left") Uno de los modelos que se planifica en el área de producción es el de pronósticos, pues en este se encuentran pronósticos cuantitativos, cualitativos, la previsión de la demanda, enfocados en evitar la sobreproducción y la subproducción. Para realizar un pronóstico de demanda sistemático y científico los analistas deben determinar lo que están midiendo y la perspectiva de tiempo, seleccionar un tipo y método de pronóstico de demanda y luego recopilar, analizar e interpretar los resultados. A continuación, se presentan algunos de estos modelos.

    h4.mt-5(data-aos="fade-right") Modelos de pronóstico

    figure.mt-4(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.col-xl-11.m-auto(titulo="Sistema ERP")
        .col-lg-2.mb-4.mb-lg-0
          figure.m-auto.col-4.col-md-5.col-lg-12
            img(src='@/assets/curso/tema1/23.svg')
        .col-lg-10
          p Este modelo se denomina planeación de recursos empresariales (ERP). Dentro de sus ventajas se encuentra la integración de todos los procesos necesarios para las operaciones de la empresa con un único sistema. Reúne procesos de planificación, el inventario de compras, ventas, talento humano, finanzas y marketing, entre otros. Con un sistema (software ERP), cada departamento aún tiene su sistema; pero se puede acceder a todos los sistemas a través de una aplicación con una interfaz, permitiendo así que las diferentes áreas compartan información y se comuniquen fácilmente con el resto de la empresa. Toda la información es puesta a disposición de otras partes involucradas para su aprovechamiento productivo y eficiente.
          p.mt-3 También contribuye con la ejecución de operaciones efectivas a medida que crece la empresa y analiza varios escenarios a partir de mejoras en los procesos. El sistema básicamente consiste en que cada área almacena y extrae información enviándola a la base de datos central, que es un componente clave de un sistema ERP. Este repositorio de datos brinda visibilidad de todos los departamentos y, por lo tanto, permite a los líderes evaluar y comparar el desempeño comercial de diferentes áreas y comprender el impacto total de las decisiones.
      .row.col-xl-11.m-auto(titulo="Sistema MRP")
        .col-lg-2.mb-4.mb-lg-0
          figure.m-auto.col-4.col-md-5.col-lg-12
            img(src='@/assets/curso/tema1/24.svg')
        .col-lg-10
          p Modelo denominado planeación de requisitos de materiales (MRP). Es un sistema que se aplica para deducir los materiales y componentes necesarios para fabricar un producto; ayuda a garantizar que el inventario correcto esté disponible para el proceso de producción exactamente cuando se necesita y al menor costo posible; mejora la eficiencia, la flexibilidad y la rentabilidad de las operaciones de fabricación; puede hacer que los trabajadores de la fábrica sean más productivos, mejoren la calidad del producto y se minimice los costos de materiales y mano de obra. Todo lo anterior contribuye al crecimiento y la estabilidad de los ingresos. Dentro de sus acciones están:
          ul.lista-ul.mt-3.ps-lg-4
            li.d-flex
              i.fas.fa-angle-right
              | Realizar un inventario de los recursos o materiales disponibles.
            li.d-flex
              i.fas.fa-angle-right
              | Revisar cuáles se van adicionar de acuerdo con la necesidad.
            li.d-flex
              i.fas.fa-angle-right
              | Programar la producción.
            li.d-flex
              i.fas.fa-angle-right
              | Ejercer un seguimiento de la producción.
          p.mt-3 La base fundamental del MRP es que permita dar respuesta a interrogantes tan sencillos como: qué se necesita, en qué cantidades, cuánto  y cuándo es necesario; información que se requiere para la fabricación de la producción. 
    
    p.mt-5(data-aos="fade-right") Frente a las técnicas de análisis del flujo de los procesos existen herramientas que se usan para comprender el bienestar de las operaciones de la empresa en donde se mejore la eficiencia de los procesos dentro del contexto comercial. La gestión de los procesos se analiza identificando los elementos que son perjudiciales e interpretando cómo se van a superar los obstáculos, pues no por presionar más hay mejores resultados. A continuación algunas de estas técnicas que permiten analizar los procesos:

    TabsA.color-acento-contenido.mt-4.cont_tarjeta_custom(data-aos="zoom-in")
      .tarjeta.color-acento-contenido.p-4(titulo="Sistema flow shop" style="background-color:#FBFAFF;")
        h5 Sistema flow shop
        .row
          .col-lg-7.mb-4.mb-lg-0
            p El sistema flow shop es denominado taller de flujo, útil en los flujos de trabajos fijos y con cantidades de producción ampliadas. En un taller de flujo el proceso de fabricación sigue una estructura lineal establecida. Eso significa que todos los pedidos deben fabricarse de la misma manera en las mismas máquinas. 
            p.mt-3 La demanda en los talleres de flujo es constante y predecible, esto significa que la variabilidad de los datos es baja. La variedad del producto suele ser baja, ya que hay pocos productos y muy estandarizados. No se lleva con frecuencia la configuración de las máquinas de producción, puesto que no hay variedad de productos, por tanto, existe la posibilidad de reunir operaciones similares en un lote para impulsar la capacidad de producción. 
          .col-lg-5
            figure.m-auto.col-6.col-md-7.col-lg-12
              img(src='@/assets/curso/tema1/25.png')
      .tarjeta.color-acento-contenido.p-4(titulo="Sistema job shop" style="background-color:#FBFAFF;")
        h5 Sistema job shop
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Lleva por nombre taller de trabajo, aludiendo a la ruta de cada uno de manera particular, donde los pedidos deben producirse de manera diferente en las mismas máquinas o en una parte de ellas. La demanda en los talleres no es tan predecible, sino que depende de la ocurrencia irregular de los pedidos de los clientes. La variabilidad de los datos es muy alta, ya que el contexto es dinámico. 
            p.mt-3 La variedad de los productos es ilimitada, ya que el valor agregado proviene de la personalización y la innovación. Es necesario configurar diariamente las máquinas para obtener la caracterización y la entrega en el tiempo estipulado de los pedidos del cliente. 
          .col-lg-5
            figure.m-auto.col-6.col-md-7.col-lg-12
              img(src='@/assets/curso/tema1/26.png')
      .tarjeta.color-acento-contenido.p-4(titulo="Teoría de restricciones TOC" style="background-color:#FBFAFF;")
        h5 Teoría de restricciones TOC
        .row
          .col-lg-7.mb-4.mb-lg-0
            p El sistema flow shop es denominado taller de flujo, útil en los flujos de trabajos fijos y con cantidades de producción ampliadas. En un taller de flujo el proceso de fabricación sigue una estructura lineal establecida. Eso significa que todos los pedidos deben fabricarse de la misma manera en las mismas máquinas. 
            p.mt-3 La demanda en los talleres de flujo es constante y predecible, esto significa que la variabilidad de los datos es baja. La variedad del producto suele ser baja, ya que hay pocos productos y muy estandarizados.
            p.mt-3 No se lleva con frecuencia la configuración de las máquinas de producción, puesto que no hay variedad de productos, por tanto, existe la posibilidad de reunir operaciones similares en un lote para impulsar la capacidad de producción. 
          .col-lg-5
            figure.m-auto.col-6.col-md-7.col-lg-12
              img(src='@/assets/curso/tema1/27.png')
    
    p.mt-5(data-aos="fade-right") Ahora bien, existen algunas pautas en la teoría de las restricciones a tener presente.

    .mt-5.cont_pos_relative
      .d-flex.flex-wrap.align-content-center(style="position:absolute;width: 100%;height: 100%;top:0;left: 0;")
        .col-lg-8
          figure
            img(src="@/assets/curso/tema1/28.svg")
      .col-lg-7.offset-lg-5
        .p-3(style="background-color:#FAEBCD;border-radius:15px;box-shadow:0px 4px 5px rgba(0,0,0,.1);" data-aos="fade-left")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/29.svg" style="max-width:90px;")
            .col(style="place-self:center;")
              p.mb-0 Identificar. Cuál es la parte del proceso que se limita y que obstaculiza el logro de los objetivos. Restricción actual.
        .p-3.mt-3(style="background-color:#FAEBCD;border-radius:15px;box-shadow:0px 4px 5px rgba(0,0,0,.1);" data-aos="fade-right")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/30.svg" style="max-width:90px;")
            .col(style="place-self:center;")
              p.mb-0 Aprovechar. Todas las actividades suman a la eficiencia de las operaciones, por ende, hay que asegurar que se utilicen todos los recursos que estén al alcance.
        .p-3.mt-3(style="background-color:#FAEBCD;border-radius:15px;box-shadow:0px 4px 5px rgba(0,0,0,.1);" data-aos="fade-left")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/31.svg" style="max-width:90px;")
            .col(style="place-self:center;")
              p.mb-0 Sincronizar. Se revisan que las actividades se alineen con los procesos, en donde se respalda la necesidad.
        .p-3.mt-3(style="background-color:#FAEBCD;border-radius:15px;box-shadow:0px 4px 5px rgba(0,0,0,.1);" data-aos="fade-right")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/32.svg" style="max-width:90px;")
            .col(style="place-self:center;")
              p.mb-0 Realzar. Se considera qué acciones adicionales se pueden tomar para eliminar la restricción.
        .p-3.mt-3(style="background-color:#FAEBCD;border-radius:15px;box-shadow:0px 4px 5px rgba(0,0,0,.1);" data-aos="fade-left")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/33.svg" style="max-width:90px;")
            .col(style="place-self:center;")
              p.mb-0 Reproducir. Todas son pautas de un ciclo de mejora continua, por ello se repiten estos pasos para resolver la restricción y abordar la siguiente.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_3 1.3 Sistemas de producción en la transformación de bienes y servicios

    p(data-aos="fade-left") Dentro de las decisiones que toman las personas que se encuentran al frente de la producción de bienes y servicios se encuentran las de incluir la elección de equipos y herramientas, los diseños de los procesos, la selección de mano de obra y la elección de la tecnología que se utilizará. La capacidad del sistema está diseñada para ser una función de la cantidad de capital disponible, el pronóstico de demanda para la producción de la instalación y muchos otros factores menores. Con todo lo anterior se disminuye el riesgo de perder competitividad o capacidad de posicionamiento en el mercado.

    .col-xl-10.m-auto.mt-5
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/34.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Es importante que los fabricantes elijan el mejor método de producción desde el principio. Los fabricantes deben planificar y diseñar cuidadosamente el proceso de producción y considerar los recursos y la maquinaria necesarios para alcanzar los objetivos de la empresa. Cualquier error al principio de la operación puede hacer retroceder a las empresas y requerir un capital sustancial para corregirlo.
    
    p.mt-5(data-aos="fade-right") En la mayoría de los sistemas de producción la capacidad se ajusta contratando o despidiendo trabajadores, programando horas extras o recortando las horas de trabajo, agregando o apagando máquinas o departamentos completos o áreas de la instalación, o cambiando la tasa de producción dentro de límites razonables. La eficacia de cualquiera de estos mecanismos de ajuste depende en gran medida de las limitaciones tecnológicas del proceso mismo, la economía de la industria y la naturaleza de la competencia. 
    p.mt-4(data-aos="fade-left") En algunas industrias el ajuste de la capacidad es una tarea muy difícil. Las líneas de montaje con equipo especializado, por ejemplo, son más eficientes cuando funcionan a una velocidad y no se pueden reducir, ni detener de forma intermitente sin graves pérdidas económicas. En tales casos, la atención cuidadosa al diseño fundamental del sistema de producción es un factor crítico en el éxito general del negocio.
    p.mt-4(data-aos="fade-right") Cuando se trata de elegir un método de producción los fabricantes tienen varias opciones. En el siguiente recurso se  desarrolla la estructura de cada uno de estos.

    .tarjeta.tarjeta--azul.p-4.p-lg-5.pb-lg-4.mt-4(style="background-color:#FAF5EA;" data-aos="zoom-in")
      SlyderA(tipo="b")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Sistemas de producción
            p Cuando se trata de elegir un método de producción, los fabricantes tienen tres tipos de sistemas que pueden escoger de acuerdo  con la necesidad:
            ul.lista-ul.mt-3.ps-lg-4
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Sistema de producción continua.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Sistema de producción por lotes.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Sistema de producción por encargo.
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/35.svg')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Sistema de producción continua
            p Según lo inferido por Velasco (2015) determina que este tipo de fabricación no se somete a problemas complejos, puesto que la línea de producción es fija. Es un método que produce eficientemente grandes cantidades en un corto período de tiempo. 
            p.mt-3 Es un sistema organizado que involucra maquinaria avanzada y produce grandes cantidades, asumiendo así tareas específicas, maquinaria especializada que entrega como resultado productos idénticos y la potencial optimización automatizada. Durante el procesamiento continuo, distintas partes fluyen de una máquina a la siguiente para hacer un producto terminado. No hay interrupciones entre las etapas de producción.
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/36.svg')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Ejemplos de Sistema de producción continua
            figure.mt-4
              img(src="@/assets/curso/tema1/45.svg")
            p.mt-3 Para afianzar el desarrollo de los ejemplos anteriores, se ha tomado uno en particular, la industria del papel. Abarca varias máquinas para llevar a cabo los procesos de fabricación. Las máquinas vuelven los troncos en astillas, que luego se cocinan en el digestor que tiene la capacidad de recibir grandes volúmenes. Se convierten las astillas en pulpa, que será procesada por rodillos que se encuentran en máquinas automáticas para posteriormente ser secadas.
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/37.svg')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Beneficios de la implementación de la producción continua:
            ul.lista-ul.mt-3.ps-lg-4
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Utiliza maquinaria avanzada para producir bienes estandarizados.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Productos de la misma calidad.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Menos tiempo de inactividad.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Menos errores humanos.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Producir gran cantidad en menos tiempo.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Se mantiene al día con respecto a la previsión de la demanda.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Evita la exposición de trabajadores a situaciones de riesgo o peligro.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Disminución de los costos generales.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Convierte materias primas en bienes con eficiencia.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Ofrece precios asequibles al consumidor.
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/38.svg')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Sistema de producción por lotes
            p Dentro de sus atributos se encuentran las series de producción de diferentes tamaños, permitiendo que los productos se fabriquen por lotes con modificaciones importantes en el producto. Dicho en otras palabras, este método de fabricación se utiliza para producir artículos similares que requieren de ciertos ajustes durante el proceso de producción. El sistema radica en que cada lote pasa por una sola fase del proceso antes de pasar a la siguiente fase de fabricación, siendo el atractivo clave y principal que mueve a las empresas a utilizar esta solución de la diversidad de tamaños en la industria.
            p.mt-3 Pueden ocurrir cambios entre diferentes lotes, como productos construidos en diferentes colores, tamaños y estilos. Si es necesario modificar un producto, esta variación se puede cambiar a medida que el proceso de producción cambia de un estilo de lote a otro. Es decir que, los artículos individuales no pasan a la siguiente fase de valor agregado hasta que todos los productos del lote hayan pasado por la anterior, creando un lote de productos terminados a la vez.
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/39.svg')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Ejemplos de Sistema de producción por lotes
            figure.mt-4
              img(src="@/assets/curso/tema1/46.svg")
            p.mt-3 Para afianzar más el desarrollo de los ejemplos anteriores se ha tomado uno en particular: la panadería. Esta actividad económica produce lotes a razón de diferentes productos de consumo con la misma maquinaria.
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/40.svg')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Beneficios de la implementación de la producción por lotes:
            ul.lista-ul.mt-3.ps-lg-4
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Produce diferentes bienes utilizando la misma maquinaria.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Cambios y personalidad en los lotes.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Brinda respuestas a las variaciones de la demanda.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Diversidad de colores, tamaños y personalidad.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Concentrar grandes masas de clientes.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Calidad del producto entre las fases.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Detecta productos defectuosos.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | El proceso es más eficiente.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Requiere menos inversión de capital.
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/41.svg')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Sistema de producción por encargo
            p Conocida también como producción personalizada. Se centra en fabricar cantidades pequeñas para satisfacer las necesidades que para el método son específicas. Es así como el cliente tiene protagonismo en este método, puesto que las empresas utilizan los datos y aportes que el cliente suministra para fabricar productos por encargo o de manera personalizada. Aunque es un poco lenta comparada con los anteriores sistemas, las líneas de montaje siguen un orden específico de pautas. 
            p.mt-3 La producción por encargo se caracteriza por su agilidad y capacidad para diseñar y fabricar productos únicos destinados a adaptarse a funciones o requisitos específicos. A diferencia de los productos producidos en masa, los productos hechos a medida se fabrican en cantidades más pequeñas sobre la base de un pedido. 
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/42.png')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Ejemplos de Sistema de producción por encargo
            p Algunos ejemplos de actividades económicas que implementan este sistema de producción son:
            ul.lista-ul.mt-3.ps-lg-4
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Instalación de aplicaciones.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Fabricación de moldes.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Placas de circuito impreso.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Polímeros y plásticos.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Componentes ópticos.
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/43.svg')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Beneficios de la implementación de la producción por encargo
            ul.lista-ul.mt-3.ps-lg-4
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Produce cantidades más bajas.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Los precios de estos productos son más costosos.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Frecuencia de los procesos de calidad.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Uso de talleres pequeños.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | La mano de obra adquiere gran participación.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Productos fabricados a la medida.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Conjunto de servicios de valor agregado.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Estrecha relación con el cliente.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Satisfacción de necesidad a partir del diseño del cliente.
          .col-lg-6
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src='@/assets/curso/tema1/44.png')
    
    p.mt-5(data-aos="fade-right") Recuerde siempre que la atención al diseño del sistema de producción es un factor crítico y fundamental en la selección del sistema de producción y por ende, en el éxito general del negocio.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_4 1.4 Control de calidad en los sistemas de producción
    
    p(data-aos="fade-left") Antes de profundizar en las herramientas que aseguran la calidad en la fabricación de los productos es necesario comprender qué se busca con la observación de la calidad. 

    .p-4.pb-5.mt-5.pt-5.cont_pos_relative(style="background-color:#E8E8E8;")
      br
      .row
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          h4 Control de calidad 
          p.mt-4 El control de calidad puede definirse como un sistema que se utiliza para mantener un nivel deseado de calidad en un producto o servicio. Es un control sistemático de varios factores que afectan la calidad del producto. Depende de los materiales, las herramientas, las máquinas, el tipo de mano de obra, las condiciones de trabajo, etc. 
        .col-lg-5(data-aos="fade-left")
          .d-flex.flex-wrap.align-content-center.cont_image_1(style="position:absolute;width: 100%;height: 100%;top:0;left: 0;")
            figure.m-auto.col-5.col-md-5.col-lg-9
              img(src="@/assets/curso/tema1/48.svg" style="position:relative;z-index:2;")
      .row
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-5.col-md-5.col-lg-9
            img(src="@/assets/curso/tema1/47.svg")
        .col-lg-7(data-aos="fade-left")
          .cont_1_3.p-4.p-lg-5.mt-lg-5
            p.mb-0.text-white El control de calidad es un término amplio, implica la inspección en una etapa determinada, pero la mera inspección no significa control de calidad. A diferencia de la inspección, en la actividad de control de calidad se pone énfasis en la producción futura de calidad. 
      .row
        .col-lg-7.mb-4.mb-lg-0.mt-4(data-aos="fade-right")
          p El control de calidad tiene como objetivo, entonces, la prevención de defectos; se basa en un sistema de retroalimentación eficaz y un procedimiento de acción correctiva. El control de calidad utiliza la inspección como una herramienta valiosa.
          .row.mt-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              figure.m-auto.col-5.col-md-5.col-lg-12
                img(src="@/assets/curso/tema1/49.svg")
            .col-lg-5(style="place-self:center;")
              p.mb-0 También es un proceso que garantiza que los clientes reciban productos sin ningún defecto y así poder satisfacer las necesidades.
        .col-lg-5(data-aos="fade-left")
          .d-flex.flex-wrap.align-content-center.cont_image_1(style="position:absolute;width: 100%;height: 100%;top:-70px;left: 0;")
            figure.m-auto.col-5.col-md-5.col-lg-12
              img(src="@/assets/curso/tema1/50.svg" style="position:relative;z-index:2;")
      p.mt-4(data-aos="fade-right") Cuando en la fabricación no se cuenta con los respectivos controles de calidad incurren en el riesgo de pérdida de consumidores o que se retiren de la compañía, por ende, se debe evitar estos flagelos mediante un control de calidad efectivo en la producción.

    p.mt-4(data-aos="fade-right") Cuando las empresas se arman con los instrumentos que solidifican el seguimiento a los procesos reducen riesgos tales como piezas defectuosas, cuellos de botella, entre otros hallazgos que suceden por no evidenciar e implementar controles para asegurar la calidad de los bienes y servicios. A partir  de la importancia de los programas informáticos para controlar que la producción sea idéntica en todos los lotes, se citan a continuación algunos de estos sistemas.

    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        SlyderF(columnas="col-12")
          .tarjeta.color-acento-botones.p-4(style="background-color:#FAEBCD;border-radius:0;")
            h5(style="color:initial;") Programa Mapex Production Manager 7.0
            p(style="color:initial;") Ayuda a las empresas en la planeación de la producción, el control de calidad y las operaciones de mantenimiento de equipos. Permite a los empleados capturar y almacenar datos de fabricación en un depósito centralizado y realizar un seguimiento de los lotes de producción y las materias primas. 
            p.mt-4(style="color:initial;") Mapex ofrece una variedad de características que incluyen la administración de comunicaciones, alertas, diagramas de Gantt, administración de órdenes de trabajo y más. Además, permite a los gerentes recibir notificaciones automáticas sobre la demora en los procesos de programación de pedidos por correo electrónico o mensajes de texto, implementar procedimientos de control de calidad y administrar los permisos de los usuarios.
          .tarjeta.color-acento-botones.p-4(style="background-color:#FAEBCD;border-radius:0;")
            h5(style="color:initial;") Programa MES
            p(style="color:initial;") Sus siglas en inglés son Manufacturing execution sistema-Mondragón, que no es otra cosa que el sistema de fabricación Mondragón y que según lo expuesto por el autor Velasco (2015) controla el estado de las máquinas, las órdenes de fabricación, la producción de los lotes y lo más importante de este sistema es que el equipo de medición permite hacer seguimiento a la planta manual y automática para así asegurar la calidad en la entrega del producto. 
            p.mt-4(style="color:initial;") Aprovecha una comprensión más profunda de la información que afecta directamente el rendimiento y la calidad a través de la implementación de servicios que van desde equipos hasta software de planta. Cada sistema de información de calor y control se construye utilizando aspectos clave de la industria para una calidad óptima.
      .col-lg-5(data-aos="fade-left")
        .h-100.p-4.pb-0(style="background-color:#F0BD51;")
          figure
            img(src="@/assets/curso/tema1/51.svg")
    
    p.mt-5(data-aos="fade-right") Ahora bien, para ofrecer calidad en los productos que van a parar en el mercado, tenga en cuenta las recomendaciones necesarias en la implementación de estos controles en el área de producción:

    SlyderF.mt-5(columnas="col-xl-4 col-lg-6")
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/52.svg')
        .tarjeta.color-primario(style="background-color:#F8F6FF;")
          .p-4.text-center
            p Es importante resaltar que dentro del marco de normas que apoyan el control de calidad y la gestión de calidad para las diferentes organizaciones se encuentra la Norma ISO 9001 que gestiona muchos procesos tales como: procedimientos de inspección, procesos de producción, respuestas a los defectos, entre otros. Su ventaja está en la proporción de medios para la implementación del programa de control de calidad, que favorezcan las materias primas utilizadas y los procedimientos de inspección.
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/53.svg')
        .tarjeta.color-primario(style="background-color:#F8F6FF;")
          .p-4.text-center
            p El control se sugiere que se realice al final del proceso de producción, puesto que solo se detectan los productos con imperfecciones después de hechas. Los operadores tienen bajo su responsabilidad la supervisión del proceso de fabricación y esto los lleva a mitigar las variaciones que puedan presentarse, asegurando productos idénticos y de alta calidad. 
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/54.svg')
        .tarjeta.color-primario(style="background-color:#F8F6FF;")
          .p-4.text-center
            p Por otro lado, la tarea del ingeniero se encabeza con la estimación de los diseños del producto en busca de soluciones a posibles variaciones, síntomas y problemas que surjan de la producción. Sus soluciones tienen que ser oportunas y ágiles para dar cumplimiento a los tiempos de entrega de la producción. 
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/55.svg')
        .tarjeta.color-primario(style="background-color:#F8F6FF;")
          .p-4.text-center
            p Cuando se hace seguimiento y control de los productos al finalizar la fabricación permite que las empresas resuelvan, reparen y modifiquen las inconsistencias y los hallazgos encontrados de manera eficiente, ahorrando tiempo y dinero.
    
    p.mt-5(data-aos="fade-right") Adicional a ello, dentro de los sistemas implementados por las empresas se encuentran: 

    .col-xl-10.m-auto.mt-4
      .p-4.p-lg-2.pe-lg-5(style="background-color:#FAEBCD;")
        .row
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
            figure.m-auto.col-5.col-md-5.col-lg-12
              img(src="@/assets/curso/tema1/56.svg")
          .col-lg-7(data-aos="fade-left" style="place-self:center;")
            h2 Mantenimiento productivo total - TPM: 
            p Elimina los defectos y accidentes, mejora la calidad del producto ya que elimina el tiempo de inactividad. 
            h2.mt-5 Sistema de las 5S: 
            p.mb-0 Ayuda a estandarizar el lugar de trabajo, toma el control con la implementación de buenas prácticas del sistema, ya que permite mejorar los procedimientos y eliminar errores en las instalaciones. Aunque cada instalación tiene necesidades diferentes, lo relevante de esto es que simplifica el procedimiento y reduce errores en la fabricación.
    
    p.mt-5(data-aos="fade-right") Teniendo en cuenta lo anterior, como pasos y sugerencias para la implementación de los programas de calidad en la empresa se pueden representar los siguientes:

    .mt-5.p-4.pb-5(style="background-color:#F6F6F6;bprder-radius:15px;")
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema1/58.svg")
      
      .mt-5.p-4.bg-white(style="border:3px #707070 dashed;border-radius:56px;")
        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure.m-auto.col-6.col-md-6.col-lg-12
              img(src="@/assets/curso/tema1/59.svg")
          .col-lg-8(data-aos="fade-left")
            p Un aspecto fundamental es establecer alternativas para los defectos de las piezas, es decir, qué decisiones tomar con lotes que presentan desperfectos y que por tanto, no aprueban los estándares de calidad:
            ul.lista-ul.mt-3.ps-lg-4
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Rechaza la producción.
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Realiza una nueva verificación a otras piezas (revisión de productos).
              li.d-flex
                i.fas.fa-check(style="color:#583CB6;")
                | Paralizar la producción hasta hallar la causa.
            .p-4(style="background-color:#583CB6;border-radius:29px;")
              p.text-white.mb-0 Estas decisiones recaen en los responsables de generar calidad en los productos de la empresa, por tanto, es conveniente identificar la causa del defecto, efectuar modificaciones pertinentes para generar bienestar al consumidor a través de la seguridad del producto sin defectos.
    
    p.mt-5(data-aos="fade-right") Además de todo esto, se pueden establecer otras herramientas que vigorizan el control de calidad, asegurando todos los pasos de la implementación y que adicional ayudan, a través de los datos, a determinar la mejora de la producción, las decisiones más convenientes para el bienestar y la relación empresa-consumidor. En las tarjetas se puede apreciar los instrumentos desde varios escenarios de errores en la fabricación:

    .row.mt-5
      .col-lg.mb-4.mb-lg-0.pe-lg-0
        .h-100.p-4.p-lg-5(style="background-color:#F0BD51;" data-aos="zoom-in-up")
          figure.m-auto.col-4
            img(src="@/assets/curso/tema1/60.svg")
          p.mt-4 Su procedimiento trata de medidas para seleccionar y elegir parámetros controlables de productos y procesos, de tal manera que se minimice la desviación entre la salida del producto o proceso y el estándar.
      .col-lg.mb-4.mb-lg-0.pe-lg-0.ps-lg-0
        .h-100.p-4.p-lg-5(style="background-color:#F1D394;" data-aos="zoom-in-up")
          figure.m-auto.col-4
            img(src="@/assets/curso/tema1/61.svg")
          p.mt-4 Implica comparar el resultado de un proceso o un servicio con un estándar y tomar medidas correctivas en caso de discrepancia entre los dos. También implica determinar si un proceso puede producir un producto que cumpla con las especificaciones o los requisitos deseados. La acción correctiva se toma en esa fase operativa, es decir, en tiempo real.
      .col-lg.mb-4.mb-lg-0.ps-lg-0
        .h-100.p-4.p-lg-5(style="background-color:#FAEBCD;" data-aos="zoom-in-up")
          figure.m-auto.col-4
            img(src="@/assets/curso/tema1/62.svg")
          p.mt-4 Un plan que determina la cantidad de elementos a muestrear y los criterios de aceptación del lote, en función del cumplimiento de ciertas condiciones estipuladas (como el riesgo de rechazar un lote bueno o aceptar un lote malo), se conoce como plan de muestreo de aceptación.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_5 1.5. Procesamiento de órdenes de producción y servicios
    
    p(data-aos="fade-right") Las órdenes de producción le permiten planear el proceso de producción en la fase de ejecución. Contienen toda la información requerida para ejecutar la producción, como qué actividad se llevará a cabo, qué productos de entrada se requieren, qué recursos se necesitan y cuándo procesar las actividades. Una vez que se crea la orden de producción el sistema calcula las cantidades planeadas, las duraciones y las fechas. Si la ejecución de la producción produce menos o más de lo que se planeó originalmente, esto debe informarse al área de planeación. La planeación debe, entonces, considerar cómo lidiar con la demanda insatisfecha o sobresatisfecha.
    p.mt-4(data-aos="fade-left") Los datos más representativos que se calculan a partir de las tareas de producción se establecen en la orden, la cual muestra lo que se planeó inicialmente y cuál ha sido el desempeño y cumplimiento del plan. De ahí la importancia de conocer inicialmente cada uno de sus estados:

    .col-xl-10.m-auto.mt-5
      figure
        img(src="@/assets/curso/tema1/63.svg" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="fade-right") A continuación, se describe los principales datos que se verifican para saber hasta qué punto se ha desarrollado la planeación de la producción inicialmente con la orden de fabricación:

    ImagenInfografica.color-acento-botones.mt-5.imageninfografica1(data-aos="zoom-in-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/64.svg')
      .tarjeta.color-acento-botones.p-3(x="3%" y="65%" numero="1" style="background-color:#fff;box-shadow:0px 0px 20px rgba(0,0,0,.15);")
        h5.mb-0(style="color:inherit;") 1. Cantidad planeada de producción.
        p.mb-0(style="color:inherit;") Es la cantidad de salida para la que se creó esta orden de producción. El sistema propone esta cantidad, pero se puede cambiar manualmente siempre que la orden de producción no esté en el estado cancelado, cerrado o finalizado.
      .tarjeta.color-acento-botones.p-3(x="6%" y="19%" numero="2" style="background-color:#fff;box-shadow:0px 0px 20px rgba(0,0,0,.15);")
        h5.mb-0(style="color:inherit;") 2. Cantidad  cumplida de producción.
        p.mb-0(style="color:inherit;") Es la cantidad total del producto de salida que ha sido cumplida por la ejecución de la producción y notificada en lotes de fabricación.
      .tarjeta.color-acento-botones.p-3(x="12%" y="71%" numero="3" style="background-color:#fff;box-shadow:0px 0px 20px rgba(0,0,0,.15);")
        h5.mb-0(style="color:inherit;") 3. Cantidad  abierta. 
        p.mb-0(style="color:inherit;") Es la cantidad restante, la diferencia de la cantidad cumplida menos la cantidad planeada.
      .tarjeta.color-acento-botones.p-3(x="29%" y="47%" numero="4" style="background-color:#fff;box-shadow:0px 0px 20px rgba(0,0,0,.15);")
        h5.mb-0(style="color:inherit;") 4. Desecho. 
        p.mb-0(style="color:inherit;") Se puede calcular la cantidad de rechazo de la producción, por ende, es importante planear  un factor de desecho para el producto de salida o introducir el dato en la orden de producción.
      .tarjeta.color-acento-botones.p-3(x="45%" y="60%" numero="5" style="background-color:#fff;box-shadow:0px 0px 20px rgba(0,0,0,.15);")
        h5.mb-0(style="color:inherit;") 5. Fecha de inicio y final. 
        p.mb-0(style="color:inherit;") Se transmiten desde la producción a partir de la cual se creó la orden de fabricación. Cuando las fechas son más tempranas, estas se calculan durante la programación y pueden ser modificadas antes de que la orden de producción se encuentre en estado de liberación. Luego, se ajusta la programación a través del sistema en toda la orden de producción con la nueva fecha y hora.
      .tarjeta.color-acento-botones.p-3(x="57%" y="42%" numero="6" style="background-color:#fff;box-shadow:0px 0px 20px rgba(0,0,0,.15);")
        h5.mb-0(style="color:inherit;") 6. Últimas fechas. 
        p.mb-0(style="color:inherit;") Tanto la de inicio como la de fin se establecen durante la programación, puede hacer modificación de la última fecha y la hora de inicio antes del estado de liberación en la orden de producción.
      .tarjeta.color-acento-botones.p-3(x="74.5%" y="52%" numero="7" style="background-color:#fff;box-shadow:0px 0px 20px rgba(0,0,0,.15);")
        h5.mb-0(style="color:inherit;") 7. Indicadores.
        p.mb-0(style="color:inherit;") Se encargan de suministrar las variaciones que han sufrido las fechas más tempranas o las fechas últimas, si se han modificado manualmente, y esto incurre en la desviación de fechas planeadas inicialmente.

    p.mt-5(data-aos="fade-right") Una orden de producción puede tener varios puntos de notificación en los que se confirma el progreso de la misma. Los productos involucrados en una orden de producción se especifican mediante productos de entrada y de salida. Los productos de entrada son necesarios para llevar a cabo la orden de producción y para los cuales se establecen actividades y se marcan como relevantes para el suministro de producción. Siempre que se haya liberado la orden de producción puede modificarse la cantidad planeada. El sistema notifica la cantidad cumplida para el producto de entrada en la orden de fabricación. Los productos de salida pueden ser principales o derivados, la cantidad planeada puede modificarse para el producto de salida hasta el estado de liberación de la orden de fabricación. En el informe final se comunica la cantidad de productos de salida.
    p.mt-4(data-aos="fade-left") Ahora bien, hay algunas acciones específicas que permiten gestionar las órdenes de fabricación, tales como:

    .cont_1_4.mt-5.pt-lg-5.pb-lg-5
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema1/65.svg")
    
    p.mt-5(data-aos="fade-right") Para que el trabajo con las órdenes de producción sea eficiente es indispensable administrar dichas órdenes de acuerdo con sus estados, la cantidad planeada, las fechas de la liberación y que pueda acceder a órdenes individuales a modificar antes de liberar. Cuando libera la orden el sistema crea un lote de producción que almacena datos de la producción tales como fecha de inicio, cantidad confirmada y rechazo, además de considerar las tareas que se necesitan para efectuar la orden de fabricación.
    p.mt-4(data-aos="fade-left") Si desea modificar datos en la orden de fabricación debe realizarlo en el estado de preparación, puede cambiar datos como la cantidad planeada del producto de salida, el cálculo de desecho, la prioridad del orden de fabricación, las fechas y las horas (más tempranas, finalizadas). En la siguiente tabla se comparan dos estados de orden y sus implicaciones.        

    .col-xl-8.m-auto.mt-5.col-lg-10
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Tabla 2.
        span Comparación entre dos estados de una orden de producción
      .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
        table
          thead(style="border:0;")
            tr(style="background-color:#583CB6;")
              th.text-center.text-white(style="border:0;") Cancelado de la orden de producción
              th.text-center.text-white(style="border:0;") Cerrado de la orden de producción
          tbody
            tr(style="background-color:#F6F6F6;")
              td.text-center.p-4(style="border-right:1px #16263D solid;border-left:0;") Puede cancelar una orden emitida solo cuando las tareas fundamentales no se han iniciado. Una vez que se cancela el pedido las tareas fundamentales para esos pedidos finalizan y se abre la solicitud de producción para crear un nuevo pedido de producción. El estado de la orden de producción cambia a «cancelado».
              td.text-center.p-4(style="border-right:0px;") Cuando se cierra el lote de producción la orden de producción también se cierra automáticamente. Una orden de producción cerrada no solo es irrelevante para la logística, sino que ya no está sujeta a ningún tipo de cambios o confirmaciones.

    .col-xl-10.m-auto.mt-5
      .p-4(style="background-color:#FDF5E5;" data-aos="flip-up")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/66.svg")
          .col(style="place-self:center;")
            p.mb-0 Para finalizar con el procesamiento de las órdenes de producción se debe tener presente el ciclo por el que atraviesa un orden, iniciando con la propuesta de pedido, la creación de pedido, la planeación, verificación de disponibilidad, pasando por el retiro de materiales, la impresión del pedido, la nivelación de la capacidad, la entrada de mercancías y se finaliza con el asentamiento y la terminación de la planeación de la orden de producción. Además de lo anterior, cuando se está planeando la producción es necesario determinar los periodos tales como fechas y horas en que se dará inicio a las órdenes.








      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
<style lang="sass">
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 15%
  height: 45%
  top: 0
  right: 0
  background-color: #E2D9FF
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  top: 0
  left: -15%
  background-color: #FFF9ED
.tabs-b.color-acento-contenido .tabs-b__tab--active
  border-top: none !important
  background-color: #fff
.tabs-b__tab
  border-bottom: 0px
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #583CB6
  background-image: url(../assets/curso/tema1/arrow_white.svg)
.slyder-a__bullets__item--active
  background-color: #583CB6 !important
  border-color: #583CB6 !important
.slyder-a__bullets__item
  background-color: #E2D9FF
.acordion__activo
  background-color: #FAEBCD
.cont_tarjeta_custom .tarjeta *
  color: initial !important
.cont_pos_relative, .cont_pos_relative *
  position: relative
.cont_1_3:before
  content: ''
  position: absolute
  width: 100%
  height: 160%
  top: -25%
  left: 0
  background-color: #583CB6
  z-index: 0
.cont_1_4, .cont_1_4 *
  position: relative
.cont_1_4:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  top: 0
  left: -15%
  background-color: #E8E8E8
.imageninfografica1 .img-infografica__item .img-infografica__item__dot:before, .img-infografica__item .img-infografica__item__dot:after
  background-color: #449C6E !important
  opacity: 1
.imageninfografica1 .img-infografica__item
  border-radius: 100%
.imageninfografica1 .img-infografica__item, .img-infografica-b__item
  width: 4%
  font-size: 25px
  border: 4px #A5F6CC solid
.imageninfografica1.img-infografica.color-primario .img-infografica__item__numero, .img-infografica-b.color-primario .img-infografica__item__numero
  color: #fff
</style>
