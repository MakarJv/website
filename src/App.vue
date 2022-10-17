<template>
	<div id="app">
		<NavBar/>
		<ActionsMenu/>
		<GradientLoader/>
		<router-view/>
	</div>
</template>

<script>
import NavBar from './components/NavBar'
import ActionsMenu from './components/ActionsMenu'
import GradientLoader from './components/GradientLoader'

export default {
	name: 'App',
	components: {
		NavBar, ActionsMenu, GradientLoader
	},
}
</script>

<style lang="scss">
@import "assets/index";
</style>
