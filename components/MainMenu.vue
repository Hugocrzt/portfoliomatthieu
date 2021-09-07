<template>
    <header :class ="{ 'header--hidden': !showNavbar }">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><a id="menu-word"></a></label>
        <ul class="menu">
            <li id="home-link">
                <nuxt-link to="/" class="link-project">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about" class="link-project">About</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/articles" class="link-project">Articles</nuxt-link>
            </li>
        </ul>
        <div class="contact-element">
            <a v-clipboard:copy="copymail" @click="copyFeedback"><span id="desktop-mail">contact@matthieufortin.me</span><span id="mobile-mail">Copy mail</span></a>
        </div>
        <div id="mail-copied-message-container">
            <div id="confirmation-copy-mail">
                <p>Mail Copied</p>
            </div>
        </div>
    </header>
</template>

<script>
import { gsap } from "gsap";

export default {

    data() {
      return {
        showNavbar: true, 
        lastScrollPosition: 0,
        copyOk: null,
        copymail: 'contact@matthieufortin.me'
      }
    },
    
    mounted: function() {
        const viewportMeta = document.createElement('meta')
        viewportMeta.name = 'viewport'
        viewportMeta.content = 'width=device-width, initial-scale=1'
        document.head.appendChild(viewportMeta)
        this.openMenu(),
        this.scrollMenu()
    },
    
    methods: {
        openMenu: function() {
            const MenuFooter = document.querySelector(".footer")
            const MenuBtn = document.querySelector(".menu-icon")
            const CopyMail = document.querySelector(".contact-element a")
            const MenuContainer = document.querySelector(".menu")
            const LinkMenu = document.querySelectorAll(".menu li a")
            const Header = document.querySelector("header")
            
            MenuBtn.addEventListener('click', function (){
                if(MenuContainer.classList.contains('active-menu') == false){
                    MenuContainer.classList.add("active-menu")
                    Header.classList.add("active-header")
                    CopyMail.classList.add("active-menu")
                    MenuFooter.classList.add("active-menu-footer")
                    gsap.to(MenuContainer, 0.3, { opacity: 1 });
                }
                else if(MenuContainer.classList.contains('active-menu') == true){
                    gsap.to(MenuContainer, 0.3, { opacity: 0 });
                    CopyMail.classList.remove("active-menu")
                    MenuFooter.classList.remove("active-menu-footer")
                    setTimeout(function(){
                        MenuContainer.classList.remove("active-menu")
                        Header.classList.remove("active-header")
                    }, 300);
                }
            });
            
            LinkMenu.forEach(link => {
                link.addEventListener('click', function(){
                    if(MenuContainer.classList.contains('active-menu') == true){
                        gsap.to(MenuContainer, 0.3, { opacity: 0 });
                        CopyMail.classList.remove("active-menu")
                        MenuFooter.classList.remove("active-menu-footer")
                        setTimeout(function(){
                            MenuContainer.classList.remove("active-menu")
                            Header.classList.remove("active-header")
                            document.querySelector(".menu-btn").checked = false;
                        }, 300);
                    }
                })
            })
        },
        scrollMenu: function() {
            document.documentElement.setAttribute('data-direction', 'up')
        },
        copyFeedback: function() {
            var element = document.getElementById("confirmation-copy-mail");
            var IEelement = document.querySelector('.ie-element')
            var Styleelement = document.querySelector('.styles-elements')
            const Header = document.querySelector("header")
            if(Header.classList.contains('active-header') == false){
                Header.classList.add("active-header")
            }
            element.classList.add("visible-position");
            IEelement.classList.add("invisible-position");
            Styleelement.classList.add("invisible-position");

            setTimeout(function(){
                element.classList.remove("visible-position");
                IEelement.classList.remove("invisible-position");
                Styleelement.classList.remove("invisible-position");
            }, 1000);
            setTimeout(function(){
                Header.classList.remove("active-header")
            }, 1300);
        }
    }
}
</script>

<style>
header {
    position: fixed;
    width: 100%;
    padding: 30px 30px;
    z-index: 3;
    height: auto;
    top: 0;
    opacity: 0;
    transition: 0.3s top ease-out;
}
header.active-header{
    height: 100%;
}
html[data-direction="down"] header {
    top: -90px;
}
header.header--hidden{
    transform: translate3d(0, -110%, 0);
}
header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}
header li{
    float: left;
}
header li a:first-child {
margin: 0px 20px 0px 0px;
}
header li a {
  display: block;
  margin: 0px 20px 0px 20px;
  text-decoration: none;
  font-size: 1.25rem;
  text-decoration: none;
  font-family: 'Surt';
  font-weight: 300;
  color: var(--color-primary);
  position: relative;
}
header li a::after{
    content: "";
    border-bottom: solid 1px var(--color-primary);
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .3s cubic-bezier(.65,.05,.36,1);
}
header li a:hover::after{
	transform-origin: left;
	transform: scaleX(1);
}
header .menu {
  height: auto;
  opacity: 1;
  float: left;
  max-height: none;
}
header .contact-element {
    display: block;
    float: right;
    font-size: 1.25rem;
    text-decoration: none;
    font-family: 'Surt';
    font-weight: 300;
    color: var(--color-primary);
}
header .contact-element::after{
    content: "";
    border-bottom: solid 1px var(--color-primary);
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .3s cubic-bezier(.65,.05,.36,1);
}
header .contact-element:hover::after{
    transform-origin: left;
	transform: scaleX(1);
}
/* menu icon */
header .menu-icon {
    cursor: pointer;
    display: none;
    right: 5%;
    font-size: 1.25rem;
    font-family: 'Neue Machina';
    font-weight: 400;
    padding: 0px 0px;
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
header #menu-word::before{
    content: "Menu";
    position: absolute;
    opacity: 1;
}
header #menu-word::after{
    content: "Close";
    opacity: 0;
    margin-right: 2.5vw;
}
/* menu btn */
header .menu-btn {
  display: none;
}
header .menu.active-menu {
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--color-primary);
    z-index: 100;
}
header .menu-btn:checked ~ .menu-icon{
    color: var(--bg-color);
    z-index: 101;
}
header .menu-btn:checked ~ .menu li a{
    color: var(--bg-color);
    width: fit-content;
    margin: 10px auto;
    font-size: 9.5vw;
}
header .menu-btn:checked ~ .menu-icon #menu-word::before{
    opacity: 0;
}
header .menu-btn:checked ~ .menu-icon #menu-word::after{
    opacity: 1;
}
.contact-element{
    float: right;
    width: auto;
    margin-left: auto;
    cursor: pointer;
    position: relative;
    z-index: 99999;
}
.contact-element a{
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--color-primary);
    font-family: 'Surt';
}
.contact-element .active-menu{
    color: var(--bg-color);
}
.active-menu-footer .contact-element a{
    color: var(--bg-color);
}
#confirmation-copy-mail{
    display: flex;
    position: fixed;
    visibility: hidden;
    top: 0;
    z-index: 99999;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--color-primary);
    align-items: center;
    opacity: 0;
    transition: all 0.3s ease-out;
}
.visible-position{
    display: flex;
    visibility: visible !important;
    opacity: 1 !important;
    z-index: 9999;
    transition: opacity 0.3s ease-in;
}
#confirmation-copy-mail p{
    width: auto;
    margin-left: auto;
    margin-right: auto;
    font-size: 5.1vw;
    font-family: 'Surt';
    color: var(--bg-color);
    font-weight: 500;
    text-align: center;
}
#mobile-mail{
    display: none;
}
@media (max-width: 767px) {
    header .menu.active-menu{
        height: 100%;
    }
    html[data-direction="down"] header {
        top: 0;
    }
    header {
        padding: 30px 7.5%;
    }
    header .contact-element{
        font-size: 1rem;
    }
    header .menu-icon{
        font-size: 1rem;
        font-size: 1rem;
        display: block;
        left: 25px;
        font-family: 'Surt';
        font-weight: 300;
        width: fit-content;
    }
    header .menu {
        height: 0;
        opacity: 0;
    }
    .contact-element a{
        font-size: 1rem;
    }
    #desktop-mail{
        display: none;
    }
    #mobile-mail{
        display: block;
    }
    #confirmation-copy-mail{
        height: 100%;
    }
    #confirmation-copy-mail p{
        font-size: 9.5vw;
    }
}
</style>