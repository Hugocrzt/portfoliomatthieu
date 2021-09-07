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
    <div class="global-articles-container">
        <section class="articles-container-hero" data-scroll-section>
            <h1 class="title-articles">
                <span class="bold visible">Articles<span class="scroll-down"><svg class="hero-articles-chars-split" xmlns="http://www.w3.org/2000/svg" width="10.5vw" height="10.5vw" viewBox="0 0 150.598 161.002"><path id="MF-ScrollDown" d="M54.15,138.509c.04,0,42.613-.028,42.6-.009.028.263,12.391,12.326,11.972,12.109l-.243-79.632c.081.085-54.068-.163-54.068-.163V31.61c.145.248,95.356-.182,95.757.108l.243,118.892c.239-.214,12.829-12.479,12.829-12.479s41.507.067,41.509.034c.072,0-54.506,54.428-54.338,54.445-.062,0-42,0-42,0" transform="translate(-54.15 -31.61)" fill="var(--color-primary)"/></svg></span></span><br>
            </h1>
        </section>
        <section class="articles-list-section" data-scroll-section>
            <div class="filter-container" data-scroll>
                <p>Category: <span class="choice-category">{{ selected }} +</span></p>
                <div class="selected-container">
                    <input type="radio" id="All" value="All" v-model="selected"><label class="all" for="All">All</label>
                    <input type="radio" id="Éclectique" value="Éclectique" v-model="selected"><label for="Éclectique">Éclectique</label>
                    <input type="radio" id="La Sueur" value="La Sueur" v-model="selected"><label for="La Sueur">La Sueur</label>
                    <input type="radio" id="CTRLZ" value="CTRLZ" v-model="selected"><label for="CTRLZ">CTRLZ</label>
                    <input type="radio" id="QIBasket" value="QIBasket" v-model="selected"><label for="QIBasket">QIBasket</label>
                </div>
            </div>
            <ul class="list-articles">
                <li v-for="articleitem in filterArticles" :key="articleitem.title">
                    <a :href="articleitem.lien" target="_blank" rel="noreferrer noopener" class="articles-line" :class="articleitem.category">
                        <p class="article-title">{{ articleitem.title }}</p>
                        <p class="article-media">{{ articleitem.media }}</p>
                        <p class="article-date">{{ articleitem.date }}</p>
                    </a>
                </li>
            </ul>
        </section>
    </div>
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
        articleitems: [
            {
                title: 'A crypto-art of “Nyan Cat” sold for the equivalent of almost 400,000 euros',
                media: 'CTRLZ',
                date: '2021',
                lien: 'https://ctrlzmag.com/a-crypto-art-of-nyan-cat-sold-for-the-equivalent-of-almost-400000-euros/',
                category: 'All CTRLZ'
            },
            {
                title: '#CHLOVESTX : comment Clubhouse s’est transformé en téléthon virtuel',
                media: 'CTRLZ',
                date: '2021',
                lien: 'https://ctrlzmag.com/chlovestx-comment-clubhouse-sest-transforme-en-telethon-virtuel/',
                category: 'All CTRLZ'
            },
            {
                title: 'WindowSwap, fenêtres sur le Monde',
                media: 'Éclectique',
                date: '2020',
                lien: 'https://eclectiquemagazine.com/windowswap-fenetres-sur-le-monde/',
                category: 'All Éclectique'
            },
            {
                title: 'Karlexander, sensualité en pièces',
                media: 'Éclectique',
                date: '2020',
                lien: 'https://eclectiquemagazine.com/karlexander-sensualite-en-pieces/',
                category: 'All Éclectique'
            },
            {
                title: 'Rouguy Diallo, un saut hors du sable',
                media: 'Éclectique',
                date: '2020',
                lien: 'https://eclectiquemagazine.com/rouguy-diallo-un-saut-hors-du-sable/',
                category: 'All Éclectique'
            },
            {
                title: 'Miranda Barnes, photographe des identités',
                media: 'Éclectique',
                date: '2020',
                lien: 'https://eclectiquemagazine.com/miranda-barnes-photographe-des-identites/',
                category: 'All Éclectique'
            },
            {
                title: 'Malia Griggs, résiliation et résilience',
                media: 'Éclectique',
                date: '2020',
                lien: 'https://eclectiquemagazine.com/malia-griggs-resiliation-et-resilience/',
                category: 'All Éclectique'
            },
            {
                title: 'Delia Cai, esprit créatif à l’affût des tendances numériques',
                media: 'Éclectique',
                date: '2019',
                lien: 'https://eclectiquemagazine.com/delia-cai-interview-french/',
                category: 'All Éclectique'
            },
            {
                title: 'Damian Lillard, la gloire à la bonne heure',
                media: 'QIBasket',
                date: '2019',
                lien: 'https://www.qibasket.net/2019/04/25/damian-lillard-la-gloire-a-la-bonne-heure/',
                category: 'All QIBasket'
            },
            {
                title: 'Chronologie de l’irrésistible ascension de Luka Dončić',
                media: 'La Sueur',
                date: '2019',
                lien: 'https://lasueur.com/luka-doncic-14-1-2019',
                category: 'All La Sueur'
            },
            {
                title: 'Katarina Johnson-Thompson, une championne du monde à Montpellier',
                media: 'La Sueur',
                date: '2019',
                lien: 'https://lasueur.com/katarina-johnson-thompson-26-12-2018',
                category: 'All La Sueur'
            },
            {
                title: 'Puma, la 31ème franchise',
                media: 'La Sueur',
                date: '2018',
                lien: 'https://lasueur.com/puma-14-7-2018',
                category: 'All La Sueur'
            },
            {
                title: 'Grayson Allen, héros et anti-héros du basket américain',
                media: 'La Sueur',
                date: '2018',
                lien: 'https://lasueur.com/grayson-allen-25-6-2018',
                category: 'All La Sueur'
            },
            {
                title: 'Comment les short shorts ont fait leur retour dans le sport américain',
                media: 'La Sueur',
                date: '2018',
                lien: 'https://lasueur.com/short-shorts-7-2-2018',
                category: 'All La Sueur'
            },
            {
                title: "Eric Reid, l'autre héros silencieux",
                media: 'La Sueur',
                date: '2018',
                lien: 'https://lasueur.com/eric-reid-30-12-2017',
                category: 'All La Sueur'
            }
        ],
        selected: 'All'
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
            gsap.to('.global-articles-container', 0.5, { opacity:0, ease: 'Power1.easeOut', onComplete: done });
        },
        enter(el, done){
            //
        }
    },

    mounted: function(){
        const ItemsListeCategory = document.querySelectorAll(".selected-container label")
        const truc = this
        ItemsListeCategory.forEach(function (Item){
            Item.addEventListener('click', function(){
                truc.$nuxt.$emit('update-locomotive', () => {
                    truc.locomotive.update()
                })
                setTimeout(function (){second()}, 100);
            })
            function second(){
                truc.$nuxt.$emit('update-locomotive', () => {
                    truc.locomotive.update()
                })
            }
        })
        this.CursorAnimation(),
        this.GridAnimation(),
        this.HeroArticlesAnimation(),
        this.AnimationFilter(),
        this.AnimationListe(),
        this.initScrolltrigger()
        const elements = document.querySelectorAll('.list-articles li')
        elements.forEach((element) => this.elementAnimation(element))
    },
  
    methods: {
        initScrolltrigger() {
            console.log('test')
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
            let filterContainer = document.querySelector('.selected-container');
            let filter = document.querySelectorAll('.selected-container label');
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
            filterContainer.addEventListener('mouseenter', () => {
                    gsap.to(mouseCursor, 0.3, { opacity: 0, delay: 0, ease: 'Power3.easeOut' });
            });
            filterContainer.addEventListener('mouseleave', () => {
                gsap.to(mouseCursor, 0.1, { opacity: 1, delay: 0 });
            });
            filter.forEach(category => {
                category.addEventListener('mouseenter', () => {
                    gsap.to(mouseCursor, 0.3, { opacity: 0, delay: 0, ease: 'Power3.easeOut' });
                });
                category.addEventListener('mouseleave', () => {
                    gsap.to(mouseCursor, 0.1, { opacity: 1, delay: 0 });
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
            let filterLink = document.querySelectorAll('.selected-container label');
            filterLink.forEach(label => {
                label.addEventListener('click', event => {
                timesClicked = 4;
                })
            })
            let filterContainer = document.querySelector('.selected-container');
            filterContainer.addEventListener('click', event => {
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
        HeroArticlesAnimation: function(){
            var heroTitle = document.querySelector(".title-articles")
            var mySplitText = new SplitText(heroTitle);
            mySplitText.split({type:"chars", charsClass: "hero-articles-chars-split"});
            gsap.fromTo('.title-articles', 0.001, { opacity: 0 },
            { opacity: 1, delay: 0.001 });

            if(document.body.contains(document.querySelector('.loader-degrade'))){
                gsap.fromTo('.hero-articles-chars-split', 1.5, { opacity: 0, y: -100, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.065 },
                { opacity: 1, y: 0, transform: "rotate3d(0,0,0,90deg)", delay: 3.75, ease: 'Power3.easeOut', stagger: 0.065 });
                gsap.fromTo('header', 1, { opacity: 0 },
                { opacity: 1, delay: 4.25, ease: 'Power1.easeInOut'});
                gsap.fromTo('.footer', 1, { opacity: 0 },
                { opacity: 1, delay: 4.25, ease: 'Power1.easeInOut'});
                gsap.fromTo('.cursor', 1, { opacity: 0 },
                { opacity: 1, delay: 4.25 });
            }
            else{
                gsap.fromTo('.hero-articles-chars-split', 1.5, { opacity: 0, y: -100, transform: "rotate3d(1,0,-0.15,90deg)", stagger: 0.065 },
                { opacity: 1, y: 0, transform: "rotate3d(0,0,0,90deg)", delay: 0.25, ease: 'Power3.easeOut', stagger: 0.065 });
                gsap.fromTo('header', 1, { opacity: 0 },
                { opacity: 1, delay: 1, ease: 'Power1.easeInOut'});
                gsap.fromTo('.footer', 1, { opacity: 0 },
                { opacity: 1, delay: 1, ease: 'Power1.easeInOut'});
                gsap.fromTo('.cursor', 1, { opacity: 0 },
                { opacity: 1, delay: 1 });
            }
        },
        elementAnimation(element){
            gsap.fromTo(element, 1, { y:75, opacity: 0},
            { y: 0, opacity: 1, ease: 'Power3.easeOut',
                scrollTrigger: {
                trigger: element,
                scroller: this.$refs.scroller.locomotive.el,
                start: 'top 100%',
                }
            })
            const FilterParagraphe = document.querySelector('.filter-container')
            var tl = gsap.fromTo(FilterParagraphe, 1, {y: 75, opacity: 0},
            { y: 0, opacity: 1, ease: 'Power3.easeOut',
                scrollTrigger: {
                    trigger: FilterParagraphe,
                    scroller: this.$refs.scroller.locomotive.el, 
                    start: 'top 100%'
                }
            })
        },
        AnimationFilter: function(){
            const ArticlesParagrapheLines = document.querySelectorAll('.list-articles li')
            gsap.utils.toArray(ArticlesParagrapheLines).forEach(ArticlesParagrapheLines => {
                gsap.set(ArticlesParagrapheLines, { y: 75, opacity: 0,})
                gsap.to(ArticlesParagrapheLines, 1, { y: 0, opacity: 1, ease: 'Power3.easeOut',
                    scrollTrigger: {
                        trigger: ArticlesParagrapheLines,
                        start: 'top 100%'
                    }
                });
            })
            
            const ListeCategory = document.querySelector(".selected-container")
            const ItemsListeCategory = document.querySelectorAll(".selected-container label")

            ListeCategory.addEventListener('click', function (){
                ListeCategory.classList.toggle("active-filter")
            })

            ItemsListeCategory.forEach(function (Item){
                Item.addEventListener('click', function(){
                    ListeCategory.classList.toggle("active-filter")
                    gsap.to(ArticlesParagrapheLines, 1, { y: 0, opacity: 1, ease: 'Power3.easeOut', onComplete: killOtherAnimation})
                    function killOtherAnimation(){
                        gsap.killTweensOf(ArticlesParagrapheLines);
                        const LinesArticles = document.querySelectorAll(".articles-line")

                        LinesArticles.forEach(LineArticle => {
                            LineArticle.addEventListener('mouseenter', () => {
                                gsap.to(LinesArticles, 0.1, { opacity: 0.3, delay: 0 });
                            });
                            LineArticle.addEventListener('mouseleave', () => {
                                gsap.to(LinesArticles, 0.1, { opacity: 1, delay: 0 });
                            });
                        });
                    }
                })
            })
        },
        AnimationListe: function(){
            const LinesArticles = document.querySelectorAll(".articles-line")

            LinesArticles.forEach(LineArticle => {
                LineArticle.addEventListener('mouseenter', () => {
                    gsap.to(LinesArticles, 0.1, { opacity: 0.3, delay: 0 });
                });
                LineArticle.addEventListener('mouseleave', () => {
                    gsap.to(LinesArticles, 0.1, { opacity: 1, delay: 0 });
                });
            });
        }
    },

    computed: {
        filterArticles: function(){
            return this.articleitems.filter((articleitem) => {
                return articleitem.category.match(this.selected);
            })
        }
    }
}
</script>
  
<style lang="css" src="~/assets/css/main.css">

</style>