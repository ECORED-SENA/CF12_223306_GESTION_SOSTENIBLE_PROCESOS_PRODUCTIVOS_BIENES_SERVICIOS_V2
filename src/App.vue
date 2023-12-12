<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #583CB6 !important
.curso-main-container > .container
  overflow-x: clip !important
.titulo-segundo:after
  border-left-color: #583CB6 !important
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
  color: #12263F !important
.banner-interno__titulo h1, .banner-interno__titulo h2, .banner-interno__titulo h3, .banner-interno__titulo h4, .banner-interno__titulo h5, .banner-interno__titulo h6
  color: #12263F !important
.banner-principal .tarjeta
  background-color: transparent !important
.titulo-principal.color-acento-contenido .titulo-principal__numero span
  color: #fff !important
.banner-principal-decorativo-1
  animation: float1 2s ease-in-out infinite alternate !important
  top: 45% !important
  right: 65% !important
  z-index: 0
.banner-principal-decorativo-2
  animation: float1 3s ease-in-out infinite alternate !important
  top: 10% !important
  right: 70% !important
  z-index: 2
.banner-principal-decorativo-3
  animation: float1 3s ease-in-out infinite alternate !important
  top: 10% !important
  right: 0% !important
.banner-principal-decorativo-4
  animation: float1 3s ease-in-out infinite alternate !important
  top: 35% !important
  right: -10% !important
.titulo-principal.color-acento-contenido .titulo-principal__numero
  background-color: #583CB6 !important
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
  padding-bottom: .5rem !important
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img img
  position: relative
  z-index: 2
@media screen and (max-width: 992px)
  .cont_1_1:before
    height: 100% !important
  .cont_image_intro
    top: 0px !important
  .cont_image_1
    position: relative !important
    top: 0 !important
  .cont_1_3:before
    height: 100% !important
    top: 0 !important
</style>
