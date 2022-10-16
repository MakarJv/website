<template>
	<footer>
		<ul>
			<li><a>
				<DarkModeSlider/>
			</a></li>
			<li><a href="#">
				<ion-icon name="settings-outline"></ion-icon>
			</a></li>
			<li><a href="#">
				<ion-icon name="help-circle-outline"></ion-icon>
			</a></li>
			<li><a href="#">
				<ion-icon name="exit-outline"></ion-icon>
			</a></li>
		</ul>
	</footer>
</template>

<script>
import DarkModeSlider from './DarkModeSlider'

export default {
	components: {
		DarkModeSlider
	}
}
</script>

<style lang="scss">
@import "src/assets/footermenu";
</style>