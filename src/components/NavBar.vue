<template>
	<header>
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
	}
}
</script>

<style lang="scss">
@import "src/assets/navbar";
</style>