<template>
	<div>
		<nav>
			<ion-icon name="close" class="closeMenu"></ion-icon>
			<h2 class="logo">
				<a href="#">Profile</a>
			</h2>
			<ul>
				<li><router-link to="/profile">Profile</router-link></li>
				<li><router-link to="/clock">Clock</router-link></li>
				<li><a href="#">Три</a></li>
				<li><a href="#">Четыре</a></li>
				<li><a href="#">Пять</a></li>
			</ul>
			<FooterMenu/>
		</nav>
		
		<div class="maskContent"></div>
	</div>
</template>

<script>
import FooterMenu from './FooterMenu'

export default {
	components: {
		FooterMenu
	},
	mounted() {
		let closeMenu = document.querySelector('.closeMenu')
		let nav = document.querySelector('nav')
		let header = document.querySelector('header')
		let maskContent = document.querySelector('.maskContent')
		
		closeMenu.onclick = function () {
			nav.classList.remove('open')
			header.classList.remove('open')
			maskContent.classList.remove('open')
		}
		maskContent.onclick = function () {
			nav.classList.remove('open')
			header.classList.remove('open')
			maskContent.classList.remove('open')
		}
	}
}
</script>

<style lang="scss">
@import "src/assets/menu";
</style>