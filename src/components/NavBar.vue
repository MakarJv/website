<template>
	<header>
		<TheMenu/>
		<div class="group">
			<ul class="navigation">
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
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