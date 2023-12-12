<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    br
    .cont_intro.pb-4.pt-4.pt-lg-0
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:end;")
          p.mb-0.pt-lg-4 La gestión de las operaciones en la fabricación de bienes y servicios direcciona la rentabilidad y garantiza la oportunidad de demanda y el crecimiento económico, puesto que la empresa no tiene que pronosticar sus pedidos, ya que previamente con la planeación ha proyectado volúmenes de piezas por fabricar para innumerables órdenes de compra que se presenten. Ahora bien, si se descuida algún proceso que intervenga en la programación quien sufre las consecuencias son las entregas de pedidos de la empresa, pues se está enfrentado a que por desatender ciertos aspectos del programa tales como el sistema, los recursos, las actividades, las órdenes de producción, entre otros, surjan problemas tarde o temprano. En el siguiente video se puede apreciar los aspectos que se deben tener en cuenta en los procesos de producción como un abrebocas de lo que se desarrollará en este componente.
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-6.col-md-7.col-lg-12.cont_image_intro
            img(src="@/assets/curso/intro1.svg")
    
    figure.mt-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro, .cont_intro *
  position: relative
.cont_intro:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 100%
  bottom: 0
  background-color: #F4F0FF
.cont_image_intro
  position: relative
  top: -45px
</style>
