<template>
    <div>
    <div class="cursor-close">Close</div>
    <nuxt-link to="/about" class="cursor-close-mobile">Close Project</nuxt-link>
    <MainMenu />
    <LocomotiveScroll
        ref="scroller"
        :getted-options="{
        smooth: true,
        direction: 'horizontal',
        smartphone: {
            direction: 'vertical',
        },
        tablet: {
            direction: 'vertical',
        },
        }"
    >
        <div @click="goBackAbout" class="global-eclectique-container">
            <section class="eclectique-container-hero" data-scroll-section>
                <h1 class="title-eclectique">
                    <span class="bold visible">Eclectique<span class="scroll-down project-slow-dow"><svg class="hero-eclectique-chars-split" xmlns="http://www.w3.org/2000/svg" width="11vw" height="7.9vw" viewBox="0 0 172.119 161"><path id="MF-ScrollRight" d="M0,57.837c.043,0,45.556.03,45.542.01.03-.281,13.247-13.177,12.8-12.945l-.26,85.131c.087-.091-57.8.174-57.8.174v41.911c.155-.265,101.941.195,102.37-.115l.26-127.1c.256.229,13.715,13.341,13.715,13.341S161,58.17,161,58.2c.077,0-58.27-58.187-58.091-58.2h-44.9" transform="translate(172.119) rotate(90)" fill="var(--color-primary)"/></svg></span><span class="scroll-down project-slow-dow-mobile"><svg class="hero-eclectique-chars-split" xmlns="http://www.w3.org/2000/svg" width="7vw" height="6.5vw" viewBox="0 0 150.598 161.002"><path id="MF-ScrollDown" d="M54.15,138.509c.04,0,42.613-.028,42.6-.009.028.263,12.391,12.326,11.972,12.109l-.243-79.632c.081.085-54.068-.163-54.068-.163V31.61c.145.248,95.356-.182,95.757.108l.243,118.892c.239-.214,12.829-12.479,12.829-12.479s41.507.067,41.509.034c.072,0-54.506,54.428-54.338,54.445-.062,0-42,0-42,0" transform="translate(-54.15 -31.61)" fill="var(--color-primary)"/></svg></span></span>
                </h1>
            </section>
            <section class="eclectique-section1" data-scroll-section>
                <div data-scroll data-scroll-call="textEvent1" class="eclectique-paragraphe1-container">
                    <p class="ep1">Éclectique is by far my most important project. Éclectique is not a newspaper, nor do I like to present it as a medium. According to its official definition (which I wrote), Éclectique is a place of articles and a range of inspirations. It is a place where readers can discover portraits of artists, athletes or journalists. Stories about fashion, design or sports.</p>
                    <p class="ep2">Our Instagram page symbolizes this range of inspirations where, each week, different contributors write about an artist, a brand, a photographer or an object that is close to their heart.</p>
                </div>
                <div data-scroll data-scroll-call="textEvent2" class="eclectique-paragraphe1-container2">
                    <p>I also want to credit someone at this point. If Éclectique was a project I imagined and created, the website would be nothing without the help and the vision of Nathan Vergé. Together, we created Éclectique's identity and developed the media and its projects.</p>
                </div>
            </section>
            <section class="eclectique-section2" data-scroll-section>
                <div data-scroll data-scroll-call="textEvent3" class="eclectique-paragraphe2-container">
                    <h2>Tote Bags</h2>
                    <p>In January 2021, I wanted to create something to take the media out of its digital environment. This is a key vision of Éclectique, to make sure that this media is not only locked in a site or on social networks but also live in real life. So I created tote bags with a slogan and a typographic design in support of the magazines. Not just Éclectique, but really all magazines, which should be read and supported.</p>
                </div>
                <div data-scroll data-scroll-call="ImageEvent1" class="eclectique-image1-container">
                    <div class="row-sup">
                        <div class="image-container-eclectique">
                            <picture>
                                <source srcset="~/assets/img/ToteBag-Eclectique2_eclectique.webp" type="image/webp">
                                <source srcset="~/assets/img/ToteBag-Eclectique2_eclectique_opti.jpg" type="image/jpeg">
                                <img src="~/assets/img/ToteBag-Eclectique2_eclectique_opti.jpg" alt="Tote Bag Eclectique2">
                            </picture>
                        </div>
                        <div class="image-container-eclectique">
                            <picture>
                                <source srcset="~/assets/img/ToteBag-Eclectique3_eclectique.webp" type="image/webp">
                                <source srcset="~/assets/img/ToteBag-Eclectique3_eclectique_opti.jpg" type="image/jpeg">
                                <img src="~/assets/img/ToteBag-Eclectique3_eclectique_opti.jpg" alt="Tote Bag Eclectique3">
                            </picture>
                        </div>
                    </div>
                    <div class="row-inf">
                        <div class="image-container-eclectique">
                            <picture>
                                <source srcset="~/assets/img/ToteBag-Eclectique_eclectique.webp" type="image/webp">
                                <source srcset="~/assets/img/ToteBag-Eclectique_eclectique_opti.jpg" type="image/jpeg">
                                <img src="~/assets/img/ToteBag-Eclectique_eclectique_opti.jpg" alt="Tote Bag Eclectique">
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
            <section class="eclectique-section3" data-scroll-section>
                <div data-scroll data-scroll-call="textEvent4" class="eclectique-paragraphe3-container">
                    <h2>Advertisement</h2>
                    <p class="ep1">Based on the mythical inspirations of the old advertisements of big American brands like New Balance, Apple or IBM, I created an ad to highlight Éclectique's identity and who it should be read by.</p>
                    <p class="ep2">The slogan "Read by hypebeasts in Paris and teachers in Illinois" insists on the bilingual side of the media and the different people it reaches. This slogan is based on a famous New Balance advertisement which claimed that their 990 shoe model was worn by models in London and fathers in Ohio.</p>
                </div>
                <div class="eclectique-image2-container">
                    <picture>
                        <source srcset="~/assets/img/Ads-NewBalance_eclectique.webp" type="image/webp">
                        <source srcset="~/assets/img/Ads-NewBalance_eclectique_opti.jpg" type="image/jpeg">
                        <img data-scroll data-scroll-call="ImageEvent2" class="ads-newbalance" src="~/assets/img/Ads-NewBalance_eclectique_opti.jpg" alt="Ads New Balance">
                    </picture>
                    <picture>
                        <source srcset="~/assets/img/Ads-Eclectique_eclectique.webp" type="image/webp">
                        <source srcset="~/assets/img/Ads-Eclectique_eclectique_opti.jpg" type="image/jpeg">
                        <img class="ads-eclectique" src="~/assets/img/Ads-Eclectique_eclectique_opti.jpg" alt="Ads Eclectique">
                    </picture>
                </div>
                <p data-scroll data-scroll-call="textEvent5" class="eclectique-paragraphe3-container2">For a fashion article, the article may be of great interest to Paris but interviews with artists and journalists are also read in Illinois. This is what Éclectique is all about. Gathering a  wide  range of different personalities on a same website with content for everyone.</p>
            </section>
            <section class="eclectique-section4" data-scroll-section>
                <div data-scroll data-scroll-call="textEvent6" class="eclectique-paragraphe4-container">
                    <h2>Business cards</h2>
                    <p>This is what I enjoy spending my time on. Creating various business cards with different designs. I created traditional business cards for Éclectique that I never actually printed, but they're there for you to see.</p>
                </div>
                <div class="eclectique-image3-container">
                    <picture>
                        <source srcset="~/assets/img/Visite-Card_eclectique.webp" type="image/webp">
                        <source srcset="~/assets/img/Visite-Card_eclectique_opti.jpg" type="image/jpeg">
                        <img data-scroll data-scroll-call="ImageEvent3" src="~/assets/img/Visite-Card_eclectique_opti.jpg" alt="Business Card">
                    </picture>
                </div>
                <div data-scroll data-scroll-call="textEvent7" class="eclectique-paragraphe5-container">
                    <p>But in a period where sustainability is more important than ever. I got a little creative and inspired by employee badges from big companies like NASA, IBM or Apple, and I created one of my own.</p>
                </div>
                <div class="eclectique-image4-container">
                    <picture>
                        <source srcset="~/assets/img/ID-Card-Holder_Eclectique.webp" type="image/webp">
                        <source srcset="~/assets/img/ID-Card-Holder_Eclectique_opti.jpg" type="image/jpeg">
                        <img data-scroll data-scroll-call="ImageEvent4" src="~/assets/img/ID-Card-Holder_Eclectique_opti.jpg" alt="ID Card Holder Eclectique">
                    </picture>
                </div>
            </section>
            <section class="eclectique-section5" data-scroll-section>
                <div data-scroll data-scroll-call="textEvent8" class="eclectique-paragraphe6-container">
                    <p class="paragraphe-eclectique-lines-split"><nuxt-link id="su-hover" to="/la-sueur">↳ Next Project La Sueur</nuxt-link></p>
                    <p class="paragraphe-eclectique-lines-split"><nuxt-link id="ab-hover" to="/about">↳ Return to About Page</nuxt-link></p>
                </div>
            </section>
        </div>
    </LocomotiveScroll>
    <div class="eclectique-background-color-fixed"></div>
    <div class="about-background-color-su"></div>
    <div class="about-background-color-ab"></div>
    <FooterMenu />
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
        MouseClose: 1
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
            gsap.to('.cursor-close-mobile', 0.5, { opacity:0, ease: 'Power1.easeOut' });
            gsap.to('.eclectique-background-color-fixed', 0.5, { opacity:0, ease: 'Power1.easeOut' });
            gsap.to('.global-eclectique-container', 0.5, { opacity:0, ease: 'Power1.easeOut', onComplete: done });
        },
        enter(el, done){
            //
        }
    },
    
    mounted: function(){
        this.CursorAnimation(),
        this.GridAnimation(),
        this.HeroEclectiqueAnimation(),
        this.EclectiqueAnimation(),
        this.HoverEndLink(),
        this.initScrolltrigger()

        const locomotive = this.$refs.scroller.locomotive
        locomotive.on('call', (obj) => {
            if (obj === 'textEvent1') {
                const text1 = document.querySelectorAll(".eclectique-paragraphe1-container .paragraphe-eclectique-lines-split")
                gsap.fromTo(text1, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.075,})
            }
            else if (obj === 'textEvent2') {
                const text2 = document.querySelectorAll(".eclectique-paragraphe1-container2 .paragraphe-eclectique-lines-split")
                gsap.fromTo(text2, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.075,})
            }
            else if (obj === 'textEvent3') {
                const text3 = document.querySelectorAll(".eclectique-paragraphe2-container .paragraphe-eclectique-lines-split")
                gsap.fromTo(text3, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.075,})
            }
            else if (obj === 'ImageEvent1') {
                const Image1 = document.querySelectorAll(".eclectique-image1-container img")
                gsap.fromTo(Image1, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.1})
            }
            else if (obj === 'textEvent4') {
                const text4 = document.querySelectorAll(".eclectique-paragraphe3-container .paragraphe-eclectique-lines-split")
                gsap.fromTo(text4, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.075})
            }
            else if (obj === 'ImageEvent2') {
                const Image21 = document.querySelector(".ads-newbalance")
                const Image22 = document.querySelector(".ads-eclectique")
                gsap.fromTo(Image21, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut'})
                gsap.fromTo(Image22, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', delay: 0.1})
            }
            else if (obj === 'textEvent5') {
                const text5 = document.querySelectorAll(".eclectique-paragraphe3-container2 .paragraphe-eclectique-lines-split")
                gsap.fromTo(text5, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.075,})
            }
            else if (obj === 'textEvent6') {
                const text6 = document.querySelectorAll(".eclectique-paragraphe4-container .paragraphe-eclectique-lines-split")
                gsap.fromTo(text6, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.075,})
            }
            else if (obj === 'ImageEvent3') {
                const Image3 = document.querySelector(".eclectique-image3-container img")
                gsap.fromTo(Image3, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut'})
            }
            else if (obj === 'textEvent7') {
                const text7 = document.querySelectorAll(".eclectique-paragraphe5-container .paragraphe-eclectique-lines-split")
                gsap.fromTo(text7, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.075,})
            }
            else if (obj === 'ImageEvent4') {
                const Image4 = document.querySelectorAll(".eclectique-image4-container img")
                gsap.fromTo(Image4, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.1})
            }
            else if (obj === 'textEvent8') {
                const text8 = document.querySelectorAll(".eclectique-paragraphe6-container .paragraphe-eclectique-lines-split")
                gsap.fromTo(text8, 2, { x: 50, opacity: 0},
                { x: 0, opacity: 1, delay: 0.5, ease: 'Power2.easeOut', stagger: 0.1,})
            }
            else {
                //
            }
        });
    },
  
    methods: {
        goBackAbout: function(){
            var is_responsive = true;
            var IDElement = document.querySelector('.project-slow-dow');
            var style = window.getComputedStyle(IDElement);
            var position = style.getPropertyValue('position');

            if ( position === "relative"){
            is_responsive = false
            }

            if ( is_responsive == true){
                const that = this
                if (that.MouseClose === 0) {
                    //
                }
                else {
                    return this.$router.push('/about');
                }
            }
            else {
                //
            }
        },
        initScrolltrigger() {
            const locomotive = this.$refs.scroller.locomotive
            locomotive.on('scroll', ScrollTrigger.update)
            ScrollTrigger.scrollerProxy(locomotive.el, {
                scrollTop(value) {
                return arguments.lenght
                    ? locomotive.scrollTo(value, 0, 0)
                    : locomotive.scroll.instance.scroll.x
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
            let mouseCursor = document.querySelector(".cursor-close");
            let contain = document.querySelectorAll('a');
            var mouseX=window.innerWidth/2, mouseY=window.innerHeight/2;
            var circle = {
                el:document.querySelector('.cursor-close'),
                x:window.innerWidth/2, 
                y:window.innerHeight/2, 
                w:80, 
                h:80,
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
                    this.MouseClose = 0
                });
                link.addEventListener('mouseleave', () => {
                    gsap.to(mouseCursor, 0.1, { opacity: 1});
                    this.MouseClose = 1
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
                { opacity: 0 });
                }
                else if (timesClicked===2) {
                gsap.fromTo('.grid-home div', 0.3,{ opacity: 0 },
                { opacity: 0 });
                }
                else if (timesClicked===3) {
                gsap.fromTo('.grid-home div', 0.3,{ opacity: 0 },
                { opacity: 0 });
                timesClicked = 0;
                }
                else if (timesClicked===7) {
                gsap.to('.grid-home div', 0.3, { opacity: 0 });
                timesClicked = 1;
                }
                else {
                //
                }
            };
        },
        HeroEclectiqueAnimation: function(){
            var heroEclectique = document.querySelector(".title-eclectique")
            var mySplitEclectique = new SplitText(heroEclectique);
            mySplitEclectique.split({type:"chars", charsClass: "hero-eclectique-chars-split"});
            gsap.fromTo('.title-eclectique', 0.001, { opacity: 0 },
            { opacity: 1, delay: 0.001 });

            if(document.body.contains(document.querySelector('.loader-degrade'))){
                gsap.fromTo('.hero-eclectique-chars-split', 1, { opacity: 0, y: -100, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.055 },
                { opacity: 1, y: 0, transform: "rotate3d(0,0,0,90deg)", delay: 3.75, ease: 'Power3.easeOut', stagger: 0.055 });
                gsap.fromTo('header', 1, { opacity: 0 },
                { opacity: 1, delay: 4.5, ease: 'Power1.easeInOut'});
                gsap.fromTo('.footer', 1, { opacity: 0 },
                { opacity: 1, delay: 4.5, ease: 'Power1.easeInOut'});
                gsap.fromTo('.cursor-close-mobile', 1, { opacity: 0 },
                { opacity: 1, delay: 4.5, ease: 'Power1.easeInOut'});
                gsap.fromTo('.cursor-close', 1, { opacity: 0 },
                { opacity: 1, delay: 4.5 });
            } 
            else{
                gsap.fromTo('.hero-eclectique-chars-split', 1, { opacity: 0, y: -100, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.055 },
                { opacity: 1, y: 0, transform: "rotate3d(0,0,0,90deg)", delay: 0.25, ease: 'Power3.easeOut', stagger: 0.055 });
                gsap.fromTo('header', 1, { opacity: 0, y: '-100%' },
                { opacity: 1, y: '0%', delay: 0.75, ease: 'Power1.easeInOut'});
                gsap.fromTo('.footer', 1, { opacity: 0 },
                { opacity: 1, delay: 0.75, ease: 'Power1.easeInOut'});
                gsap.fromTo('.cursor-close-mobile', 1, { opacity: 0 },
                { opacity: 1, delay: 1.75, ease: 'Power1.easeInOut'});
                gsap.fromTo('.cursor-close', 1, { opacity: 0 },
                { opacity: 1, delay: 0.75 });
            }
        },
        HoverEndLink: function(){
            const BgECHover = document.querySelector(".eclectique-background-color-fixed")
            const linkSU = document.getElementById("su-hover")
            const BgSUHover = document.querySelector(".about-background-color-su")

            const linkAB = document.getElementById("ab-hover")
            const BgABHover = document.querySelector(".about-background-color-ab")

            linkSU.addEventListener('mouseenter', function (){
                gsap.to(BgECHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });

                gsap.to(BgSUHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });
                linkSU.classList.add('onhover');
            })
            linkSU.addEventListener('mouseleave', function (){
                gsap.to(BgECHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });

                gsap.to(BgSUHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });
                linkSU.classList.remove('onhover');
            })

            linkAB.addEventListener('mouseenter', function (){
                gsap.to(BgECHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });

                gsap.to(BgABHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });
                linkAB.classList.add('onhover');
            })
            linkAB.addEventListener('mouseleave', function (){
                gsap.to(BgECHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });

                gsap.to(BgABHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });
                linkAB.classList.remove('onhover');
            })
        },
        EclectiqueAnimation: function(){
            var EclectiqueParagraphe1h2 = document.querySelector(".eclectique-paragraphe1-container h2")
            var mySplitEclectiqueParagraphe1h2 = new SplitText(EclectiqueParagraphe1h2);
            mySplitEclectiqueParagraphe1h2.split({type:"lines", linesClass: "paragraphe-eclectique-lines-split"});

            var EclectiqueParagraphe1p = document.querySelector(".eclectique-paragraphe1-container .ep1")
            var mySplitEclectiqueParagraphe1p = new SplitText(EclectiqueParagraphe1p);
            mySplitEclectiqueParagraphe1p.split({type:"lines", linesClass: "paragraphe-eclectique-lines-split"});

            var EclectiqueParagraphe1p1 = document.querySelector(".eclectique-paragraphe1-container .ep2")
            var mySplitEclectiqueParagraphe1p1 = new SplitText(EclectiqueParagraphe1p1);
            mySplitEclectiqueParagraphe1p1.split({type:"lines", linesClass: "paragraphe-eclectique-lines-split"});

            var EclectiqueParagraphe1p2 = document.querySelector(".eclectique-paragraphe1-container2 p")
            var mySplitEclectiqueParagraphe1p2 = new SplitText(EclectiqueParagraphe1p2);
            mySplitEclectiqueParagraphe1p2.split({type:"lines", linesClass: "paragraphe-eclectique-lines-split"});

            var EclectiqueParagraphe2h2 = document.querySelector(".eclectique-paragraphe2-container h2")
            var mySplitEclectiqueParagraphe2h2 = new SplitText(EclectiqueParagraphe2h2);
            mySplitEclectiqueParagraphe2h2.split({type:"lines", linesClass: "paragraphe-eclectique-lines-split"});

            var EclectiqueParagraphe2p1 = document.querySelector(".eclectique-paragraphe2-container p")
            var mySplitEclectiqueParagraphe2p1 = new SplitText(EclectiqueParagraphe2p1);
            mySplitEclectiqueParagraphe2p1.split({type:"lines", linesClass: "paragraphe-eclectique-lines-split"});

            var EclectiqueParagraphe3h2 = document.querySelector(".eclectique-paragraphe3-container h2")
            var mySplitEclectiqueParagraphe3h2 = new SplitText(EclectiqueParagraphe3h2);
            mySplitEclectiqueParagraphe3h2.split({type:"lines", linesClass: "paragraphe-eclectique-lines-split"});

            var EclectiqueParagraphe3p = document.querySelectorAll(".eclectique-paragraphe3-container p")
            var mySplitEclectiqueParagraphe3p = new SplitText(EclectiqueParagraphe3p);
            mySplitEclectiqueParagraphe3p.split({type:"lines", linesClass: "paragraphe-eclectique-lines-split"});

            var EclectiqueParagraphe3p2 = document.querySelector(".eclectique-paragraphe3-container2")
            var mySplitEclectiqueParagraphe3p2 = new SplitText(EclectiqueParagraphe3p2);
            mySplitEclectiqueParagraphe3p2.split({type:"lines", linesClass: "paragraphe-eclectique-lines-split"});

            var EclectiqueParagraphe4h2 = document.querySelector(".eclectique-paragraphe4-container h2")
            var mySplitEclectiqueParagraphe4h2 = new SplitText(EclectiqueParagraphe4h2);
            mySplitEclectiqueParagraphe4h2.split({type:"lines", linesClass: "paragraphe-eclectique-lines-split"});

            var EclectiqueParagraphe4p = document.querySelector(".eclectique-paragraphe4-container p")
            var mySplitEclectiqueParagraphe4p = new SplitText(EclectiqueParagraphe4p);
            mySplitEclectiqueParagraphe4p.split({type:"lines", linesClass: "paragraphe-eclectique-lines-split"});

            var EclectiqueParagraphe5p = document.querySelector(".eclectique-paragraphe5-container p")
            var mySplitEclectiqueParagraphe5p = new SplitText(EclectiqueParagraphe5p);
            mySplitEclectiqueParagraphe5p.split({type:"lines", linesClass: "paragraphe-eclectique-lines-split"});
        }
    }
}
</script>
  
<style lang="css" src="~/assets/css/main.css">

</style>