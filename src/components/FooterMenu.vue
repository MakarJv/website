<template>
	<footer>
		<div>
			<DarkModeSlider/>
		</div>
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