<template>
	<div class="navigationActions">
		<div class="menuToggle"></div>
		<div class="menu">
			<ul>
				<li style="--i:0.1s;"><a href="#">
					<ion-icon name="camera-outline"></ion-icon>
				</a></li>
				<li style="--i:0.2s;"><a href="#">
					<ion-icon name="settings-outline"></ion-icon>
				</a></li>
				<li style="--i:0.3s;"><a href="#">
					<ion-icon name="trash-outline"></ion-icon>
				</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	mounted: function () {
		let menuToggle = document.querySelector('.menuToggle')
		menuToggle.onclick = function () {
			menuToggle.classList.toggle('active')
		}
	}
}
</script>

<style lang="scss">
@import "src/assets/actionsmenu";
</style>