<template>
    <div>
    <LocomotiveScroll
        ref="scroller"
        :getted-options="{
        direction: 'vertical',
        smartphone: {
            direction: 'vertical',
        },
        tablet: {
            direction: 'vertical',
        },
        }"
    >
        <MainMenu />
        <div class="global-about-container">
            <section class="about-container-hero" data-scroll-section>
                <h1 class="title-about">
                    <span class="bold visible">About<span class="scroll-down"><svg class="hero-about-chars-split" xmlns="http://www.w3.org/2000/svg" width="10.5vw" height="10.5vw" viewBox="0 0 150.598 161.002"><path id="MF-ScrollDown" d="M54.15,138.509c.04,0,42.613-.028,42.6-.009.028.263,12.391,12.326,11.972,12.109l-.243-79.632c.081.085-54.068-.163-54.068-.163V31.61c.145.248,95.356-.182,95.757.108l.243,118.892c.239-.214,12.829-12.479,12.829-12.479s41.507.067,41.509.034c.072,0-54.506,54.428-54.338,54.445-.062,0-42,0-42,0" transform="translate(-54.15 -31.61)" fill="var(--color-primary)"/></svg></span></span><br>
                </h1>
            </section>
            <section class="about-paragraphe-section" data-scroll-section>
                <div class="about-paragraphe-container">
                    <p class="about-phrase1"><span class="machina visible" id="mf-hover">I'm Matthieu Fortin</span></p>
                    <picture>
                        <source srcset="~/assets/img/Matthieu-Fortin2.webp" type="image/webp">
                        <source srcset="~/assets/img/Matthieu-Fortin2_opti.jpg" type="image/jpeg">
                        <img class="about-img-hover" id="imagemf1" src="~/assets/img/Matthieu-Fortin2_opti.jpg" alt="Matthieu Fortin">
                    </picture>
                    <p class="about-paragraphe1">
                        I work on analyzing the media, their influence, their evolution, their effects. I work on the different editorial strategies, the graphic choices they adopt, and the way they communicate. In knowing and obsessing over every detail on a brand strategy and communication trends, I'm confident in offering a good input to companies I work with.</br>
                        When I'm not spending my entire on looking for what font the NYT is using or comparing corporate logos and identity, I write, interview, read and create. Here are some examples of my work.
                    </p>
                    <p class="about-paragraphe-projects paragraphe-about-lines-split"><nuxt-link to="/eclectique" id="ec-hover" href="https://eclectiquemagazine.com/">Eclectique</nuxt-link> / <nuxt-link to="/la-sueur" id="su-hover">La Sueur</nuxt-link></p>
                    <p class="about-paragraphe2">
                        I enjoy working with people and companies passionate about their project and their audience. To build and promote something meaningful.</br>
                        If you'd like to work with me, get some advice, or tell me about a good magazine, your favorite architect, or a great typography, let me know.
                    </p>
                    <div class="about-paragraphe-rs"><a href="https://twitter.com/mattnfortin" target="_blank" rel="noreferrer noopener" id="tw-hover" class="paragraphe-about-lines-split">Twitter</a><a href="https://www.instagram.com/eclectiquemagazine/" target="_blank" rel="noreferrer noopener" id="it-hover" class="paragraphe-about-lines-split">Instagram</a><a href="https://open.spotify.com/user/matthieufusa?si=hhxMNmMFS2GKp841L7mxiA&nd=1" target="_blank" rel="noreferrer noopener" id="sp-hover" class="paragraphe-about-lines-split">Spotify</a></div>
                    <p class="about-paragraphe-mention-design paragraphe-about-lines-split">Artistic Direction: <span id="mfc-hover" class="link-mention">Matthieu Fortin</span> & <a href="https://www.hugocrozet.com/" target="_blank" rel="noreferrer noopener" id="hc-hover" class="link-mention">Hugo Crozet</a>
                        <picture>
                            <source srcset="~/assets/img/HugoCrozet_Developer-Designer.webp" type="image/webp">
                            <source srcset="~/assets/img/HugoCrozet_Developer-Designer_opti.jpg" type="image/jpeg">
                            <img class="credit-img-hover" id="imagehc" src="~/assets/img/HugoCrozet_Developer-Designer_opti.jpg" alt="Hugo Crozet">
                        </picture>
                        <picture>
                            <source srcset="~/assets/img/Matthieu-Fortin.webp" type="image/webp">
                            <source srcset="~/assets/img/Matthieu-Fortin_opti.jpg" type="image/jpeg">
                            <img class="credit-img-hover" id="imagemf2" src="~/assets/img/Matthieu-Fortin_opti.jpg" alt="Matthieu Fortin">
                        </picture>
                    </p>
                    <p class="about-paragraphe-mention-develop paragraphe-about-lines-split">Develop by <a href="https://www.hugocrozet.com/" target="_blank" rel="noreferrer noopener" class="link-mention">Hugo Crozet</a></p>
                </div>
            </section>
        </div>
        <div class="about-background-color-ec"></div>
        <div class="about-background-color-su"></div>
        <div class="about-background-color-tw"></div>
        <div class="about-background-color-it"></div>
        <div class="about-background-color-sp"></div>
        <FooterMenu data-scroll-section />
    </LocomotiveScroll>
    <div class="cursor"></div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import MainMenu from '@/components/MainMenu'
import FooterMenu from '@/components/FooterMenu';
if (process.client) {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}
  
export default {

    components: { MainMenu, FooterMenu },

    data: () => ({
        CurrentImage: 1
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
            gsap.to('.global-about-container', 0.5, { opacity:0, ease: 'Power1.easeOut', onComplete: done });
        },
        enter(el, done){
            //
        }
    },
    
    mounted: function(){
        this.CursorAnimation(),
        this.GridAnimation(),
        this.HeroAboutAnimation(),
        this.AboutAnimation(),
        this.HoverMF(),
        this.initScrolltrigger()
        const elements = document.querySelectorAll('.paragraphe-about-lines-split')
        elements.forEach((element) => this.elementAnimation(element))
    },
  
    methods: {
        initScrolltrigger() {
            const locomotive = this.$refs.scroller.locomotive
            locomotive.on('scroll', ScrollTrigger.update)
            ScrollTrigger.scrollerProxy(locomotive.el, {
                scrollTop(value) {
                return arguments.length
                    ? locomotive.scrollTo(value, 0, 0)
                    : locomotive.scroll.instance.scroll.y
                },
                getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                }
                },
            })
        },
        CursorAnimation: function(){
            let mouseCursor = document.querySelector(".cursor");
            let contain = document.querySelectorAll('a');

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
            let AboutText = document.querySelector('.about-paragraphe-container');
            AboutText.addEventListener('click', event => {
                timesClicked = 4;
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
        HeroAboutAnimation : function(){
            var heroAbout = document.querySelector(".title-about")
            var mySplitAbout = new SplitText(heroAbout);
            mySplitAbout.split({type:"chars", charsClass: "hero-about-chars-split"});
            gsap.fromTo('.title-about', 0.001, { opacity: 0 },
            { opacity: 1, delay: 0.001 });

            if(document.body.contains(document.querySelector('.loader-degrade'))){
                gsap.fromTo('.hero-about-chars-split', 1.5, { opacity: 0, y: -100, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.08 },
                { opacity: 1, y: 0, transform: "rotate3d(0,0,0,90deg)", delay: 3.75, ease: 'Power3.easeOut', stagger: 0.08 });
                gsap.fromTo('header', 1, { opacity: 0 },
                { opacity: 1, delay: 4.5, ease: 'Power1.easeInOut'});
                gsap.fromTo('.footer', 1, { opacity: 0 },
                { opacity: 1, delay: 4.5, ease: 'Power1.easeInOut'});
                gsap.fromTo('.cursor', 1, { opacity: 0 },
                { opacity: 1, delay: 4.5 });
            } 
            else{
                gsap.fromTo('.hero-about-chars-split', 1.5, { opacity: 0, y: -100, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.08 },
                { opacity: 1, y: 0, transform: "rotate3d(0,0,0,90deg)", delay: 0.25, ease: 'Power3.easeOut', stagger: 0.08 });
                gsap.fromTo('header', 1, { opacity: 0 },
                { opacity: 1, delay: 1, ease: 'Power1.easeInOut'});
                gsap.fromTo('.footer', 1, { opacity: 0 },
                { opacity: 1, delay: 1, ease: 'Power1.easeInOut'});
                gsap.fromTo('.cursor', 1, { opacity: 0 },
                { opacity: 1, delay: 1, });
            }
        },
        AboutAnimation: function(){
            var AboutParagraphe = document.querySelector(".about-paragraphe-container")
            var AboutPhrase1 = document.querySelector(".about-phrase1")
            var mySplitAboutPhrase1 = new SplitText(AboutPhrase1);
            mySplitAboutPhrase1.split({type:"lines", linesClass: "paragraphe-about-lines-split"});
            var AboutParagraphe1 = document.querySelector(".about-paragraphe1")
            var mySplitAboutParagraphe1 = new SplitText(AboutParagraphe1);
            mySplitAboutParagraphe1.split({type:"lines", linesClass: "paragraphe-about-lines-split [data-scroll-trigger]"});
            var AboutParagraphe2 = document.querySelector(".about-paragraphe2")
            var mySplitAboutParagraphe2 = new SplitText(AboutParagraphe2);
            mySplitAboutParagraphe2.split({type:"lines", linesClass: "paragraphe-about-lines-split"});
        },
        elementAnimation(element){
            gsap.fromTo(element, 1, { y:75, opacity: 0},
            { y: 0, opacity: 1, ease: 'Power2.easeOut',
                scrollTrigger: {
                trigger: element,
                scroller: this.$refs.scroller.locomotive.el,
                start: 'top 100%',
                }
            })
        },
        HoverMF: function(){
            const linkMF = document.getElementById("mf-hover")
            const ImageMFHover1 = document.getElementById("imagemf1")

            const linkCreditMF = document.getElementById("mfc-hover")
            const ImageCreditMFHover = document.getElementById("imagemf2")

            const linkHC = document.getElementById("hc-hover")
            const ImageHCHover = document.getElementById("imagehc")

            const linkEM = document.getElementById("ec-hover")
            const BgEMHover = document.querySelector(".about-background-color-ec")

            const linkSU = document.getElementById("su-hover")
            const BgSUHover = document.querySelector(".about-background-color-su")

            const linkTW = document.getElementById("tw-hover")
            const BgTWHover = document.querySelector(".about-background-color-tw")

            const linkIT = document.getElementById("it-hover")
            const BgITHover = document.querySelector(".about-background-color-it")

            const linkSP = document.getElementById("sp-hover")
            const BgSPHover = document.querySelector(".about-background-color-sp")

            const that = this;
            linkMF.addEventListener('mouseenter', function (){
                gsap.to(ImageMFHover1, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });
            })
            linkMF.addEventListener('mouseleave', function (){
                gsap.to(ImageMFHover1, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });
            })

            linkCreditMF.addEventListener('mouseenter', function (){
                gsap.to(ImageCreditMFHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });
            })
            linkCreditMF.addEventListener('mouseleave', function (){
                gsap.to(ImageCreditMFHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });
            })
            
            linkHC.addEventListener('mouseenter', function (){
                gsap.to(ImageHCHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });
            })
            linkHC.addEventListener('mouseleave', function (){
                gsap.to(ImageHCHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });
            })
            linkEM.addEventListener('mouseenter', function (){
                gsap.to(BgEMHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });
                linkEM.classList.add('onhover');
            })
            linkEM.addEventListener('mouseleave', function (){
                gsap.to(BgEMHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });
                linkEM.classList.remove('onhover');
            })
            linkSU.addEventListener('mouseenter', function (){
                gsap.to(BgSUHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });
                linkSU.classList.add('onhover');
            })
            linkSU.addEventListener('mouseleave', function (){
                gsap.to(BgSUHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });
                linkSU.classList.remove('onhover');
            })
            linkTW.addEventListener('mouseenter', function (){
                gsap.to(BgTWHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });
                linkTW.classList.add('onhover');
            })
            linkTW.addEventListener('mouseleave', function (){
                gsap.to(BgTWHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });
                linkTW.classList.remove('onhover');
            })
            linkIT.addEventListener('mouseenter', function (){
                gsap.to(BgITHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });
                linkIT.classList.add('onhover');
            })
            linkIT.addEventListener('mouseleave', function (){
                gsap.to(BgITHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });
                linkIT.classList.remove('onhover');
            })
            linkSP.addEventListener('mouseenter', function (){
                gsap.to(BgSPHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });
                linkSP.classList.add('onhover');
            })
            linkSP.addEventListener('mouseleave', function (){
                gsap.to(BgSPHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });
                linkSP.classList.remove('onhover');
            })

        }
    }
}
</script>
  
<style lang="css" src="~/assets/css/main.css">

</style>