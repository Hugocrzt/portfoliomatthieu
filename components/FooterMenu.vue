<template>
    <div>
        <div class="footer">
            <div class="styles-elements">
            <a>
                <div v-if="$colorMode.preference === 'light'">
                    <div class="color-mode-switch-button" @click="$colorMode.preference = 'dark'">
                    </div>
                </div>
                <div v-show="$colorMode.preference === 'dark'">
                    <div class="color-mode-switch-button" @click="$colorMode.preference = 'light'">
                    </div>
                </div>
            </a>
                <div class="current-time-container">
                    <p></p>
                </div>
            </div>
            <div class="ie-element">
                <div @click="goClose" v-if="CurrentPage === 1">
                    <nuxt-link class="serie-on-refresh" to="/inspiration-eclectique"><svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 990.64 324.3"><defs><style>.cls-1{fill:none;stroke:var(--color-primary);stroke-width:1.44px;}.cls-2{fill:var(--color-primary);}.cls-3{fill:var(--bg-color);}</style></defs><title>LogoIE</title><polygon class="cls-1" points="0.72 0.72 0.72 323.58 989.92 323.58 989.92 0.72 0.72 0.72 0.72 0.72"/><polygon class="cls-2" points="498.75 0.72 498.65 323.11 989.82 323.11 989.92 0.72 498.75 0.72 498.75 0.72"/><path class="cls-3" d="M221.7,78.15h57.43V270.5H221.7Z" transform="translate(-4.08 -2.91)"/><path class="cls-4" d="M747.87,87.33v80h58.52v9.89H747.87V259.9h66.77v9.89H690.44V77.44h124.2v9.89Zm6-18.13h-3.3l.28-51.38h60.45v4.67Z" transform="translate(-4.08 -2.91)"/></svg></nuxt-link>
                </div>
                <div v-else-if="CurrentPage === 2">
                    <a class="close-whithout-refresh" @click="goBack"><span id="desktop-mail">Close</span><span class="icon"><span class="dot-ligne"><span class="dot"></span><span class="dot"></span></span><span class="dot-ligne"><span class="dot"></span><span class="dot"></span></span></span></a>
                </div>
                <div v-else-if="CurrentPage === 3">
                    <nuxt-link class="close-on-refresh" to="/"><span id="desktop-mail">Close</span><span class="icon"><span class="dot-ligne"><span class="dot"></span><span class="dot"></span></span><span class="dot-ligne"><span class="dot"></span><span class="dot"></span></span></span></nuxt-link>
                </div>
                <div v-else></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    watch: {
      $route() {
        const that = this;
        if (this.CurrentPage === 2) {
            setTimeout(function(){that.CurrentPage = 1}, 475);
        }
        else if (this.CurrentPage === 3) {
            setTimeout(function(){that.CurrentPage = 1}, 475);
        }
        else{
            //
        }
      },
    },
    data: () => ({
        CurrentPage: 1
    }),
    colorMode: {
        preference: 'light',
    },
    mounted: function(){
        this.CurrentClock(),
        this.SwitchSerieButton()
    },
    methods: {
        CurrentClock: function() {
            setInterval(function(){
                var clock = new Date();
                var hour = clock.getHours();
                var minutes = clock.getMinutes();

                var ampm = (hour>=12)?'PM':'AM';

                hour = hour%12;
                hour = hour?hour:12;
                hour = hour<10?'0'+hour:hour;
                minutes = minutes<10?'0'+minutes:minutes;

                var time = hour+'<span>:</span>'+minutes+' '+ampm;
                document.querySelector('.current-time-container p').innerHTML = time;
            }, 1000);
        },
        goBack: function(){
            return this.$router.go(-1);
        },
        goClose: function(){
            const la = this
            setTimeout(function(){la.CurrentPage = 2}, 475);
        },
        SwitchSerieButton: function(){
            const currentUrl = window.location.href
            if (currentUrl === "http://localhost:3000/inspiration-eclectique") {
                this.CurrentPage = 3;
            }
        }
    },
}
</script>

<style>
.footer {
    position: absolute;
    display: flex;
    transform: translateY(-100%);
    width: 100%;
    padding: 30px 30px;
    margin: 0px;
    z-index: 9998;
    opacity: 0;
}
.active-menu-footer{
    position: fixed;
    bottom: 0px;
    transform: translateY(0%);
}
.styles-elements{
    display: flex;
    width: auto;
    height: auto;
    padding: 0px;
    opacity: 1;
    transition: opacity .3s;
}
.styles-elements.invisible-position{
    opacity: 0;
}
.color-mode-switch-button{
    position: relative;
    margin-top: 2px;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    margin-right: 10px;
    right: 0px;
    clear: both;
    background-color: var(--color-primary);
    cursor: pointer;
}
.active-menu-footer .color-mode-switch-button{
    background-color: var(--bg-color);
}
.current-time-container{
    position: relative;
    width: auto;
    height: auto;
    margin-left: 10px;
    clear: both;
    color: var(--color-primary);
}
.active-menu-footer .current-time-container{
    color: var(--bg-color);
}
.current-time-container p{
    font-size: 1.25rem;
    font-weight: 30;
    color: var(--color-primary);
    font-family: 'Surt';
}
.active-menu-footer .current-time-container p{
    color: var(--bg-color);
}
.ie-element{
    float: right;
    width: auto;
    margin-left: auto;
    cursor: pointer;
    opacity: 1;
    transition: opacity .3s;
}
.ie-element.invisible-position{
    opacity: 0;
}
.ie-element a {
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--color-primary);
    font-family: 'Surt';
    display: flex;
    align-items: center;
}
.ie-element a svg{
    position: absolute;
    width: 5vw;
    right: 30px;
    bottom: 30px;
}
.ie-element a svg .cls-2{
    transform: translateX(0vw);
    transition: transform .3s ease-out;
}
.ie-element a svg .cls-3{
    fill: var(--color-primary);
    transition: fill .3s ease-out;
}
.ie-element a svg .cls-4{
    fill: var(--bg-color);
    transition: fill .3s ease-out;
}
.ie-element a:hover svg .cls-2{
    transform: translateX(-490px);
}
.ie-element a:hover svg .cls-3{
    fill: var(--bg-color);
}
.ie-element a:hover svg .cls-4{
    fill: var(--color-primary);
}
.active-menu-footer .ie-element a svg .cls-1{
    stroke: var(--bg-color);
}
.active-menu-footer .ie-element a svg .cls-2{
    fill: var(--bg-color);
}
.active-menu-footer .ie-element a svg .cls-3{
    fill: var(--bg-color);
}
.active-menu-footer .ie-element a svg .cls-4{
    fill: var(--color-primary);
}
.active-menu-footer .ie-element a:hover svg .cls-3{
    fill: var(--color-primary);
}
.active-menu-footer .ie-element a:hover svg .cls-4{
    fill: var(--bg-color);
}
.ie-element .close-whithout-refresh .icon{
    transform: rotate(45deg);    
}
.ie-element .close-on-refresh .icon{
    transform: rotate(45deg);
}
.ie-element .close-whithout-refresh:hover .icon{
    transform: rotate(0deg);    
}
.ie-element .close-on-refresh:hover .icon{
    transform: rotate(0deg);
}
.icon{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    height: 1.2rem;
    width: 1.2rem;
    transition: transform 0.3s ease-out;
    margin-left: 1rem;
}
.ie-element a:hover .icon{
    transform: rotate(45deg);
}
.dot-ligne{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    height: 100%;
}
.dot{
    position: relative;
    height: 6px;
    width: 6px;
    border-radius: 100px;
    display: block;
    background-color: var(--color-primary);
}
.active-menu-footer .dot{
    background-color: var(--bg-color);
}
@media (min-width: 768px) and (max-width: 1023px){
    .ie-element a svg{
        position: absolute;
        width: 10vw;
        right: 30px;
        bottom: 30px;
    }
    .ie-element a:hover svg .cls-2{
        transform: translateX(-490px);
    }
}
@media (max-width: 767px) {
    .footer{
        padding: 30px 7.5%;
    }
    .current-time-container{
        margin-top: 0.22em;
    }
    .ie-element a svg{
        position: absolute;
        width: 15vw;
        right: 30px;
        bottom: 30px;
    }
    .ie-element a:hover svg .cls-2{
        transform: translateX(-490px);
    }
    .current-time-container p{
        font-size: 1rem;
    }
    .color-mode-switch-button{
        position: relative;
        margin-top: 4px;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        margin-right: 0px;
        right: 0px;
        clear: both;
        background-color: var(--color-primary);
        cursor: pointer;
    }
}
</style>