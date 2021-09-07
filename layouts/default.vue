<template>
  <div>
    <Loader v-if="showHideLoader" />    
    <div class="transition-degrade">
    </div>
    <Nuxt />
    <!--<span v-for="clickitem in clickitems" :key="clickitem.char" :class="clickitem.class">{{ clickitem.char }}</span>-->
    <div class="grid-home">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div class="hidden-mobile"></div>
      <div class="hidden-mobile"></div>
      <div class="hidden-mobile hidden-tablette"></div>
      <div class="hidden-mobile hidden-tablette"></div>
      <div class="hidden-mobile hidden-tablette"></div>
      <div class="hidden-mobile hidden-tablette"></div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import MainMenu from '@/components/MainMenu'
import Loader from '@/components/Loader'

export default {

  components: { MainMenu, Loader },

  beforeCreate() {
    this.showHideLoader = true;
  },
  
  mounted() {
    this.LoaderAnimation(),
    this.ResponsiveHeightValue()
  },
  
  methods: {
    LoaderAnimation: function(){
      gsap.fromTo('.loader-degrade', 10, { background:"radial-gradient(ellipse at 40% -200%, #eeeeee00, transparent), radial-gradient(ellipse at 70% -100%, #161616, transparent), radial-gradient(ellipse at 30% 200%, #161616, transparent), radial-gradient(ellipse at 50% 50%, #EEEEEE, #EEEEEE)" },
      { background: "radial-gradient(ellipse at 40% -200%, #eeeeee00, transparent), radial-gradient(ellipse at -200% 30%, #161616, transparent), radial-gradient(ellipse at 300% 40%, #161616, transparent), radial-gradient(ellipse at 50% 50%, #afafaf, #EEEEEE)", delay: 0.1 })
      gsap.to('.loader-degrade', 4, { background: "radial-gradient(ellipse at 40% 22.5%, #eeeeee, transparent), radial-gradient(ellipse at -200% 30%, #161616, transparent), radial-gradient(ellipse at 300% 40%, #161616, transparent), radial-gradient(ellipse at 50% 50%, #afafaf, #EEEEEE)", delay: 1 })
      gsap.fromTo('.gradient-text', 1, { opacity: 0 },
      { opacity: 1, delay: 0.1, ease: 'Power1.easeInOut' });
      gsap.to('.gradient-text', 0.5, { opacity: 0, delay: 3 });
      gsap.to('.loader-degrade', 1.5, { opacity: 0, delay: 3.5 })
      const self = this;
      setTimeout(function(){
        self.showHideLoader = false
      }, 5000);
    },
    ResponsiveHeightValue: function(){
      document.querySelector(':root').style
      .setProperty('--vh', window.innerHeight/100 + 'px');
    },
  },

  data() {
    return {
      showHideLoader: true,
      /*clickitems: [
        { 
          char: '대',
          class: 'letter-cursor1'
        },
        { 
          char: '중',
          class: 'letter-cursor2'
        },
        { 
          char: '잡',
          class: 'letter-cursor3'
        },
        { 
          char: '지',
          class: 'letter-cursor4'
        }
      ],*/
    };
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
