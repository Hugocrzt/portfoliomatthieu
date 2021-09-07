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
        <div @click="goBackAbout" class="global-lasueur-container">
            <section class="lasueur-container-hero" data-scroll-section>
                <h1 class="title-lasueur">
                    <span class="bold visible">La Sueur<span class="scroll-down project-slow-dow"><svg class="hero-lasueur-chars-split" xmlns="http://www.w3.org/2000/svg" width="11vw" height="7.9vw" viewBox="0 0 172.119 161"><path id="MF-ScrollRight" d="M0,57.837c.043,0,45.556.03,45.542.01.03-.281,13.247-13.177,12.8-12.945l-.26,85.131c.087-.091-57.8.174-57.8.174v41.911c.155-.265,101.941.195,102.37-.115l.26-127.1c.256.229,13.715,13.341,13.715,13.341S161,58.17,161,58.2c.077,0-58.27-58.187-58.091-58.2h-44.9" transform="translate(172.119) rotate(90)" fill="var(--color-primary)"/></svg></span><span class="scroll-down project-slow-dow-mobile"><svg class="hero-lasueur-chars-split" xmlns="http://www.w3.org/2000/svg" width="7vw" height="6.5vw" viewBox="0 0 150.598 161.002"><path id="MF-ScrollDown" d="M54.15,138.509c.04,0,42.613-.028,42.6-.009.028.263,12.391,12.326,11.972,12.109l-.243-79.632c.081.085-54.068-.163-54.068-.163V31.61c.145.248,95.356-.182,95.757.108l.243,118.892c.239-.214,12.829-12.479,12.829-12.479s41.507.067,41.509.034c.072,0-54.506,54.428-54.338,54.445-.062,0-42,0-42,0" transform="translate(-54.15 -31.61)" fill="var(--color-primary)"/></svg></span></span>
                </h1>
            </section>
            <section class="lasueur-section1" data-scroll-section>
                <div data-scroll data-scroll-call="textEvent1" class="lasueur-paragraphe1-container">
                    <h2>My time at La Sueur</h2>
                    <p>In 2017, I joined the online media outlet La Sueur to contribute regularly on American sports. You can find the most important articles on the page dedicated to what I've been able to write about in my life.</p>
                </div>
                <div data-scroll data-scroll-call="ImageEvent1" class="lasueur-image1-container lasueur-image-animation">
                    <picture>
                        <source srcset="~/assets/img/Match-nba_LaSueur.webp" type="image/webp">
                        <source srcset="~/assets/img/Match-nba_LaSueur_opti.jpg" type="image/jpeg">
                        <img data-scroll data-scroll-call="ImageEvent4" src="~/assets/img/Match-nba_LaSueur_opti.jpg" alt="Match NBA La Sueur">
                    </picture>
                    <p>View from the Press Box, at Barclays Center (my picture)</p>
                </div>
                <div data-scroll data-scroll-call="textEvent2" class="lasueur-paragraphe2-container">
                    <p class="part1">La Sueur also offered me the opportunity to do some cool stuff. While I was a student in Canada, I went to New York and took the opportunity to be accredited by the NBA to cover for the media several games of the league, with access to the court, the players, the press room (and its buffet!!) and the players' locker rooms.</p>
                    <p class="part2">This experience allowed me to build an American network of journalists and communicators who pushed me to produce ever more qualitative content. At the same time, I realized a childhood dream.</p>
                </div>
                <div data-scroll data-scroll-call="ImageEvent2" class="lasueur-image2-container lasueur-image-animation">
                    <picture>
                        <source srcset="~/assets/img/Carte-media_LaSueur.webp" type="image/webp">
                        <source srcset="~/assets/img/Carte-media_LaSueur_opti.jpg" type="image/jpeg">
                        <img data-scroll data-scroll-call="ImageEvent4" src="~/assets/img/Carte-media_LaSueur_opti.jpg" alt="Media Card La Sueur">
                    </picture>
                </div>
            </section>
            <section class="lasueur-section2" data-scroll-section>
                <div data-scroll data-scroll-call="textEvent3" class="lasueur-paragraphe1-container2">
                    <h2>Created a podcast before everyone else did</h2>
                    <p>That same year, I co-created the "Podcast La Sueur", in which I talked (as well as wrote) about the news issues surrounding American sports. We also had a regular show about the NBA during this time.</p>
                </div>
                <div class="lasueur-image-texte1-container2">
                    <div data-scroll data-scroll-call="otherEvent" class="lasueur-spotify-emboed-wrapper">
                        <iframe title="Colin Kaepernick x Nike - le paria est devenu un symbole" src="https://open.spotify.com/embed-podcast/episode/5i2Yat01HoAdybLvOKW0IW" width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                    <div class="lasueur-image-texte-wrapper">
                        <div data-scroll data-scroll-call="ImageEvent3" class="image-podcast-container lasueur-image-animation">
                            <picture>
                                <source srcset="~/assets/img/Podcast_LaSueur.webp" type="image/webp">
                                <source srcset="~/assets/img/Podcast_LaSueur_opti.jpg" type="image/jpeg">
                                <img data-scroll data-scroll-call="ImageEvent4" src="~/assets/img/Podcast_LaSueur_opti.jpg" alt="Podcast La Sueur">
                            </picture>
                        </div>
                        <p data-scroll data-scroll-call="textEvent4" class="lasueur-paragraphe2-container2">I created the visual identity of the podcast using the already existing identity of the media. The logo cover is still used today for the podcast which is among the top 10 most listened sports podcast.</p>
                    </div>
                </div>
            </section>
            <section class="lasueur-section3" data-scroll-section>
                <div data-scroll data-scroll-call="textEvent5" class="lasueur-paragraphe1-container3">
                    <h2>Other visuals for social media</h2>
                    <p>To animate and grow the social networks, I used Photoshop (way too much) to create visuals around American sports news, and make those news look better than a simple news article. This was pretty convenient for me to train a lot on the Adobe Suite and watch bunch of tutorials to get creative.</p>
                </div>
                <div class="lasueur-image-container3">
                    <div data-scroll data-scroll-call="ImageEvent4" class="lasueur-image-wrapper1 lasueur-image-animation">
                        <div>
                            <picture>
                                <source srcset="~/assets/img/CR7-stat_LaSueur.webp" type="image/webp">
                                <source srcset="~/assets/img/CR7-stat_LaSueur_opti.jpg" type="image/jpeg">
                                <img data-scroll data-scroll-call="ImageEvent4" src="~/assets/img/CR7-stat_LaSueur_opti.jpg" alt="CR7 Stat La Sueur">
                            </picture>
                        </div>
                        <div>
                            <picture>
                                <source srcset="~/assets/img/he's-back_LaSueur.webp" type="image/webp">
                                <source srcset="~/assets/img/he's-back_LaSueur_opti.jpg" type="image/jpeg">
                                <img data-scroll data-scroll-call="ImageEvent4" src="~/assets/img/he's-back_LaSueur_opti.jpg" alt="he's back La Sueur">
                            </picture>
                        </div>
                        <div>
                            <picture>
                                <source srcset="~/assets/img/jokic-triple-double_LaSueur.webp" type="image/webp">
                                <source srcset="~/assets/img/jokic-triple-double_LaSueur_opti.jpg" type="image/jpeg">
                                <img data-scroll data-scroll-call="ImageEvent4" src="~/assets/img/jokic-triple-double_LaSueur_opti.jpg" alt="Jokic Triple Double La Sueur">
                            </picture>
                        </div>
                    </div>
                    <div data-scroll data-scroll-call="ImageEvent5" class="lasueur-image-wrapper2 lasueur-image-animation">
                        <div>
                            <picture>
                                <source srcset="~/assets/img/chloe-kim-gold_LaSueur.webp" type="image/webp">
                                <source srcset="~/assets/img/chloe-kim-gold_LaSueur_opti.jpg" type="image/jpeg">
                                <img data-scroll data-scroll-call="ImageEvent4" src="~/assets/img/chloe-kim-gold_LaSueur_opti.jpg" alt="Chloe Kim Gold La Sueur">
                            </picture>
                        </div>
                        <div>
                            <picture>
                                <source srcset="~/assets/img/More-Ls_LaSueur.webp" type="image/webp">
                                <source srcset="~/assets/img/More-Ls_LaSueur_opti.jpg" type="image/jpeg">
                                <img data-scroll data-scroll-call="ImageEvent4" src="~/assets/img/More-Ls_LaSueur_opti.jpg" alt="More Ls La Sueur">
                            </picture>
                        </div>
                        <div>
                            <picture>
                                <source srcset="~/assets/img/kawhi-is-back-final_LaSueur.webp" type="image/webp">
                                <source srcset="~/assets/img/kawhi-is-back-final_LaSueur_opti.jpg" type="image/jpeg">
                                <img data-scroll data-scroll-call="ImageEvent4" src="~/assets/img/kawhi-is-back-final_LaSueur_opti.jpg" alt="kawhi is back La Sueur">
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
            <section class="lasueur-section4" data-scroll-section>
                <div data-scroll data-scroll-call="textEvent6" class="lasueur-paragraphe1-container4">
                    <p class="paragraphe-lasueur-lines-split"><nuxt-link id="ec-hover" to="/eclectique">↳ Next Project Eclectique</nuxt-link></p>
                    <p class="paragraphe-lasueur-lines-split"><nuxt-link id="ab-hover" to="/about">↳ Return to About Page</nuxt-link></p>
                </div>
            </section>
        </div>
    </LocomotiveScroll>
    <div class="lasueur-background-color-fixed"></div>
    <div class="about-background-color-ec"></div>
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
            gsap.to('.lasueur-background-color-fixed', 0.5, { opacity:0, ease: 'Power1.easeOut' });
            gsap.to('.global-lasueur-container', 0.5, { opacity:0, ease: 'Power1.easeOut', onComplete: done });
        },
        enter(el, done){
            //
        }
    },
    
    mounted: function(){
        this.CursorAnimation(),
        this.GridAnimation(),
        this.HeroLaSueurAnimation(),
        this.LaSueurAnimation(),
        this.HoverEndLink(),
        this.initScrolltrigger()

        const locomotive = this.$refs.scroller.locomotive
        locomotive.on('call', (obj) => {
            if (obj === 'textEvent1') {
                const text1 = document.querySelectorAll(".lasueur-paragraphe1-container .paragraphe-lasueur-lines-split")
                gsap.fromTo(text1, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.075,})
            }
            else if (obj === 'ImageEvent1') {
                const Image1 = document.querySelector(".lasueur-image1-container img")
                gsap.fromTo(Image1, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut'})
                const TextImage1 = document.querySelector(".lasueur-image1-container p")
                gsap.fromTo(TextImage1, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, delay: 0.2, ease: 'Power2.easeOut'})
            }
            else if (obj === 'textEvent2') {
                const text2 = document.querySelectorAll(".lasueur-paragraphe2-container .paragraphe-lasueur-lines-split")
                gsap.fromTo(text2, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.075,})
            }
            else if (obj === 'ImageEvent2') {
                const Image2 = document.querySelector(".lasueur-image2-container img")
                gsap.fromTo(Image2, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut'})
            }
            else if (obj === 'textEvent3') {
                const text3 = document.querySelectorAll(".lasueur-paragraphe1-container2 .paragraphe-lasueur-lines-split")
                gsap.fromTo(text3, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.075,})
            }
            else if (obj === 'ImageEvent3') {
                const Image3 = document.querySelector(".image-podcast-container img")
                gsap.fromTo(Image3, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut'})
            }
            else if (obj === 'otherEvent') {
                const Other = document.querySelector(".lasueur-spotify-emboed-wrapper iframe")
                gsap.fromTo(Other, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut'})
            }
            else if (obj === 'textEvent4') {
                const text4 = document.querySelectorAll(".lasueur-paragraphe2-container2 .paragraphe-lasueur-lines-split")
                gsap.fromTo(text4, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.075,})
            }
            else if (obj === 'ImageEvent4') {
                const Image4 = document.querySelectorAll(".lasueur-image-wrapper1 img")
                gsap.fromTo(Image4, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.1})
            }
            else if (obj === 'textEvent5') {
                const text5 = document.querySelectorAll(".lasueur-paragraphe1-container3 .paragraphe-lasueur-lines-split")
                gsap.fromTo(text5, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.075,})
            }
            else if (obj === 'ImageEvent5') {
                const Image5 = document.querySelectorAll(".lasueur-image-wrapper2 img")
                gsap.fromTo(Image5, 1, { x:75, opacity: 0},
                { x: 0, opacity: 1, ease: 'Power2.easeOut', stagger: 0.1})
            }
            else if (obj === 'textEvent6') {
                console.log('test6')
                const text6 = document.querySelectorAll(".lasueur-paragraphe1-container4 .paragraphe-lasueur-lines-split")
                gsap.fromTo(text6, 2, { x: 50, opacity: 0},
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
            const cursornone = document.querySelector("cursor");
            gsap.to(cursornone, 0.001, {opacity: 0});
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
        HeroLaSueurAnimation: function(){
            var heroLaSueur = document.querySelector(".title-lasueur")
            var mySplitLaSueur = new SplitText(heroLaSueur);
            mySplitLaSueur.split({type:"chars", charsClass: "hero-lasueur-chars-split"});
            gsap.fromTo('.title-lasueur', 0.001, { opacity: 0 },
            { opacity: 1, delay: 0.001 });

            if(document.body.contains(document.querySelector('.loader-degrade'))){
                gsap.fromTo('.hero-lasueur-chars-split', 1, { opacity: 0, y: -100, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.085 },
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
                gsap.fromTo('.hero-lasueur-chars-split', 1, { opacity: 0, y: -100, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.07 },
                { opacity: 1, y: 0, transform: "rotate3d(0,0,0,90deg)", delay: 0.25, ease: 'Power3.easeOut', stagger: 0.07 });
                gsap.fromTo('header', 1, { opacity: 0, y: '-100%' },
                { opacity: 1, y: '0%', delay: 0.75, ease: 'Power1.easeInOut'});
                gsap.fromTo('.footer', 1, { opacity: 0 },
                { opacity: 1, delay: 0.75, ease: 'Power1.easeInOut'});
                gsap.fromTo('.cursor-close-mobile', 1, { opacity: 0 },
                { opacity: 1, delay: 0.75, ease: 'Power1.easeInOut'});
                gsap.fromTo('.cursor-close', 1, { opacity: 0 },
                { opacity: 1, delay: 0.75 });
            }
        },
        HoverEndLink: function(){
            const BgSUHover = document.querySelector(".lasueur-background-color-fixed")

            const linkEC = document.getElementById("ec-hover")
            const BgECHover = document.querySelector(".about-background-color-ec")

            const linkAB = document.getElementById("ab-hover")
            const BgABHover = document.querySelector(".about-background-color-ab")

            linkEC.addEventListener('mouseenter', function (){
                gsap.to(BgSUHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });

                gsap.to(BgECHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });
                linkEC.classList.add('onhover');
            })
            linkEC.addEventListener('mouseleave', function (){
                gsap.to(BgSUHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });

                gsap.to(BgECHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });
                linkEC.classList.remove('onhover');
            })

            linkAB.addEventListener('mouseenter', function (){
                gsap.to(BgSUHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });

                gsap.to(BgABHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });
                linkAB.classList.add('onhover');
            })
            linkAB.addEventListener('mouseleave', function (){
                gsap.to(BgSUHover, 0.5,{ opacity: 1, ease: 'Power3.easeOut' });

                gsap.to(BgABHover, 0.5,{ opacity: 0, ease: 'Power3.easeOut' });
                linkAB.classList.remove('onhover');
            })
        },
        LaSueurAnimation: function(){
            var LaSueurParagraphe1h2 = document.querySelector(".lasueur-paragraphe1-container h2")
            var mySplitLaSueurParagraphe1h2 = new SplitText(LaSueurParagraphe1h2);
            mySplitLaSueurParagraphe1h2.split({type:"lines", linesClass: "paragraphe-lasueur-lines-split"});

            var LaSueurParagraphe1p = document.querySelector(".lasueur-paragraphe1-container p")
            var mySplitLaSueurParagraphe1p = new SplitText(LaSueurParagraphe1p);
            mySplitLaSueurParagraphe1p.split({type:"lines", linesClass: "paragraphe-lasueur-lines-split"});

            var LaSueurParagraphe2p1 = document.querySelector(".lasueur-paragraphe2-container .part1")
            var mySplitLaSueurParagraphe2p1 = new SplitText(LaSueurParagraphe2p1);
            mySplitLaSueurParagraphe2p1.split({type:"lines", linesClass: "paragraphe-lasueur-lines-split"});

            var LaSueurParagraphe2p2 = document.querySelector(".lasueur-paragraphe2-container .part2")
            var mySplitLaSueurParagraphe2p2 = new SplitText(LaSueurParagraphe2p2);
            mySplitLaSueurParagraphe2p2.split({type:"lines", linesClass: "paragraphe-lasueur-lines-split"});

            var LaSueurParagraphe3h2 = document.querySelector(".lasueur-paragraphe1-container2 h2")
            var mySplitLaSueurParagraphe3h2 = new SplitText(LaSueurParagraphe3h2);
            mySplitLaSueurParagraphe3h2.split({type:"lines", linesClass: "paragraphe-lasueur-lines-split"});

            var LaSueurParagraphe3p = document.querySelector(".lasueur-paragraphe1-container2 p")
            var mySplitLaSueurParagraphe3p = new SplitText(LaSueurParagraphe3p);
            mySplitLaSueurParagraphe3p.split({type:"lines", linesClass: "paragraphe-lasueur-lines-split"});

            var LaSueurParagraphe4 = document.querySelector(".lasueur-paragraphe2-container2")
            var mySplitLaSueurParagraphe4 = new SplitText(LaSueurParagraphe4);
            mySplitLaSueurParagraphe4.split({type:"lines", linesClass: "paragraphe-lasueur-lines-split"});

            var LaSueurParagraphe5h2 = document.querySelector(".lasueur-paragraphe1-container3 h2")
            var mySplitLaSueurParagraphe5h2 = new SplitText(LaSueurParagraphe5h2);
            mySplitLaSueurParagraphe5h2.split({type:"lines", linesClass: "paragraphe-lasueur-lines-split"});

            var LaSueurParagraphe5p = document.querySelector(".lasueur-paragraphe1-container3 p")
            var mySplitLaSueurParagraphe5p = new SplitText(LaSueurParagraphe5p);
            mySplitLaSueurParagraphe5p.split({type:"lines", linesClass: "paragraphe-lasueur-lines-split"});
        }
    }
}
</script>
  
<style lang="css" src="~/assets/css/main.css">

</style>