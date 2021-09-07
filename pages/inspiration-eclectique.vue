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
    <div class="global-ie-container">
        <section class="ie-container-hero" data-scroll-section>
            <h1 class="title-ie">
                <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 990.64 324.3"><defs><style>.cls-1{fill:none;stroke:var(--color-primary);stroke-width:1.44px;}.cls-2{fill:var(--color-primary);}.cls-3{fill:var(--bg-color);}</style></defs><title>LogoIE</title><polygon class="cls-1" points="0.72 0.72 0.72 323.58 989.92 323.58 989.92 0.72 0.72 0.72 0.72 0.72"/><polygon class="cls-2" points="498.75 0.72 498.65 323.11 989.82 323.11 989.92 0.72 498.75 0.72 498.75 0.72"/><path class="cls-2" d="M221.7,78.15h57.43V270.5H221.7Z" transform="translate(-4.08 -2.91)"/><path class="cls-3" d="M747.87,87.33v80h58.52v9.89H747.87V259.9h66.77v9.89H690.44V77.44h124.2v9.89Zm6-18.13h-3.3l.28-51.38h60.45v4.67Z" transform="translate(-4.08 -2.91)"/></svg>
            </h1>
        </section>
        <section class="ie-list-section" data-scroll-section>
            <div class="filter-ie-container">
                <p>Category: <span class="choice-category">{{ categoryliste }} +</span></p>
                <div class="categoryliste-container">
                    <input type="radio" id="All" value="All" v-model="categoryliste"><label class="all" for="All">All</label>
                    <input type="radio" id="Architecture" value="Architecture" v-model="categoryliste"><label for="Architecture">Architecture</label>
                    <input type="radio" id="Art" value="Art" v-model="categoryliste"><label for="Art">Art</label>
                    <input type="radio" id="Cinema" value="Cinema" v-model="categoryliste"><label for="Cinema">Cinema</label>
                    <input type="radio" id="Design" value="Design" v-model="categoryliste"><label for="Design">Design</label>
                    <input type="radio" id="Fashion" value="Fashion" v-model="categoryliste"><label for="Fashion">Fashion</label>
                    <input type="radio" id="Food" value="Food" v-model="categoryliste"><label for="Food">Food</label>
                    <input type="radio" id="History" value="History" v-model="categoryliste"><label for="History">History</label>
                    <input type="radio" id="Music" value="Music" v-model="categoryliste"><label for="Music">Music</label>
                    <input type="radio" id="Photography" value="Photography" v-model="categoryliste"><label for="Photography">Photography</label>
                    <input type="radio" id="Sport" value="Sport" v-model="categoryliste"><label for="Sport">Sport</label>
                </div>
            </div>
            <div class="list-ie">
                <div v-for="IEitem in filterIE" :key="IEitem.number">
                    <a :href="IEitem.lien" target="_blank" rel="noreferrer noopener" class="ie-line" :class="IEitem.category">
                        <p class="ie-number">{{ IEitem.number }}</p>
                        <p class="ie-title">{{ IEitem.title }}</p>
                        <p class="ie-category">{{ IEitem.categoryvisible }}</p>
                        <picture class="ie-image">
                            <source :srcset="IEitem.image.srcwebp" type="image/webp">
                            <source :srcset="IEitem.image.srcjpg" type="image/jpeg">
                            <img :src="IEitem.image.srcjpg" :alt="IEitem.image.alt">
                        </picture>
                    </a>
                </div>
            </div>
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
        IEitems: [
            {
                number: 'IE00001',
                title: 'La Tour LUMA',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00001.webp'),
                    srcjpg: require ('~/assets/img/IE00001_opti.jpg'),
                    alt: "IE00001",               
                },
                lien: 'https://www.instagram.com/p/B9e3PWWpNyW/?igshid=1n1kqkksdkan'
            },
            {
                number: 'IE00002',
                title: 'Capital Hill Residence',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00002.webp'),
                    srcjpg: require ('~/assets/img/IE00002_opti.jpg'),
                    alt: "IE00002",               
                },
                lien: 'https://www.instagram.com/p/B9jKqAZKQ3a/?igshid=1i80d82s9113t'
            },
            {
                number: 'IE00003',
                title: 'The Broad',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00003.webp'),
                    srcjpg: require ('~/assets/img/IE00003_opti.jpg'),
                    alt: "IE00003",               
                },
                lien: 'https://www.instagram.com/p/B96Ut_5KWK0/?igshid=1t0tr4y6bkmgo'
            },
            {
                number: 'IE00004',
                title: 'Salk Institute',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00004.webp'),
                    srcjpg: require ('~/assets/img/IE00004_opti.jpg'),
                    alt: "IE00004",               
                },
                lien: 'https://www.instagram.com/p/B-UZAY_qkVQ/?igshid=1xdqwh3xajb4f'
            },
            {
                number: 'IE00005',
                title: 'Aqua Building',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00005.webp'),
                    srcjpg: require ('~/assets/img/IE00005_opti.jpg'),
                    alt: "IE00005",               
                },
                lien: 'https://www.instagram.com/p/B-mKtRaKVv1/?igshid=bw0o225yra0x'
            },
            {
                number: 'IE00006',
                title: 'La Galleria',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00006.webp'),
                    srcjpg: require ('~/assets/img/IE00006_opti.jpg'),
                    alt: "IE00006",               
                },
                lien: 'https://www.instagram.com/p/B_Xzi_kqtSg/?igshid=38h6bjcp8mpj'
            },
            {
                number: 'IE00007',
                title: 'London National Theatre',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00007.webp'),
                    srcjpg: require ('~/assets/img/IE00007_opti.jpg'),
                    alt: "IE00007",               
                },
                lien: 'https://www.instagram.com/p/CAPgC5dK8bu/?igshid=1ojysnqzyhb4i'
            },
            {
                number: 'IE00008',
                title: "David Hockney's iPad",
                category: 'All Art',
                categoryvisible: 'Art',
                image: {
                    srcwebp: require ('~/assets/img/IE00008.webp'),
                    srcjpg: require ('~/assets/img/IE00008_opti.jpg'),
                    alt: "IE00008",               
                },
                lien: 'https://www.instagram.com/p/CAqMz7lqmlN/?igshid=x0bkt8u13ypn'
            },
            {
                number: 'IE00009',
                title: 'Christo & Jeanne-Claude',
                category: 'All Art',
                categoryvisible: 'Art',
                image: {
                    srcwebp: require ('~/assets/img/IE00009.webp'),
                    srcjpg: require ('~/assets/img/IE00009_opti.jpg'),
                    alt: "IE00009",               
                },
                lien: 'https://www.instagram.com/p/CA5LKKkqMXB/?igshid=y2dz5xx6p5zj'
            },
            {
                number: 'IE00010',
                title: 'Anthony Bourdain',
                category: 'All Food',
                categoryvisible: 'Food',
                image: {
                    srcwebp: require ('~/assets/img/IE00010.webp'),
                    srcjpg: require ('~/assets/img/IE00010_opti.jpg'),
                    alt: "IE00010",               
                },
                lien: 'https://www.instagram.com/p/CBMFABUqIQQ/?igshid=1h8x815kuxioj'
            },
            {
                number: 'IE00011',
                title: 'Marc Newson',
                category: 'All Design',
                categoryvisible: 'Design',
                image: {
                    srcwebp: require ('~/assets/img/IE00011.webp'),
                    srcjpg: require ('~/assets/img/IE00011_opti.jpg'),
                    alt: "IE00011",               
                },
                lien: 'https://www.instagram.com/p/CCoeji0qlfF/?igshid=e8hufqr3jse3'
            },
            {
                number: 'IE00012',
                title: 'Casa Rotonda',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00012.webp'),
                    srcjpg: require ('~/assets/img/IE00012_opti.jpg'),
                    alt: "IE00012",               
                },
                lien: 'https://www.instagram.com/p/CCyWCYwq_ET/?igshid=11cizsg4xvgcp'
            },
            {
                number: 'IE00013',
                title: 'Niterói Museum',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00013.webp'),
                    srcjpg: require ('~/assets/img/IE00013_opti.jpg'),
                    alt: "IE00013",               
                },
                lien: 'https://www.instagram.com/p/CC-47Jjq5N-/?igshid=uo7f5ijvpesq'
            },
            {
                number: 'IE00014',
                title: 'Arno Brandlhuber',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00014.webp'),
                    srcjpg: require ('~/assets/img/IE00014_opti.jpg'),
                    alt: "IE00014",               
                },
                lien: 'https://www.instagram.com/p/CEvyV3UqB9A/?igshid=1ub5e1lw0rxpa'
            },
            {
                number: 'IE00015',
                title: "Carrie Mae Weems",
                category: 'All Photography',
                categoryvisible: 'Photography',
                image: {
                    srcwebp: require ('~/assets/img/IE00015.webp'),
                    srcjpg: require ('~/assets/img/IE00015_opti.jpg'),
                    alt: "IE00015",               
                },
                lien: 'https://www.instagram.com/p/CE9Dt6jKZx7/?igshid=1iibwsb6ak7x1'
            },
            {
                number: 'IE00016',
                title: 'Banco de Londres y América',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00016.webp'),
                    srcjpg: require ('~/assets/img/IE00016_opti.jpg'),
                    alt: "IE00016",               
                },
                lien: 'https://www.instagram.com/p/CHFlXQmJWA5/?igshid=8a3xo7z1jdxk'
            },
            {
                number: 'IE00017',
                title: 'Luca Guadagnino',
                category: 'All Cinema',
                categoryvisible: 'Cinema',
                image: {
                    srcwebp: require ('~/assets/img/IE00017.webp'),
                    srcjpg: require ('~/assets/img/IE00017_opti.jpg'),
                    alt: "IE00017",               
                },
                lien: 'https://www.instagram.com/p/CHN7bTgJ9er/?igshid=ctdcc9u13khl'
            },
            {
                number: 'IE00018',
                title: 'Bruno Barbey',
                category: 'All Photography',
                categoryvisible: 'Photography',
                image: {
                    srcwebp: require ('~/assets/img/IE00018.webp'),
                    srcjpg: require ('~/assets/img/IE00018_opti.jpg'),
                    alt: "IE00018",               
                },
                lien: 'https://www.instagram.com/p/CHgOVzOJN3G/?igshid=2cml08zg2n6a'
            },
            {
                number: 'IE00019',
                title: 'Lewis Hamilton',
                category: 'All Sport',
                categoryvisible: 'Sport',
                image: {
                    srcwebp: require ('~/assets/img/IE00019.webp'),
                    srcjpg: require ('~/assets/img/IE00019_opti.jpg'),
                    alt: "IE00019",               
                },
                lien: 'https://www.instagram.com/p/CHnUQY6pjpm/?igshid=109tyvq35or03'
            },
            {
                number: 'IE00020',
                title: 'Miroir Ultrafragola',
                category: 'All Design',
                categoryvisible: 'Design',
                image: {
                    srcwebp: require ('~/assets/img/IE00020.webp'),
                    srcjpg: require ('~/assets/img/IE00020_opti.jpg'),
                    alt: "IE00020",               
                },
                lien: 'https://www.instagram.com/p/CH58gjNpr5_/?igshid=15g5l723aks5z'
            },
            {
                number: 'IE00021',
                title: 'Alila Yangshuo Hotel',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00021.webp'),
                    srcjpg: require ('~/assets/img/IE00021_opti.jpg'),
                    alt: "IE00021",               
                },
                lien: 'https://www.instagram.com/p/CH-x46nJfSa/?igshid=13pk2h87bp07f'
            },
            {
                number: 'IE00022',
                title: 'Taipei 101',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00022.webp'),
                    srcjpg: require ('~/assets/img/IE00022_opti.jpg'),
                    alt: "IE00022",               
                },
                lien: 'https://www.instagram.com/p/CItfHomhHGU/?igshid=1k2i8zsjjf8t0'
            },
            {
                number: 'IE00023',
                title: 'Peggy Guggenheim',
                category: 'All Art',
                categoryvisible: 'Art',
                image: {
                    srcwebp: require ('~/assets/img/IE00023.webp'),
                    srcjpg: require ('~/assets/img/IE00023_opti.jpg'),
                    alt: "IE00023",               
                },
                lien: 'https://www.instagram.com/p/CI1Nye2Bgku/?igshid=kb28qxp2z58h'
            },
            {
                number: 'IE00024',
                title: 'Helvetica',
                category: 'All Design',
                categoryvisible: 'Design',
                image: {
                    srcwebp: require ('~/assets/img/IE00024.webp'),
                    srcjpg: require ('~/assets/img/IE00024_opti.jpg'),
                    alt: "IE00024",               
                },
                lien: 'https://www.instagram.com/p/CJWR16chity/?igshid=8wxamnlf87nd'
            },
            {
                number: 'IE00025',
                title: 'Le Palais Bulles',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00025.webp'),
                    srcjpg: require ('~/assets/img/IE00025_opti.jpg'),
                    alt: "IE00025",               
                },
                lien: 'https://www.instagram.com/p/CJbfv8ABPNM/?igshid=1685dnt6giktg'
            },
            {
                number: 'IE00026',
                title: 'Mae Jemison',
                category: 'All History',
                categoryvisible: 'History',
                image: {
                    srcwebp: require ('~/assets/img/IE00026.webp'),
                    srcjpg: require ('~/assets/img/IE00026_opti.jpg'),
                    alt: "IE00026",               
                },
                lien: 'https://www.instagram.com/p/CJoWDy5hsY-/?igshid=ilohaurcc5ie'
            },
            {
                number: 'IE00027',
                title: 'Chapelle XIV',
                category: 'All Art',
                categoryvisible: 'Art',
                image: {
                    srcwebp: require ('~/assets/img/IE00027.webp'),
                    srcjpg: require ('~/assets/img/IE00027_opti.jpg'),
                    alt: "IE00027",               
                },
                lien: 'https://www.instagram.com/p/CJthDWahwHE/?igshid=1kkkxadoc4c6a'
            },
            {
                number: 'IE00028',
                title: 'Refuge du Goûter',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00028.webp'),
                    srcjpg: require ('~/assets/img/IE00028_opti.jpg'),
                    alt: "IE00028",               
                },
                lien: 'https://www.instagram.com/p/CJ1LD6AhCZN/?igshid=1awo70v5hwphg'
            },
            {
                number: 'IE00029',
                title: 'Aaron Swartz',
                category: 'All History',
                categoryvisible: 'History',
                image: {
                    srcwebp: require ('~/assets/img/IE00029.webp'),
                    srcjpg: require ('~/assets/img/IE00029_opti.jpg'),
                    alt: "IE00029",               
                },
                lien: 'https://www.instagram.com/p/CJ6o0GDBj4K/?igshid=r81o4f3f12p1'
            },
            {
                number: 'IE00030',
                title: "Josh & Benny Safdie",
                category: 'All Cinema',
                categoryvisible: 'Cinema',
                image: {
                    srcwebp: require ('~/assets/img/IE00030.webp'),
                    srcjpg: require ('~/assets/img/IE00030_opti.jpg'),
                    alt: "IE00030",               
                },
                lien: 'https://www.instagram.com/p/CJ_nadyBqH_/?igshid=1apibqp6cg5qq'
            },
            {
                number: 'IE00031',
                title: 'Verre Duralex',
                category: 'All Design',
                categoryvisible: 'Design',
                image: {
                    srcwebp: require ('~/assets/img/IE00031.webp'),
                    srcjpg: require ('~/assets/img/IE00031_opti.jpg'),
                    alt: "IE00031",               
                },
                lien: 'https://www.instagram.com/p/CKEJo0hBwp2/?igshid=11i0xwd5a4tpe'
            },
            {
                number: 'IE00032',
                title: 'Erlang Liquor Storehouse',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00032.webp'),
                    srcjpg: require ('~/assets/img/IE00032_opti.jpg'),
                    alt: "IE00032",               
                },
                lien: 'https://www.instagram.com/p/CKMS4hlhGF9/?igshid=he5wir7b79w4'
            },
            {
                number: 'IE00033',
                title: 'Catalogue IKEA',
                category: 'All Design',
                categoryvisible: 'Design',
                image: {
                    srcwebp: require ('~/assets/img/IE00033.webp'),
                    srcjpg: require ('~/assets/img/IE00033_opti.jpg'),
                    alt: "IE00033",               
                },
                lien: 'https://www.instagram.com/p/CKRkHe-BPME/?igshid=reqb138wd3w6'
            },
            {
                number: 'IE00034',
                title: 'Conservatoire de Montreuil',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00034.webp'),
                    srcjpg: require ('~/assets/img/IE00034_opti.jpg'),
                    alt: "IE00034",               
                },
                lien: 'https://www.instagram.com/p/CKcG748hOaJ/?igshid=13qna3in0db0s'
            },
            {
                number: 'IE00035',
                title: 'Canapé Togo',
                category: 'All Design',
                categoryvisible: 'Design',
                image: {
                    srcwebp: require ('~/assets/img/IE00035.webp'),
                    srcjpg: require ('~/assets/img/IE00035_opti.jpg'),
                    alt: "IE00035",               
                },
                lien: 'https://www.instagram.com/p/CKhYB1ABn8b/?igshid=owk84vlvqwfc'
            },
            {
                number: 'IE00036',
                title: 'Ryugyong Hotel',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00036.webp'),
                    srcjpg: require ('~/assets/img/IE00036_opti.jpg'),
                    alt: "IE00036",               
                },
                lien: 'https://www.instagram.com/p/CKo_ap5Bkw_/?igshid=17e6898jcmgal'
            },
            {
                number: 'IE00037',
                title: 'Gilbert Garcin',
                category: 'All Photography',
                categoryvisible: 'Photography',
                image: {
                    srcwebp: require ('~/assets/img/IE00037.webp'),
                    srcjpg: require ('~/assets/img/IE00037_opti.jpg'),
                    alt: "IE00037",               
                },
                lien: 'https://www.instagram.com/p/CKuIEENB7vn/?igshid=1fsrkl1z939pt'
            },
            {
                number: 'IE00038',
                title: 'Héctor Bellerín',
                category: 'All Sport',
                categoryvisible: 'Sport',
                image: {
                    srcwebp: require ('~/assets/img/IE00038.webp'),
                    srcjpg: require ('~/assets/img/IE00038_opti.jpg'),
                    alt: "IE00038",               
                },
                lien: 'https://www.instagram.com/p/CK1539OBrJs/?igshid=pc4jusfd3yxj'
            },
            {
                number: 'IE00039',
                title: 'Project Gelandewagen',
                category: 'All Design',
                categoryvisible: 'Design',
                image: {
                    srcwebp: require ('~/assets/img/IE00039.webp'),
                    srcjpg: require ('~/assets/img/IE00039_opti.jpg'),
                    alt: "IE00039",               
                },
                lien: 'https://www.instagram.com/p/CLAIzzdJoAK/?igshid=bkycvwtahfda'
            },
            {
                number: 'IE00040',
                title: 'Jacquemus Office',
                category: 'All Design',
                categoryvisible: 'Design',
                image: {
                    srcwebp: require ('~/assets/img/IE00040.webp'),
                    srcjpg: require ('~/assets/img/IE00040_opti.jpg'),
                    alt: "IE00040",               
                },
                lien: 'https://www.instagram.com/p/CLFZZZNJ02B/?igshid=y3npuogkuzin'
            },
            {
                number: 'IE00041',
                title: 'Maya Weug',
                category: 'All Sport',
                categoryvisible: 'Sport',
                image: {
                    srcwebp: require ('~/assets/img/IE00041.webp'),
                    srcjpg: require ('~/assets/img/IE00041_opti.jpg'),
                    alt: "IE00041",               
                },
                lien: 'https://www.instagram.com/p/CLNCDU6BHh1/?igshid=1jfokdpl8itkw'
            },
            {
                number: 'IE00042',
                title: 'Rolex Perpetual Calendar',
                category: 'All Design',
                categoryvisible: 'Design',
                image: {
                    srcwebp: require ('~/assets/img/IE00042.webp'),
                    srcjpg: require ('~/assets/img/IE00042_opti.jpg'),
                    alt: "IE00042",               
                },
                lien: 'https://www.instagram.com/p/CLSMzMUBiPR/?igshid=n01yc7qkcyxn'
            },
            {
                number: 'IE00043',
                title: 'Geisel Library',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00043.webp'),
                    srcjpg: require ('~/assets/img/IE00043_opti.jpg'),
                    alt: "IE00043",               
                },
                lien: 'https://www.instagram.com/p/CLXJaVghUXz/?igshid=om7o2ro13jbe'
            },
            {
                number: 'IE00044',
                title: 'Keith Haring',
                category: 'All Art',
                categoryvisible: 'Art',
                image: {
                    srcwebp: require ('~/assets/img/IE00044.webp'),
                    srcjpg: require ('~/assets/img/IE00044_opti.jpg'),
                    alt: "IE00044",               
                },
                lien: 'https://www.instagram.com/p/CLfIXfgBCRx/?igshid=7rdu4w7mlb8k'
            },
            {
                number: 'IE00045',
                title: "Naomi Osaka",
                category: 'All Sport',
                categoryvisible: 'Sport',
                image: {
                    srcwebp: require ('~/assets/img/IE00045.webp'),
                    srcjpg: require ('~/assets/img/IE00045_opti.jpg'),
                    alt: "IE00045",               
                },
                lien: 'https://www.instagram.com/p/CLhgd-lBB4j/?igshid=12bkjwgwopz0z'
            },
            {
                number: 'IE00046',
                title: 'Renee Montgomery',
                category: 'All Sport',
                categoryvisible: 'Sport',
                image: {
                    srcwebp: require ('~/assets/img/IE00046.webp'),
                    srcjpg: require ('~/assets/img/IE00046_opti.jpg'),
                    alt: "IE00046",               
                },
                lien: 'https://www.instagram.com/p/CLm1RhUBuLr/?igshid=vm5a770b24jh'
            },
            {
                number: 'IE00047',
                title: 'Solange',
                category: 'All Music',
                categoryvisible: 'Music',
                image: {
                    srcwebp: require ('~/assets/img/IE00047.webp'),
                    srcjpg: require ('~/assets/img/IE00047_opti.jpg'),
                    alt: "IE00047",               
                },
                lien: 'https://www.instagram.com/p/CLr7_SRhmdS/?igshid=1u61kw419bdbj'
            },
            {
                number: 'IE00048',
                title: 'Grace Jones',
                category: 'All Fashion',
                categoryvisible: 'Fashion',
                image: {
                    srcwebp: require ('~/assets/img/IE00048.webp'),
                    srcjpg: require ('~/assets/img/IE00048_opti.jpg'),
                    alt: "IE00048",               
                },
                lien: 'https://www.instagram.com/p/CLxGrSaBvDi/?igshid=vm8nt72op5k3'
            },
            {
                number: 'IE00049',
                title: 'Tracee Ellis Ross',
                category: 'All Cinema',
                categoryvisible: 'Cinema',
                image: {
                    srcwebp: require ('~/assets/img/IE00049.webp'),
                    srcjpg: require ('~/assets/img/IE00049_opti.jpg'),
                    alt: "IE00049",               
                },
                lien: 'https://www.instagram.com/p/CL9-qj8BKJ2/?igshid=a061q1r2re87'
            },
            {
                number: 'IE00050',
                title: 'Phoebe Bridgers',
                category: 'All Music',
                categoryvisible: 'Music',
                image: {
                    srcwebp: require ('~/assets/img/IE00050.webp'),
                    srcjpg: require ('~/assets/img/IE00050_opti.jpg'),
                    alt: "IE00050",               
                },
                lien: 'https://www.instagram.com/p/CMDHL9YBLBD/?igshid=wp640goxcfhw'
            },
            {
                number: 'IE00051',
                title: 'Busch Stadium',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00051.webp'),
                    srcjpg: require ('~/assets/img/IE00051_opti.jpg'),
                    alt: "IE00051",               
                },
                lien: 'https://www.instagram.com/p/CMVIslGh6n4/?igshid=1n2xxe3kdhlzf'
            },
            {
                number: 'IE00052',
                title: 'La Muralla Roja',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00052.webp'),
                    srcjpg: require ('~/assets/img/IE00052_opti.jpg'),
                    alt: "IE00052",               
                },
                lien: 'https://www.instagram.com/p/CMacbELBguV/?igshid=1prn1p96k7sf9'
            },
            {
                number: 'IE00053',
                title: 'Elbphilharmonie',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00053.webp'),
                    srcjpg: require ('~/assets/img/IE00053_opti.jpg'),
                    alt: "IE00053",               
                },
                lien: 'https://www.instagram.com/p/CMsVGh0jvGo/?igshid=lgf0ovg4il93'
            },
            {
                number: 'IE00054',
                title: 'Louis Vuitton Tokyo',
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00054.webp'),
                    srcjpg: require ('~/assets/img/IE00054_opti.jpg'),
                    alt: "IE00054",               
                },
                lien: 'https://www.instagram.com/p/CMuquidDj07/?igshid=1ta8w4aytilq'
            },
            {
                number: 'IE00055',
                title: 'Han van Meegeren',
                category: 'All Art',
                categoryvisible: 'Art',
                image: {
                    srcwebp: require ('~/assets/img/IE00055.webp'),
                    srcjpg: require ('~/assets/img/IE00055_opti.jpg'),
                    alt: "IE00055",               
                },
                lien: 'https://www.instagram.com/p/CM2mqHUDYsZ/?igshid=1vp4rcspy24ns'
            },
            {
                number: 'IE00056',
                title: 'Kay Sage',
                category: 'All Art',
                categoryvisible: 'Art',
                image: {
                    srcwebp: require ('~/assets/img/IE00056.webp'),
                    srcjpg: require ('~/assets/img/IE00056_opti.jpg'),
                    alt: "IE00056",               
                },
                lien: 'https://www.instagram.com/p/CNAmSMqD-nJ/?igshid=f14wkjk85hg'
            },
            {
                number: 'IE00057',
                title: 'Iñaki Williams',
                category: 'All Sport',
                categoryvisible: 'Sport',
                image: {
                    srcwebp: require ('~/assets/img/IE00057.webp'),
                    srcjpg: require ('~/assets/img/IE00057_opti.jpg'),
                    alt: "IE00057",               
                },
                lien: 'https://www.instagram.com/p/CNFwvW5javy/?igshid=188fvkpvhg29x'
            },
            {
                number: 'IE00058',
                title: 'Nasa "Worm"',
                category: 'All Design',
                categoryvisible: 'Design',
                image: {
                    srcwebp: require ('~/assets/img/IE00058.webp'),
                    srcjpg: require ('~/assets/img/IE00058_opti.jpg'),
                    alt: "IE00058",               
                },
                lien: 'https://www.instagram.com/p/CNS4ygWjNHV/?igshid=12hf0sxnz99p7'
            },
            {
                number: 'IE00059',
                title: 'Nicole McLaughlin',
                category: 'All Design',
                categoryvisible: 'Design',
                image: {
                    srcwebp: require ('~/assets/img/IE00059.webp'),
                    srcjpg: require ('~/assets/img/IE00059_opti.jpg'),
                    alt: "IE00059",               
                },
                lien: 'https://www.instagram.com/p/CNc4770Dhlv/?igshid=18ch0zel55uf0'
            },
            {
                number: 'IE00060',
                title: "Amina Muaddi",
                category: 'All Fashion',
                categoryvisible: 'Fashion',
                image: {
                    srcwebp: require ('~/assets/img/IE00060.webp'),
                    srcjpg: require ('~/assets/img/IE00060_opti.jpg'),
                    alt: "IE00060",               
                },
                lien: 'https://www.instagram.com/p/CNiChIDjVac/?igshid=1e8gnww36sfui'
            },
            {
                number: 'IE00061',
                title: "M, le magazine du Monde",
                category: 'All Art',
                categoryvisible: 'Art',
                image: {
                    srcwebp: require ('~/assets/img/IE00061.webp'),
                    srcjpg: require ('~/assets/img/IE00061_opti.jpg'),
                    alt: "IE00061",               
                },
                lien: 'https://www.instagram.com/p/CNxfxyQjYHM/?igshid=1go6d6le2jv7i'
            },
            {
                number: 'IE00062',
                title: "Junko Tabei",
                category: 'All History',
                categoryvisible: 'History',
                image: {
                    srcwebp: require ('~/assets/img/IE00062.webp'),
                    srcjpg: require ('~/assets/img/IE00062_opti.jpg'),
                    alt: "IE00062",               
                },
                lien: 'https://www.instagram.com/p/CN5dhf0jVeu/?igshid=1egja1r343cjk'
            },
            {
                number: 'IE00063',
                title: "Prada Marfa",
                category: 'All Architecture',
                categoryvisible: 'Architecture',
                image: {
                    srcwebp: require ('~/assets/img/IE00063.webp'),
                    srcjpg: require ('~/assets/img/IE00063_opti.jpg'),
                    alt: "IE00063",               
                },
                lien: 'https://www.instagram.com/p/CONzBEyjYH6/?igshid=o2b0okx00nx9'
            },
            {
                number: 'IE00064',
                title: "Michael Collins",
                category: 'All History',
                categoryvisible: 'History',
                image: {
                    srcwebp: require ('~/assets/img/IE00064.webp'),
                    srcjpg: require ('~/assets/img/IE00064_opti.jpg'),
                    alt: "IE00064",               
                },
                lien: 'https://www.instagram.com/p/COTKRAbD5EF/?igshid=1538grqt8xkiw'
            },
            {
                number: 'IE00065',
                title: "Saul & Elaine Bass",
                category: 'All Cinema',
                categoryvisible: 'Cinema',
                image: {
                    srcwebp: require ('~/assets/img/IE00065.webp'),
                    srcjpg: require ('~/assets/img/IE00065_opti.jpg'),
                    alt: "IE00065",               
                },
                lien: 'https://www.instagram.com/p/COYNRkmMU0j/?igshid=19w89txyygfxj'
            },
            {
                number: 'IE00066',
                title: "Daft Punk",
                category: 'All Music',
                categoryvisible: 'Music',
                image: {
                    srcwebp: require ('~/assets/img/IE00066.webp'),
                    srcjpg: require ('~/assets/img/IE00066_opti.jpg'),
                    alt: "IE00066",               
                },
                lien: 'https://www.instagram.com/p/COdSA5_MtMa/?igshid=1vritbx2o8zkq'
            }
        ],
        categoryliste: 'All'
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
            gsap.to('.global-ie-container', 0.5, { opacity:0, ease: 'Power1.easeOut', onComplete: done });
        },
        enter(el, done){
            //
        }
    },

    mounted: function(){
        const ItemsListeCategory = document.querySelectorAll(".filter-ie-container .categoryliste-container label")
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
        this.HeroIEAnimation(),
        this.AnimationFilter(),
        this.initScrolltrigger(),
        this.HoverIE()
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
            let IEFooterCursor = document.querySelector('.footer .ie-element');
            let filterContainer = document.querySelector('.categoryliste-container');
            let filter = document.querySelectorAll('.categoryliste-container label');
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

            IEFooterCursor.addEventListener('mouseenter', () => {
                gsap.to(mouseCursor, 0.3, { opacity: 0 });
            });
            IEFooterCursor.addEventListener('mouseleave', () => {
                gsap.to(mouseCursor, 0.1, { opacity: 1 });
            });

            filterContainer.addEventListener('mouseenter', () => {
                    gsap.to(mouseCursor, 0.3, { opacity: 0, delay: 0, ease: 'Power3.easeOut' });
            });
            filterContainer.addEventListener('mouseleave', () => {
                gsap.to(mouseCursor, 0.1, { opacity: 1, delay: 0 });
            });

            filter.forEach(category => {
                category.addEventListener('mouseenter', () => {
                    gsap.to(mouseCursor, 0.3, { opacity: 0 });
                });
                category.addEventListener('mouseleave', () => {
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
            let filterLink = document.querySelectorAll('.categoryliste-container label');
            filterLink.forEach(label => {
                label.addEventListener('click', event => {
                timesClicked = 4;
                })
            })
            let filterContainer = document.querySelector('.categoryliste-container');
            filterContainer.addEventListener('click', event => {
                timesClicked = 4;
            })
            let menuLink = document.getElementById('menu-word');
            menuLink.addEventListener('click', event => {
                timesClicked = 4;
            })
            let IEFooter = document.querySelector('.footer .ie-element');
            IEFooter.addEventListener('click', event => {
                console.log('test')
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
        HeroIEAnimation: function(){
            if(document.body.contains(document.querySelector('.loader-degrade'))){
                gsap.fromTo('.title-ie', 1, {opacity: 0},
                { opacity: 1, delay: 3.75, ease: 'Power1.easeInOut' });
                gsap.fromTo('.filter-ie-container', 1, { opacity: 0 },
                { opacity: 1, delay: 3.85, ease: 'Power1.easeInOut' });
                const linePosts = document.querySelectorAll('.list-ie div')
                gsap.fromTo('.list-ie', 0.01, { opacity: 0 },
                { opacity: 1, delay: 3.94 });
                gsap.fromTo(linePosts, 1, { opacity: 0 },
                { opacity: 1, delay: 3.95, ease: 'Power1.easeInOut', stagger: 0.075 });
                gsap.fromTo('header', 1, { opacity: 0 },
                { opacity: 1, delay: 4.25, ease: 'Power1.easeInOut'});
                gsap.fromTo('.footer', 1, { opacity: 0 },
                { opacity: 1, delay: 4.25, ease: 'Power1.easeInOut'});
                gsap.fromTo('.cursor', 1, { opacity: 0 },
                { opacity: 1, delay: 4.25 });
            }
            else{
                gsap.fromTo('.title-ie', 1, {opacity: 0},
                { opacity: 1, delay: 0.25, ease: 'Power1.easeInOut' });
                gsap.fromTo('.filter-ie-container', 1, { opacity: 0 },
                { opacity: 1, delay: 0.35, ease: 'Power1.easeInOut' });
                const linePosts = document.querySelectorAll('.list-ie div')
                gsap.fromTo('.list-ie', 0.01, { opacity: 0 },
                { opacity: 1, delay: 0.44 });
                gsap.fromTo(linePosts, 1, { opacity: 0 },
                { opacity: 1, delay: 0.45, ease: 'Power1.easeInOut', stagger: 0.075 });
                gsap.fromTo('header', 1, { opacity: 0 },
                { opacity: 1, delay: 1, ease: 'Power1.easeInOut'});
                gsap.fromTo('.footer', 1, { opacity: 0 },
                { opacity: 1, delay: 1, ease: 'Power1.easeInOut'});
                gsap.fromTo('.cursor', 1, { opacity: 0 },
                { opacity: 1, delay: 1 });
            }
        },
        AnimationFilter: function(){
            const IEParagrapheLines = document.querySelectorAll('.list-ie div')
            const ListeCategory = document.querySelector(".categoryliste-container")
            const ItemsListeCategory = document.querySelectorAll(".categoryliste-container label")

            ListeCategory.addEventListener('click', function (){
                ListeCategory.classList.toggle("active-filter")
            })

            ItemsListeCategory.forEach(function (Item){
                Item.addEventListener('click', function(){
                    ListeCategory.classList.toggle("active-filter")
                    gsap.to(IEParagrapheLines, 1, { y: 0, opacity: 1, ease: 'Power3.easeOut', onComplete: killOtherAnimation})
                    function killOtherAnimation(){
                        gsap.killTweensOf(IEParagrapheLines);

                        const linksIE = document.querySelectorAll(".ie-line")
                        function getRandomInt(min, max) {
                            return min + Math.floor(Math.random() * (max - min + 1));
                        }
                        var dRand = getRandomInt(0,1000);
                        
                        gsap.set(".ie-image", { x:dRand, autoAlpha: 0 });
                        
                        linksIE.forEach(linkIE => {

                            var ImageMFHover = linkIE.querySelector(".ie-image")
                            var dRand = getRandomInt(0,1000);
                            gsap.set(ImageMFHover, { x:dRand, autoAlpha: 0 });

                            linkIE.addEventListener('mouseenter', () => {
                                gsap.fromTo(ImageMFHover, 0.3, { x:dRand, autoAlpha: 0 },
                                { x:dRand, autoAlpha: 1, delay: 0 });
                            });

                            linkIE.addEventListener('mouseleave', () => {
                                gsap.fromTo(ImageMFHover, 0.5, { x:dRand, autoAlpha: 1, delay: 0 },
                                { x:dRand, autoAlpha: 0, delay: 0.5 });
                            });
                        });
                    }
                })
            })
        },
        HoverIE: function(){
            const linksIE = document.querySelectorAll(".ie-line")
            function getRandomInt(min, max) {
                return min + Math.floor(Math.random() * (max - min + 1));
            }
            var dRand = getRandomInt(0,1000);
            
            linksIE.forEach(linkIE => {

                var ImageMFHover = linkIE.querySelector(".ie-image")
                var dRand = getRandomInt(0,1000);
                gsap.set(ImageMFHover, { x:dRand, autoAlpha: 0 });

                linkIE.addEventListener('mouseenter', () => {
                    gsap.fromTo(ImageMFHover, 0.3, { x:dRand, autoAlpha: 0 },
                    { x:dRand, autoAlpha: 1, delay: 0 });
                });

                linkIE.addEventListener('mouseleave', () => {
                    gsap.fromTo(ImageMFHover, 0.5, { x:dRand, autoAlpha: 1, delay: 0 },
                    { x:dRand, autoAlpha: 0, delay: 0.5 });
                });
            });
        }
    },

    computed: {
        filterIE: function(){
            return this.IEitems.filter((IEitem) => {
                return IEitem.category.match(this.categoryliste);
            })
        }
    }
}
</script>
  
<style lang="css" src="~/assets/css/main.css">

</style>