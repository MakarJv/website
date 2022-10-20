<template>
	<div>
		<input type="checkbox" id="nav-toggle" hidden>
		<nav class="nav">
			<label for="nav-toggle" class="nav-toggle" onclick></label>
			<h2 class="logo">
				<a href="#">
          <IconProfile/>
        </a>
        <a href="#">Profile</a>
			</h2>
			<ul>
				<li><a href="#">Один</a></li>
				<li><a href="#">Два</a></li>
				<li><a href="#">Три</a></li>
				<li><a href="#">Четыре</a></li>
				<li><a href="#">Пять</a></li>
				<li><a href="#">Шесть</a></li>
				<li><a href="#">Семь</a></li>
				<li><a href="#">Восемь</a></li>
			</ul>
			
			<FooterMenu/>
		
		</nav>
		
		<label for="nav-toggle" class="mask-content"></label>
	
	</div>
</template>

<script>
import FooterMenu from './FooterMenu'
import IconProfile from './IconProfile'

export default {
	components: {
		FooterMenu, IconProfile
	}
}
</script>

<style lang="scss">
@import "src/assets/menu";
</style>