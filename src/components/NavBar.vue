<template>
	<header>
		<ion-icon name="menu" class="openMenu"></ion-icon>
		<TheMenu/>
		<div class="group">
			<ul class="navigation">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/login">Login</router-link></li>
			</ul>
		</div>
	</header>
</template>

<script>
import TheMenu from './TheMenu'

export default {
	components: {
		TheMenu
	},
	mounted() {
		let openMenu = document.querySelector('.openMenu')
		let nav = document.querySelector('nav')
		let header = document.querySelector('header')
		let maskContent = document.querySelector('.maskContent')
		
		openMenu.onclick = function () {
			nav.classList.add('open')
			header.classList.add('open')
			maskContent.classList.add('open')
		}
	}
}
</script>

<style lang="scss">
@import "src/assets/navbar";
</style>