<template>
	<div class="main-layout">
		<NavBar/>
		<ActionsMenu/>
		<GradientLoader/>
		<router-view/>
	</div>
</template>

<script>
import NavBar from '../components/NavBar'
import ActionsMenu from '../components/ActionsMenu'
import GradientLoader from '../components/GradientLoader'

export default {
	components: {
		NavBar, ActionsMenu, GradientLoader
	},
}
</script>