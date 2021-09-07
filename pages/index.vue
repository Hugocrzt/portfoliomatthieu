<template>
<div>
<MainMenu />
<div class="global-container">
  <div class="index-container">
    <div class="title">
      <h1 class="title medium visibl">
        <span class="right-align"><span id="responsive-adaptation-0">I'm Matt,</span> an editorial</span> <span id="responsive-adaptation-1">strategy and media</span> consultant.<span id="responsive-adaptation-2">I create </span>stuff with Adobe and
      </h1>
      <div class="end-home-title-container">
        <div class="carousel-text">
          <span class="medium visibl" id="responsive-adaptation-3">I'm passionate about</span><div class="liste-caroussel"><div v-for="listitem in listitems" :key="listitem.word" :class="listitem.class" :id="listitem.id">{{ listitem.word }}</div></div>
        </div>
      </div>
    </div>
  </div>
</div>
<FooterMenu />
<div class="cursor"></div>
</div>
</template>

<script>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import MainMenu from '@/components/MainMenu'
import FooterMenu from '@/components/FooterMenu';
if (process.client) {
  gsap.registerPlugin(SplitText);
}

export default {

  components: { MainMenu, FooterMenu },

  data: () => ({
    listitems: [
      {
        word: 'media.',
        class: 'mediumi visibl',
        id:'media'
      },
      {
        word: 'sport.',
        class: 'mediumi',
        id:'sport'
      },
      {
        word: 'fonts.',
        class: 'mediumi',
        id:'fonts'
      },
      {
        word: 'brutalism.',
        class: 'mediumi',
        id:'brutalism'
      },
      {
        word: 'taschen books.',
        class: 'mediumi',
        id:'taschen'
      },
      {
        word: 'old magazines.',
        class: 'mediumi',
        id:'magazine'
      },
    ],
    articleitems: [
      {
          title: 'Windowswap, fenêtres sur le monde',
          media: 'Eclectique Magazine',
          date: '2020',
          lien: 'https://eclectiquemagazine.com/windowswap-fenetres-sur-le-monde/'
      },
      {
          title: 'Karlexander, sensualité en pièces',
          media: 'Eclectique Magazine',
          date: '2020',
          lien: 'https://eclectiquemagazine.com/karlexander-sensualite-en-pieces/'
      },
      {
          title: 'Rouguy Diallo, un saut hors du sable',
          media: 'Eclectique Magazine',
          date: '2020',
          lien: 'https://eclectiquemagazine.com/rouguy-diallo-un-saut-hors-du-sable/'
      },
      {
          title: 'Miranda Barnes, photographe des identités',
          media: 'Eclectique Magazine',
          date: '2020',
          lien: 'https://eclectiquemagazine.com/miranda-barnes-photographe-des-identites/'
      },
      {
          title: 'Malia Griggs, résiliation et résilience',
          media: 'Eclectique Magazine',
          date: '2020',
          lien: 'https://eclectiquemagazine.com/malia-griggs-resiliation-et-resilience/'
      },
      {
          title: 'Caroline Calloway, l’arnaque mise à nu(d)e',
          media: 'Eclectique Magazine',
          date: '2020',
          lien: 'https://eclectiquemagazine.com/caroline-calloway-larnaque-mise-a-nude/'
      },
      {
          title: 'Delia Cai, experte des tendances numériques',
          media: 'Eclectique Magazine',
          date: '2020',
          lien: 'https://eclectiquemagazine.com/delia-cai-interview-french/'
      },
      {
          title: 'Au revoir, Deadspin',
          media: 'Eclectique Magazine',
          date: '2019',
          lien: 'https://eclectiquemagazine.com/au-revoir-deadspin/'
      },
      {
          title: 'ESPN The Magazine, la fin d’une ère',
          media: 'Eclectique Magazine',
          date: '2019',
          lien: 'https://eclectiquemagazine.com/espn-septembre2019/'
      },
      {
          title: 'Dino Kuznik, un oeil nostalgique sur l’Amérique',
          media: 'Eclectique Magazine',
          date: '2019',
          lien: 'https://eclectiquemagazine.com/dino-kuznik-un-oeil-nostalgique-sur-lamerique/'
      },
    ],
    articleitems: [
      {
        title: 'Windowswap, fenêtres sur le monde',
        media: 'Eclectique Magazine',
        date: '2020',
        lien: 'https://eclectiquemagazine.com/windowswap-fenetres-sur-le-monde/'
      },
      {
        title: 'Karlexander, sensualité en pièces',
        media: 'Eclectique Magazine',
        date: '2020',
        lien: 'https://eclectiquemagazine.com/karlexander-sensualite-en-pieces/'
      },
      {
        title: 'Rouguy Diallo, un saut hors du sable',
        media: 'Eclectique Magazine',
        date: '2020',
        lien: 'https://eclectiquemagazine.com/rouguy-diallo-un-saut-hors-du-sable/'
      },
      {
        title: 'Miranda Barnes, photographe des identités',
        media: 'Eclectique Magazine',
        date: '2020',
        lien: 'https://eclectiquemagazine.com/miranda-barnes-photographe-des-identites/'
      },
      {
        title: 'Malia Griggs, résiliation et résilience',
        media: 'Eclectique Magazine',
        date: '2020',
        lien: 'https://eclectiquemagazine.com/malia-griggs-resiliation-et-resilience/'
      },
      {
        title: 'Caroline Calloway, l’arnaque mise à nu(d)e',
        media: 'Eclectique Magazine',
        date: '2020',
        lien: 'https://eclectiquemagazine.com/caroline-calloway-larnaque-mise-a-nude/'
      },
      {
        title: 'Delia Cai, experte des tendances numériques',
        media: 'Eclectique Magazine',
        date: '2020',
        lien: 'https://eclectiquemagazine.com/delia-cai-interview-french/'
      },
      {
        title: 'Au revoir, Deadspin',
        media: 'Eclectique Magazine',
        date: '2019',
        lien: 'https://eclectiquemagazine.com/au-revoir-deadspin/'
      },
      {
        title: 'ESPN The Magazine, la fin d’une ère',
        media: 'Eclectique Magazine',
        date: '2019',
        lien: 'https://eclectiquemagazine.com/espn-septembre2019/'
      },
      {
        title: 'Dino Kuznik, un oeil nostalgique sur l’Amérique',
        media: 'Eclectique Magazine',
        date: '2019',
        lien: 'https://eclectiquemagazine.com/dino-kuznik-un-oeil-nostalgique-sur-lamerique/'
      },
    ],
  }),

  name: 'ScrollTrigger',
  name: 'SplitText',

  transition: {
    name:'home',
    mode:'out-in',
    appear: true,
    css: false,
    leave (el, done){
      gsap.to('header', 0.5, { opacity:0, ease: 'Power1.easeOut' });
      gsap.to('.footer', 0.5, { opacity:0, ease: 'Power1.easeOut' });
      gsap.to('.index-container', 0.5, { opacity:0, ease: 'Power1.easeOut', onComplete: done});
    },
    enter(el, done){
      //
    },
  },

  mounted: function(){
    this.CursorAnimation(),
    this.GridAnimation(),
    this.AnimeHomePage()
  },

  methods: {
    CursorAnimation: function(){
      let contain = document.querySelectorAll('a');
      let mouseCursor = document.querySelector(".cursor");

      var mouseX=window.innerWidth/2, mouseY=window.innerHeight/2;
      var circle = {
        el:document.querySelector('.cursor'),
        x:window.innerWidth/2, 
        y:window.innerHeight/2, 
        w:40, 
        h:40,
        update:function(){
          var l = this.x-this.w/2;
          var t = this.y-this.h/2;
          this.el.style.transform = 'translate3d('+l+'px, '+t+'px, 0)'
        }
      }
      window.addEventListener('mousemove', e =>{
        mouseX = e.clientX;
        mouseY = e.clientY;
      })
      setInterval (move,1000/60)
      function move(){
        circle.x = lerp (circle.x, mouseX, 0.1);
        circle.y = lerp (circle.y, mouseY, 0.1);
        circle.update() 
      }
      function lerp (start, end, amt){
        return (1-amt)*start+amt*end
      }

      contain.forEach(link => {
          link.addEventListener('mouseenter', () => {
              gsap.to(mouseCursor, 0.1, { opacity: 0 });
          });
          link.addEventListener('mouseleave', () => {
              gsap.to(mouseCursor, 0.1, { opacity: 1 });
          });
      });
    },
    GridAnimation: function(){
      document.onclick = userClicked;
      let timesClicked = 0;
      let doncLink = document.querySelectorAll('a');
      doncLink.forEach(link => {
        link.addEventListener('click', event => {
          timesClicked = 5;
        })
      })
      let menuLink = document.getElementById('menu-word');
      menuLink.addEventListener('click', event => {
          timesClicked = 4;
      })
      function userClicked(event) {
        timesClicked++;
        if (timesClicked===1) {
          gsap.fromTo('.grid-home div', 0.3,{ opacity: 0 },
          { opacity: 0.15 });
        }
        else if (timesClicked===2) {
          gsap.fromTo('.grid-home div', 0.3,{ opacity: 0.15 },
          { opacity: 0.30 });
        }
        else if (timesClicked===3) {
          gsap.fromTo('.grid-home div', 0.3,{ opacity: 0.30 },
          { opacity: 0 });
          timesClicked = 0;
        }
        else if (timesClicked===7) {
          gsap.to('.grid-home div', 0.3, { opacity: 0.15 });
          timesClicked = 1;
        }
        else {
          //
        }
      };
    },
    AnimeHomePage: function(){
      var heroTitle = document.querySelector(".title")
      var mySplitText = new SplitText(heroTitle);
      mySplitText.split({type:"chars", charsClass: "hero-title-chars-split"});
      gsap.fromTo('.title', 0.001, { opacity: 0 },
      { opacity: 1, delay: 0.001 });
    
      if(document.body.contains(document.querySelector('.loader-degrade'))){
          gsap.fromTo('.visibl .hero-title-chars-split', 1, { opacity: 0, y: -50, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.0125 },
          { opacity: 1, y: 0, transform: "rotate3d(0,0,0,90deg)", delay: 3.75, ease: 'Power3.easeOut', stagger: 0.0125 });
          gsap.fromTo('header', 1, { opacity: 0 },
          { opacity: 1, delay: 5, ease: 'Power1.easeInOut'});
          gsap.fromTo('.footer', 1, { opacity: 0 },
          { opacity: 1, delay: 5, ease: 'Power1.easeInOut'});
          gsap.fromTo('.cursor', 1, { opacity: 0 },
          { opacity: 1, delay: 5 });
      } 
      else{
        gsap.fromTo('.visibl .hero-title-chars-split', 1.5, { opacity: 0, y: -50, transform: "rotate3d(1, 0,-0.15,90deg)", stagger: 0.005 },
        { opacity: 1, y: 0, transform: "rotate3d(0,0,0,90deg)", delay: 0.25, ease: 'Power3.easeOut', stagger: 0.005 });
        gsap.fromTo('header', 1, { y: '-100%', opacity: 0 },
        { opacity: 1, y: '0%', delay: 1, ease: 'Power1.easeInOut'});
        gsap.fromTo('.footer', 1, { opacity: 0 },
        { opacity: 1, delay: 1, ease: 'Power1.easeInOut'});
        gsap.fromTo('.cursor', 1, { opacity: 0 },
        { opacity: 1, delay: 1 });
      }

      gsap.fromTo('#media .hero-title-chars-split', 1, { opacity: 1, transform: "rotate3d(0,0,0,90deg)", stagger: 0.088, repeat: -1, repeatDelay: 20 },
      { opacity: 0, transform: "rotate3d(1,0,0.15,90deg)", delay: 8, ease: 'Power3.easeOut', stagger: 0.088, repeat: -1, repeatDelay: 20 });

      gsap.fromTo('#sport .hero-title-chars-split', 1, { opacity: 0, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.088, repeat: -1, repeatDelay: 20 },
      { opacity: 1, transform: "rotate3d(0,0,0,90deg)", delay: 8.5, ease: 'Power3.easeOut', stagger: 0.088, repeat: -1, repeatDelay: 20 });
      gsap.to('#sport .hero-title-chars-split', 1, { opacity: 0, transform: "rotate3d(1,0,0.15,90deg)", delay: 11.5, ease: 'Power3.easeOut', stagger: 0.088, repeat: -1, repeatDelay: 20 });
      
      gsap.fromTo('#fonts .hero-title-chars-split', 1, { opacity: 0, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.088, repeat: -1, repeatDelay: 20 },
      { opacity: 1, transform: "rotate3d(0,0,0,90deg)", delay: 12, ease: 'Power3.easeOut', stagger: 0.088, repeat: -1, repeatDelay: 20 });
      gsap.to('#fonts .hero-title-chars-split', 1, { opacity: 0, transform: "rotate3d(1,0,0.15,90deg)", delay: 15, ease: 'Power3.easeOut', stagger: 0.088, repeat: -1, repeatDelay: 20 });
      
      gsap.fromTo('#brutalism .hero-title-chars-split', 1, { opacity: 0, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.088, repeat: -1, repeatDelay: 19.65 },
      { opacity: 1, transform: "rotate3d(0,0,0,90deg)", delay: 15.5, ease: 'Power3.easeOut', stagger: 0.088, repeat: -1, repeatDelay: 19.65 });
      gsap.to('#brutalism .hero-title-chars-split', 1, { opacity: 0, transform: "rotate3d(1,0,0.15,90deg)", delay: 18.5, ease: 'Power3.easeOut', stagger: 0.088, repeat: -1, repeatDelay: 19.65 });
      
      gsap.fromTo('#taschen .hero-title-chars-split', 1, { opacity: 0, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.088, repeat: -1, repeatDelay: 19.4 },
      { opacity: 1, transform: "rotate3d(0,0,0,90deg)", delay: 19, ease: 'Power3.easeOut', stagger: 0.088, repeat: -1, repeatDelay: 19.4 });
      gsap.to('#taschen .hero-title-chars-split', 1, { opacity: 0, transform: "rotate3d(1,0,0.15,90deg)", delay: 22, ease: 'Power3.easeOut', stagger: 0.088, repeat: -1, repeatDelay: 19.4 });
      
      gsap.fromTo('#magazine .hero-title-chars-split', 1, { opacity: 0, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.088, repeat: -1, repeatDelay: 19.4 },
      { opacity: 1, transform: "rotate3d(0,0,0,90deg)", delay: 22.5, ease: 'Power3.easeOut', stagger: 0.088, repeat: -1, repeatDelay: 19.4 });
      gsap.to('#magazine .hero-title-chars-split', 1, { opacity: 0, transform: "rotate3d(1,0,0.15,90deg)", delay: 25.5, ease: 'Power3.easeOut', stagger: 0.088, repeat: -1, repeatDelay: 19.4 });

      gsap.fromTo('#media .hero-title-chars-split', 1, { opacity: 0, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.088, repeat: -1, repeatDelay: 20.1 },
      { opacity: 1, transform: "rotate3d(0,0,0,90deg)", delay: 26, ease: 'Power3.easeOut', stagger: 0.088, repeat: -1, repeatDelay: 20.1 });
    },
  }
}
</script>

<style lang="css" src="~/assets/css/main.css">
</style>
