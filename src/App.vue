<template>
  <div id="app">
    <NAvBAr/>
    <homePage/>
  <aboutPage/>
   <packagePlaces/>
  <!-- <heaDer/> -->
   <reviewsCust/>
    <bookingForm/>
    <FooTer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NAvBAr from './components/NAvBAr.vue'
 import homePage from './components/homePage.vue'
 import aboutPage from './components/aboutPage.vue'
//  import heaDer from './components/heaDer.vue'
 import packagePlaces from './components/packagePlaces.vue'
 import reviewsCust from './components/reviewsCust.vue'
 import bookingForm from './components/bookingForm.vue'
 import FooTer from './components/FooTer.vue'

export default {
  name: 'App',
  components: {
    NAvBAr,
    homePage,
    aboutPage,
    packagePlaces,
    // heaDer,
    reviewsCust,
    bookingForm,
    FooTer

    
  }
}
</script>

<style>

</style>
