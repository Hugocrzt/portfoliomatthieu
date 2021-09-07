<template>
    <div class="loader-degrade">
        <p class="gradient-text">MF©</p>
    </div>
</template>

<script>

</script>

<style scoped>
.loader-degrade{
	position: fixed;
	display: flex;
	align-content: center;
	justify-content: center;
	align-items: center;
	z-index: -1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: radial-gradient(ellipse at 40% -200%, var(--bg-color-loader-plus), transparent),
	radial-gradient(ellipse at 70% -100%, var(--color-primary), transparent),
	radial-gradient(ellipse at 30% 200%, var(--color-primary), transparent),
	radial-gradient(ellipse at 50% 50%, var(--bg-color), var(--bg-color));
}
.gradient-text {
	width: fit-content;
	font-size: 5.1vw;
	font-weight: 550;
	font-family: 'Surt';
	mix-blend-mode: difference;
	color: var(--bg-color);
	opacity: 0;
}
@media (min-width: 768px) and (max-width: 1023px){
	.gradient-text {
		font-size: 9vw;
		top: 40vh;
    	transform: translateY(-100%);
	}
}
@media (max-width: 767px) {
	.gradient-text {
		font-size: 12vw;
		top: 40vh;
    	transform: translateY(-100%);
	}
}
</style>