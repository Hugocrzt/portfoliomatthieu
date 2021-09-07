<template>
    <div class="not-found-page">
        <div class="not-found-container">
            <p>404 Error</p>
            <NuxtLink class="back-to-home" to="/">Back to Home</NuxtLink>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
}
</script>
<style>
        .not-found-page{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #161616;
}
.not-found-container {
    text-align: center;
}
.not-found-container p{
    font-size: 15vw;
    color: #EEEEEE;
    margin: 0 0 60px 0;
    font-family: 'Surt', serif;
    font-weight: 600;
}
.not-found-container a{
    font-size: 1.75vw;
    color: #EEEEEE;
    margin: 20px 0;
    text-decoration: none;
    font-family: 'Surt', sans-serif;
    font-weight: 300;
    position: relative;
}
.not-found-container a::after{
    content: "";
    border-bottom: solid 1px #EEEEEE;
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    transform: scaleX(1);
    transform-origin: right;
    transition: transform .3s cubic-bezier(.65,.05,.36,1);
}
.not-found-container a:hover::after{
    transform-origin: left;
    transform: scaleX(0);
}
@media (min-width: 768px) and (max-width: 1023px){
    .not-found-container a{
        font-size: 3.25vw;
    }
}
@media (max-width: 767px) {
    .not-found-container a{
        font-size: 4vw;
    }
    .not-found-container p{
        font-size: 20vw;
    }
}
@media (min-width: 2550px) {
    .not-found-container a{
        font-size: 1.5vw;
    }
}
</style>