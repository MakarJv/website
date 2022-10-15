<template>
	<div id="app">
		<NavBar/>
		<ActionsMenu/>
	</div>
</template>

<script>
import NavBar from './components/NavBar'
import ActionsMenu from './components/ActionsMenu'

export default {
	name: 'App',
	components: {
		NavBar, ActionsMenu
	},
}
</script>

<style lang="scss">
@import "assets/index";
</style>
